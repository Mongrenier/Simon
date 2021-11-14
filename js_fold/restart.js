/*Arrete la partie*/

import { GAME, remiseAZero } from "./couleur";

const bouttonReinitialiser = document.getElementsByClassName("boutonRecommencer")[0];
const statusPartie = document.getElementById("stat");


bouttonReinitialiser.addEventListener("click", () => {
	const bouttonComfirmerStyle = document.getElementsByClassName('boutonCommencer');

	for (let i = 0; i < bouttonComfirmerStyle.length; i++) {
		bouttonComfirmerStyle[i].style.display = 'none';
	}

remiseAZero();
GAME();

statusPartie.innerHTML = "Status : Aucun";
statusPartie.style.color = "red";


});

