/* ---- déclaration des elements du DOM ---- */

var modal = document.querySelector(".modal");
var closebtn = document.querySelector(".close-btn");



var id_image_url  = document.getElementById("id_image_url");
var id_title  = document.getElementById("id_title");
var id_genres  = document.getElementById("id_genres");
var id_date_published = document.getElementById("id_date_published");
var id_rated = document.getElementById("id_rated");
var id_imdb_score = document.getElementById("id_imdbscore");
var id_directors  = document.getElementById("id_directors");
var id_actors  = document.getElementById("id_actors");
var id_duration  = document.getElementById("id_duration");
var id_countries  = document.getElementById("id_countries");
var id_worldwide_gross_income  = document.getElementById("id_worldwide_gross_income");
var id_description  = document.getElementById("id_description");

var best_modal = document.getElementById("best_modal");


var btn_best = [document.getElementById("btn_best1"), document.getElementById("btn_best2"), 
                document.getElementById("btn_best3"),document.getElementById("btn_best4"), 
                document.getElementById("btn_best5"), document.getElementById("btn_best6"),
                document.getElementById("btn_best7")
];

const elements = document.getElementsByClassName("carousel__item");

// Modale + data attributes

best_modal.onclick = function(event) {print_modal_info("http://localhost:8000/api/v1/titles/" + target.dataset.idmovie)};



for (const element of elements) {
  element.onclick = function(event) {
    print_modal_info("http://localhost:8000/api/v1/titles/" + event.target.dataset.idmovie)

  }
}
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

// fonction pour récupérer les informations des films dans la fenêtre modale
function print_modal_info(url_best) {
  modal.style.display = "block";
  console.log(url_best)
  fetch(url_best).then(resp => {
    if(resp.ok){
      resp.json().then(data => {
        id_image_url.src = data.image_url;
        id_title.innerHTML = "Titre : " + data.original_title;
        id_genres.innerHTML = "Genre : " + data.genres;
        id_date_published.innerHTML = "Date : " +  data.date_published;
        id_rated.innerHTML = "Classification : " + data.rated;
        if (id_rated.innerHTML == "Not rated or unkown rating");
          {id_rated.innerHTML = "Tous public"};
        id_imdb_score.innerHTML =  "IMDB Score : " + data.imdb_score;
        id_directors.innerHTML = "Réalisateur-s/Réalisatrice-s : " + data.directors;
        id_actors.innerHTML = "Acteur-s/Actrice-s : " + data.actors;
        id_duration.innerHTML = "Durée : " + data.duration + " min";
        id_countries.innerHTML = "Pays d'origine : " + data.countries;
        id_worldwide_gross_income.innerHTML = "Résultat au Box Office : " + data.worldwide_gross_income + " $";
        if (id_worldwide_gross_income.innerHTML == "Résultat au Box Office : null $");
          {id_worldwide_gross_income.innerHTML = "Résultat au Box Office : inconnu"};
        id_description.innerHTML = "Synopsis : " + data.long_description;
      })
    } else {console.log("probleme de reponse")};
  })
  .catch(function(error) {console.log("probleme lors de l'operation fetch" + error.message)});
}

