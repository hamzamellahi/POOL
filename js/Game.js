// import { File } from "./file.js";
// import p5 from "p5"

class game {
  constructor() {
    this.isOver = false;
    this.DELTA_TIME = 150;
    this.MAX_LEFT = 58;
    this.MAX_TOP = 767;
    this.MAX_BOTTOM = 58;
    this.MAX_RIGHT = 1442;
    this.soundsPath = "../assets/sounds/";
    this.spritesPath = "../assets/sprites/";
    this.sounds = [
      new File("BallsCollide", "BallsCollide", "wav"),
      new File("Hole", "Hole", "wav"),
      new File("Side", "Side", "mp3"),
      new File("Strike", "Strike", "wav"),
      new File("BackgroundMusic", "BcMusic", "mp3")
    ];
    this.sprites = [
      new File("bc", "spr_background4", "png"),
      new File("stick", "spr_stick", "png"),
      new File("ball", "spr_ball2", "png"),
      new File("rball", "spr_redBall", "png"),
      new File("yball", "spr_yellowBall", "png"),
      new File("bball", "spr_blackBall", "png"),
      new File("main_menu_background", "main_menu_background", "png")
    ];
  }

  loadAssets() {
  //console.log(this.sounds);
  /*  for (let sound of this.sounds)
      console.log(`${this.soundsPath}${sound.path}.${sound.extension}`);*/
    //sounds[sound.name] = loadSound(`${this.soundsPath}${sound.path}.${sound.extension}`);

    for (let sprite of this.sprites)
      this.sprites[sprite.name] = loadImage(
        `${this.spritesPath}${sprite.path}.${sprite.extension}`
      );
    // Load Font
    const MAIN_FONT = loadFont("/js/fonts/Montserrat-Bold.ttf");
    return this.sprites;
  }
}
const Game = new game();
