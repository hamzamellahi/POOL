// import { Vector } from '../graphics/vector.js'
// import { Canvas2D } from '../Canvas.js'

let my = new Canvas2D();
class Stick {
	constructor(position){
		let { BALL_WIDTH, STICK_WIDTH} = Canvas;
		this.position = new Vector(- BALL_WIDTH * 0.5 - STICK_WIDTH, - BALL_WIDTH * 0.25 );
		this.angle = 0;
		this.visible = true;
		this.power = 0;
		this.shoting = false;
		//this.origin = whiteball.add(BALL_WIDTH * 0.5);
		this.shootOrigin = this.position.copy();
		this.velocity = new Vector();
	}
	update(){
		this.updateRotation();
		//this.updatePosition();
		this.handleInput();
	}

	draw(sprites){
		let {x, y} = this.position;
		rotate(this.angle);
		image(sprites.stick, x, y);
	}

	updateRotation(){
		this.origin = whiteball.position.add(Canvas.BALL_WIDTH * 0.5);
		translate(this.origin.x, this.origin.y);
		let {x, y} = this.position;
		let adjacent = mouseX - this.origin.x;
		let opposite = mouseY - y  - this.origin.y;
		this.angle 	 = atan2(opposite, adjacent);
	}

	updatePosition(){
		if(this.position.x < this.origin.x) {
			this.position.addTo(this.velocity.mult(2));
			this.velocity.multWidth(0.91);
		}
	}

	decreasePower(){
		if(this.power >= 0){
			this.position.x += 5;
			this.power-= 10;
		}
	}

	increasePower(){
		console.log(this.power);
		if(this.power <= Canvas.MAX_POWER){
			this.position.x -= 5;
			this.power+= 10;
		}
	}

	onshoot(){
		this.position = this.shootOrigin;
		this.shoting = true;
		whiteball.shoot(this.power, this.angle);
		//console.log("%c B =>>> " + this.velocity);
		//this.velocity.addTo(new Vector(this.power / 10 * 5));
		//coansole.log("%c A =>>> " + this.velocity);
		this.power = 0;
		this.position.x = -958;
		this.visible = false;
		//alert("am invisible :" + this.visible);
	}

	handleInput(){
		if (this.power && mouseIsPressed)
			this.onshoot();
		if (keyIsDown(65))
	   		this.increasePower();
		if (keyIsDown(68))
	   		this.decreasePower();
	}
}
const stick = new Stick(Canvas.STICK_ORIGIN);
