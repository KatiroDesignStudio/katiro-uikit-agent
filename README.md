# katiro-uikit-agent

Un plugin Claude Code qui remet au propre le UI Kit d'un fichier Figma.

Tes composants sont éparpillés dans les pages, les couleurs sont en dur, trois boutons se ressemblent sans être le même ? L'agent mesure le fichier, te pose les bonnes questions une par une, puis reconstruit un UI Kit rangé en logique atomique : fondations, atomes, molécules, organismes, templates. Directement dans Figma.

## Deux commandes
| Commande | Ce qu'elle fait | Écrit dans Figma |
|---|---|---|
| `/katiro-uikit-agent:shindan` | **Diagnostic** : un rapport chiffré de l'état du fichier (couleurs uniques, composants, doublons, valeurs en dur, contrastes) | Non |
| `/katiro-uikit-agent:kanshu` | **Rangement** : reconstruit le UI Kit au propre, avec toi | Oui |

Commence par le diagnostic : il ne touche à rien et te dit en quelques minutes où en est ton fichier.

## Ce que le rangement produit
- Des **variables** (couleurs primitives et sémantiques, dimensions, grilles) et des **styles** de texte, d'effet et de grille, branchés entre eux.
- Des **component sets** propres, nommés comme du code : `Button` · `variant=primary` · `size=md`.
- Les **grilles** déduites de tes écrans, les **icônes** normalisées, les **composants manquants** repérés (header, footer, cartes…), les états et le focus vérifiés.
- Une page **Revue** (avant/après, fait, ajusté, à décider) et une page **Arborescence** (les écrans de référence).
- Un fichier **`uikit.md`** : avancement, règles fixées, décisions, questions, journal. On reprend là où on s'est arrêté.

## Le principe : aucune déduction sans question
L'agent ne choisit jamais à ta place. Tout ce qu'il déduit (deux composants à fusionner, une nuance à ramener, un contraste insuffisant, un libellé incohérent, une grille) devient une question, avec ses preuves et sa recommandation. Les questions portent sur des règles (« tous les blancs de fond deviennent `color/bg/default`, 212 cas ? »), pas sur chaque occurrence. Chaque phase se termine par ta recette.

Tes écrans ne bougent pas pendant la construction : le kit est reconstruit à côté. Ils ne sont branchés sur le kit qu'à la fin, si tu le veux, et seulement les écrans définitifs. Rien n'est supprimé : ce qui est remplacé part dans une page `Archives`.

| Agent | Rôle |
|---|---|
| `kanshu` | Lead Design System. Te parle comme à un client, pose les questions, contrôle chaque lot. |
| `seiri` | Relève et mesure le fichier, en lecture seule. |
| `seiton` | UI Product Designer. Construit ce qui a été décidé, et rien d'autre. |

## Prérequis
- [Claude Code](https://claude.com/claude-code).
- Le serveur MCP officiel de Figma, connecté (vérifie avec `/mcp`).
- Un plan Figma **Professional ou plus** et un siège **Full ou Dev**. Sur le plan Starter, ou avec un siège View ou Collab, l'outil Figma est limité à 6 appels par mois. Le plan Starter limite en plus le fichier à 3 pages.

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
/katiro-uikit-agent:shindan https://www.figma.com/design/...
```
```
/katiro-uikit-agent:kanshu https://www.figma.com/design/...
```
`/katiro-uikit-agent:kanshu` sans texte reprend le travail en cours.

Pour un premier essai, **duplique ton fichier Figma** et lance l'agent sur la copie. Avant chaque étape qui écrit dans Figma, l'agent te demande d'enregistrer une version dans l'historique (Cmd+Option+S).

## Ce qu'il ne fait pas
- Pas de documentation d'usage : le kit se lit tout seul.
- Pas de bibliothèque partagée ni de publication : un projet, un fichier, un UI Kit local.
- Pas de motion ni de densité.
- Pas de pixel perfect garanti : il mâche une grande partie du travail, le designer finit.

## Licence
MIT. Fait par [Katiro Studio](https://katiro.studio).
