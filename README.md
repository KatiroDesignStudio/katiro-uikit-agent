# katiro-uikit-agent

Un plugin Claude Code qui remet au propre le UI Kit d'un fichier Figma.

Tes composants sont éparpillés dans les pages, les couleurs sont en dur, trois boutons se ressemblent sans être le même ? L'agent mesure le fichier, te présente ses recommandations phase par phase, puis reconstruit un UI Kit rangé en logique atomique : fondations, atomes, molécules, organismes. Directement dans Figma, avant de brancher tes écrans dessus.

## Deux commandes
| Commande | Ce qu'elle fait | Écrit dans Figma |
|---|---|---|
| `/katiro-uikit-agent:shindan` | **Diagnostic** : un rapport chiffré de l'état du fichier (couleurs uniques, composants, doublons, valeurs en dur, contrastes) | Non |
| `/katiro-uikit-agent:kanshu` | **Rangement** : reconstruit le UI Kit au propre, avec toi | Oui |

Commence par le diagnostic : il ne touche à rien et te dit où en est ton fichier. Lors de notre premier test, il a pris une dizaine de minutes pour 5 écrans et près de 5 000 calques.

## Ce que le rangement produit
- Des **variables** (couleurs primitives et sémantiques, dimensions, grilles) et des **styles** de texte, d'effet et de grille, branchés entre eux.
- Des **component sets** propres, nommés comme du code : `Button` · `variant=primary` · `size=md`.
- Les **grilles** déduites de tes écrans, les **icônes** normalisées, les **composants manquants** repérés (header, footer, cartes…), les états et le focus vérifiés.
- Une page **Revue** (avant/après, fait, ajusté, à décider) et une page **Arborescence** (les écrans de référence).
- Un fichier **`uikit.md`** : avancement, règles fixées, décisions, questions, journal. On reprend là où on s'est arrêté.

## Le principe : aucune déduction sans validation
L'agent ne choisit jamais à ta place. Tout ce qu'il déduit (deux composants à fusionner, une nuance à ramener, un contraste insuffisant, un libellé incohérent, une grille) est soumis à ta validation, avec ses preuves et sa recommandation. En tête de chaque phase, un seul récapitulatif : tu valides d'un coup, ou tu ne corriges que les exceptions. Les points portent sur des règles (« tous les blancs de fond deviennent `color/bg/default`, 212 cas ? »), pas sur chaque occurrence, et les conventions techniques qui ne changent pas le rendu s'appliquent sans question. Chaque phase se termine par ta recette.

Tes écrans ne bougent pas pendant la construction : le kit est reconstruit à côté. Ils ne sont branchés sur le kit qu'à la fin, si tu le veux, et seulement les écrans définitifs. Rien n'est supprimé : ce qui est remplacé part dans une page `Archives`.

| Agent | Rôle |
|---|---|
| `kanshu` | Lead Design System. Te parle comme à un client, te fait valider ses recommandations, contrôle chaque lot. |
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

Pour un premier essai, **duplique ton fichier Figma** et lance l'agent sur la copie. Au début de chaque phase qui écrit dans Figma, l'agent te demande d'enregistrer une version dans l'historique (Cmd+Option+S). En phase 6, celle qui modifie tes écrans, il le demande avant chaque écran.

Brancher un écran sur le kit prend 15 à 20 minutes : commence par un écran témoin, les autres restent en option, leur plan est prêt.

## Ce qu'il ne fait pas
- Pas de documentation d'usage : le kit se lit tout seul.
- Pas de bibliothèque partagée ni de publication : un projet, un fichier, un UI Kit local.
- Pas de motion ni de densité.
- Pas de pixel perfect garanti : il mâche une grande partie du travail, le designer finit.

## Licence
MIT. Fait par [Katiro Studio](https://katiro.studio).
