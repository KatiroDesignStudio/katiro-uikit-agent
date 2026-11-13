# Structure du UI Kit dans Figma

Règle fixe du plugin. Seiton la met en place en phase 1 de `katiro-ui-kit-build` ; `Écrans kit` est créée par `katiro-ui-kit-templates` au premier écran branché.

## Pages, dans cet ordre, en tête du fichier
| Page | Contenu |
|---|---|
| `Couverture` | Nom du projet, date, chiffres avant/après, nombre d'écrans de référence, liens vers chaque page du kit |
| `Revue` | Le compte rendu du chantier |
| `Arborescence` | Les écrans de référence et leurs parcours |
| `UI Kit · Fondations` | Couleurs, typographie, espacements, rayons, bordures, opacités, ombres, grilles, icônes |
| `UI Kit · Atomes` | |
| `UI Kit · Molécules` | |
| `UI Kit · Organismes` | |
| `Archives` | Ce qui a été remplacé |
| `Écrans kit` | Les copies des écrans branchés sur le kit, sous le nom de l'original, côte à côte dans l'ordre des parcours |
| `---` | Séparateur (page vide nommée de tirets), puis les pages d'écrans existantes, inchangées |

Pas de numéro devant les pages du kit : l'ordre de la liste suffit, et le préfixe `UI Kit · ` les regroupe parmi les pages du fichier. Un kit rangé avant la v0.8.0 (`00 Fondations` à `03 Organismes`, sections empilées) : Seiton renomme les pages et remet les sections sur une ligne au premier lot de la reprise, sans créer de nouvelles pages.

Sont exclues de tous les comptages, instances comprises : `Couverture`, `Revue`, `Arborescence`, `Archives`, `Écrans kit`, les séparateurs (page vide, ou nommée uniquement de tirets ou d'astérisques) et les couvertures existantes quel que soit leur nom (« Cover », « Thumbnail »…).

## Classement atomique
- **Atome** : n'utilise aucun autre composant du kit (bouton, champ, badge). Seule règle mécanique. Une icône du kit ne compte pas pour ce classement (un bouton à icône reste un atome) ; les icônes elles-mêmes sont rangées dans `UI Kit · Fondations`.
- **Molécule** : assemble des atomes pour une seule fonction (champ avec label et aide, ligne de liste, carte simple).
- **Organisme** : région autonome d'une page (header, footer, formulaire complet, liste de cartes).

Hors atomes, le niveau est un jugement : il est proposé dans le récapitulatif de la phase, avec ces définitions. Une section propre à une seule page n'est pas un composant : elle reste dans l'écran, valeurs reliées seulement.

## Mise en page commune
- Chaque page commence par un cadre titre : nom de la page, une ligne de description, date de mise à jour.
- Une **section Figma** par famille (`Button`, `TextField`…), dans l'ordre alphabétique, **sur une seule ligne, de gauche à droite** : toutes alignées en haut, sous le cadre titre, à 160 px les unes des autres. Jamais empilées : une section qui grandit (une variante, un état de plus) s'étend vers le bas, sans recouvrir sa voisine. Les sections ne s'agrandissent pas seules : Seiton les redimensionne, puis recale à 160 px toutes celles qui suivent sur la ligne.
- Dans chaque section : le component set, et au-dessus son nom et sa ligne de description. Un composant prévu pour fond sombre est présenté sur `color/bg/inverse`.
- Espacements réguliers entre sections. Rien ne se chevauche, rien ne traîne hors section.
- Les cadres de présentation utilisent les variables et styles du kit dès qu'ils existent. Ceux créés avant la phase 2 y passent dans le dernier lot de la phase 2, avant la recette : titres de page sur le style de titre le plus proche de 40, titre de couverture sur le plus grand style de titre du kit, texte courant sur le style de corps de 16, étiquettes et tableaux sur le style d'étiquette ; couleurs sur les rôles de texte (défaut, atténué, accent pour les liens), de fond (défaut, surface) et de contour (discret). Un style ou un rôle absent du kit est un doute ; un changement de taille de plus de 4 px est listé dans le rapport du lot, puis montré à la recette.
- La date « Mis à jour le » d'un cadre titre est mise à jour en fin de phase, pour les pages écrites pendant la phase.

## UI Kit · Fondations, sections dans cet ordre
Sur une seule ligne, de gauche à droite, comme les familles : Couleurs (primitives par teinte, puis rôles, une colonne par mode), Typographie, Espacements, Rayons, Bordures, Opacités, Ombres, Grilles (un cadre par point de rupture), Icônes.
Toute variable ou tout style créé après la phase 2 y est ajouté dans le même lot. Chaque échantillon est branché sur sa variable ou son style. Aucune valeur écrite à la main. Sous l'échantillon : son nom, sa valeur, et le nom de marque s'il existe (pas de description technique). Ordre : celui des décisions.

## Revue
- En tête : chiffres « avant » jusqu'à la clôture, puis « avant → après » (`controles.md`, Compteurs, même formule des composants que la Couverture), date du dernier passage.
- Chaque passage de fin de phase met à jour toutes les cartes, celles des phases passées comprises (chiffres, état).
- Trois colonnes : **Fait** (créé), **Ajusté** (corrigé, fusionné, relié), **À décider** (questions reportées ou avec le client).
- Une carte par famille (« Button : 3 doublons fusionnés, 2 états ajoutés »), sans numéro de lot, avec un lien vers la section (la première dans l'ordre de la page si la carte en couvre plusieurs). Le titre peut passer à la ligne.
- Pas de paragraphe.

## Arborescence
- En tête : « {n} écrans de référence · {p} parcours · relevé du {date} ». Les écrans exclus sont seulement comptés.
- Un arbre en auto-layout : un nœud par parcours, puis ses écrans. Traits simples entre les nœuds, recalculés à chaque passage (les connecteurs n'existent pas en Figma Design).
- Chaque écran : nom, lien vers l'écran d'origine (et vers sa copie dans `Écrans kit` une fois branché), et une vignette tant qu'il y a 60 écrans au plus (au-delà, pas de vignette). Vignette : copie réduite, recadrée à 1 200 px de haut à l'échelle d'origine, verrouillée, liens de prototype retirés.

## Archives
- Un cadre `{écran}` par écran branché ; l'élément y garde sa taille d'origine (fixée avant le déplacement).
- Chaque élément porte une étiquette : « Remplacé par {nom} · D{n} · {date} », D{n} étant la décision qui fixe ce remplacement.
- Rien n'y est supprimé par l'agent. Le vidage est une décision de l'utilisateur, faite à la main.
