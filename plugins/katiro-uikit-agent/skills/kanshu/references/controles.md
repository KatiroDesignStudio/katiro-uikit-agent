# Contrôles

seiri mesure. Kanshu transforme chaque constat en question, sauf quand une décision existante couvre déjà le cas.
Tous les calculs (contraste, écart de nuance, comptages, mesures) sont faits par du code dans `use_figma`, jamais à l'œil.

## Catalogue
| Contrôle | Ce que seiri cherche | Méthode | Phase de la question |
|---|---|---|---|
| Valeurs en dur | Couleur, espacement, rayon, ombre, typo non reliés à une variable ou un style | Parcours des nœuds, propriété par propriété | 2 (fondations), puis chaque lot |
| Textes sans style | Textes sans style de texte | Parcours des textes | 2 |
| Nuances proches | Couleurs différentes mais presque identiques | Écart ΔE 2000 inférieur à 5 | 2 |
| Échelles | Valeurs hors échelle (espacements, rayons, tailles de texte), par exemple 13 et 15 parmi 4, 8, 16, 24 | Histogramme des valeurs utilisées | 2 |
| Polices | Familles et graisses utilisées, avec leur nombre d'emplois | Comptage | 2 |
| Icônes | Familles mélangées, tailles hétérogènes, contour et plein mélangés, icônes non composants | Comparaison des vecteurs, tailles, traits | 2 |
| Grilles | Marges, gouttières et colonnes par largeur d'écran | Mesure des positions et des écarts récurrents | 2 |
| Modes | Mode clair ou sombre incomplet | Variables sans valeur dans un mode | 2 |
| Contraste | Texte ou élément d'interface sous le seuil WCAG 2.2 AA (4,5:1 texte courant, 3:1 grand texte et éléments d'interface) | Calcul sur le texte et le fond réel | Phase du composant |
| Composants hors kit | Composants principaux éparpillés dans les pages d'écrans | Liste des composants par page | 3 à 5 |
| Doublons | Composants de même rôle et de rendu proche | Signature de structure, dimensions, styles | 3 à 5 |
| Copies détachées | Groupes qui reproduisent un composant sans en être une instance | Signature de structure | 3 à 5, puis 7 |
| Structures répétées | Blocs répétés sans composant : header, footer, cartes, lignes de liste, modales | Signature de structure, position récurrente | 5 |
| Wording | Forme des libellés d'actions (infinitif, impératif, nom), casse, ponctuation, langue, mots différents pour la même action (« Valider », « Confirmer », « OK ») | Relevé des textes de boutons, liens, titres, messages | Phase du composant |
| Nommage | Calques générés par Figma, noms hors nomenclature | Expressions régulières de `nomenclature.md` | Chaque lot (exécution si une règle couvre le cas) |

## Ce qui n'est pas une question
- Relier une valeur à la variable qu'une décision a déjà fixée pour elle.
- Appliquer le format de nommage à un nom déjà décidé.
- Ranger un composant validé dans la page et la section que la structure lui donne.

Tout le reste est une question.

## Compteurs (avant → après)
Calculés par seiri, sur le kit et sur les écrans du périmètre :
1. Valeurs en dur
2. Textes sans style
3. Nuances proches non résolues
4. Composants hors kit
5. Doublons
6. Copies détachées
7. Contrastes en échec
8. Noms hors nomenclature
9. Questions ouvertes

Objectif affiché : zéro valeur en dur dans le kit.
