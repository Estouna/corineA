// Divise le texte en lettre (expressions régulières " /\S/g, "<span>$&</span>" " à voir)
const texts = document.querySelectorAll('.p-home');
texts.forEach(function (p) {
  p.innerHTML = p.textContent.replace(/\S/g, "<span class='letter'>$&</span>")
});

// Sélectionne tous les span
const spans = document.querySelectorAll('.letter');

// Ajoute la classe active et la retire après 10 secondes
function addRemoveTimeout(span) {
  span.classList.add('active');
  setTimeout(function () {
    span.classList.remove('active');
  }, 4000);
}

// Evénements "mouseenter" pour chaque élément span
spans.forEach(function (span) {
  span.addEventListener('mouseenter', function () {
    addRemoveTimeout(span);
  });
});