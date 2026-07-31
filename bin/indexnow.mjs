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
if (!reponse.ok) console.log(await reponse.text());
