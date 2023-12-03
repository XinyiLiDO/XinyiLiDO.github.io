function showCitation(element) {
  var citationBox = document.getElementById("citation-box");
  if (citationBox.style.display === "none") {
      citationBox.style.display = "block";
      citationBox.style.left = element.offsetLeft + "px";
      citationBox.style.top = (element.offsetTop + element.offsetHeight) + "px";
  } else {
      citationBox.style.display = "none";
  }
}



function toggleBibtex(id) {
  var bibtex = document.getElementById(id);
  bibtex.style.display = (bibtex.style.display === "none") ? "block" : "none";
}

