# Structure du UI Kit dans Figma

Règle fixe du plugin. seiton la met en place en phase 1.

## Pages, dans cet ordre, en tête du fichier
| Page | Contenu |
|---|---|
| `Couverture` | Nom du projet, date, chiffres avant/après, nombre d'écrans de référence, liens vers chaque page du kit |
| `Revue` | Le compte rendu du chantier |
| `Arborescence` | Les écrans de référence et leurs parcours |
| `00 Fondations` | Couleurs, typographie, espacements, rayons, bordures, opacités, ombres, grilles, icônes |
| `01 Atomes` | |
| `02 Molécules` | |
| `03 Organismes` | |
| `04 Templates` | Squelettes de pages sur la grille |
| `Archives` | Ce qui a été remplacé |
| `---` | Séparateur (page vide nommée de tirets), puis les pages d'écrans existantes, inchangées |

`Couverture`, `Revue`, `Arborescence` et `Archives` sont exclues de tous les comptages.

## Classement atomique
- **Atome** : n'utilise aucun autre composant du kit (bouton, champ, badge, icône). Seule règle mécanique.
- **Molécule** : assemble des atomes pour une seule fonction (champ avec label et aide, ligne de liste, carte simple).
- **Organisme** : région autonome d'une page (header, footer, formulaire complet, liste de cartes).
- **Template** : page entière, sans contenu réel, posée sur la grille.

Hors atomes, le niveau est un jugement : il est proposé dans la question sur liste de la phase, avec ces définitions.

## Mise en page commune
- Chaque page commence par un cadre titre : nom de la page, une ligne de description, date de mise à jour.
- Une **section Figma** par famille (`Button`, `TextField`…), dans l'ordre alphabétique. Les sections ne s'agrandissent pas seules : seiton les redimensionne.
- Dans chaque section : le component set, et au-dessus son nom et sa ligne de description.
- Espacements réguliers entre sections. Rien ne se chevauche, rien ne traîne hors section.
- Les cadres de présentation utilisent les variables et styles du kit dès qu'ils existent.

## 00 Fondations, sections dans cet ordre
Couleurs (primitives par teinte, puis rôles, une colonne par mode), Typographie, Espacements, Rayons, Bordures, Opacités, Ombres, Grilles (un cadre par point de rupture), Icônes.
Chaque échantillon est branché sur sa variable ou son style. Aucune valeur écrite à la main.

## Revue
- En tête : chiffres avant → après (`controles.md`, Compteurs), date du dernier passage.
- Trois colonnes : **Fait** (créé), **Ajusté** (corrigé, fusionné, relié), **À décider** (questions reportées ou avec le client).
- Une carte par famille (« Button : 3 doublons fusionnés, 2 états ajoutés »), avec un lien vers la section.
- Pas de paragraphe.

## Arborescence
- En tête : « {n} écrans de référence · {p} parcours · relevé du {date} ». Les écrans exclus sont seulement comptés.
- Un arbre en auto-layout : un nœud par parcours, puis ses écrans. Traits simples entre les nœuds, recalculés à chaque passage (les connecteurs n'existent pas en Figma Design).
- Chaque écran : nom, lien vers l'écran d'origine, et une vignette (copie réduite et verrouillée) tant qu'il y a 60 écrans au plus. Au-delà, pas de vignette.

## Archives
- Chaque élément porte une étiquette : « Remplacé par {nom} · D{n} · {date} ».
- Rien n'y est supprimé par l'agent. Le vidage est une décision de l'utilisateur, faite à la main.
