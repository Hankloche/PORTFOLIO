document.addEventListener('DOMContentLoaded', function() {
  ouvrirFenetre(); // Cette ligne va ouvrir la fenêtre dès que le DOM est chargé
});

function fermerFenetre(event) {
  var maDiv = document.getElementById("maDiv");
  maDiv.style.display = "none";
  event.stopPropagation(); // Empêcher la propagation de l'événement de clic
}

document.addEventListener('DOMContentLoaded', function () {
  var bouton = document.getElementById("bouton-fermer");
  bouton.addEventListener('click', function (event) {
    fermerFenetre(event);
  });

  // Pour déplacer la fenêtre en cliquant sur la barre de titre
  var barreTitre = document.querySelector('.barre-titre');
  var fenetre = document.querySelector('.fenetre');
  var deplacement = false;
  var decalageX, decalageY;

  barreTitre.addEventListener('mousedown', function(e) {
    deplacement = true;
    decalageX = e.clientX - fenetre.offsetLeft;
    decalageY = e.clientY - fenetre.offsetTop;
  });

  document.addEventListener('mousemove', function(e) {
    if (deplacement) {
      var newLeft = e.clientX - decalageX;
      var newTop = e.clientY - decalageY;

      // Limitation de la position de la fenêtre à l'intérieur de la fenêtre du navigateur
      newLeft = Math.min(Math.max(newLeft, 0), window.innerWidth - fenetre.offsetWidth);
      newTop = Math.min(Math.max(newTop, 0), window.innerHeight - fenetre.offsetHeight);

      fenetre.style.left = newLeft + 'px';
      fenetre.style.top = newTop + 'px';
    }
  });

  document.addEventListener('mouseup', function() {
    deplacement = false;
  });
});

function ouvrirFenetre() {
  document.getElementById("maDiv").style.display = "block";
}

function toggleFenetre() {
  var maDiv = document.getElementById("maDiv");
  var bouton = document.getElementById("bouton-fermer");

  if (maDiv.style.display === "none") {
    maDiv.style.display = "block";
    maDiv.style.bottom = "20px";
    maDiv.style.right = "20px";
    bouton.innerHTML = "X";
    bouton.style.borderRadius = "50%";
  } else {
    maDiv.style.display = "none";
    maDiv.style.bottom = "0";
    maDiv.style.right = "0";
    bouton.innerHTML = "";
    bouton.style.borderRadius = "0";
  }
}

document.addEventListener('DOMContentLoaded', function () {
  const burger = document.querySelector('.burger');
  const navLinks = document.querySelector('.nav-links');

  burger.addEventListener('click', function () {
    // Bascule la classe "nav-active" pour afficher ou cacher le menu
    navLinks.classList.toggle('nav-active');
    
    // Animer les lignes du burger menu
    burger.classList.toggle('toggle');
  });
});

document.addEventListener('DOMContentLoaded', function () {
  // Reste du code

  // Ajout d'un gestionnaire d'événements sur le lien "A propos"
  var aProposLink = document.getElementById('a-propos-link');
  aProposLink.addEventListener('click', function (event) {
    event.preventDefault(); // Pour empêcher le lien de changer de page
    ouvrirFenetre();
  });

  // Reste du code
});