class Form {
  constructor() {
    this.input = createInput("name");
    this.buttonImg = createImg("./images/start.png");
    this.greetings = createElement("h2");
  }
  display() {
     this.input.position(380, 180);
    this.input.size(180, 30);
    this.buttonImg.position(475 + 50, 250);
    this.buttonImg.size(150, 50);
  }
  
}
