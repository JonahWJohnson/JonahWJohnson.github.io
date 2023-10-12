// perlin noise ball

let theBall;
let time = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  spawnBall();
  background("white");
  window.setInterval(spawnBall, 500);
}

function draw() {
  
  noStroke();

  for (let theBall of ballArray) {
    fill(theBall.color);
    //move
    theBall.x = noise(theBall.time) * width;
    theBall.y = noise(theBall.time = 300) * height;
    //display
    circle(theBall.x, theBall.y, theBall.size);
  
    theBall.time += 0.01;
  }
}

function spawnBall() {
  let ball = {
    x: random(height),
    y: random(width),
    size: random(10,50),
    color: (random(255), random(255), random(255), random(255)),
    time: random(1000),

  };
  ballArray.push(ball)
 }