# Katiro UI Kit

Un agent pour Claude Code qui range le UI Kit d'un fichier Figma, puis branche tes écrans dessus. Directement dans Figma.

## Installer
Ajoute le catalogue Katiro Studio, puis installe le plugin :
```bash
claude plugin marketplace add KatiroDesignStudio/katiro-plugins
```
```bash
claude plugin install katiro-ui-kit@katiro-studio
```
Puis ouvre une nouvelle session Claude Code.

**Mettre à jour** : rafraîchis le catalogue, puis mets à jour le plugin, et ouvre une nouvelle session.
```bash
claude plugin marketplace update katiro-studio
```
```bash
claude plugin update katiro-ui-kit@katiro-studio
```

**Prérequis**
- [Claude Code](https://claude.com/claude-code).
- Le serveur MCP officiel de Figma, connecté (`/mcp`).
- Un plan Figma Professional ou plus, avec un siège Full ou Dev. Sur le plan Starter, ou avec un siège View ou Collab, Figma limite l'outil à 6 appels par mois.

## Utiliser
**Travaille sur une copie de ton fichier Figma** (Fichier > Dupliquer).

Écris simplement ta demande dans Claude Code :

| Tu écris | Ce qui se passe | Commande |
|---|---|---|
| « Fais un diagnostic de mon fichier Figma : {lien} » | Un rapport chiffré de l'état du fichier. Rien n'est modifié. | `/katiro-ui-kit-diagnostic` |
| « Range le UI Kit de mon fichier Figma : {lien} » | Le kit est reconstruit au propre : fondations, atomes, molécules, organismes. Tes écrans ne bougent pas. | `/katiro-ui-kit-build` |
| « Branche l'écran Accueil sur le UI Kit » | Une copie de l'écran est branchée sur le kit, un écran ou un parcours à la fois. | `/katiro-ui-kit-templates` |
| « Fais-moi des recommandations d'accessibilité » | En option, après le kit : des recommandations RGAA 4.1.2 sur le kit et les écrans, dans un rapport et une page Accessibilité. Rien n'est modifié. Une aide de première couche, pas un audit. | `/katiro-ui-kit-accessibilite` |

**Ton fichier a déjà un UI Kit ?** L'agent te propose de le compléter, de le vérifier, ou de le reconstruire au propre. Ses composants ne sont retouchés que sans changer leur rendu.

## Les agents
| Agent | Rôle | Modèle |
|---|---|---|
| **L'agent Kanshu** (Design System Manager) de Katiro Studio | Te parle, te fait valider, contrôle | celui de ta conversation |
| **L'agent Shindan** (Designer Diagnostic) de Katiro Studio | Réalise le diagnostic | celui de ta conversation |
| **Agent Seiri** (Designer Analyst) de Katiro Studio | Mesure le fichier, en lecture seule | Sonnet |
| **Agent Seiton** (Designer Builder) de Katiro Studio | Construit ce qui a été validé | Opus |
| **Agent Seiso** (Designer Finisher) de Katiro Studio | Fait les finitions | Sonnet |
| **L'agent Hairyo** (Design Accessibility RGAA) de Katiro Studio | Recommande, sans rien modifier, d'après le RGAA | celui de ta conversation |

Pour économiser, choisis Sonnet pour ta conversation : le travail lourd se fait dans les agents.

## Les règles
- **Rien sans ton accord.** Chaque déduction t'est présentée avec ses preuves et une recommandation. Tu valides tout d'un coup, ou tu corriges les points qui ne te vont pas.
- **Rien n'est supprimé.** Ce qui est remplacé part dans une page `Archives`.
- **Tes écrans d'origine ne sont jamais modifiés.**
- **Tout est noté** dans `uikit.md` : décisions, avancement, questions. On reprend là où on s'est arrêté. Les décisions clés sont aussi gardées dans la page Revue du fichier Figma : on reprend depuis n'importe quel poste.
- **Tu sais où on en est.** Pendant les longs travaux (scan, construction), tu as des nouvelles chaque minute.

## Ce qu'il ne fait pas
Pas de documentation d'usage, pas de bibliothèque partagée, pas de motion. Il fait le gros du travail, le designer finit.

## Licence
MIT. Fait par [Katiro Studio](https://katiro.studio).
