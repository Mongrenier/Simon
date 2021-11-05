//const bouttonInterrogation = document.querySelector(".interrogation");
const bouttonInterrogation = document.getElementsByClassName("interrogation")[0];
let modal = document.getElementById("myModal");
let pointInterrogation = document.getElementsByClassName("interrogation")[0];
let span = document.getElementsByClassName("fermer")[0];



span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }}

  pointInterrogation.addEventListener("click", function(){
    modal.style.display = "block";
  })