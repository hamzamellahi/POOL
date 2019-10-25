class Canvas {
	constructor(){
		this.canvas = document.getElementById("game");
		this.ctx	= this.canvas.getContext("2d");
	}

	clear(){
		this.ctx.clearRect(0,0,this.canvas.width, this.canvas.height);
	}

	draw(image, position){
		this.ctx.drawImage(image, position.x, position.y);
	}
}

let canvas = new Canvas();

let image = new Image();
img.src = "./assets/sprites/spr_background.png";

setTimeOut(() => canvas.draw(img, {x:0, y:0}), 1000);
