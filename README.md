# katiro-agent-kansoku

Un agent pour Claude Code qui range le UI Kit d'un fichier Figma, puis branche tes écrans dessus. Directement dans Figma.

## Installer
```bash
claude plugin marketplace add KatiroDesignStudio/katiro-uikit-agent
```
```bash
claude plugin install katiro-agent-kansoku@katiro-uikit
```
Puis ouvre une nouvelle session Claude Code.

**Prérequis**
- [Claude Code](https://claude.com/claude-code).
- Le serveur MCP officiel de Figma, connecté (`/mcp`).
- Un plan Figma Professional ou plus, avec un siège Full ou Dev. Sur le plan Starter, ou avec un siège View ou Collab, Figma limite l'outil à 6 appels par mois.

## Utiliser
**Travaille sur une copie de ton fichier Figma** (Fichier > Dupliquer).

Écris simplement ta demande dans Claude Code :

| Tu écris | Ce qui se passe | Raccourci |
|---|---|---|
| « Fais un diagnostic de mon fichier Figma : {lien} » | Un rapport chiffré de l'état du fichier. Rien n'est modifié. | `/diagnostic` |
| « Range le UI Kit de mon fichier Figma : {lien} » | Le kit est reconstruit au propre : fondations, atomes, molécules, organismes. Tes écrans ne bougent pas. | `/ui-kit` |
| « Branche l'écran Accueil sur le UI Kit » | Une copie de l'écran est branchée sur le kit, un écran ou un parcours à la fois. | `/ecrans` |

Si un autre outil installé utilise déjà le même raccourci, tape `/katiro-agent-kansoku:diagnostic` (et de même pour les deux autres).

## Les agents
| Agent | Rôle | Modèle |
|---|---|---|
| **Kanshu** (Design System Manager) | Te parle, te fait valider, contrôle | celui de ta conversation |
| **Shindan** (Designer Diagnostic) | Réalise le diagnostic | celui de ta conversation |
| **Seiri** (Designer Analyst) | Mesure le fichier, en lecture seule | Sonnet |
| **Seiton** (Designer Builder) | Construit ce qui a été validé | Opus |
| **Seiso** (Designer Finisher) | Fait les finitions | Sonnet |

Pour économiser, choisis Sonnet pour ta conversation : le travail lourd se fait dans les agents.

## Les règles
- **Rien sans ton accord.** Chaque déduction t'est présentée avec ses preuves et une recommandation. Tu valides tout d'un coup, ou tu corriges les points qui ne te vont pas.
- **Rien n'est supprimé.** Ce qui est remplacé part dans une page `Archives`.
- **Tes écrans d'origine ne sont jamais modifiés.**
- **Tout est noté** dans `uikit.md` : décisions, avancement, questions. On reprend là où on s'est arrêté.

## Ce qu'il ne fait pas
Pas de documentation d'usage, pas de bibliothèque partagée, pas de motion. Il fait le gros du travail, le designer finit.

## Licence
MIT. Fait par [Katiro Studio](https://katiro.studio).
