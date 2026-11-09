# Contrôles

seiri mesure. Kanshu transforme chaque constat en question, sauf quand une décision existante le couvre déjà.
Tous les calculs sont faits par du code dans `use_figma`, jamais à l'œil. Dans une instance, seules les modifications locales comptent : ce qui vient du composant principal est compté une fois, sur le composant.

## Catalogue
| Contrôle | Ce que seiri cherche | Méthode | Phase |
|---|---|---|---|
| Valeurs en dur | Couleur, espacement, rayon, bordure, opacité, ombre, typo non reliés à une variable ou un style | Parcours propriété par propriété | 2, puis chaque lot |
| Textes sans style | Textes sans style de texte | Parcours des textes | 2 |
| Nuances proches | Couleurs différentes mais presque identiques | ΔE 2000 par paliers : moins de 1, quasi identiques (question sur liste) ; de 1 à 3, erreur probable ; de 3 à 5, seulement si même type de propriété et même contexte. Rampes cohérentes exclues, regroupement par grappes | 2 |
| Échelles | Valeurs hors échelle (13 et 15 parmi 4, 8, 16, 24) pour espacements, rayons, tailles de texte | Histogramme | 2 |
| Polices | Familles et graisses, avec leur nombre d'emplois | Comptage | 2 |
| Icônes | Familles mélangées, tailles hétérogènes, contour et plein mélangés, icônes qui ne sont pas des composants | Vecteurs, tailles, épaisseurs de trait | 2 |
| Grilles | Marges, gouttières, colonnes, par largeur d'écran | Positions et écarts récurrents | 2 |
| Modes | Variable sémantique qui ne pointe pas vers une primitive ; valeur sombre identique à la valeur claire | Lecture des collections | 2 |
| Contraste | Sous WCAG 2.2 AA : 4,5:1 texte courant, 3:1 grand texte, éléments d'interface et anneau de focus | Fond réel : remonter parents et éléments placés dessous jusqu'au premier remplissage opaque, opacités composées, chaque mode évalué. Exclus : `disabled`. À part : placeholders. Image, dégradé ou flou : « indéterminé », donc question | 2 (paires texte et fond des variables), puis lot |
| Règles de contenu | Forme des libellés d'action (infinitif, impératif, nom), casse, ponctuation, langue, mots différents pour la même action (« Valider », « Confirmer », « OK ») | Relevé des boutons, liens, titres, messages | 2 (règles), lot (kit), 7 (écrans) |
| États | Matrice composant × état : `hover`, `focus`, `disabled`, `selected`, `error` manquants | Variantes présentes | 3 à 5 (création selon la règle de dérivation de la phase 2) |
| Focus visible | Composant interactif sans état `focus` ou à l'anneau trop peu contrasté | Variantes, contraste | 3 à 5 |
| Cibles tactiles | Zone cliquable de moins de 24 × 24 (WCAG 2.5.8) ; sur mobile, moins de 44 | Dimensions | 3 à 5 |
| Robustesse | Composant sans auto-layout, redimensionnement incohérent (hug, fill), texte qui ne passe pas à la ligne | Propriétés de mise en page | 3 à 5 |
| Champs de formulaire | Label visible, emplacements pour l'aide et l'erreur, marque d'obligation | Structure | 3 à 5 |
| Composants hors kit | Composants principaux dans les pages d'écrans | Liste par page | 3 à 5 |
| Doublons | Composants de même rôle et de rendu proche | Signature (types, tailles arrondies, nombre d'enfants, styles) hachée et regroupée. Options de la question : `Fusionner`, `En faire une variante`, `Garder distincts` | 3 à 5 |
| Copies détachées | Groupes qui reproduisent un composant sans en être une instance | D'abord `detachedInfo` (composant d'origine exact), puis signature | 3 à 5, puis 7 |
| Structures répétées | Blocs répétés sans composant : header, footer, cartes, lignes de liste, modales | Signature, position récurrente | 4 et 5 |
| Nommage | Calques générés par Figma, noms hors nomenclature | `nomenclature.md` | Chaque lot |

## Questions de cadrage de chaque phase
Posées en tête de phase, avant les constats :
- **2 Fondations** : correspondances avec le kit existant, noms des primitives (teinte, cran), points de rupture, famille et taille des icônes, règles de contenu (forme des actions, casse, vocabulaire), règle de dérivation des états.
- **3 à 5** : une question sur liste par lot de familles, avec pour chacune son nom, son niveau (sauf atome mécanique), ses axes de variantes (propriétés et valeurs, correspondance des tailles existantes) et son passage en auto-layout.
- **6 Templates** : les squelettes de pages à créer, avec leur grille, leur header et leur footer.

## Ce qui n'est pas une question (exécution)
- Relier une valeur à la variable qu'une décision a fixée pour elle.
- Appliquer le format de nommage à un nom déjà décidé.
- Ranger dans `01 Atomes` un composant qui n'utilise aucun autre composant du kit. Tout autre niveau est décidé dans la question sur liste de la phase.
- Construire un composant selon ce que sa question sur liste a fixé (nom, niveau, axes, auto-layout).
- Mettre en place la structure des pages, de la Revue, de la Couverture et de l'Arborescence.
- Créer un état manquant avec la règle de dérivation décidée en phase 2.

## Compteurs (avant → après)
Calculés par seiri, sur le kit et sur les écrans du périmètre, **séparément**.

Consolidation : couleurs uniques, tailles de texte, valeurs d'espacement, valeurs de rayon, familles et graisses de police, familles d'icônes, composants (principaux et copies) → component sets.

Qualité :
1. Part des propriétés reliées à une variable ou un style (en %)
2. Textes sans style
3. Doublons
4. Copies détachées
5. Contrastes en échec
6. Noms hors nomenclature
7. Écrans seulement : part des nœuds qui sont des instances du kit (en %)

Les questions ouvertes sont suivies par kanshu dans `uikit.md`, hors compteurs.
Objectif affiché : 100 % de propriétés reliées dans le kit.
