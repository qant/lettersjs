import * as UI from "./interfaz.js";
import { API } from "./api.js";

UI.divSearch.addEventListener("submit", e => {
  e.preventDefault();
  const artist = document.getElementById("artista").value,
    song = document.getElementById("cancion").value;
  if (artist === "" || song === "") {
    UI.divMessage.innerHTML = "Error! All fields is necessary!";
    UI.divMessage.className = "error";
    setTimeout(() => {
      UI.divMessage.innerHTML = "";
      UI.divMessage.classList.remove("error");
    }, 2000);
  } else {
    console.log("Run API request!");
    const api = new API(artist, song);
    api.search_song().then(data => {
      console.log(data);
      if (data.error) {
        const text = data.error;
        UI.divMessage.innerHTML = text;
        UI.divMessage.className = "error";
        setTimeout(() => {
          UI.divMessage.innerHTML = "";
          UI.divMessage.classList.remove("error");
        }, 2000);
      } else {
        const text = data.lyrics;
        console.log(text);
        UI.divResult.textContent = text;
      }
    });
  }
});
