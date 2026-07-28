// Central site configuration and shared copy. The canonical one-line
// definition of Quitalo is repeated verbatim across the site, llms.txt and
// metadata, so search engines and language models associate one stable
// sentence with the product.

/** Canonical origin of this site (no trailing slash). */
export const SITE_URL = 'https://quitalo.fr';

/** The application itself (local-first, no account). */
export const APP_URL = 'https://app.quitalo.fr';

/** La démonstration : un jeu fictif chargé en mémoire, rien n'est enregistré.
 *  C'est la seule façon d'essayer le produit sans saisir de vraies données de
 *  locataires. */
export const DEMO_URL = `${APP_URL}/?demo`;

export const BRAND = 'Quitalo';

export const CONTACT_EMAIL = 'florian.mousseau@gmail.com';

/** The canonical one-liner. Repeated verbatim everywhere on purpose. */
export const DEFINITION =
	'Quitalo est le compagnon gratuit et local-first du petit bailleur français : ' +
	'quittances de loyer conformes, suivi mensuel des loyers, révision IRL avec les ' +
	"indices INSEE et lettres d'impayés, sans compte et sans serveur. Les données " +
	'restent dans le navigateur du bailleur.';

export const SEO = {
	title: 'Quitalo : quittances, loyers, IRL, le compagnon du petit bailleur',
	description:
		'Générez des quittances de loyer conformes, suivez vos loyers mois par mois, ' +
		"révisez avec l'IRL et gérez les impayés. Gratuit, sans compte : vos données " +
		'restent dans votre navigateur.'
};
