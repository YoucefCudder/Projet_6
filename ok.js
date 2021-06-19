var url_best = "http://localhost:8000/api/v1/titles/?sort_by=-imdb_score";

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
        .catch(error => {console.log("probleme de la reponse fetch" + error.message)});
      })
    } else {console.log("probleme reponse url")};
  })
  .catch(error => {console.log("probleme fetch" + error.message)});
}
var best_img = document.getElementById("best_img");
var best_title = document.getElementById("best_title");
var best_desc = document.getElementById("best_desc");

var url_comedy = "http://localhost:8000/api/v1/titles/?genre=Comedy&sort_by=-imdb_score";
var url_horror = "http://localhost:8000/api/v1/titles/?genre=Horror&sort_by=-imdb_score";
var url_action = "http://localhost:8000/api/v1/titles/?genre=Action&sort_by=-imdb_score";


const sliders = document.querySelector(".carouselbox");
var scrollPerClick;
var ImagePadding = 7;

// Scroll Functionality
var scrollAmount = 0;

function sliderScrollLeft() {
  sliders.scrollTo({
    top: 0,
    left: (scrollAmount -= scrollPerClick),
    behavior: "smooth",
  });

  if (scrollAmount < 0) {
    scrollAmount = 0;
  }

  console.log("Scroll Amount: ", scrollAmount);
}

function sliderScrollRight() {
  if (scrollAmount <= sliders.scrollWidth - sliders.clientWidth) {
    sliders.scrollTo({
      top: 0,
      left: (scrollAmount += scrollPerClick),
      behavior: "smooth",
    });
  }
  console.log("Scroll Amount: ", scrollAmount);
}
scrollPerClick = document.querySelector(".img-1").clientWidth + 20;


fetch_top(url_best);





//
 var url_comedy = "http://localhost:8000/api/v1/titles/?genre=Comedy&sort_by=-imdb_score";
var url_horror = "http://localhost:8000/api/v1/titles/?genre=Horror&sort_by=-imdb_score";
var url_action = "http://localhost:8000/api/v1/titles/?genre=Action&sort_by=-imdb_score";


const sliders = document.querySelector(".carouselbox");
var scrollPerClick;
var ImagePadding = 3;

// Scroll Functionality
var scrollAmount = 0;

function sliderScrollLeft() {
  sliders.scrollTo({
    top: 0,
    left: (scrollAmount -= scrollPerClick),
    behavior: "smooth",
  });

  if (scrollAmount < 0) {
    scrollAmount = 0;
  }

  console.log("Scroll Amount: ", scrollAmount);
}

function sliderScrollRight() {
  if (scrollAmount <= sliders.scrollWidth - sliders.clientWidth) {
    sliders.scrollTo({
      top: 0,
      left: (scrollAmount += scrollPerClick),
      behavior: "smooth",
    });
  }
  console.log("Scroll Amount: ", scrollAmount);
}
scrollPerClick = document.querySelector(".img-1").clientWidth + 20;
