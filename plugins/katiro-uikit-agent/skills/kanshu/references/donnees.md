# Données de travail (`.uikit/`)

Aucun état ne survit entre deux appels `use_figma` : tout ce qui doit servir plus tard est écrit ici.
JSON, identifiants de nœuds Figma tels quels. Chaque fichier a un seul propriétaire, qui l'écrit ; les autres le lisent.

| Fichier | Propriétaire | Contenu |
|---|---|---|
| `survol.json` | seiri | `pages[]` : `{id, nom, role, cadres, sections[] (noms), prefixes[] ({prefixe, occurrences})}`, `role` valant `ecrans`, `couverture`, `separateur` ou `kit` ; `motsRecurrents[]` : `{mot, occurrences}` ; `versions[]` : `{nom, page}` ; `local` : `{stylesCouleur, stylesTexte, stylesEffet, stylesGrille, collections[]}` ; `bibliotheques` : `{composants[] ({nom, cle, instances})}` ; `kitExistant` : `{pageId, composants, collections}` ou `null` |
| `perimetre.json` | seiri | `ecrans[]` : `{id, nom, page, largeur}` ; `exclus[]` : `{id, nom, page, motif}` ; `doublons[]` : `{ids[], difference}` ; `liens[]` : `{de, vers}` ; `groupes[]` : `{nom, ecrans[]}` |
| `perimetre-valide.json` | kanshu | Périmètre après les réponses de l'utilisateur : `ecrans[]` (identifiants retenus), `doublons[]` (`{ids[], retenu}`), `parcours[]` (`{nom, ecrans[]}`), `kitExistant` (`repris`, `intact` ou `aucun`), `couverture` (`gardee`, `remplacee` ou `aucune`). Fait foi pour seiri et seiton. |
| `scan/index.json` | seiri | `pages[]` : `{id, nom, etat, curseur}`, `etat` valant `a-faire`, `en-cours` ou `fait` |
| `scan/{pageId}.json` | seiri | `inventaire` (variables, styles, composants de la page) et `constats[]` : `{id, type, noeuds[], valeurs, occurrences, mesure}`, 20 exemples de nœuds au plus par constat |
| `scan/synthese.json` | seiri | Compteurs agrégés (kit et écrans séparés) et constats regroupés par type |
| `scan/delta-P{phase}.json` | seiri | Constats à jour pour la phase, au même format. Ne vide pas `scan/` et continue la numérotation des constats. |
| `controle-{lot}.json` | seiri | `ecarts[]` : `{noeud, regle, constate, attendu}` |
| `ids.json` | seiton | `pages`, `collections`, `modes`, `variables`, `styles`, `composants` (nom vers `{id, page}`), `archives[]` (`{id, remplacePar, decision}`), `remplacements[]` (`{origine, instance, ecran}`), `lots` (identifiant de lot vers nœuds touchés) |

## Conventions
- Identifiant de lot : `P{phase}-{nn}`, par exemple `P3-02`.
- Dans un nom de fichier, le « : » d'un identifiant Figma devient « - » (`scan/2334-193.json`).
- Identifiant de constat : `C{nnn}`, jamais réutilisé, y compris dans les deltas. Une question de `uikit.md` cite les constats qu'elle couvre.
- Lien vers un nœud, pour l'utilisateur : `https://www.figma.com/design/{fileKey}/?node-id={id avec - à la place de :}`.
- Un fichier se complète au fur et à mesure (page par page, lot par lot) : jamais tout en mémoire puis tout à la fin.
