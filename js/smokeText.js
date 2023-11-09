// Divise le texte en lettre (expressions régulières " /\S/g, "<span>$&</span>" " à voir)
const texts = document.querySelectorAll('.section__p');
texts.forEach(function (p) {
  p.innerHTML = p.textContent.replace(/\S/g, "<span class='section__span--letter'>$&</span>")
});

// Sélectionne tous les span
const spans = document.querySelectorAll('.section__span--letter');

// Evénements "mouseenter" pour chaque élément span
spans.forEach(function (span) {
  span.addEventListener('mouseenter', function () {
    addRemoveTimeout(span);
  });
});

// Ajoute la classe active et la retire après X secondes
function addRemoveTimeout(span) {
  span.classList.add('active');
  setTimeout(function () {
    span.classList.remove('active');
  }, 4000);
}
