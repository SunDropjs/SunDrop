/**
 * @class
 * @classdesc Basic Sound class
 * @description Basic Sound class
 */
class Sound {
  public sound;
  /**
   * @constructs
   * @param {string} path The path to the sound file
   * @property {HTMLAudioElement} sound The HTML audio element
   */
  constructor(path: string) {
    this.sound = document.createElement("audio");
    this.sound.src = path;

    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
  }
  /**
   * Plays the sound
   */
  play(): void {
    this.sound.play();
  }
  /*
   * Stops the sound
   */
  stop(): void {
    this.sound.pause();
  }
}

export { Sound };
