/**
 * Le contenu du produit, en un seul endroit. La page, les donnees structurees
 * JSON-LD et /llms-full.txt le lisent tous ici : trois copies du meme texte
 * finiraient par se contredire.
 */

export const features = [
	{
		title: 'Ce qui est à faire, et pour quand',
		body:
			"Vous ne cherchez pas comment écrire une quittance. Vous oubliez que l'attestation " +
			"d'assurance était due en mars, qu'un dépôt non rendu dans le mois grossit de 10 % " +
			'du loyer, et que le droit de réviser un loyer disparaît un an après. Ces dates ' +
			'sont déjà dans vos baux : Quitalo les lit, chiffre ce que coûte chaque oubli, et ' +
			'retire la ligne dès que le geste est posé.'
	},
	{
		title: 'La quittance en dix secondes',
		body:
			'Marquez un loyer payé, téléchargez la quittance PDF : période, loyer et charges ' +
			"détaillés, mentions de l'article 21 de la loi du 6 juillet 1989. Gratuite, " +
			"comme la loi l'exige. Avis d'échéance et relevé annuel des encaissements inclus."
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
			"Une échelle graduée prête à l'emploi : relance amiable, puis mise en demeure " +
			"fondée sur l'article 1344-1 du code civil, avec les lettres PDF et la marche à suivre."
	},
	{
		title: 'Les charges, régularisées une fois par an',
		body:
			'Vos dépenses par logement, avec la part récupérable sur le locataire. En fin ' +
			"d'année, Quitalo confronte les provisions encaissées aux charges réellement " +
			"engagées et produit le décompte que l'article 23 de la loi du 6 juillet 1989 " +
			'rend obligatoire. Un bail au forfait ne se régularise pas : Quitalo le dit ' +
			"plutôt que d'inventer un solde."
	},
	{
		title: 'Le dépôt de garantie et son délai',
		body:
			'Un mois après la remise des clés, deux si les états des lieux diffèrent, puis ' +
			'10 % du loyer par mois commencé (article 22). Quitalo donne la date limite, la ' +
			'majoration déjà due et la lettre de restitution - retenue et motif compris.'
	},
	{
		title: 'Le récapitulatif pour votre déclaration',
		body:
			'Ce que vous avez encaissé et ce que vous avez dépensé sur un logement, par ' +
			'nature de charge, année par année. De quoi remplir vos revenus fonciers sans ' +
			'remonter douze mois de relevés. Une aide à la déclaration, pas un document ' +
			'fiscal : ce qui est déductible dépend de votre situation.'
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
		q: "Comment réviser un loyer avec l'IRL ?",
		a:
			'Une fois par an, à la date prévue au bail, dans la limite de la variation de ' +
			"l'IRL du trimestre de référence. Quitalo fait le calcul avec les indices INSEE " +
			'et prépare la lettre de notification.'
	},
	{
		q: 'Que faire au premier loyer impayé ?',
		a:
			"Réagir vite et par écrit : relance amiable d'abord, puis mise en demeure en " +
			'recommandé avec accusé de réception. Quitalo fournit les lettres et le calendrier.'
	},
	{
		q: 'Quand faut-il régulariser les charges locatives ?',
		a:
			'Une fois par an, si le bail prévoit des provisions : vous comparez ce que le ' +
			'locataire a versé aux charges récupérables réellement engagées, et le décompte ' +
			'par nature de charge lui parvient un mois avant (article 23 de la loi du 6 ' +
			'juillet 1989). Les justificatifs restent consultables six mois. Un bail au ' +
			'forfait ne se régularise pas, ni à la hausse ni à la baisse (article 23-1). ' +
			'Quitalo fait le calcul et produit le décompte.'
	},
	{
		q: 'Dans quel délai rendre le dépôt de garantie ?',
		a:
			"Un mois à compter de la remise des clés si l'état des lieux de sortie est " +
			"conforme à celui d'entrée, deux mois sinon. Passé ce délai, la somme due augmente " +
			'de 10 % du loyer mensuel hors charges par mois de retard commencé, sans avoir à ' +
			'saisir un juge (article 22). Quitalo calcule la date limite, la majoration et ' +
			'édite la lettre de restitution.'
	},
	{
		q: 'Combien peut-on demander de dépôt de garantie ?',
		a:
			'Un mois de loyer hors charges pour une location vide, deux pour une location ' +
			'meublée (article 22). Le plafond se calcule sur le loyer seul : un bail à 800 € ' +
			'plus 100 € de charges permet de retenir 800 €, pas 900 €. Quitalo signale un ' +
			'dépôt au-delà du plafond.'
	},
	{
		q: 'Quand un bail se renouvelle-t-il, et quand donner congé ?',
		a:
			"Un bail d'habitation vide dure trois ans, un meublé un an, et il se renouvelle " +
			'tacitement : personne ne signe rien, le même bail repart. Le bailleur ne peut y ' +
			'mettre fin que par un congé motivé - reprise, vente, ou motif légitime et sérieux - ' +
			'six mois avant le terme pour un bail vide, trois mois pour un meublé (article 15-I). ' +
			'Attention : ce délai court à compter de la RÉCEPTION du congé, pas de son envoi. ' +
			"Poster le dernier jour, c'est avoir manqué le délai, et le bail repart pour un " +
			'terme entier. Quitalo calcule le terme en cours et cette date limite de réception.'
	},
	{
		q: 'Que doit contenir un congé pour reprise ou pour vente ?',
		a:
			'Le motif, à peine de nullité. Pour une reprise : les nom et adresse du bénéficiaire ' +
			'et la nature de son lien avec vous, le bénéficiaire ne pouvant être que vous, votre ' +
			'conjoint, partenaire de PACS, concubin notoire depuis un an, vos ascendants ou ' +
			'descendants, ou les leurs. Pour une vente : le prix, les conditions, et la ' +
			"reproduction mot pour mot des cinq premiers alinéas de l'article 15-II. Sur un bail " +
			"vide, le congé doit en outre être accompagné de la notice d'information de l'arrêté " +
			'du 13 décembre 2017. Et un locataire de plus de 65 ans aux ressources modestes ne ' +
			'peut recevoir congé sans offre de relogement (article 15-III). Quitalo énumère ces ' +
			'exigences mais ne rédige pas la lettre : un courrier à qui manque son annexe a ' +
			"l'air valable et ne l'est pas. Votre ADIL départementale est gratuite et c'est son " +
			'métier.'
	},
	{
		q: 'Mon locataire donne son préavis : quand part-il exactement ?',
		a:
			'Trois mois après la réception de sa lettre pour un bail vide, un mois pour un ' +
			'meublé. Le préavis tombe à un mois sur un bail vide si le logement est en zone ' +
			"tendue, ou pour une mutation, une perte d'emploi, un premier emploi, le RSA ou " +
			"l'AAH, une raison de santé attestée, ou des violences au sein du couple. Là encore " +
			"c'est la réception qui compte. Quitalo calcule la date de départ et la porte sur le " +
			'bail, ce qui démarre le compte à rebours du dépôt de garantie.'
	},
	{
		q: "Le locataire doit-il fournir une attestation d'assurance chaque année ?",
		a:
			"Oui : il doit justifier d'une assurance couvrant les risques locatifs à la remise " +
			'des clés, puis chaque année à la demande du bailleur (article 7 g de la loi du 6 ' +
			'juillet 1989). Notez la date de la dernière attestation reçue dans Quitalo, et le ' +
			"rappel arrive à l'échéance."
	},
	{
		q: 'Où sont stockées mes données ?',
		a:
			'Dans votre navigateur, sur votre appareil. Vous exportez quand vous voulez une ' +
			"sauvegarde chiffrée que vous gardez où vous voulez. Rien n'est envoyé à Quitalo."
	}
];
