const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");
const mediaQueryScrollOnPage = window.matchMedia('(min-width: 800px)');

if (mediaQueryScrollOnPage.matches) {
// Mise à jour de la section active pendant le scroll
window.addEventListener("scroll", () => {
  // Trouve la section active
  const current = sections.length - [...sections].reverse().findIndex((section) => window.scrollY >= section.offsetTop - 100) - 1;
  
  navLinks.forEach((link) => link.classList.remove("active"));
  navLinks[current].classList.add("active");
});

// Scroll pour les liens de la barre de navigation
navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    
    // link.hash retourne le '#' suivi par l'identificateur de fragment de URL (ici #accueil, #a-propos, etc).
    const section = document.querySelector(link.hash);
    section.scrollIntoView({ behavior: "smooth" });
  });
});

  // Scroll avec la molette de la souris
  let isScrolling;

  window.addEventListener("wheel", (e) => {
    // Arrête le scroll s'il est en cours
    window.clearTimeout(isScrolling);

    e.preventDefault();

    // Récupére la direction du scroll, deltaY retourne un nombre positif (scroll vers le bas) ou négatif (scroll vers le haut). 
    const direction = e.deltaY < 0 ? -1 : 1;

    // Trouve la section active (reverse() plus performant)
    const current = sections.length - [...sections].reverse().findIndex((section) => window.scrollY >= section.offsetTop - 100) - 1;

    // Détermine la section suivante ou précédente
    let next = current + direction;
    if (next < 0) {
      next = 0;
    } else if (next >= sections.length) {
      next = sections.length - 1;
    }

    // Faire défiler vers la section suivante ou précédente
    const section = sections[next];
    section.scrollIntoView({ behavior: "smooth" });

    // Mise à jour de la section active après le scroll
    isScrolling = setTimeout(() => {
      navLinks.forEach((link) => link.classList.remove("active"));
      navLinks[next].classList.add("active");
    }, 1000);
  }, { passive: false });
}