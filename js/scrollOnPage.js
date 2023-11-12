const sections = document.querySelectorAll(".section");
const navLinks = document.querySelectorAll(".navbar__link");
const mediaQueryScrollOnPage = window.matchMedia('(min-width: 800px)');

 // ********* Scroll smooth barre de navigation
navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    // link.hash retourne le '#' suivi par l'identificateur de fragment de URL (ici #accueil, #a-propos, etc).
    const section = document.querySelector(link.hash);
    section.scrollIntoView({ behavior: "smooth" });
  });
});

if (mediaQueryScrollOnPage.matches) {

  // ********* Scroll classe active barre de navigation
  window.addEventListener("scroll", () => {
    // Trouve la section active (reverse() plus performant)
    const current = sections.length - [...sections].reverse().findIndex((section) => window.scrollY >= section.offsetTop - 100) - 1;
    navLinks.forEach((link) => link.classList.remove("active"));
    navLinks[current].classList.add("active");
  });


  // ********* Scroll molette souris
  let isScrolling;
  window.addEventListener("wheel", (e) => {
    // Arrête le scroll s'il est en cours
    window.clearTimeout(isScrolling);
    e.preventDefault();
    // Récupére la direction du scroll (deltaY = nombre positif (scroll vers le bas) ou négatif (scroll vers le haut)). 
    const direction = e.deltaY < 0 ? -1 : 1;
    const current = sections.length - [...sections].reverse().findIndex((section) => window.scrollY >= section.offsetTop - 100) - 1;
    // Détermine la section suivante ou précédente
    let next = current + direction;
    if (next < 0) {
      next = 0;
    } else if (next >= sections.length) {
      next = sections.length - 1;
    }
    // Défiler vers la section suivante ou précédente
    const section = sections[next];
    section.scrollIntoView({ behavior: "smooth" });

    // Mise à jour de la section active après le scroll
    isScrolling = setTimeout(() => {
      navLinks.forEach((link) => link.classList.remove("active"));
      navLinks[next].classList.add("active");
    }, 1000);
  }, { passive: false });
}