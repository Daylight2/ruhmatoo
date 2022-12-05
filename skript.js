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


//Kood laenatud w3c lehelt

// avab külgriba ja ülekate
function w3_open() {
  // näita "mySidebar" elemendi stiili
  document.getElementById("mySidebar").style.display = "block";
  // näita "myOverlay" elemendi stiili
  document.getElementById("myOverlay").style.display = "block";
}

// sulgeb külgriba ja ülekate
function w3_close() {
  // peida "mySidebar" elemendi stiil
  document.getElementById("mySidebar").style.display = "none";
  // peida "myOverlay" elemendi stiil
  document.getElementById("myOverlay").style.display = "none";
}

// klõpsatud pildi näitamiseks
function onClick(element) {
  // muuda "img01" pildi allikaks klõpsatud element
  document.getElementById("img01").src = element.src;
  // näita "modal01" elemendi stiili
  document.getElementById("modal01").style.display = "block";
  // salvesta "caption" elemendi jaoks alt-atribuudis määratud tekst
  var captionText = document.getElementById("caption");
  captionText.innerHTML = element.alt;
}