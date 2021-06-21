var url_best = "http://localhost:8000/api/v1/titles/?sort_by=-imdb_score";
var best_img = document.getElementById("best_img");
var best_title = document.getElementById("best_title");
var best_desc = document.getElementById("best_desc");
var liste_best = [
  document.getElementById("best1"), document.getElementById("best2"),
  document.getElementById("best3"), document.getElementById("best4"),
  document.getElementById("best5"), document.getElementById("best6"),
  document.getElementById("best7")
];

function fetch_top(url_best) {
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
  } else {console.log("bad network response")};
  })
  .catch(function(error) {console.log("probleme reponse fetch" + error.message)});
}

fetch_top(url_best);
fetch_cat(url_best, liste_best)


