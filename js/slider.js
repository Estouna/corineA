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

  if (n > slides.length) { 
    slideIndex = 1 
  }
  if (n < 1) { 
    slideIndex = slides.length 
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex - 1].style.display = "flex";
}

// Clic pour ouvrir la fenêtre du slider
const btn = document.querySelectorAll(".slide__div--btn-img");
const modal = document.querySelectorAll(".slide__div--modal");

btn.forEach(function (element) {
  element.addEventListener('click', function () {
    for (let b = 0; b < modal.length; b++) {
      modal[b].classList.toggle("active")
    }
  })
})

// Ferme la fenêtre
const btnClose = document.querySelectorAll(".slide__button--close");

btnClose.forEach(function (element) {
  element.addEventListener('click', function () {
    for (let b = 0; b < modal.length; b++) {
      modal[b].classList.remove("active")
    }
  })
})