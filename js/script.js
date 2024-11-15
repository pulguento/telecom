
// boutons
const btnBackToHome = document.querySelector('.btn-back-to-home');

if (btnBackToHome) {
  btnBackToHome.classList.add('hidden');

  window.addEventListener('scroll', function() {
    if (window.scrollY > 500) {
      btnBackToHome.classList.remove('hidden');
    } else {
      btnBackToHome.classList.add('hidden');
    }
  });
}

const btnBackToTop = document.querySelector('.btn-back-to-top');

btnBackToTop.classList.add('hidden');

window.addEventListener('scroll', function() {
  if (window.scrollY > 500) { // Vous pouvez ajuster cette valeur en fonction de votre mise en page
    btnBackToTop.classList.remove('hidden');
  } else {
    btnBackToTop.classList.add('hidden');
  }
});

btnBackToTop.addEventListener('click', function() {
  // Faites défiler la page vers le haut (vous pouvez ajuster la durée d'animation)
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
// boutons


  const logos = document.querySelectorAll(".logo-mobiles");
  let currentLogoIndex = 0;

 //test cette formilation.
 function changeLogo() {
  if (logos[currentLogoIndex]) {
    logos[currentLogoIndex].style.display = "none";
  }
  currentLogoIndex = (currentLogoIndex + 1) % logos.length;
  if (logos[currentLogoIndex]) {
    logos[currentLogoIndex].style.display = "block";
  }
}
 // function changeLogo() {
 //   logos[currentLogoIndex].style.display = "none";
 //   currentLogoIndex = (currentLogoIndex + 1) % logos.length;
 //   logos[currentLogoIndex].style.display = "block";
 // }

  changeLogo();
  setInterval(changeLogo, 5000); // Change le logo toutes les 5 secondes

  // section MITEL cliquable
  const mitelSection = document.getElementById("MITEL");
  if (mitelSection) {
    mitelSection.addEventListener("click", function () {
      window.location.href = "pages/mitel.html"; // Remplacez "nouvelle-page-mitel.html" par l'URL de la page MITEL que vous souhaitez ouvrir
    });
  }

  // section opérateursM cliquable
  const operateursMSection = document.getElementById("Opé-mobiles");
  if (operateursMSection) {
    operateursMSection.addEventListener("click", function () {
      window.location.href = "pages/OperateursM.html"; // Remplacez "nouvelle-page-OperateursM.html" par l'URL de la page OpérateursM que vous souhaitez ouvrir
    });
  }


  // bloc lexique

function toggleContent(button) {
  const caseLex = button.closest('.case-lex');
  const content = caseLex.querySelector('.content');
  caseLex.classList.toggle('expanded');
  button.textContent = caseLex.classList.contains('expanded') ? 'Voir moins' : 'Voir plus';
}

// Recherche
document.getElementById('searchInput').addEventListener('input', function () {
    const searchTerm = this.value.toLowerCase();
    const lexiqueItems = document.querySelectorAll('.item_block');
    const searchResultsDiv = document.getElementById('searchResults');

    // Filtrer les résultats en fonction du terme de recherche
    const matchingItems = Array.from(lexiqueItems).filter(function (item) {
        const text = item.textContent.toLowerCase();
        return text.includes(searchTerm);
    });

    // Afficher les résultats filtrés
    displaySearchResults(matchingItems, searchResultsDiv, searchTerm);
});

function displaySearchResults(results, container, searchTerm) {
    // Effacer les résultats précédents
    container.innerHTML = '';

    if (results.length > 0) {
        // Afficher les résultats si des correspondances sont trouvées
        results.forEach(function (item) {
            const clonedItem = item.cloneNode(true);
            container.appendChild(clonedItem);

            // Mettre en évidence le terme de recherche dans le contenu du bloc
            highlightSearchTerm(clonedItem, searchTerm);
        });
    } else {
        // Afficher un message si aucune correspondance n'est trouvée
        container.innerHTML = '<p>Aucun résultat trouvé.</p>';
    }
}

function highlightSearchTerm(item, searchTerm) {
    const contentElement = item.querySelector('.content');
    const textContent = contentElement.textContent;
    const highlightedContent = textContent.replace(
        new RegExp(`(${searchTerm})`, 'gi'),
        (match) => `<span class="highlighted">${match}</span>`
    );
    contentElement.innerHTML = highlightedContent;
}

// Affichage initial
document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("searchInput");
    const searchResults = document.getElementById("searchResults");

    searchInput.addEventListener("input", function () {
        const searchTerm = searchInput.value.toLowerCase();
        highlightSearchResults(searchTerm);
    });

    searchInput.addEventListener("keyup", function (event) {
        if (event.key === "Enter") {
            const searchTerm = searchInput.value.toLowerCase();
            highlightSearchResults(searchTerm);
        }
    });
});



  // bloc lexique
  
// footer
// script.js
document.addEventListener("DOMContentLoaded", function () {
    // Charger le contenu du pied de page depuis le fichier externe
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                // Ajouter le contenu du pied de page au pied de page dynamique
                document.getElementById('dynamic-footer').innerHTML = xhr.responseText;
            } else {
                console.error('Erreur de chargement du pied de page : ' + xhr.status);
            }
        }
    };
    xhr.open('GET', 'footer.html', true);
    xhr.send();
});

  // bloc popup
 
function openPopup() {
  // Ouvrir le popup avec les dimensions spécifiées
  var popup = window.open("https://micollab.universcience.fr/ucs/micollab/", "_blank", "width=500,height=500");
  // Empêcher le lien de s'ouvrir dans une nouvelle fenêtre
  popup.opener = null;
  return false;
}

  //bouton index
 function openNewPage(url) {
    window.open(url, '_blank');
  }
  