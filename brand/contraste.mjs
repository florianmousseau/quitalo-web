/*
 * Verifie les contrastes de la charte contre WCAG 1.4.3 (4.5:1 pour du texte).
 *
 *   node brand/contraste.mjs
 *
 * Aucune dependance, et surtout AUCUNE couleur recopiee: les valeurs sont lues
 * dans src/app.css. Une charte dont le controle duplique les teintes ment des
 * la premiere retouche.
 *
 * Ce que ce controle attrape et que l'oeil rate: une nuance juste sur le fond
 * de page et illisible dans une carte. Les deux defauts trouves en juillet 2026
 * etaient exactement ca - il faut donc tester CHAQUE surface, pas seulement le
 * fond, et dans LES DEUX themes.
 */

import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const CSS = join(dirname(fileURLToPath(import.meta.url)), '..', 'src', 'styles', 'global.css');

/** Les jetons d'un bloc :root, tels qu'ils sont ecrits dans la feuille. */
function jetons(css, selecteur) {
	const debut = css.indexOf(selecteur);
	if (debut === -1) throw new Error(`bloc introuvable : ${selecteur}`);
	const bloc = css.slice(debut, css.indexOf('}', debut));
	const table = {};
	// Le premier caractere du nom doit etre une lettre, sinon la classe
	// `[a-z0-9-]` chevauche le `--` qui la precede et le moteur peut repartir
	// en arriere. Pas de `\s*` non plus avant la valeur, pour la meme raison:
	// les blancs partent au trim.
	for (const [, nom, valeur] of bloc.matchAll(/--([a-z][a-z0-9-]*):([^;]*);/g)) {
		table[nom] = valeur.trim();
	}
	return table;
}

function luminance(couleur) {
	const hex = couleur.replace('#', '');
	const court = hex.length === 3;
	const canaux = [0, 1, 2].map((i) =>
		parseInt(court ? hex[i] + hex[i] : hex.slice(i * 2, i * 2 + 2), 16)
	);
	const [r, v, b] = canaux.map((c) => {
		const n = c / 255;
		return n <= 0.03928 ? n / 12.92 : ((n + 0.055) / 1.055) ** 2.4;
	});
	return 0.2126 * r + 0.7152 * v + 0.0722 * b;
}

function rapport(a, b) {
	const [haut, bas] = [luminance(a), luminance(b)].sort((x, y) => y - x);
	return (haut + 0.05) / (bas + 0.05);
}

// ---------------------------------------------------------------------------
// A ADAPTER AU PROJET : les noms de jetons ci-dessous, et le selecteur du bloc
// sombre plus bas. Tout le reste fonctionne tel quel.
// ---------------------------------------------------------------------------

/** Les surfaces sur lesquelles du texte se pose reellement. En mettre TROIS au
 *  moins : c'est la plus claire du theme sombre qui fait tomber les gris, et un
 *  controle limite au fond de page ne la voit jamais. */
const SURFACES = ['papier', 'carte', 'regle-fond', 'du-fond'];
/** Tout ce qui s'ecrit par-dessus. */
const ENCRES = ['encre', 'encre-douce', 'regle', 'du'];
/** Les pastilles: une couleur de sens sur son propre fond teinte. */
const PASTILLES = [
	['regle', 'regle-fond'],
	['du', 'du-fond']
];

const css = readFileSync(CSS, 'utf8');
const themes = [
	['CLAIR', jetons(css, ':root {')],
	// Le theme sombre suit la preference systeme, il n'a pas de selecteur a lui:
	// on lit le bloc :root imbrique dans la requete media.
	[
		'SOMBRE',
		{
			...jetons(css, ':root {'),
			...jetons(css.slice(css.indexOf('@media (prefers-color-scheme: dark)')), ':root {')
		}
	]
];

let echecs = 0;
const controler = (libelle, avant, arriere) => {
	if (!avant?.startsWith('#') || !arriere?.startsWith('#')) return; // rgba(), ignore
	const r = rapport(avant, arriere);
	const ok = r >= 4.5;
	if (!ok) echecs++;
	console.log(`${ok ? '  ok ' : '  XX '} ${libelle.padEnd(26)} ${r.toFixed(2).padStart(5)} : 1`);
};

for (const [nom, t] of themes) {
	console.log(`\n=== ${nom} ===`);
	for (const encre of ENCRES) {
		for (const surface of SURFACES) controler(`${encre} / ${surface}`, t[encre], t[surface]);
	}
	controler('sur-regle / regle', t['sur-regle'], t.regle);
	for (const [encre, fond] of PASTILLES) controler(`${encre} / ${fond}`, t[encre], t[fond]);
}

if (echecs > 0) {
	console.error(`\n${echecs} couple(s) sous 4.5:1.`);
	process.exit(1);
}
console.log('\nTout passe.');
