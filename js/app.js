import * as UI from "./interfaz.js";

UI.divSearch.addEventListener("submit", e => {
  e.preventDefault();
  const artist = document.getElementById("artista").value,
    song = document.getElementById("cancion").value;
  if (artist === "" || song === "") {
    UI.divMessage.innerHTML = "Error! All fields is necessary!";
    UI.divMessage.className = "error";
    setTimeout(() => {
      UI.divMessage.innerHTML = "";
      UI.divMessage.className = "";
    }, 2000);
  } else {
    console.log("Run API request!");
  }
});
