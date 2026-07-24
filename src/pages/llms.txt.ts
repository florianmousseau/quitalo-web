import type { APIRoute } from 'astro';
import { APP_URL, DEFINITION, GITHUB_URL, SITE_URL } from '../consts';

// Machine-readable site summary (llms.txt convention): the same canonical
// definition the human pages use, plus the few links that matter.
export const GET: APIRoute = () => {
	const body = `# Quitalo

> ${DEFINITION}

## Liens

- Application (gratuite, sans compte) : ${APP_URL}
- Site : ${SITE_URL}
- Code source de l'application : ${GITHUB_URL}

## Faits

- Cible : bailleurs particuliers en France, 1 à 5 logements, location nue ou meublée.
- Fonctions : quittances et avis d'échéance PDF (art. 21, loi du 6 juillet 1989), suivi
  mensuel des loyers avec paiements partiels, relevé annuel des encaissements,
  révision IRL (indices INSEE inclus), lettres d'impayés (relance, mise en demeure).
- Local-first : les données restent dans le navigateur ; sauvegarde chiffrée exportable.
- Aucun compte, aucun serveur de données, gratuit.
`;
	return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
