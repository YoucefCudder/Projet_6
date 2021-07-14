const gap = 7;
// CAROUSEL 1 
const container = document.getElementById("container"),
      content = document.getElementById("content"),
      next =  document.getElementById("next"),
      prev =  document.getElementById("prev");


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

// CAROUSEL 2 

const container1 = document.getElementById("container_1"),
      content1 = document.getElementById("content_1"),
      next1 =  document.getElementById("next_1"),
      prev1 =  document.getElementById("prev_1");


next1.addEventListener("click", e => {
  container1.scrollBy(width1 + gap, 0);
  if (container1.scrollWidth !== 0) {
    prev1.style.display = "flex";
  }
  if (content1.scrollWidth - width1 - gap <= container1.scrollLeft + width1) {
    next1.style.display = "none";
  }
});

prev1.addEventListener("click", e => {
  container1.scrollBy(-(width1 + gap), 0);
  if (container1.scrollLeft - width1 - gap <= 0) {
    prev1.style.display = "none";
  }
  if (!content1.scrollWidth - width - gap <= container1.scrollLeft + width1) {
    next1.style.display = "flex";
  }
});

let width1 = container1.offsetWidth;
window.addEventListener("resize", e => (width1 = container1.offsetWidth));


// CAROUSEL 3 


const container2 = document.getElementById("container_2"),
      content2 = document.getElementById("content_2"),
      next2 =  document.getElementById("next_2"),
      prev2 =  document.getElementById("prev_2");


next2.addEventListener("click", e => {
  container2.scrollBy(width2 + gap, 0);
  if (container2.scrollWidth !== 0) {
    prev2.style.display = "flex";
  }
  if (content2.scrollWidth - width2 - gap <= container2.scrollLeft + width1) {
    next2.style.display = "none";
  }
});

prev2.addEventListener("click", e => {
  container2.scrollBy(-(width1 + gap), 0);
  if (container2.scrollLeft - width2 - gap <= 0) {
    prev2.style.display = "none";
  }
  if (!content2.scrollWidth - width2 - gap <= container2.scrollLeft + width2) {
    next2.style.display = "flex";
  }
});

let width2 = container2.offsetWidth;
window.addEventListener("resize", e => (width2 = container2.offsetWidth));

// CAROUSEL 4 

const container3 = document.getElementById("container_3"),
      content3 = document.getElementById("content_3"),
      next3 =  document.getElementById("next_3"),
      prev3 =  document.getElementById("prev_3");


next3.addEventListener("click", e => {
  container3.scrollBy(width3 + gap, 0);
  if (container3.scrollWidth !== 0) {
    prev3.style.display = "flex";
  }
  if (content3.scrollWidth - width3 - gap <= container3.scrollLeft + width3) {
    next3.style.display = "none";
  }
});

prev3.addEventListener("click", e => {
  container3.scrollBy(-(width3 + gap), 0);
  if (container3.scrollLeft - width3 - gap <= 0) {
    prev3.style.display = "none";
  }
  if (!content3.scrollWidth - width3 - gap <= container3.scrollLeft + width3) {
    next3.style.display = "flex";
  }
});

let width3 = container3.offsetWidth;
window.addEventListener("resize", e => (width3 = container3.offsetWidth));
