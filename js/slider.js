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
let scrollPosition = 0;
btn.forEach(function (element) {
  element.addEventListener('click', function () {

    scrollPosition = window.scrollY;
    for (let b = 0; b < modal.length; b++) {
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollPosition}px`;
      modal[b].classList.toggle("active")
      
      document.documentElement.classList.add('no-smooth-scroll');
      document.querySelector('main').style.overflow = 'hidden';
    }

  })
})

// Ferme la fenêtre
const btnClose = document.querySelectorAll(".slide__button--close");

btnClose.forEach(function (element) {
  element.addEventListener('click', function () {

    for (let b = 0; b < modal.length; b++) {
      document.body.style.position = '';
      document.body.style.top = '';
      modal[b].classList.remove("active")

      window.scrollTo({ top: scrollPosition, behavior: 'auto' });
      document.documentElement.classList.remove('no-smooth-scroll');
      document.querySelector('main').style.overflow = 'auto';
    }

  })
})