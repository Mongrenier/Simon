/*Permet l'utilisation du son*/
import * as Tone from 'tone';

/*Permet de faire jouer les sons de synthe*/
const synth = new Tone.PolySynth(Tone.Synth).toDestination();
const now = Tone.now();

/*Permet de récupérer les élements couleur pour mettre des event*/
const couleurRouge = document.getElementById('couleur1');
const couleurJaune = document.getElementById('couleur2');
const couleurVert = document.getElementById('couleur3');
const couleurBleu = document.getElementById('couleur4');

/*Variables*/
let tableauToucheJoueur = [1,2];
let tableauOrdinateur = [];
let nombreAleatoire = 0;

/*Pour le score*/
let nombreToucheTotale = 0;
let nombreTourTotale = 0;

export function jeux() {
	//L'odinateur commence (il remplit sa liste)
	ordinateurJoue();
}

//Tour de l'odinateur
async function ordinateurJoue() {
	//Pendant le tour de l'odinateur il va remplir une liste
	await remplissageList();
  sonDuTableau(tableauOrdinateur);
}

//Remplis les listes de l'ordinateur
function remplissageList() {

	//Création du nombre aléatoire qui correspond à une couleur
	nombreAleatoire = Math.floor(Math.random() * (4 - 1 + 1) + 1);

	//On remplis le tableau de l'ordinateur (tableauOrdinateur)
	tableauOrdinateur.push(nombreAleatoire);
  
  //On met un zero en plus pour effacer toute les couleurs par la suite
  tableauOrdinateur.push(0);
  }



async function sonDuTableau(tableauRecu) {
	await tableauRecu.forEach((elementDuTableau, index) => {
		setTimeout(function () {
      remetCouleursAZero();

			if (elementDuTableau === 1) {
				synth.triggerAttackRelease('B4', '8n');
        couleurRouge.style.backgroundColor = 'rgb(199, 0, 0)';
			}

			if (elementDuTableau === 2) {
				synth.triggerAttackRelease('C6', '8n');
        couleurJaune.style.backgroundColor = 'rgb(214, 211, 0)';
			}

			if (elementDuTableau === 3) {
				synth.triggerAttackRelease('C7', '8n');
        couleurVert.style.backgroundColor = 'rgb(0, 99, 0)';
			}

			if (elementDuTableau === 4) {
				synth.triggerAttackRelease('C8', '8n');
        couleurBleu.style.backgroundColor = 'rgb(4, 1, 175)';
			}
		}, index * 500);
	});

  /*Enleve les couleurs*/
  function remetCouleursAZero(){
    couleurRouge.style.backgroundColor = 'red';
    couleurJaune.style.backgroundColor = 'yellow';
    couleurVert.style.backgroundColor = 'green';
    couleurBleu.style.backgroundColor = 'blue';
  }
}