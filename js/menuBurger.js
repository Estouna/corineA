const burger = document.querySelector(".navbar__div--burger");
const navMenu = document.querySelector(".navbar__ul");

burger.addEventListener("click", mobileMenu);

function mobileMenu() {
  burger.classList.toggle("active");
  navMenu.classList.toggle("active");
}

// Ferme le menu quand clic sur lien
const navLink = document.querySelectorAll(".navbar__li");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
  burger.classList.remove("active");
  navMenu.classList.remove("active");
}