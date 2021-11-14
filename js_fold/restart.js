/*Arrete la partie*/

import { GAME, remiseAZero } from "./couleur";

const bouttonReinitialiser = document.getElementsByClassName("but2")[0];
const statusPartie = document.getElementById("stat");


bouttonReinitialiser.addEventListener("click", () => {

remiseAZero();
GAME();

statusPartie.innerHTML = "Status : Aucun";
statusPartie.style.color = "red";


});

