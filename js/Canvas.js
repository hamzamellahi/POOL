// import Vector from "./graphics/vector.js";
// import { Color } from "./UI/Color.js";
class Canvas2D {
  constructor() {
    this.spPath = "/assets/sprites";
    this.CANVAS_WIDTH = 1500;
    this.CANVAS_HEIGHT = 825;
    this.STICK_ORIGIN = new Vector(-600, 415);
    this.BALL_ORIGIN = new Vector(370, 400);
    this.BALLS_ORIGIN = new Vector(1100, 400);
    this.BALL_WIDTH = 50;
    this.MAX_POWER = 300;
    this.STICK_WIDTH = 938;
    this.MARGIN = new Vector(970, -15); //STICK_ORIGIN.sub(BALL_ORIGIN);
    this.dark = "#272727";

    /* ==== UI ==== */
    this.TITLE_TEXT = "8 Ball Pool Game";
    this.TITLE_POSITION = new Vector(30, 30);
    this.TITLE_COLOR = Color.white;
    this.TITLE_SIZE = 95;

    this.COMMENT_TEXT = "Developed By Mr Hamza Mellahi";
    this.COMMENT_POSITION = new Vector(700, 500);
    this.COMMENT_COLOR = Color.white;
    this.COMMENT_SIZE = 54;

    // Buttons
    this.PVP_TEXT = "Player Vs Player";
    this.PVP_BUTTON_POSITION = new Vector(30, 30);
    this.PVP_BUTTON_COLOR = Color.red;
    this.PVP_BUTTON_BC = Color.white;
    this.PVP_BUTTON_SIZE = 65;

    this.PVC_TEXT = "Player Vs Computer";
    this.PVC_BUTTON_POSITION = new Vector(80, 30);
    this.PVC_BUTTON_COLOR = Color.red;
    this.PVC_BUTTON_BC = Color.white;
    this.PVC_BUTTON_SIZE = 65;

    this.SMUTE_TEXT = "8 Ball Pool Gane";
    this.SMUTE_BUTTON_POS = "8 Ball Pool Gane";
    this.SMUTE_BUTTON_COLOR = "8 Ball Pool Gane";
    //this.TITLE_SIZE = "8 Ball Pool Gane";
  }
}
const Canvas = new Canvas2D();
