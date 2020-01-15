//https://api.lyrics.ovh/v1/Coldplay/Adventure of a Lifetime
//https://lyricsovh.docs.apiary.io/#reference/0/lyrics-of-a-song
const url = "//https://api.lyrics.ovh/v1/artist/title";
export class API {
  constructor(artist, song) {
    this.artist = artist;
    this.song = song;
  }

  async search_song() {
    const response = await fetch(
      `https://api.lyrics.ovh/v1/${this.artist}/${this.song}`
    );
    return await response.json();
  }
}
