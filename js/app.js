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
        let speed = document.querySelector("#speed").value;
        console.log(speed);
        if (speed > 10 || speed < 0) {
          speed = 0;
        }
        console.log(VoiceRSS);
        VoiceRSS.speech({
          key: "b356a283a4b442c6b0fcde4a889b2e6e",
          src: text,
          hl: "en-us",
          r: speed,
          c: "mp3",
          f: "44khz_16bit_stereo",
          ssml: false
        });
        UI.divResult.textContent = text;
      }
    });
  }
});
