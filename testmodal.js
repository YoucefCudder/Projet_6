/* --- MODAL --- */
document.getElementById("open-popup-btn").addEventListener("click",function(){
    document.getElementsByClassName("popup")[0].classList.add("active");
});
   
document.getElementById("dismiss-popup-btn").addEventListener("click",function(){
    document.getElementsByClassName("popup")[0].classList.remove("active");
});


const btn_best = [document.getElementById("btn_best1"), document.getElementById("btn_best2"), 
                document.getElementById("btn_best3"),document.getElementById("btn_best4"), 
                document.getElementById("btn_best5"), document.getElementById("btn_best6"),
                document.getElementById("btn_best7")
];

var id_image_url  = document.getElementById("id_image_url");
var id_title  = document.getElementById("id_title");
var id_genres  = document.getElementById("id_genres");
var id_date_published  = document.getElementById("id_date_published");
var id_rated  = document.getElementById("id_rated");
var id_imdbscore  = document.getElementById("id_imdbscore");



function print_modal_info(url_best) {
    modal.style.display = "block";
    fetch(url_best.innerHTML).then(resp => {
      if(resp.ok){
        resp.json().then(data => {
          id_image_url.src = data.image_url;
          id_title.innerHTML = data.original_title;
          id_genres.innerHTML = data.genres;
          id_date_published.innerHTML = data.date_published;
          id_rated.innerHTML = data.rated;
          id_imdbscore.innerHTML = data.imdb_score;
        })
    } else {console.log("probleme de reponse")};
  })
  .catch(function(error) {console.log("probleme lors de l'operation fetch" + error.message)});
}




