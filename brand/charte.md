# Charte graphique

Arrêtée le 29 juillet 2026. Ce document est la référence : si un écran et cette
page divergent, c'est l'écran qui a tort.

Elle vaut pour les **deux surfaces** : la vitrine (ce dépôt, quitalo.fr) et
l'application (`florianmousseau/quitalo`, app.quitalo.fr). Elles partageaient une
palette différente et un thème sombre présent d'un seul côté ; on changeait de
monde en cliquant sur « Ouvrir l'application ». Toute retouche se fait ici puis
dans les deux dépôts, jamais dans un seul.

## Le signe

Une page, et le trait du total à l'intérieur.

Quitalo vient de **quittance**, et une quittance dit une chose : le compte est
soldé, les deux parties sont quittes. En comptabilité, ce moment a un signe
universel, le trait tiré sous une colonne quand le total est arrêté. C'est ce
trait qui devient la marque. Ni toit, ni clé, ni trousseau : ce sont les clichés
du secteur, et tous les concurrents les portent déjà.

| Fichier | Usage |
| --- | --- |
| `brand/signe.svg` | la source, encrée sur `currentColor` |
| `src/components/Signe.astro` | dans la vitrine (prop `taille`) |
| `../quitalo/src/lib/components/Signe.svelte` | dans l'application |
| `public/favicon.svg` | onglet, avec sa teinte figée et une règle média pour la barre sombre |
| `public/favicon-32.png`, `public/apple-touch-icon.png` | replis, régénérés depuis le SVG |

Le composant prend sa couleur sur `currentColor`, donc il s'inverse tout seul en
thème sombre. Ne jamais le redessiner à la main dans un écran.

**Deux autres pistes ont été essayées et écartées**, parce que ce sont elles
qu'on reproposera un jour, pas la réponse :

- **Le double trait** de clôture des comptables, deux barres horizontales. Juste
  sur le fond, mais à 16 px il devient un signe égal ou une icône de menu, et il
  manque de masse dans un onglet clair.
- **Les douze mois**, la grille des loyers réduite à douze cases dont une pleine.
  Écartée par le test des 16 px : les cases se referment en pâté, et à 32 px on
  lit un calendrier, cliché du secteur.

Le test qui tranche est celui-là : rendre chaque piste à 16, 32 et 48 px avant
d'en discuter.

## Les couleurs

**Deux couleurs seulement portent un sens, toujours le même.** Sur un outil
d'argent il n'y a que deux états qui comptent : ce qui est **réglé** et ce qui
est **dû**. Le reste est du papier, de l'encre et des filets. Sept couleurs
d'état qui se disputent l'attention ne disent plus rien.

Le rouge est un rouge de **registre**, pas d'alarme : un loyer en retard est un
état du compte, pas un incident.

| Jeton | Rôle | Clair | Sombre |
| --- | --- | --- | --- |
| `--papier` | fond de page (jamais du blanc pur) | `#faf9f7` | `#16130f` |
| `--carte` | surface surélevée | `#ffffff` | `#1e1a16` |
| `--encre` | texte courant (noir chaud) | `#221f1c` | `#ece7e0` |
| `--encre-douce` | mentions secondaires | `#5b554e` | `#a79f95` |
| `--regle` | ce qui est soldé, et la marque | `#0b6e4f` | `#4cc39a` |
| `--regle-fond` | pastille d'un mois soldé | `#e2efe9` | `#17281f` |
| `--sur-regle` | encre posée sur `--regle` | `#ffffff` | `#16130f` |
| `--du` | ce qui est dû ou en retard | `#a8442a` | `#e79070` |
| `--du-fond` | pastille d'un mois dû | `#f6e7e0` | `#2c1b14` |
| `--bord` | filets et séparations | `#e4e0da` | `#322c25` |

Ce qui distingue un mois **partiel** d'un mois en retard n'est donc pas une
troisième teinte mais la **forme** : un filet interrompu, qui dit « commencé,
pas fini ».

### La mesure, pas l'œil

```sh
node brand/contraste.mjs
```

4,5:1 sur les deux thèmes et sur quatre surfaces, y compris les pastilles. Le
contrôle **lit les teintes dans `src/styles/global.css`** au lieu de les recopier : une
charte dont le vérificateur duplique les couleurs ment dès la première retouche.
Il sort en code 1 sous le seuil, donc il est branchable dans la gate.

Vérifié le 29 juillet 2026 : tout passe, le couple le plus juste étant
`du / du-fond` à 4,94:1 en thème clair. C'est celui à surveiller si la sanguine
bouge. Sa capacité à échouer a été prouvée en dégradant `--encre-douce` : code 1
et quatre couples signalés.

## La typographie

**Une seule police ajoutée**, Source Serif 4, pour les titres et les grands
nombres. Le corps reste sur la pile système : c'est ce qui se lit le mieux en
petit, et ça ne coûte rien.

- **Auto-hébergée, jamais un CDN.** Un produit qui promet que les données ne
  partent pas ne peut pas appeler un tiers à chaque ouverture.
  `public/fonts/source-serif-4-latin.woff2` (50 ko) et sa licence OFL à côté.
  Le même fichier vit dans `static/fonts/` de l'application : deux projets de
  déploiement distincts, deux copies.
- Le fichier est **variable** : un seul téléchargement couvre le corps et le
  semi-gras.
- **Ses chiffres sont de hauteur constante.** Le piège d'un serif littéraire est
  l'inverse : des chiffres elzéviriens descendent sous la ligne et rendent une
  colonne de montants illisible.
- Le serif ne descend pas dans les lignes denses : à 0,8 rem, la pile système
  gagne toujours.

Ne pas se contenter de la déclarer : **prouver qu'elle est chargée** en comparant
la largeur d'une même chaîne à celle du repli. Mesuré à la validation : 384 px
contre 430 px en Georgia.

## Les images de partage

```sh
npm i --no-save @resvg/resvg-js wawoff2 && node brand/og.mjs
```

- `public/og.png` (1200x630), servie par la vitrine, recopiée depuis
  l'application qui la génère ;
- `brand/github-social.png` (1280x640) pour la fiche du dépôt.

Les deux paquets s'installent le temps du rendu et repartent : ils ne servent que
deux fois par an et resvg embarque un binaire natif que la CI téléchargerait à
chaque passage. `knip.json` les déclare en `ignoreDependencies` pour cette
raison, et `brand/*.mjs` en `entry` parce que ce sont de vrais points d'entrée
lancés à la main.

Le texte est tracé par resvg avec la police du projet passée explicitement :
sharp et librsvg n'utilisent que les polices **système** et écriraient dans une
autre fonte sans rien signaler. Toujours regarder l'image produite. Piège vécu :
un script de génération qui perd les accents écrit « revision » et « donnees »
sans que rien n'échoue.

**La carte de la fiche GitHub ne peut être posée par aucune API.** C'est un geste
manuel, dans Settings puis Social preview du dépôt, avec
`brand/github-social.png`.

## Ce qui reste à faire à la main

- Téléverser `brand/github-social.png` dans les réglages GitHub des deux dépôts.
