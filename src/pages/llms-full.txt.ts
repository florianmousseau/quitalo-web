import type { APIRoute } from 'astro';
import { APP_URL, CONTACT_EMAIL, DEFINITION, DEMO_URL, SITE_URL } from '../consts';
import { faq, features } from '../content/product';

// La version longue de llms.txt : ce que fait le produit, ce qu'il ne fait pas,
// et les reponses aux questions que se posent les bailleurs. Construite depuis
// le meme contenu que la page, pour qu'un modele et un lecteur humain lisent
// exactement la meme chose.
export const GET: APIRoute = () => {
	const body = `# Quitalo

> ${DEFINITION}

## Liens

- Application (gratuite, sans compte) : ${APP_URL}
- Démonstration, jeu fictif, rien n'est enregistré : ${DEMO_URL}
- Site : ${SITE_URL}
- Contact : ${CONTACT_EMAIL}

## Ce que fait Quitalo

${features.map((f) => `### ${f.title}\n\n${f.body}`).join('\n\n')}

## Où vivent les données

Dans le navigateur du bailleur. L'application ouvre un coffre local et demande,
au premier lancement, où en garder une copie durable : un fichier sur son
appareil ou un serveur WebDAV qu'il contrôle. Aucune donnée de locataire ne
transite par un serveur de l'éditeur, qui n'en a pas. Le bailleur reste donc
seul responsable de traitement au sens du RGPD.

## Pour qui

Bailleurs particuliers en France, un à cinq logements, loués vides ou meublés,
sans agence. Baux d'habitation régis par la loi du 6 juillet 1989. Hors champ :
SCI à l'impôt sur les sociétés, baux commerciaux, gestion pour compte de tiers.

## Engagements

Aucun compte à créer, aucune période d'essai, aucun document retenu, aucun
abonnement, aucune donnée revendue. Le détail et la raison technique de chaque
engagement : ${SITE_URL}/engagements

## Questions fréquentes

${faq.map((item) => `### ${item.q}\n\n${item.a}`).join('\n\n')}
`;
	return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
