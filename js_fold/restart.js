/*Arrete la partie*/

const bouttonReinitialiser = document.getElementsByClassName("but2")[0];
const statusPartie = document.getElementById("stat");

bouttonReinitialiser.addEventListener("click", () => {
const bouttonReinitialiserStyle = document.getElementsByClassName('but1');
for (let i = 0; i < bouttonReinitialiserStyle.length; i++) {
  bouttonReinitialiserStyle[i].style.display = 'inline';
}

statusPartie.innerHTML = "Status : Aucun";
statusPartie.style.color = "red";

});


