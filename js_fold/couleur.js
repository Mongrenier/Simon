/*Permet l'utilisation du son*/
import * as Tone from 'tone';
import { finDePartie } from './modale';

/*Permet de récupérer les élements couleur pour mettre des event*/
const couleur1 = document.getElementsByClassName('couleur1')[0];
const couleur2 = document.getElementsByClassName('couleur2')[0];
const couleur3 = document.getElementsByClassName('couleur3')[0];
const couleur4 = document.getElementsByClassName('couleur4')[0];

/*Permet de changer les scores*/
let toucheMax = document.getElementById('touche');
let tourMax = document.getElementById('tour');
/*Permet de changer le style des couleurs (pour plus tard)*/
const col1Style = document.getElementsByClassName('couleur1');
const col2Style = document.getElementsByClassName('couleur2');
const col3Style = document.getElementsByClassName('couleur3');
const col4Style = document.getElementsByClassName('couleur4');

/*Permet d'afficher si c'est l'ordinateur ou le joueur qui doit jouer*/
const statusPartie = document.getElementById("stat");

/*Permet de faire jouer les sons de synthe*/
const synth = new Tone.PolySynth(Tone.Synth).toDestination();
const now = Tone.now();

let tableauToucheJoueur = [];
let listeS = [];
let nombreAleatoire = 0;
let debutPartie = false;
let nombreToucheTotale = 0;
let nombreTourTotale = 0;
let difficulte = 700;
let tourdifficulte  = 0;

export async function GAME() {
	/*creationListe(listeS);*/
	ordinateurPlay();
}
/*Odinateur*/
function ordinateurPlay() {
	creationListe(listeS);
}

function creationListe() {
	
		/*enleve le 0 du tableau*/
		if (listeS.length >= 2) {
			listeS.pop();
			nombreAleatoire = Math.floor(Math.random() * (4 - 1 + 1) + 1);
			listeS.push(nombreAleatoire);
			listeS.push(0);
			jeuxSound(listeS);
	
		}

	if (listeS.length < 1) {
		nombreAleatoire = Math.floor(Math.random() * (4 - 1 + 1) + 1);
		listeS.push(nombreAleatoire);
		listeS.push(0);
		jeuxSound(listeS);

	}

}

/*Le joueur appuie sur le boutton Rouge*/
couleur1.addEventListener('click', () => {
	if (tableauToucheJoueur.length < 1) {
		nombreToucheTotale += 1;
		synth.triggerAttackRelease('B4', '8n');
		for (let i = 0; i < col1Style.length; i++) {
			col1Style[i].style.backgroundColor = 'rgb(199, 0, 0)';
		}
		setTimeout(function () {
			finCouleurs();
			tableauToucheJoueur.push(1);
			tableauToucheJoueur.push(0);
			comparaison();
			return;
		}, 500);
	}
	if (tableauToucheJoueur.length >= 1) {
		nombreToucheTotale += 1;
		synth.triggerAttackRelease('B4', '8n');
		for (let i = 0; i < col1Style.length; i++) {
			col1Style[i].style.backgroundColor = 'rgb(199, 0, 0)';
		}
		setTimeout(function () {
			finCouleurs();
			tableauToucheJoueur.pop();
			tableauToucheJoueur.push(1);
			tableauToucheJoueur.push(0);
			comparaison();
			return;
		}, 500);
	}
});

/*Le joueur appuie sur le boutton jaune*/
couleur2.addEventListener('click', () => {
	if (tableauToucheJoueur.length < 1) {
		nombreToucheTotale += 1;
		synth.triggerAttackRelease('C6', '8n');
		for (let i = 0; i < col2Style.length; i++) {
			col2Style[i].style.backgroundColor = 'rgb(214, 211, 0)';
		}
		setTimeout(function () {
			finCouleurs();
			tableauToucheJoueur.push(2);
			tableauToucheJoueur.push(0);
			comparaison();
			return;
		}, 500);
	}
	if (tableauToucheJoueur.length >= 1) {
		nombreToucheTotale += 1;
		synth.triggerAttackRelease('C6', '8n');
		for (let i = 0; i < col2Style.length; i++) {
			col2Style[i].style.backgroundColor = 'rgb(214, 211, 0)';
		}
		setTimeout(function () {
			finCouleurs();
			tableauToucheJoueur.pop();
			tableauToucheJoueur.push(2);
			tableauToucheJoueur.push(0);
			comparaison();
			return;
		}, 500);
	}
});

