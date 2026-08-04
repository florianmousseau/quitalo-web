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

export const CONTACT_EMAIL = 'contact@quitalo.fr';

/** The canonical one-liner. Repeated verbatim everywhere on purpose. */
export const DEFINITION =
	'Quitalo est le compagnon gratuit et local-first du petit bailleur français : il ' +
	'liste les échéances à venir de chaque bail, puis produit les quittances de loyer ' +
	'conformes, le suivi mensuel des loyers, la révision IRL avec les indices INSEE, ' +
	"les lettres d'impayés, la régularisation annuelle des charges et la restitution " +
	'du dépôt de garantie, sans compte et sans serveur. Les données restent dans le ' +
	'navigateur du bailleur.';

export const SEO = {
	title: 'Quitalo : quittances, loyers, IRL, charges, le compagnon du petit bailleur',
	description:
		'Générez des quittances de loyer conformes, suivez vos loyers mois par mois, ' +
		"révisez avec l'IRL, régularisez les charges et rendez le dépôt de garantie dans " +
		'les délais. Gratuit, sans compte : vos données restent dans votre navigateur.'
};
