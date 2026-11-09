# katiro-uikit-agent

Un plugin Claude Code qui remet au propre le UI Kit d'un fichier Figma.

Tes composants sont éparpillés dans les pages, les couleurs sont en dur, trois boutons se ressemblent sans être le même ? L'agent relève le fichier, te pose les bonnes questions une par une, puis range tout dans un UI Kit en logique atomique : fondations, atomes, molécules, organismes, templates. Directement dans Figma.

## Ce que tu obtiens
- Des **variables** (primitives, sémantiques, grilles) et des **styles** de texte, d'effet et de grille, branchés entre eux.
- Des **component sets** propres, nommés comme du code (`Button` · `variant=primary` · `size=md`).
- Les **grilles** déduites de tes écrans, les **icônes** normalisées, les **composants manquants** repérés (header, footer, cartes…).
- Une page **Revue** : compteurs avant/après (valeurs en dur, doublons, contrastes…), et ce qui a été fait, ajusté ou reste à décider.
- Une page **Arborescence** : les écrans scannés et leurs parcours.
- Un fichier **`uikit.md`** : avancement, règles fixées, décisions, journal. On reprend là où on s'est arrêté.

## Le principe : aucune déduction sans question
L'agent ne choisit jamais à ta place. Tout ce qu'il déduit (deux composants à fusionner, une nuance à ramener, un contraste insuffisant, un libellé incohérent, une grille, un composant manquant) devient une question, avec ses preuves et sa recommandation. Il n'applique sans demander que ce que tu as déjà décidé.
Rien n'est supprimé : ce qui est remplacé part dans une page `Archives`. Un point de version est créé avant chaque lot.

| Agent | Rôle |
|---|---|
| `kanshu` | Lead Design System. Te parle comme à un client, pose les questions, contrôle chaque lot. |
| `seiri` | Relève et mesure le fichier, en lecture seule. |
| `seiton` | UI Product Designer. Construit ce qui a été décidé, et rien d'autre. |

## Prérequis
- [Claude Code](https://claude.com/claude-code).
- Le serveur MCP officiel de Figma, connecté avec accès en écriture (vérifie avec `/mcp`).
- Un plan Figma payant de préférence : le plan gratuit limite le nombre de pages et de modes de variables. L'agent s'adapte et te demande quoi faire.

## Installer
```bash
claude plugin marketplace add KatiroDesignStudio/katiro-uikit-agent
```
```bash
claude plugin install katiro-uikit-agent@katiro-uikit
```
Ouvre ensuite une nouvelle session Claude Code.

## Utiliser
Crée un dossier par projet, ouvre Claude Code dedans, puis :
```
/katiro-uikit-agent:kanshu https://www.figma.com/design/...
```
`/katiro-uikit-agent:kanshu` sans texte reprend le travail en cours.

L'agent commence par te demander quels écrans sont définitifs. Seuls ceux-là servent à construire le kit, et les autres ne sont jamais touchés.

## Ce qu'il ne fait pas
- Pas de documentation d'usage : le kit se lit tout seul.
- Pas de bibliothèque partagée ni de publication : un projet, un fichier, un UI Kit local.
- Pas de pixel perfect garanti : il mâche une grande partie du travail, le designer finit.

## Licence
MIT. Fait par [Katiro Studio](https://katiro.studio).
