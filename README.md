# katiro-agent-kansoku

Un plugin Claude Code qui remet au propre le UI Kit d'un fichier Figma, puis branche tes écrans dessus.

Tes composants sont éparpillés dans les pages, les couleurs sont en dur, trois boutons se ressemblent sans être le même ? L'agent mesure le fichier, te présente ses recommandations, puis reconstruit un UI Kit rangé en logique atomique : fondations, atomes, molécules, organismes. Directement dans Figma.

## Trois commandes
| Commande | Ce qu'elle fait | Écrit dans Figma |
|---|---|---|
| `/katiro-agent-kansoku:shindan` | **Diagnostic** : un rapport chiffré de l'état du fichier (couleurs uniques, composants, doublons, valeurs en dur, contrastes) | Non |
| `/katiro-agent-kansoku:ui-kit` | **UI Kit** : reconstruit le kit au propre, avec toi. Tes écrans ne sont jamais modifiés | Oui, le kit seulement |
| `/katiro-agent-kansoku:screens` | **Écrans** : branche un écran ou un parcours sur le kit, sur des copies des écrans | Oui, des copies |

Commence par le diagnostic : il ne touche à rien et te dit où en est ton fichier. Lors de notre premier test, il a pris une dizaine de minutes pour 5 écrans et près de 5 000 calques.

## Ce que le UI Kit produit
- Des **variables** (couleurs primitives et sémantiques, dimensions, grilles) et des **styles** de texte, d'effet et de grille, branchés entre eux.
- Des **component sets** propres, nommés comme du code : `Button` · `variant=primary` · `size=md`.
- Les **grilles** déduites de tes écrans, les **icônes** normalisées, les **composants manquants** repérés (header, footer, cartes…), les états et le focus vérifiés.
- Une page **Revue** (avant/après, fait, ajusté, à décider) et une page **Arborescence** (les écrans de référence).
- Un fichier **`uikit.md`** : avancement, règles fixées, décisions, questions, écrans branchés, journal. On reprend là où on s'est arrêté.

## Le principe : aucune déduction sans validation
L'agent ne choisit jamais à ta place. Tout ce qu'il déduit (deux composants à fusionner, une nuance à ramener, un contraste insuffisant, une grille) t'est présenté avec ses preuves et sa recommandation, dans un seul récapitulatif : tu valides d'un coup, ou tu corriges les numéros qui ne te vont pas. Les conventions techniques qui ne changent pas le rendu s'appliquent sans question. Rien n'est supprimé : ce qui est remplacé part dans une page `Archives`.

Deux modes, au choix au démarrage :
- **Express** (par défaut) : un récapitulatif global après le scan, la construction de tout le kit d'une traite, puis une seule validation des doutes et une seule recette.
- **Fin** : phase par phase (fondations, atomes, molécules, organismes), avec un récapitulatif et une recette par phase.

| Agent | Ce qu'il fait | Modèle |
|---|---|---|
| **Agent Kanshu (Design System Manager)** | Te parle comme à un client, te fait valider ses recommandations, contrôle le travail. | celui de ta conversation (Sonnet conseillé) |
| **Agent Shindan (Designer Diagnostic)** | Mesure l'état du fichier et rédige le diagnostic, sans rien modifier. | celui de ta conversation |
| **Agent Seiri (Designer Analyst)** | Relève et mesure le fichier, en lecture seule. | Sonnet |
| **Agent Seiton (Designer Builder)** | Construit ce qui a été décidé, et rien d'autre. | Opus |
| **Agent Seiso (Designer Finisher)** | Finitions : Revue, Couverture, petites retouches. | Sonnet |

Chaque intervention d'un agent est affichée avec son nom, son rôle et son modèle. Pour économiser, choisis Sonnet pour ta conversation : le travail lourd se fait dans les agents.

## Prérequis
- [Claude Code](https://claude.com/claude-code).
- Le serveur MCP officiel de Figma, connecté (vérifie avec `/mcp`).
- Un plan Figma **Professional ou plus** et un siège **Full ou Dev**. Sur le plan Starter, ou avec un siège View ou Collab, l'outil Figma est limité à 6 appels par mois. Le plan Starter limite en plus le fichier à 3 pages.

## Installer
```bash
claude plugin marketplace add KatiroDesignStudio/katiro-uikit-agent
```
```bash
claude plugin install katiro-agent-kansoku@katiro-uikit
```
Ouvre ensuite une nouvelle session Claude Code.

## Utiliser
**Duplique d'abord ton fichier Figma** (Fichier > Dupliquer) et travaille sur la copie : on va tout ranger au propre.

Crée un dossier par projet, ouvre Claude Code dedans, puis :
```
/katiro-agent-kansoku:shindan https://www.figma.com/design/...
```
```
/katiro-agent-kansoku:ui-kit https://www.figma.com/design/...
```
`/katiro-agent-kansoku:ui-kit` sans texte reprend le travail en cours.

Une fois le kit recetté, branche tes écrans, un écran ou un parcours à la fois :
```
/katiro-agent-kansoku:screens Accueil
```
L'agent duplique chaque écran dans une page `Écrans kit` et ne branche que la copie : tes écrans d'origine ne bougent jamais. Compte 15 à 20 minutes et une recette par écran. Commence par un écran témoin, celui qui emploie le plus de composants du kit.

## Ce qu'il ne fait pas
- Pas de documentation d'usage : le kit se lit tout seul.
- Pas de bibliothèque partagée ni de publication : un projet, un fichier, un UI Kit local.
- Pas de motion ni de densité.
- Pas de pixel perfect garanti : il mâche une grande partie du travail, le designer finit.

## Licence
MIT. Fait par [Katiro Studio](https://katiro.studio).
