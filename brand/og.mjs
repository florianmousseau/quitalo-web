/*
 * Fabrique les cartes de partage: celle des reseaux sociaux (site/og.png, servie
 * par le site) et celle de la fiche du depot (brand/github-social.png, a
 * televerser a la main dans les reglages GitHub).
 *
 * Pourquoi un script et pas une image dessinee une fois: une carte de partage
 * porte une PHRASE, et la phrase change. Retouchee a la main elle derive du
 * message du site; regeneree, elle le suit.
 *
 *   npm i --no-save @resvg/resvg-js wawoff2 && node brand/og.mjs
 *
 * `--no-save` est delibere: les deux paquets ne servent qu'ici, deux fois par
 * an, et resvg embarque un binaire natif que la CI telechargerait a chaque
 * passage. Ils s'installent le temps du rendu et repartent au prochain
 * `npm ci`. Le texte est trace par resvg avec la police du projet passee
 * explicitement - sharp et librsvg n'utilisent que les polices SYSTEME, donc
 * ecriraient dans une autre fonte sans rien signaler. Meme piege avec resvg si
 * on lui donne le woff2 tel quel: il rend une image VIDE sans lever d'erreur,
 * d'ou la decompression en ttf d'abord. Toujours regarder l'image produite.
 */

import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { Resvg } from '@resvg/resvg-js';
import { decompress } from 'wawoff2';

const RACINE = join(dirname(fileURLToPath(import.meta.url)), '..');

const PAPIER = '#faf9f7';
const ENCRE = '#221f1c';
const ENCRE_2 = '#5b554e';
const INDIGO = '#0b6e4f';

const TITRE = 'Quitalo';
const PHRASE = ['Quittances, loyers, révision IRL.', 'Vos données restent chez vous.'];
const DOMAINE = 'quitalo.fr';

/** Le signe, a n'importe quelle echelle: une page, et le trait du total. Les
 *  coordonnees sont celles de brand/signe.svg, ramenees a une grille de 24. */
function signe(x, y, t, trait, couleurCadre, couleurPlace) {
	const u = t / 24;
	return `
	<rect x="${x + 3.2 * u}" y="${y + 2.6 * u}" width="${17.6 * u}" height="${18.8 * u}" rx="${2.6 * u}"
		fill="none" stroke="${couleurCadre}" stroke-width="${trait}" />
	<rect x="${x + 6.8 * u}" y="${y + 15.1 * u}" width="${10.4 * u}" height="${2.7 * u}" rx="${1.35 * u}"
		fill="${couleurPlace}" />`;
}

/**
 * La meme carte a deux formats. Tout est cale sur la HAUTEUR, y compris le
 * filigrane place depuis le bord DROIT: proportionne a la largeur, il sortait
 * du cadre sur le format le plus large et n'y laissait qu'un coin orphelin.
 */
function carte(L, H) {
	const marge = Math.round(H * 0.057);
	const gauche = Math.round(H * 0.152);
	const pastille = Math.round(H * 0.146);
	const ligne = (y, taille, couleur, texte) =>
		`<text x="${gauche}" y="${y * H}" font-family="EB Garamond" font-size="${taille * H}" fill="${couleur}">${texte}</text>`;

	return `<svg xmlns="http://www.w3.org/2000/svg" width="${L}" height="${H}" viewBox="0 0 ${L} ${H}">
	<rect width="${L}" height="${H}" fill="${PAPIER}" />

	<!-- Le cadre, en filet, tout autour: le concept du produit tient la page. -->
	<rect x="${marge}" y="${marge}" width="${L - 2 * marge}" height="${H - 2 * marge}" rx="3"
		fill="none" stroke="${INDIGO}" stroke-opacity="0.26" stroke-width="1.5" />

	<!-- Le signe tres agrandi, en filigrane: une matiere, pas un second logo.
	     A taille moyenne il se lisait comme un doublon de la pastille. -->
	<defs>
		<clipPath id="dedans">
			<rect x="${marge + 1}" y="${marge + 1}" width="${L - 2 * marge - 2}" height="${H - 2 * marge - 2}" rx="3" />
		</clipPath>
	</defs>
	<g opacity="0.16" clip-path="url(#dedans)">${signe(L - 0.683 * H, 0.095 * H, 0.825 * H, 4, INDIGO, INDIGO)}</g>

	<rect x="${gauche}" y="${0.19 * H}" width="${pastille}" height="${pastille}" rx="${pastille * 0.22}" fill="${INDIGO}" />
	${signe(gauche, 0.19 * H, pastille, 7, PAPIER, PAPIER)}

	${ligne(0.524, 0.14, ENCRE, TITRE)}
	${ligne(0.641, 0.057, ENCRE_2, PHRASE[0])}
	${ligne(0.717, 0.057, ENCRE_2, PHRASE[1])}
	${ligne(0.857, 0.041, INDIGO, DOMAINE)}
</svg>`;
}

const ttf = Buffer.from(
	// A ADAPTER : le woff2 des titres, celui que le site sert deja.
	await decompress(readFileSync(join(RACINE, 'public/fonts/source-serif-4-latin.woff2')))
);
const police = join(RACINE, 'brand/.source-serif.ttf');
writeFileSync(police, ttf);

// 1200x630 pour les reseaux, 1280x640 pour la fiche du depot.
for (const [cible, L, H] of [
	['public/og.png', 1200, 630],
	['brand/github-social.png', 1280, 640]
]) {
	const png = new Resvg(carte(L, H), {
		font: { fontFiles: [police], loadSystemFonts: false, defaultFontFamily: 'Source Serif 4' },
		fitTo: { mode: 'width', value: L }
	})
		.render()
		.asPng();
	writeFileSync(join(RACINE, cible), png);
	console.log(`${cible} : ${L}x${H}, ${Math.round(png.length / 1024)} Ko`);
}
