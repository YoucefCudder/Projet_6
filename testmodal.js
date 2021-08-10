/* ---- déclaration des elements du DOM ---- */

var modal = document.querySelector(".modal");
var closebtn = document.querySelector(".close-btn");
var element = document.getElementsByClassName(".carousel__item");
for(var i = 0; i < element.length; i = i + 1) {
  modal.style.display="block";
}
  


var id_image_url  = document.getElementById("id_image_url");
var id_title  = document.getElementById("id_title");
var id_genres  = document.getElementById("id_genres");
var best_modal = document.getElementById("best_modal");

var btn_best = [document.getElementById("btn_best1"), document.getElementById("btn_best2"), 
                document.getElementById("btn_best3"),document.getElementById("btn_best4"), 
                document.getElementById("btn_best5"), document.getElementById("btn_best6"),
                document.getElementById("btn_best7")
];


best_modal.onclick = function() {print_modal_info(best1)};
for (let nb in btn_best) {
  btn_best[nb].onclick = function() {
    if (liste_best[nb]) {
      print_modal_info(liste_best[nb])

}}}

// fonction pour fermer la fenêtre avec le  boutton
closebtn.onclick = function() {
  modal.style.display = "none";
}

// fonction pour fermer la fenêtre en cliquanr n'importe ou sur la fenêtre
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


function print_modal_info(url_best) {
  modal.style.display = "block";
  fetch(url_best).then(resp => {
    if(resp.ok){
      resp.json().then(data => {
        id_image_url.src = data.image_url;
        id_title.innerHTML = data.original_title;
        id_genres.innerHTML = data.genres;
      })
    } else {console.log("probleme de reponse")};
  })
  .catch(function(error) {console.log("probleme lors de l'operation fetch" + error.message)});
}

print_modal_info(url_best);