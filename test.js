var best_img = document.getElementById("best_img");
var best_title = document.getElementById("best_title");
var best_desc = document.getElementById("best_desc");

function fetch_best(url_best) {
  fetch(url_best).then(resp => {
    if(resp.ok){
      resp.json().then(data => {
        fetch(data.results[0].url)
        .then((resp) => resp.json())
        .then(data => {
          best_img.src = data.image_url;
          best_title.innerHTML = data.title;
          best_desc.innerHTML = data.description
        })
        .catch(error => {console.log("probleme reponse fetch" + error.message)});
      })
    } else {console.log("probleme reponse url")};
  })
  .catch(error => {console.log("probleme fetch" + error.message)});
}

const url_best = "http://localhost:8000/api/v1/titles/?sort_by=-imdb_score";
var liste_best = [
  document.getElementById("best1"), document.getElementById("best2"),
  document.getElementById("best3"), document.getElementById("best4"),
  document.getElementById("best5"), document.getElementById("best6"),
  document.getElementById("best7")
];


const url_com = "http://localhost:8000/api/v1/titles/?genre=Comedy&sort_by=-imdb_score"
var liste_cat1 = [
  document.getElementById("com1"), document.getElementById("com2"),
  document.getElementById("com3"), document.getElementById("com4"),
  document.getElementById("com5"), document.getElementById("com6"),
  document.getElementById("com7")
];

const url_hor = "http://localhost:8000/api/v1/titles/?genre=Horror&sort_by=-imdb_score";
var liste_cat2 = [
  document.getElementById("horror1"), document.getElementById("horror2"),
  document.getElementById("horror3"), document.getElementById("horror4"),
  document.getElementById("horror5"), document.getElementById("horror6"),
  document.getElementById("horror7")
];

const url_act = "http://localhost:8000/api/v1/titles/?genre=Action&sort_by=-imdb_score";
var liste_cat3 = [
  document.getElementById("action1"), document.getElementById("action2"),
  document.getElementById("action3"), document.getElementById("action4"),
  document.getElementById("action5"), document.getElementById("action6"),
  document.getElementById("action7")
];

function fetch_cat(url, liste_best) {
  fetch(url).then(resp => {
    if(resp.ok){
      resp.json().then(data => {
      for (let nb = 0; nb < 5; nb++) {
        liste_best[nb].src = data.results[nb].image_url;
        liste_best[nb].innerHTML = data.results[nb].url}
      fetch(data.next).then(resp => {
        if(resp.ok){
          resp.json().then(data => {
          for (let nb = 0; nb < 2; nb++) {
            liste_best[nb+5].src = data.results[nb].image_url;
            liste_best[nb+5].innerHTML = data.results[nb].url}
          // then
         // liste catégorie liste_comédie[nb+5].src = data.results[nb].image_url;
         //etc ????????
          })
        } else {console.log("probleme reponse url")};
      })
      .catch(function(error) {console.log("probleme reponse fetch" + error.message)});
    })
  } else {console.log("probleme reponse url")};
  })
  .catch(function(error) {console.log("probleme reponse fetch" + error.message)});
}

fetch_best(url_best);
fetch_cat(url_best, liste_best);
fetch_cat(url_com, liste_cat1);
fetch_cat(url_hor, liste_cat2);
fetch_cat(url_act, liste_cat3);

function print_info(url_best) {
  modal.style.display = "block";
  fetch(url.innerHTML).then(resp => {
    if(resp.ok){
      resp.json().then(data => {
        id_image_url.src = data.image_url;
        id_title.innerHTML = data.original_title;
        id_genres.innerHTML = "<b>Genre(s) : </b>" + data.genres;
        id_date_published.innerHTML = "<b>Date de sortie : </b>" + data.date_published;
        id_rated.innerHTML = "<b>Restriction : </b>" + data.rated;
        if (id_rated.innerHTML == "<b>Restriction : </b>Not rated or unkown rating");
          {id_rated.innerHTML = "<b>Tous public</b>"};
        id_imdb_score.innerHTML = "<b>Score IMDB : </b>" + data.imdb_score;
        id_directors.innerHTML = "<b>Réalisateur(s) : </b>" + data.directors;
        id_actors.innerHTML = "<br><b>Acteur(s) : </b>" + data.actors;
        id_duration.innerHTML = "<b>Durée : </b>" + data.duration + " min";
        id_countries.innerHTML = "<b>Pays d'origine : </b>" + data.countries;
        id_worldwide_gross_income.innerHTML = "<b>Résultat au Box Office : </b>" + data.worldwide_gross_income + " $";
        if (id_worldwide_gross_income.innerHTML == "<b>Résultat au Box Office : </b>null $");
          {id_worldwide_gross_income.innerHTML = "<b>Résultat au Box Office : </b>inconnu"};
        id_description.innerHTML = "<b>Résumé du film : </b>" + data.long_description;
      })
    } else {console.log("bad network response")};
  })
  .catch(function(error) {console.log("fetch operation problem" + error.message)});
}

const gap = 7;

const container = document.getElementById("container"),
content = document.getElementById("content"),
next = document.getElementById("next"),
prev = document.getElementById("prev");

next.addEventListener("click", e => {
  container.scrollBy(width + gap, 0);
  if (container.scrollWidth !== 0) {
    prev.style.display = "flex";
  }
  if (content.scrollWidth - width - gap <= container.scrollLeft + width) {
    next.style.display = "none";
  }
});
prev.addEventListener("click", e => {
  container.scrollBy(-(width + gap), 0);
  if (container.scrollLeft - width - gap <= 0) {
    prev.style.display = "none";
  }
  if (!content.scrollWidth - width - gap <= container.scrollLeft + width) {
    next.style.display = "flex";
  }
});

let width = container.offsetWidth;
window.addEventListener("resize", e => (width = container.offsetWidth));
