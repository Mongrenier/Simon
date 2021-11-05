/* MODALE */
let modal = document.getElementById("myModal");
let pointInterrogation = document.getElementsByClassName("interrogation")[0];
let fermeture = document.getElementsByClassName("fermer")[0];


fermeture.addEventListener("click", () => {
  modal.style.display = "none";
})

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }}
  pointInterrogation.addEventListener("click", function(){
    modal.style.display = "block";
  })