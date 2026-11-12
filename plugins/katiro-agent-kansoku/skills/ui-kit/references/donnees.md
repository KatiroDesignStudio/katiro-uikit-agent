# Données de travail (`.uikit/`)

Aucun état ne survit entre deux appels `use_figma` : tout ce qui doit servir plus tard est écrit ici.
JSON, identifiants de nœuds Figma tels quels. Chaque fichier a un seul propriétaire, qui l'écrit ; les autres le lisent.

| Fichier | Propriétaire | Contenu |
|---|---|---|
| `survol.json` | Seiri | `fichier` : `{nomDansLeLien, pages}` ; `pages[]` : `{id, nom, role, cadres, sections[] (noms), prefixes[] ({prefixe, occurrences}), autresNoeuds[] ({id, nom, type})}`, `role` valant `ecrans`, `couverture`, `separateur` ou `kit` ; `motsRecurrents[]` : `{mot, occurrences}` ; `versions[]` : `{nom, page}` ; `nomsEnDouble[]` : `{nom, ids[]}` ; `local` : `{stylesCouleur, stylesTexte, stylesEffet, stylesGrille, collections[]}` ; `bibliotheques` : `{composants[] ({nom, cle, instances})}` ; `kitExistant` : `{pageId, composants, collections}` ou `null` |
| `perimetre.json` | Seiri | `ecrans[]` : `{id, nom, page, largeur}` ; `exclus[]` : `{id, nom, page, motif}` ; `exclusCompte` ; `doublons[]` : `{ids[], noms[], nature, ressemblance ({structure, textes}), difference}`, `nature` valant `copie`, `variante` ou `iteration` ; `liens[]` : `{de, vers}` ; `groupes[]` : `{nom, ecrans[], indice}` ; `couverture` : `{id, nom}` ou `null` |
| `perimetre-valide.json` | Kanshu | Périmètre après les réponses de l'utilisateur : `ecrans[]` (identifiants retenus), `doublons[]` (`{ids[], retenu}`), `parcours[]` (`{nom, ecrans[]}`), `kitExistant` (`repris`, `intact` ou `aucun`), `couverture` (`gardee`, `remplacee` ou `aucune`). Fait foi pour Seiri et Seiton. |
| `scan/index.json` | Seiri | `pages[]` : `{id, nom, etat, curseur}`, `etat` valant `a-faire`, `en-cours` ou `fait` |
| `scan/{pageId}.json` | Seiri | `inventaire` (variables, styles, composants de la page), `ecrans[]` : `{id, nom, compteurs}` (compteurs de `controles.md`, écran par écran) et `constats[]` : `{id, type, noeuds[], valeurs, occurrences, mesure, remplace}`, 20 exemples de nœuds au plus par constat |
| `scan/synthese.json` | Seiri | Compteurs agrégés (kit et écrans séparés), `ecrans[]` : `{id, nom, compteurs}`, et constats regroupés par type |
| `scan/delta-P{phase}.json` | Seiri | Constats à jour pour la phase, au même format. Ne vide pas `scan/` et continue la numérotation des constats. |
| `scan/plan-{ecranId}.json` | Seiri | Plan d'écran (screens) : `{id, nom, compteurs, remplacements[] ({noeud, famille, decision, zoneLibre {l, h}, largeurContenu, disposition}), liaisons, corrections, cas[] ({noeud, motif}), manquesKit[] ({noeud, famille, type, detail})}`, `motif` valant `disposition-absente`, `zone-trop-petite` ou `autre`, `type` valant `variante-manquante`, `logo-non-surchargeable`, `couleur-sans-role` ou `autre` |
| `controle-{lot}.json` | Seiri | `ecarts[]` : `{noeud, regle, constate, attendu}`, `noeud` pouvant être l'identifiant d'une variable ou d'un style |
| `ids.json` | Seiton | `pages`, `collections`, `modes`, `variables`, `styles`, `composants` (nom vers `{id, page}`), `archives[]` (`{id, remplacePar, decision}`), `copies[]` (`{original, copie}`), `remplacements[]` (`{origine, instance, ecran}`), `presentation` (cadres titres, Revue, Couverture, Arborescence, sections et échantillons de 00 Fondations), `lots` (par lot : `debut` {dernier identifiant de nœud, comptages des pages d'écrans} écrit avant toute écriture, puis nœuds touchés) |

## Conventions
- Identifiant de lot : `P{phase}-{nn}` pour ui-kit (`P3-02`) ; avec screens, `K{nn}` pour une retouche du kit et `E{nn}` pour un écran.
- Dans un nom de fichier, le « : » d'un identifiant Figma devient « - » (`scan/2334-193.json`).
- Identifiant de constat : `C{nnn}`, jamais réutilisé, y compris dans les deltas. Une question de `uikit.md` cite les constats qu'elle couvre.
- Lien vers un nœud, pour l'utilisateur : `https://www.figma.com/design/{fileKey}/?node-id={id avec - à la place de :}`.
- Types de constats propres aux niveaux : `famille-atome`, `famille-molecule`, `famille-organisme` (famille proposée, avec `confiance` : `forte` ou `faible`) ; `molecules-manquantes` (signature répétée qui ne correspond à aucune famille du kit, quel que soit le niveau). Les autres types portent le nom du contrôle de `controles.md`.
- Un constat qui recompte un constat antérieur le cite dans `remplace` (`C024`) : seul le plus récent fait foi.
- Comptage des nœuds : méthode de `controles.md` (Unités de mesure).
- Un fichier se complète au fur et à mesure (page par page, lot par lot) : jamais tout en mémoire puis tout à la fin.
