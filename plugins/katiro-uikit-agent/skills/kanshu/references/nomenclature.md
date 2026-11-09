# Nomenclature

Logique BEM, traduite dans les outils natifs de Figma : un développeur lit `Button` · `variant=primary` · `size=md` comme `<Button variant="primary" size="md">` ou `.button--primary.button--md`.

| BEM | Figma |
|---|---|
| Block | Component set : `Button` |
| Element | Sous-composant privé (`_Button/Icon`) et noms de calques (`icon`) |
| Modifier | Propriétés : `variant=primary`, `size=md`, `state=hover` |

## Composants
- En anglais, `PascalCase`, au singulier : `Button`, `TextField`, `ProductCard`, `Header`.
- Pas de niveau atomique dans le nom : la page le donne.
- Sous-composant interne : préfixe `_` (`_Button/Icon`), caché du panneau Assets.
- Description : une ligne, ce qu'est le composant.
- Le nom métier d'un composant est une déduction : question sur liste en début de phase.

## Propriétés
| Type | Nom | Valeurs |
|---|---|---|
| Variante | `variant`, `size`, `state`, `status`, `breakpoint`, en `camelCase` | minuscules, `kebab-case` |
| Booléen | `selected`, `checked`, `showIcon`, `showBadge`… | `true` / `false` |
| Texte | nom de l'élément : `label`, `helperText` | |
| Échange d'instance | `iconLeading`, `iconTrailing`, `avatar` | |

- `state` : interaction, dans cet ordre : `default`, `hover`, `pressed`, `focus`, `disabled`.
- `status` : validation, séparée de `state` pour pouvoir combiner erreur et focus : `none`, `error`, `success`, `warning`.
- `size` : `xs`, `sm`, `md`, `lg`, `xl`. La correspondance des tailles existantes est une question sur liste.

## Calques
En minuscules, `kebab-case`, choisis dans ce vocabulaire : `container`, `content`, `icon`, `icon-leading`, `icon-trailing`, `label`, `text`, `title`, `description`, `helper-text`, `error-text`, `input`, `placeholder`, `image`, `avatar`, `badge`, `indicator`, `divider`, `action`, `actions`, `overlay`.
Un rôle hors vocabulaire est un doute à remonter. Aucun nom généré par Figma (`Frame 247`, `Rectangle 12`).

## Variables
| Collection | Contenu | Exemples |
|---|---|---|
| `primitives` | Couleurs brutes, sans rôle | `color/blue/500`, `color/neutral/0` |
| `semantic` | Rôles de couleur, alias vers les primitives, modes clair et sombre s'ils existent | `color/bg/default`, `color/bg/primary`, `color/text/muted`, `color/border/focus`, `color/icon/default` |
| `dimensions` | Une seule couche, sans mode | `space/16`, `radius/8`, `border/1`, `opacity/50`, `font/family/body`, `font/size/16`, `font/line-height/24`, `font/weight/600`, `font/letter-spacing/0` |
| `layout` | Grilles, une variable par point de rupture, sans mode | `grid/desktop/columns`, `grid/desktop/gutter`, `grid/desktop/margin` |

- Chemins en minuscules, séparés par `/`. `color/bg/primary` se lit `--color-bg-primary`.
- Les composants utilisent `semantic` pour les couleurs, jamais `primitives` directement, et `dimensions` pour le reste.
- Les noms des primitives (teinte, cran) sont une question sur liste en phase 2.

## Styles
- Texte : `text/{rôle}/{taille}` (`text/heading/xl`, `text/body/md`, `text/label/sm`), branchés sur `dimensions`.
- Effets : `shadow/sm`, `shadow/md`, `shadow/lg`, couleur branchée sur `semantic`.
- Grilles : un style par point de rupture, `grid/mobile`, `grid/desktop`, branché sur `layout`. Les points de rupture sont une question de phase 2.

## Icônes
Exception écrite à la règle `PascalCase`, comme dans les bibliothèques d'icônes : un composant par icône, `icon/{nom-kebab}` (`icon/arrow-right`). Cadre carré à la taille décidée en phase 2, couleur branchée sur `color/icon/*`, taille réglée sur l'instance.
