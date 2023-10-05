// Ball Object Notation Demo
//oct 5

let theBall = {
  x: 100,
  y: 100,
  dx: 4,
  dy: -3,
  radius: 25,
  r: 255,
  g: 0,
  b: 0,
};

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  moveBall()
  displayBall();
}

function displayBall() {
fill(theBall.r, theBall.g, theBall.b);
circle(theBall.x, theBall.y, theBall.radius*2);
}

function moveBall() {
  theBall.x += theBall.dx;
  theBall.y += theBall.dy;

  if (theBall.x > width) {
    theBall.x = 0 - theBall.radius;
  }

  if (theBall.y > height) {
    theBall.y = 0 - theBall.radius;
  }

  if (theBall.y < 0 - theBall.radius) {
    theBall.y = height
  }

}