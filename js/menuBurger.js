// MENU BURGER
const burger = document.querySelector(".burger");
const navMenu = document.querySelector(".nav-main-ul");

burger.addEventListener("click", mobileMenu);

function mobileMenu() {
  burger.classList.toggle("active");
  navMenu.classList.toggle("active");
}

// Ferme le menu quand clic sur lien
const navLink = document.querySelectorAll(".nav-main-li");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
  burger.classList.remove("active");
  navMenu.classList.remove("active");
}