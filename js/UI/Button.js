// import { Canvas2D } from "../Canvas.js";
// //const Canvas = new Canvas2D();
class Button {
	constructor(text, position, color, background = Canvas.DARK, size, font = Canvas.MAIN_FONT){
		this.text = text;
		this.position = position;
		this.color = color;
		this.size = size;
		this.background = background;
		this.font = font;
	}

	draw(){
		let {x, y} = this.position;
		this.fill(this.color);
		this.textAlign(this.align);
		this.textSize(this.size);
		this.textFont(this.font);
		this.text(this.text, x, y);
	}
}
