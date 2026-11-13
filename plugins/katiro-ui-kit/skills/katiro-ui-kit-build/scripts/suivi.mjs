#!/usr/bin/env node
// Suivi d'un lancement long (Seiri, Seiton) pour l'outil Monitor de Claude Code.
// Lit .uikit/progression.json, que l'agent réécrit après chaque lot, et imprime
// une ligne d'avancement par minute au plus. Chaque ligne imprimée devient une
// notification que l'agent principal affiche telle quelle à l'utilisateur.
//
// Usage : node suivi.mjs <chemin de progression.json> "<étiquette de l'agent>"
// Lignes émises :
//   "{étiquette} · {n} min : {resume} · je continue"   avancée depuis la dernière ligne
//   "{étiquette} · {n} min : toujours au travail, sans nouvelle avancée depuis {m} min"
//   "FIN {etat} · {étiquette} : {resume}"                l'agent a fini (fait ou incomplet)
import { readFileSync, statSync } from 'node:fs';

const [fichier, etiquette = 'Agent'] = process.argv.slice(2);
if (!fichier) {
  console.error('usage : node suivi.mjs <progression.json> "<étiquette>"');
  process.exit(2);
}

const INTERVALLE_MS = 10_000;     // lecture du fichier toutes les 10 s
const ENTRE_DEUX_LIGNES_MS = 60_000; // une ligne par minute au plus
const SILENCE_MS = 180_000;       // trois minutes sans écriture : on le dit
const debut = Date.now();
let derniereLigne = 0;
let dernierResume = '';

const minutes = (ms) => Math.max(1, Math.round(ms / 60_000));

function lire() {
  try {
    const brut = readFileSync(fichier, 'utf8');
    return { p: JSON.parse(brut), modifie: statSync(fichier).mtimeMs };
  } catch {
    return null; // pas encore écrit, ou en cours d'écriture : on réessaie au tour suivant
  }
}

function tour() {
  const maintenant = Date.now();
  const lu = lire();
  if (lu && lu.p.etat && lu.p.etat !== 'en_cours') {
    console.log(`FIN ${lu.p.etat} · ${etiquette} : ${lu.p.resume ?? ''}`);
    process.exit(0);
  }
  if (maintenant - derniereLigne < ENTRE_DEUX_LIGNES_MS || maintenant - debut < ENTRE_DEUX_LIGNES_MS) return;
  const ecoule = minutes(maintenant - debut);
  const silence = lu ? maintenant - lu.modifie : maintenant - debut;
  if (lu && lu.p.resume && lu.p.resume !== dernierResume) {
    console.log(`${etiquette} · ${ecoule} min : ${lu.p.resume} · je continue`);
    dernierResume = lu.p.resume;
    derniereLigne = maintenant;
  } else if (silence >= SILENCE_MS) {
    console.log(`${etiquette} · ${ecoule} min : toujours au travail, sans nouvelle avancée depuis ${minutes(silence)} min`);
    derniereLigne = maintenant;
  }
}

setInterval(tour, INTERVALLE_MS);
