// Get the modal
var modal = document.getElementsByClassName("modal");

// Get the button that opens the modal
var btn = document.querySelectorAll("carousel__item");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close-btn");

// When the user clicks on the button, open the modal
var elems = document.getElementsByClassName('carousel__item');
for (var i=0;i<elems.length;i+=1){
  elems[i].style.display = 'block';
}
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}