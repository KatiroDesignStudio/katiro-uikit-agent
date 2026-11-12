---
name: shindan
description: Diagnostic en lecture seule d'un fichier Figma. Mesure l'état du UI Kit sans rien modifier (couleurs et tailles de texte uniques, composants et doublons, valeurs en dur, contrastes, icônes, polices) et rend un rapport chiffré, partageable, avec ce que le rangement par ui-kit changerait. À utiliser pour savoir où en est un fichier Figma avant de le ranger.
argument-hint: "[lien Figma]"
---
# Shindan (診断) : diagnostic d'un fichier Figma

Demande de l'utilisateur : $ARGUMENTS
Références : `${CLAUDE_SKILL_DIR}/../ui-kit/references/`

Tu mesures, tu n'écris rien dans Figma et tu ne poses que les questions nécessaires au diagnostic. Le relevé est fait par l'agent `katiro-agent-kansoku:seiri`, lancé au premier plan.

## Déroulé
1. Le serveur MCP Figma doit être connecté (outils `use_figma`, `create_session`). Sinon, explique comment le connecter (`/mcp`) et arrête-toi. Prends le lien Figma dans la demande, sinon demande-le, puis appelle `create_session` et transmets l'identifiant de session à seiri.
2. Rappelle le prérequis en une ligne : sur le plan Starter ou avec un siège View ou Collab, l'outil Figma est limité à 6 appels par mois, ce qui ne suffit pas pour un diagnostic.
3. Crée `.uikit/` dans le dossier courant s'il n'existe pas.
4. **seiri, mode survol**. S'il rend « aucune page de contenu », dis-le (mauvais fichier, ou copie vide) et demande le bon lien. Puis une question : « Je diagnostique tout le fichier, ou seulement certaines pages ? » Options : `Tout le fichier (Recommandé)` ; `Certaines pages`. Recommande `Certaines pages` si le survol montre des pages d'exploration ou d'archive, en les citant.
5. **seiri, mode scan** sur ces pages, en nouveau scan. S'il rend « incomplet », relance-le en reprise : il repart du curseur.
6. Écris `diagnostic.md` à la racine du dossier courant, au format ci-dessous, à partir de `.uikit/scan/synthese.json`.
7. Présente le diagnostic en 8 lignes au plus. Propose ensuite le rangement : `/katiro-agent-kansoku:ui-kit {lien}`.

## Format de `diagnostic.md`
```markdown
# Diagnostic Figma : {nom du fichier}
{date} · {n} pages · {n} écrans analysés

## En chiffres
| | Trouvé | Un kit propre en aurait environ |
|---|---|---|
| Couleurs uniques | 63 | 15 |
| Tailles de texte | 17 | 8 |
| Valeurs d'espacement | 22 | 9 |
| Composants (principaux et copies) | 47 | 18 composants |
| Familles d'icônes | 3 | 1 |
| Propriétés reliées à une variable | 12 % | 100 % |

## Les 5 constats principaux
1. {constat, preuve chiffrée, lien vers un exemple}

## Ce que le rangement changerait
{3 lignes : fondations, composants, écrans}
```

Un motif décoratif massif (voir `controles.md`) : donne la part reliée avec et sans lui, dans la même ligne.
La colonne « Un kit propre en aurait environ » est une estimation : écris-le sous le tableau, et appuie chaque chiffre sur les regroupements mesurés par seiri (grappes de nuances, valeurs hors échelle, doublons).
Pas de tirets cadratins.
