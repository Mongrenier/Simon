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

let listeS = [1, 3, 4, 3, 2, 0];
let i = 5;
/*--------------------créer liste aléatoire--------------------------*/
getRandomArbitrary(1,4.9)
function getRandomArbitrary(min, max) {
  let tes =  Math.random() * (max - min) + min;
  alert(tes);
}
/*----------------------------------------------*/


/*Fait apparaitre les couleurs de la liste au joueur*/
jeuxSound(listeS);
function jeuxSound(liste) {
	liste.forEach((element, i) => {
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
		}, i * 500);
	});

}
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
/*----------------------------------------------------------------------*/

/*const synth = new Tone.PolySynth(Tone.Synth).toDestination();
const now = Tone.now()
synth.triggerAttack("D4", now);
synth.triggerAttack("F4", now + 0.5);
synth.triggerAttack("A4", now + 1);
synth.triggerAttack("C5", now + 1.5);
synth.triggerAttack("E5", now + 2);
synth.triggerRelease(["D4", "F4", "A4", "C5", "E5"], now + 4);

document.querySelector('button')?.addEventListener('click', async () => {
	await Tone.start()
	console.log('audio is ready')
})*/
