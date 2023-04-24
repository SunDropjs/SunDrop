/**
 * @class
 * @classdesc Basic Sound class
 * @description Basic Sound class
 */
class Sound {
    /**
     * @constructs
     * @param {string} path The path to the sound file
     * @property {HTMLAudioElement} sound The HTML audio element
     */
    constructor(path) {
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
    play() {
        this.sound.play();
    }
    /*
     * Stops the sound
     */
    stop() {
        this.sound.pause();
    }
}
export { Sound };
