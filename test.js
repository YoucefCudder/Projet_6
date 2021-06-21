var url_best = "http://localhost:8000/api/v1/titles/?sort_by=-imdb_score";
var best_img = document.getElementById("best_img");
var best_title = document.getElementById("best_title");
var best_desc = document.getElementById("best_desc");
var liste_best = [
  document.getElementById("btn_best1"), document.getElementById("btn_best2"),
  document.getElementById("btn_best3"), document.getElementById("btn_best4"),
  document.getElementById("btn_best5"), document.getElementById("btn_best6"),
  document.getElementById("btn_best7")
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

function fetch_cat(url, l_best) {
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
            list_best[nb+5].innerHTML = data.results[nb].url}
        })
        } else {console.log("bad network response")};
      })
      .catch(function(error) {console.log("fetch operation problem" + error.message)});
    })
  } else {console.log("bad network response")};
  })
  .catch(function(error) {console.log("fetch operation problem" + error.message)});
}

fetch_top(url_best);
fetch_cat(url_best, liste_best)


