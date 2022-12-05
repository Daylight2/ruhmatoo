// Kood kirjutatud OpenAI ChatGPT3 abil

function highlightCurrentPage() {
// Hangi lehe tiitel
var currentPage = document.title;

// Hangi kõik lingid elemendis "mySidebar"
var links = document.querySelectorAll("#mySidebar a");

// loop läbi iga lingi
for (var i = 0; i < links.length; i++) {
  var link = links[i];
  
  // Kontrolli, ka lingi html on sama mis lehe tiitel
  if (link.innerHTML == currentPage) {
    // Kui on, pane roheline raam ümber
    link.style.border = "2px solid green";

      }
    }
    // Kinnita "highlightCurrentPage" funktsioon "load" event külge,
    // nii et see on kutsutud, kui leht lõpetab laadimise
    window.addEventListener("load", highlightCurrentPage);
  }
