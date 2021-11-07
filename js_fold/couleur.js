/*Permet l'utilisation du son*/
import * as Tone from 'tone';

/*Permet de récupérer les élements couleur pour mettre des event*/
const col1 = document.getElementsByClassName('couleur1')[0];
const col2 = document.getElementsByClassName('couleur2')[0];
const col3 = document.getElementsByClassName('couleur3')[0];
const col4 = document.getElementsByClassName('couleur4')[0];

/*Permet de changer le style des couleurs (pour plus tard)*/
const col1Style = document.getElementsByClassName('couleur1');
const col2Style = document.getElementsByClassName('couleur2');
const col3Style = document.getElementsByClassName('couleur3');
const col4Style = document.getElementsByClassName('couleur4');

/*Permet de faire jouer les sons de synthe*/
const synth = new Tone.PolySynth(Tone.Synth).toDestination();
const now = Tone.now();

let listeS = [];
let speed = 5;
let randomNum = 0;



export async function GAME(){
creationListe(listeS);
function creationListe (listeAjout){
	let intvalue = 0;
	if (listeAjout.length < 1)
	{
		randomNum = getRandomArbitrary(1,4.9)
		intvalue = Math.floor( randomNum );
		listeAjout.push(intvalue);
		listeAjout.push(0);
		jeuxSound(listeAjout);
		return true;
	}
	/*enleve le 0 du tableau*/
	listeAjout.pop();
	randomNum = getRandomArbitrary(1,4.9)
	intvalue = Math.floor( randomNum );
	listeAjout.push(intvalue);
	listeAjout.push(0);
	jeuxSound(listeAjout);
	

}




/*Fait apparaitre les couleurs de la liste au joueur*/
async function jeuxSound(liste) {
	liste.forEach((element, speed) => {
		setTimeout(function () {
			finCouleurs();
			if (element === 1) {
				synth.triggerAttackRelease('B4', '8n');
				for (let i = 0; i < col1Style.length; i++) {
					col1Style[i].style.backgroundColor = 'rgb(199, 0, 0)';
				}
			}
			if (element === 2) {
				synth.triggerAttackRelease('C6', '8n');
				for (let i = 0; i < col1Style.length; i++) {
					col2Style[i].style.backgroundColor = 'rgb(190, 124, 0)';
				}
			}
			if (element === 3) {
				synth.triggerAttackRelease('C7', '8n');
				for (let i = 0; i < col1Style.length; i++) {
					col3Style[i].style.backgroundColor = 'rgb(0, 80, 0)';
				}
			}
			if (element === 4) {
				synth.triggerAttackRelease('C8', '8n');
				for (let i = 0; i < col1Style.length; i++) {
					col4Style[i].style.backgroundColor = 'rgb(94, 0, 94)';
				}
			}
		}, speed * 500);
	});
}




/*Nombre aléatoire*/
function getRandomArbitrary(min, max) {
  let tes =  Math.random() * (max - min) + min;
	return tes;
}
/*-----------------*/

/*Remet les couleurs par défaut*/
function finCouleurs() {
	for (let i = 0; i < col1Style.length; i++) {
		col1Style[i].style.backgroundColor = 'red';
	}
	for (let i = 0; i < col1Style.length; i++) {
		col2Style[i].style.backgroundColor = 'orange';
	}
	for (let i = 0; i < col1Style.length; i++) {
		col3Style[i].style.backgroundColor = 'green';
	}
	for (let i = 0; i < col1Style.length; i++) {
		col4Style[i].style.backgroundColor = 'purple';
	}
}
/*-----------------------------------------*/
}