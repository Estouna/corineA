// Slider
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slide");
  let dots = document.getElementsByClassName("dot");

  if (n > slides.length) { 
    slideIndex = 1 
  }
  if (n < 1) { 
    slideIndex = slides.length 
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex - 1].style.display = "flex";
  // dots[slideIndex - 1].className += " active";
}

// Clic pour ouvrir la fenêtre du slider
const btn = document.querySelectorAll(".btn-voir, .btn-img");
const content = document.querySelectorAll(".content");

btn.forEach(function (element) {
  element.addEventListener('click', function () {
    for (let b = 0; b < content.length; b++) {
      content[b].classList.toggle("active")
    }
  })
})

// Ferme la fenêtre
const btnClose = document.querySelectorAll(".btn-close");

btnClose.forEach(function (element) {
  element.addEventListener('click', function () {
    for (let b = 0; b < content.length; b++) {
      content[b].classList.remove("active")
    }
  })
})