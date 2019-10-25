import p5 from "p5";
class Menu {
  constructor(background, buttons, labels) {
    this.background = background;
    this.buttons = buttons;
    this.labels = labels;
    this.draw();
  }

  draw() {
    // draw background
    p5.image(this.background, 0, 0);
    // draw buttons
    for (let button of this.buttons) button.draw();
    // label buttons
    for (let label of this.labels) label.draw();
  }
}