/*Le joueur appuie sur le boutton vert*/
couleur3.addEventListener('click', () => {
	if (tableauToucheJoueur.length < 1) {
		nombreToucheTotale += 1;
		synth.triggerAttackRelease('C7', '8n');
		for (let i = 0; i < col3Style.length; i++) {
			col3Style[i].style.backgroundColor = 'rgb(0, 99, 0)';
		}
		setTimeout(function () {
			finCouleurs();
			tableauToucheJoueur.push(3);
			tableauToucheJoueur.push(0);
			comparaison();
			return;
		}, 500);
	}
	if (tableauToucheJoueur.length >= 1) {
		nombreToucheTotale += 1;
		synth.triggerAttackRelease('C7', '8n');
		for (let i = 0; i < col3Style.length; i++) {
			col3Style[i].style.backgroundColor = 'rgb(0, 99, 0)';
		}
		setTimeout(function () {
			finCouleurs();
			tableauToucheJoueur.pop();
			tableauToucheJoueur.push(3);
			tableauToucheJoueur.push(0);
			comparaison();
			return;
		}, 500);
	}
});

/*Le joueur appuie sur le boutton bleu*/
couleur4.addEventListener('click', () => {
	if (tableauToucheJoueur.length < 1) {
		nombreToucheTotale += 1;
		synth.triggerAttackRelease('C8', '8n');
		for (let i = 0; i < col4Style.length; i++) {
			col4Style[i].style.backgroundColor = 'rgb(4, 1, 175)';
		}
		setTimeout(function () {
			finCouleurs();
			tableauToucheJoueur.push(4);
			tableauToucheJoueur.push(0);
			comparaison();
			return;
		}, 500);
	}
	if (tableauToucheJoueur.length >= 1) {
		nombreToucheTotale += 1;
		synth.triggerAttackRelease('C8', '8n');
		for (let i = 0; i < col4Style.length; i++) {
			col4Style[i].style.backgroundColor = 'rgb(4, 1, 175)';
		}
		setTimeout(function () {
			finCouleurs();
			tableauToucheJoueur.pop();
			tableauToucheJoueur.push(4);
			tableauToucheJoueur.push(0);
			comparaison();
			return;
		}, 500);
	}
});

/*Fait apparaitre les couleurs de la liste au joueur*/
function jeuxSound(liste) {
	liste.forEach((element, index) => {
		setTimeout(function () {
			finCouleurs();
			sonEtCouleur(element);
		}, index * difficulte);
	});
	if(tourdifficulte != 8){
		difficulte -= 50;
		tourdifficulte++;
	}
}

/*Joue les sons et les couleurs*/
function sonEtCouleur(elementForeach) {
	if (elementForeach === 1) {
		synth.triggerAttackRelease('B4', '8n');
		for (let i = 0; i < col1Style.length; i++) {
			col1Style[i].style.backgroundColor = 'rgb(199, 0, 0)';
		}
	}
	if (elementForeach === 2) {
		synth.triggerAttackRelease('C6', '8n');
		for (let i = 0; i < col2Style.length; i++) {
			col2Style[i].style.backgroundColor = 'rgb(214, 211, 0)';
		}
	}
	if (elementForeach === 3) {
		synth.triggerAttackRelease('C7', '8n');
		for (let i = 0; i < col3Style.length; i++) {
			col3Style[i].style.backgroundColor = 'rgb(0, 99, 0)';
		}
	}
	if (elementForeach === 4) {
		synth.triggerAttackRelease('C8', '8n');
		for (let i = 0; i < col4Style.length; i++) {
			col4Style[i].style.backgroundColor = 'rgb(4, 1, 175)';
		}
	}
}



async function comparaison() {
	let i = 0;
	if (tableauToucheJoueur.length === listeS.length) {
		tableauToucheJoueur.forEach(leTableau => {
			//Défaite
			if (tableauToucheJoueur[i] != listeS[i]) {

				finDePartie(nombreToucheTotale, nombreTourTotale);
				remiseAZero();
				return;

			}
			i++;
		});
		//Victoire
		if (i === listeS.length) {
			tableauToucheJoueur = [];
			nombreTourTotale += 1;
			setTimeout(() => {
				ordinateurPlay();
			}, 1000);
		}
	}
}

/*Remet les couleurs par défaut*/
function finCouleurs() {
	for (let i = 0; i < col1Style.length; i++) {
		col1Style[i].style.backgroundColor = 'red';
	}
	for (let i = 0; i < col2Style.length; i++) {
		col2Style[i].style.backgroundColor = 'yellow';
	}
	for (let i = 0; i < col3Style.length; i++) {
		col3Style[i].style.backgroundColor = 'green';
	}
	for (let i = 0; i < col4Style.length; i++) {
		col4Style[i].style.backgroundColor = 'blue';
	}
}
/*-----------------------------------------*/

export function remiseAZero(){
	tableauToucheJoueur = [];
	listeS = [];
	nombreAleatoire = 0;
	debutPartie = false;
	nombreToucheTotale = 0;
	nombreTourTotale = 0;
	difficulte = 700;
	tourdifficulte  = 0;

}