class Label {
	constructor(text, position, color, size, align, font = Canvas.MAIN_FONT){
		this.text = text;
		this.position = position;
		this.color = color;
		this.size = size;
		this.align = align;
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
