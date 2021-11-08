import "./couleur";
import { GAME, ordinateurPlay } from "./couleur";
/*Lance la partie*/


const statusPartie = document.getElementById("stat");
const bouttonComfirmer = document.getElementsByClassName("but1")[0];


bouttonComfirmer.addEventListener("click", () =>{

  const bouttonComfirmerStyle = document.getElementsByClassName('but1');
  /*Permet de changer le style du boutton (pour le faire disparaitre au commencement de la partie)*/
  for (let i = 0; i < bouttonComfirmerStyle.length; i++) {
    bouttonComfirmerStyle[i].style.display = 'none';
  }
  
  statusPartie.innerHTML = "Status : En cours";
  statusPartie.style.color = "green";

  /*----------------------------*/
  GAME();
  /*----------------------------*/

  });
  
  

