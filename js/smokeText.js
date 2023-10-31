// Divise le texte en lettre (expressions régulières " /\S/g, "<span>$&</span>" " à voir)
const texts = document.querySelectorAll('.p-home');
texts.forEach(function (p) {
  p.innerHTML = p.textContent.replace(/\S/g, "<span>$&</span>")
});

// texts.innerHTML = texts.textContent.replace(/\S/g, "<span>$&</span>");

// Sélectionnez tous les éléments span
const spans = document.querySelectorAll('span');

// Fonction pour ajouter la classe active et planifier son retrait après 10 secondes
function addAndRemoveClassWithTimeout(span) {
  span.classList.add('active');
  setTimeout(function () {
    span.classList.remove('active');
  }, 4000);
}

// Ajoutez un écouteur d'événements "mouseenter" pour chaque élément span
spans.forEach(function (span) {
  span.addEventListener('mouseenter', function () {
    addAndRemoveClassWithTimeout(span);
  });
});