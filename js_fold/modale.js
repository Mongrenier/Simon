import { GAME } from './couleur';

/* MODALE */
let modal = document.getElementById('myModal');
let pointInterrogation = document.getElementsByClassName('interrogation')[0];
let fermeture = document.getElementsByClassName('fermer')[0];

let modaleGameOver = document.getElementById('modaleGameOver');
let toucheTexte = document.getElementById('touche');
let tourTexte = document.getElementById('tour');
let boutonRecommencer = document.getElementById('bouttonRecommencer');

fermeture.addEventListener('click', () => {
	modal.style.display = 'none';
});

window.onclick = function (event) {
	if (event.target == modal) {
		modal.style.display = 'none';
	}
};
pointInterrogation.addEventListener('click', function () {
	modal.style.display = 'block';
});

export function finDePartie(nomtouche, nomtour) {
	modaleGameOver.style.display = 'block';
	toucheTexte.innerHTML = 'Nombre de touche : ' + nomtouche;
	tourTexte.innerHTML = 'Nombre de tour : ' + nomtour;

	boutonRecommencer.addEventListener('click', () => {
		modaleGameOver.style.display = 'none';
		GAME();
	});
}
