/*Arrete la partie*/

const bouttonReinitialiser = document.getElementsByClassName("but2")[0];
const statusPartie = document.getElementById("stat");
const bouttonReinitialiserStyle = document.getElementsByClassName('but1');

bouttonReinitialiser.addEventListener("click", () => {
for (let i = 0; i < bouttonReinitialiserStyle.length; i++) {
  bouttonReinitialiserStyle[i].style.display = 'inline';
}

statusPartie.innerHTML = "Status : Aucun";
statusPartie.style.color = "red";


});

