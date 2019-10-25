//import 'vector.js';

/*
    Import javascript files
*/
// P5 Lybrair
/*import p5 from "p5";
// Graphics
import Vector from "./graphics/vector";
// File class
import { File } from "./file.js";
// config
import { Canvas2D } from "./Canvas.js";

// UI
import { Color } from "./UI/Color.js";
import { Label } from "./UI/Label.js";
import { Button } from "./UI/Button.js";
import { Menu } from "./UI/Menu.js";
// ScreenLoader
import { sceneLoader } from "./sceneLoader.js";
// objects
import { Ball } from "./objects/Ball.js";
import { Stick } from "./objects/stick.js";
import { game } from "./Game.js";*/

const whiteball = new Ball(Canvas.BALL_ORIGIN);

var sprites = {};
let sounds = {};
var balls = [];
var assets = [];
balls.push(whiteball);

function preload() {
  assets = Game.loadAssets();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function setup() {
  createCanvas(Canvas.CANVAS_WIDTH, Canvas.CANVAS_HEIGHT);
  //angleMode(DEGREES);
  /* Draw Balls
                                __
                                |_|
                                | |
  ------------------------------| |-----------------------------------
  |     \                       | |                              /    |
  |     /                       | |                              \    |
  |     |                       \ |                               \___|
  |                             | |                                   |
  |                             | |                                   |
  |                             | |                                   |
  |                             |_|                                   |
  |                              *                                    |
  |                                                                   |
  |                                                                   |
  |                                                                   |
  |                                                                   |
  |                                                                   |
  |                                                                   |
  |                                                                   |
  |                                                                   |
  |                                                                   |
  |                                                                   |
  |                                                                   |
  |                                                                   |
  |                      	      ____                                  |
  |                      		    | * |                                 |
  |                      		   | * * |                                |
  |                      		  | * * * |                               |
  |                    		   | * * * * |                              |
  |                      		| * * * * * |                        ____ |
  |                       ---|---------|---                     /     |
  |                                                             |     |
  |_____________________________________________________________\_____|
	*/
  setupBalls();
  /*
	 	Play background Music
	 */
  // sounds.BackgroundMusic.play();
}

function mousePressed() {
  console.log("X: "+mouseX, 0, height/4);
  console.log("Y: "+mouseY, 0, height/2);
}

function draw() {

  //console.log("X: "+mouseX, 0, height/4);
  //console.log("Y: "+mouseY, 0, height/2);

  windowResized();

  //SceneLoader.loadScene("Menu");
  background("#27272727");
  image(assets.bc, 0, 0);

  // Draw Balls
  for (let i = 0; i < balls.length; i++) {
    if (balls[i].visible)
    {
      balls[i].draw(assets);
      balls[i].update();
      checkForCollitions(i);
    }
  }
 if (stick.visible) {
    stick.update();
    stick.draw(assets);
  }
}

function setupBalls() {
  let xpos = Canvas.BALLS_ORIGIN.x;
  let b;
  for (let i = 1; i <= 5; i++) {
    let ypos =
      Canvas.BALLS_ORIGIN.y +
      ((5 - i) * Canvas.BALL_WIDTH) / 2 -
      2.5 * Canvas.BALL_WIDTH;

    for (let j = 1; j <= i; j++) {
      if (j === 2 && i === 3) b = new Ball({ x: xpos, y: ypos }, "black");
      else if (j % 2 === 0) b = new Ball({ x: xpos, y: ypos }, "red");
      //image(sprites.rball, xpos, ypos);
      else b = new Ball({ x: xpos, y: ypos }, "yellow");
      //console.log("row : " + i + " ,col : " + j + " x : " + xpos  + ", y : " +  ypos );
      balls.push(b);
      ypos += Canvas.BALL_WIDTH ;
    }

    xpos += Canvas.BALL_WIDTH;
  }
}

function checkForCollitions(i = 0) {
  for (let j = i + 1; j < balls.length; j++)
    if (balls[i].collides(balls[j])){
        //console.log(`i : ${i}, j : ${j} >>> Collides`);
        //balls[i].reflect(balls[j]);
    }
}

/*loadAssets(sounds,sprites){
 	for(let sound of this.sounds)
		sounds[sound.name] = loadSound(`${this.soundsPath}${sound.path}.${sound.extension}`);

	for(let sprite of this.sprites)
		sprites[sprite.name] = loadImage(`${this.spritesPath}${sprite.path}.${sprite.extension}`);
}*/
