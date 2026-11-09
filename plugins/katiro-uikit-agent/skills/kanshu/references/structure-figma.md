# Structure du UI Kit dans Figma

Règle fixe du plugin : seiton l'applique sans question.

## Pages, dans cet ordre, en tête du fichier
| Page | Contenu |
|---|---|
| `Couverture` | Nom du projet, date, compteurs avant/après, liste des pages |
| `Revue` | Le compte rendu (voir plus bas) |
| `Arborescence` | Les écrans scannés et leurs parcours |
| `00 Fondations` | Couleurs, typographie, espacements, rayons, ombres, grilles, icônes |
| `01 Atomes` | |
| `02 Molécules` | |
| `03 Organismes` | |
| `04 Templates` | Squelettes de pages sur la grille |
| `Archives` | Ce qui a été remplacé ou écarté |
| `---` | Séparateur, puis les pages d'écrans existantes, inchangées |

Les pages d'écrans gardent leur nom et leur contenu. Elles sont seulement placées après le séparateur.

## Mise en page commune
- Chaque page commence par un cadre titre : nom de la page, une ligne de description, date de mise à jour.
- Le contenu est rangé en **sections Figma**, une par famille (`Button`, `TextField`…), dans l'ordre alphabétique sauf décision contraire.
- Chaque section : le component set, et au-dessus son nom et sa ligne de description.
- Espacements réguliers entre les sections, alignés sur une grille. Rien ne se chevauche, rien ne traîne hors section.
- Les cadres de présentation utilisent les variables et styles du kit dès qu'ils existent.

## 00 Fondations, sections dans cet ordre
1. Couleurs : primitives par teinte, puis sémantiques par rôle, une colonne par mode.
2. Typographie : chaque style de texte avec son nom et ses valeurs.
3. Espacements : l'échelle, en barres.
4. Rayons.
5. Ombres.
6. Grilles : un cadre par point de rupture, avec la grille appliquée.
7. Icônes : la grille des icônes, avec leur nom.

Chaque échantillon est branché sur sa variable ou son style. Aucune valeur écrite à la main.

## Revue
- En tête : compteurs **avant → après** (liste dans `controles.md`), date du dernier passage.
- Trois colonnes : **Fait** (créé), **Ajusté** (corrigé, fusionné, relié), **À décider** (questions ouvertes ou reportées).
- Une carte par élément : vignette, une ligne (« Button : 3 doublons fusionnés, D4 »), lien vers le nœud.
- Pas de paragraphe.

## Arborescence
- En tête : « {n} écrans scannés · {p} parcours · scan du {date} ».
- Un arbre : un nœud par parcours, puis ses écrans. Chaque écran : vignette, nom, lien vers l'écran d'origine.
- Les liens de prototype, quand ils existent, sont représentés par des flèches entre écrans.
- À côté : les écrans exclus, comptés et listés par motif (itération, recherche, doublon).

## Archives
- Chaque élément archivé porte une étiquette : « Remplacé par {nom} · D{n} · {date} ».
- Rien n'y est supprimé par l'agent. Le vidage est une décision de l'utilisateur, faite à la main.

## Couverture
Nom du projet, date, compteurs avant/après, nombre d'écrans scannés, liens vers chaque page du kit.
