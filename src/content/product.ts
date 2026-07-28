/**
 * Le contenu du produit, en un seul endroit. La page, les donnees structurees
 * JSON-LD et /llms-full.txt le lisent tous ici : trois copies du meme texte
 * finiraient par se contredire.
 */

export const features = [
	{
		title: 'La quittance en dix secondes',
		body:
			'Marquez un loyer payé, téléchargez la quittance PDF : période, loyer et charges ' +
			'détaillés, mentions de l’article 21 de la loi du 6 juillet 1989. Gratuite, ' +
			'comme la loi l’exige. Avis d’échéance et relevé annuel des encaissements inclus.'
	},
	{
		title: 'Le suivi des loyers, mois par mois',
		body:
			'Une grille par bail : payé, partiel, en retard, y compris les paiements ' +
			'partiels. Le premier impayé se voit tout de suite, pas trois mois plus tard.'
	},
	{
		title: 'La révision IRL sans calculette',
		body:
			'Les indices INSEE sont inclus. Quitalo calcule la révision plafonnée de votre ' +
			'bail, prépare la lettre de notification et met le loyer à jour.'
	},
	{
		title: 'Les impayés, sans panique',
		body:
			'Une échelle graduée prête à l’emploi : relance amiable, puis mise en demeure ' +
			'fondée sur l’article 1344-1 du code civil, avec les lettres PDF et la marche à suivre.'
	}
];

export const faq = [
	{
		q: 'La quittance de loyer est-elle obligatoire ?',
		a:
			'Oui, dès que le locataire la demande, et elle doit être gratuite (article 21 de la ' +
			'loi du 6 juillet 1989). Quitalo la génère en PDF, loyer et charges détaillés.'
	},
	{
		q: 'Comment réviser un loyer avec l’IRL ?',
		a:
			'Une fois par an, à la date prévue au bail, dans la limite de la variation de ' +
			'l’IRL du trimestre de référence. Quitalo fait le calcul avec les indices INSEE ' +
			'et prépare la lettre de notification.'
	},
	{
		q: 'Que faire au premier loyer impayé ?',
		a:
			'Réagir vite et par écrit : relance amiable d’abord, puis mise en demeure en ' +
			'recommandé avec accusé de réception. Quitalo fournit les lettres et le calendrier.'
	},
	{
		q: 'Où sont stockées mes données ?',
		a:
			'Dans votre navigateur, sur votre appareil. Vous exportez quand vous voulez une ' +
			'sauvegarde chiffrée que vous gardez où vous voulez. Rien n’est envoyé à Quitalo.'
	}
];
