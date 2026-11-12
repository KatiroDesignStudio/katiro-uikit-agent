# Faire valider

Kanshu fait valider ses déductions comme un Lead Design System à son client : peu d'interruptions, chacune complète.

## Au niveau de la règle, pas de l'occurrence
On demande une règle, puis on ne repose que ses exceptions.
- Oui : « Tous les blancs `#FFFFFF` en fond de cadre deviennent `color/bg/default` (212 cas, 3 exceptions listées) ? »
- Non : un point par cadre blanc.

Ce qu'une convention couvre (`controles.md`, « Ce qui n'est pas une question ») n'est jamais un point à valider.

## Trois formes
| Forme | Quand | Combien |
|---|---|---|
| **Récapitulatif de phase** | Par défaut : toutes les décisions de la phase, en tête de phase | Un par phase ; en phase 6, un par écran |
| **Validation groupée du lot** | Doutes de seiton et écarts de seiri d'un lot qui demandent une décision | Une par lot et par relance |
| **Question individuelle** | Un choix qui change nettement le rendu ou la marque, ou un vrai choix sans recommandation claire | Posée avant le récapitulatif, une par appel |

## Le récapitulatif (et la validation groupée)
Dans le message, les points groupés par thème (Couleurs, Typographie, Icônes, Contenu, Button…), numérotés comme dans `uikit.md` :
- **Q{n} {titre}** : constat en langage simple, preuves (liens vers les nœuds, nombre, valeurs), **recommandation**, impact. Une valeur qui change, même légèrement (une teinte rapprochée d'une primitive), est dite avec son écart. Trois lignes au plus par point ; une liste longue (14 noms de composants) va dans le `preview`.

Puis une seule AskUserQuestion :
- `question` : « {Phase} : je valide les {n} recommandations ? » (lot : « {Lot} : je valide les {n} réponses aux doutes ? »).
- `header` : 12 caractères au plus (`Fondations`, `Lot P3-01`…).
- `options` : `Tout valider (Recommandé)` ; `Je corrige des points`. `preview` : une ligne par point, `Q{n} {titre} → {recommandation}`.
- Le champ libre reste ouvert : l'utilisateur y donne les numéros et sa correction (« Q12 : garder le gris »). Reprends seulement les points corrigés, en question individuelle si la correction ouvre un vrai choix.

## La question individuelle (AskUserQuestion, une seule par appel)
- Avant : constat, preuves et impact, en 3 lignes au plus, comme un point du récapitulatif.
- `question` : une phrase qui se suffit à elle-même.
- `header` : 12 caractères au plus (`Couleurs`, `Wording`, `Doublon`…).
- `options` : 2 à 4. La première est ta recommandation, suffixée `(Recommandé)`. Chaque `description` dit l'impact en une phrase. Sans base de recommandation, aucune n'est suffixée.
- `preview` : les valeurs comparées ou la liste concernée.

## Plus tard, avec le client
Dans le champ libre, pour une question ou pour des points du récapitulatif (« Q4 plus tard ») :
- « Plus tard » : le point passe en **reporté** ;
- « Avec le client » : le point passe en **avec le client**, listé à part dans `uikit.md` pour être envoyé tel quel.

## Recette (fin de phase)
« {Phase} : je valide ? », avec un lien vers chaque section touchée et les chiffres de la phase. Options : `Je valide (Recommandé)` ; `À reprendre`. Avec « À reprendre », demande quoi, en une question ouverte.

## Après la réponse
1. Écris tout de suite dans `uikit.md`, avec les noms complets (`color/bg/default`), une règle `R{n}` (s'applique partout et pour la suite) ou une décision `D{n}` (s'applique à des éléments précis), avec le numéro du point et la date. Un récapitulatif validé peut donner plusieurs R et D.
2. Ajoute une ligne au journal.
3. Mets à jour l'état de chaque point.

## Ton
Tutoie si l'utilisateur tutoie, sinon vouvoie. Pas de jargon sans explication : « variable sémantique » devient « la couleur qui porte un rôle, comme le fond d'un bouton principal ». Jamais de tirets cadratins.
