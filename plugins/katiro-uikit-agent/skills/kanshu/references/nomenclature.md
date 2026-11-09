# Nomenclature

Logique BEM, traduite dans les outils natifs de Figma, pour qu'un développeur lise le kit comme du code.

| BEM | Figma | Exemple |
|---|---|---|
| Block | Component set | `Button` |
| Element | Sous-composant privé, noms de calques | `_Button/Icon`, calque `icon` |
| Modifier | Propriétés | `variant=primary`, `size=md`, `state=hover` |

Lecture développeur : `Button` · `variant=primary` · `size=md` donne `<Button variant="primary" size="md">` ou `.button--primary.button--md`.

## Composants
- Nom en anglais, `PascalCase`, au singulier : `Button`, `TextField`, `ProductCard`, `Header`.
- Pas de niveau atomique dans le nom : la page le donne (`01 Atomes`). `Button`, jamais `Atoms/Button`.
- Sous-composant interne : préfixe `_` (`_Button/Icon`). Figma le cache du panneau Assets.
- Description : une ligne, ce qu'est le composant. Pas de mode d'emploi.

## Propriétés
| Type | Nom | Valeurs |
|---|---|---|
| Variante | `variant`, `size`, `state`, `breakpoint`… en `camelCase` | en minuscules, `kebab-case` : `primary`, `sm`, `md`, `lg`, `hover` |
| Booléen | `show` + élément : `showIcon`, `showBadge` | `true` / `false` |
| Texte | nom de l'élément : `label`, `helperText` | |
| Échange d'instance | nom de l'élément : `icon`, `avatar` | |

États, dans cet ordre quand ils existent : `default`, `hover`, `pressed`, `focus`, `disabled`, `error`.
Tailles : `xs`, `sm`, `md`, `lg`, `xl`.

## Calques
- En minuscules, `kebab-case`, nommés par leur rôle : `container`, `icon`, `label`, `helper-text`.
- Aucun nom généré par Figma (`Frame 247`, `Rectangle 12`, `Group 3`).

## Variables
| Collection | Rôle | Exemples |
|---|---|---|
| `primitives` | Valeurs brutes, sans rôle | `color/blue/500`, `space/16`, `radius/8`, `font/size/16`, `font/weight/600` |
| `semantic` | Rôles, alias vers les primitives, modes clair et sombre s'ils existent | `color/bg/default`, `color/bg/primary`, `color/text/muted`, `color/border/focus` |
| `layout` | Grilles, un mode par point de rupture | `grid/columns`, `grid/gutter`, `grid/margin` |

Chemins en minuscules, séparés par `/`. Un développeur lit `color/bg/primary` comme `--color-bg-primary`.
Les composants n'utilisent que des variables `semantic` (et `layout`), jamais `primitives` directement.

## Styles
- Texte : `text/{rôle}/{taille}` : `text/heading/xl`, `text/body/md`, `text/label/sm`. Branchés sur les variables de typo.
- Effets : `shadow/sm`, `shadow/md`, `shadow/lg`. Couleur branchée sur une variable.
- Grilles : `grid/{breakpoint}` : `grid/mobile`, `grid/desktop`. Branchés sur la collection `layout`.

## Icônes
- Un composant par icône : `icon/{nom-kebab}` (`icon/arrow-right`).
- Taille et famille : décidées en phase 2 (question), puis règle du référentiel.
