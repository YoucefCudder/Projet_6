var url_best = "http://localhost:8000/api/v1/titles/?sort_by=-imdb_score";
var best_img = document.getElementById("best_img");
var best_title = document.getElementById("best_title");
var best_desc = document.getElementById("best_desc");

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



fetch_top(url_best);

