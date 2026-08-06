/**
 * Annonce les pages a IndexNow (Bing, Yandex, Seznam... et tout moteur qui s'y
 * branche). Aucun compte, aucune console : la preuve de propriete est le
 * fichier `public/<cle>.txt`, servi a la racine du site.
 *
 * Google n'utilise PAS IndexNow - lui demande la Search Console, qui exige un
 * compte. C'est la seule partie du referencement qui ne peut pas etre faite
 * sans Florian.
 *
 *   node bin/indexnow.mjs
 */
import { readdir } from 'node:fs/promises';

const SITE = 'https://quitalo.fr';

// La cle EST le nom du fichier servi a la racine : une seule source, donc pas
// de derive possible entre la cle envoyee et celle que le moteur ira lire.
const cle = (await readdir('public'))
	.find((f) => /^[0-9a-f]{32}\.txt$/.test(f))
	?.replace('.txt', '');
if (!cle) throw new Error('Aucune cle IndexNow dans public/ (fichier <32 hex>.txt).');

const sitemap = await (await fetch(`${SITE}/sitemap-0.xml`)).text();
const urls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
if (urls.length === 0) throw new Error('Sitemap vide ou illisible.');

const reponse = await fetch('https://api.indexnow.org/indexnow', {
	method: 'POST',
	headers: { 'Content-Type': 'application/json; charset=utf-8' },
	body: JSON.stringify({
		host: 'quitalo.fr',
		key: cle,
		keyLocation: `${SITE}/${cle}.txt`,
		urlList: urls
	})
});
// 200 et 202 disent tous deux "recu"; le reste merite d'etre lu.
console.log(`IndexNow ${reponse.status} pour ${urls.length} URL`);
if (!reponse.ok) console.log(lisible(await reponse.text()));

/**
 * Rend lisible un corps de reponse ecrit par un service exterieur.
 *
 * Le message vient de chez Bing, pas de chez nous : un retour a la ligne suffit
 * a fabriquer une fausse entree de journal, et une sequence d'echappement a
 * repeindre un terminal. On garde le texte, on lui retire ses caracteres de
 * commande et on le borne. Sonar jssecurity:S5145, 2026-08-06.
 */
function lisible(texte) {
	// Caractere par caractere, et non par une classe de regex : eslint refuse un
	// caractere de commande dans une expression reguliere (`no-control-regex`), et
	// la regle a raison sur le fond meme si c'est exactement ce qu'on vise ici.
	// Le contrat du depot interdit de la desactiver pour passer.
	let propre = '';
	for (const c of texte) {
		const code = c.codePointAt(0);
		propre += code < 32 || (code >= 127 && code <= 159) ? ' ' : c;
	}
	propre = propre.trim();
	return propre.length > 300 ? `${propre.slice(0, 300)}...` : propre;
}
