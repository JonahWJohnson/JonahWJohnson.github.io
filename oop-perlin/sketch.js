// perlin oop connected balls

let points = []

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  .update()
  .display()
}

function mousePressed() {
  let thePoint = new MovingPoint(mouseX, mouseY);
  points.push(thePoint);
}

class MovingPoint {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.color = color(random(255), random(255), random(255));
    this.radius = 15;
    this.xTime = random(1000);
    this.yTime = random(1000);
    this.deltaTime = 0.01;
    this.reach = 150;
  }
  display() {
    noStroke();
    fill(this.color);
    circle(this.x, this.y, this.radius*2);
  }

  update() {
    let dx = noise(this.xTime);
    this.dx = map(dx, 0, 1, -5, 5);
    let dy = noise(this.yTime);
    this.dy = map(dy, 0, 1, -5, 5);
    
    this.x += this.dx;
    this.y += this. dy;

    this.xTime += this.deltaTime;
    this.yTime += this.deltaTime;

  }
}