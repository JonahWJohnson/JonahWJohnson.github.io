// Arrays && Object Notation
// Jonah Johnson
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let jef = {
  x: 200,
  y: 200,
  dx: 5,
  dy: 0,
  size: 50,
  weight: 5,
}

let gravityProperties = {
  strength: -5,

}

function setup() {
  createCanvas(1920, 1080);
}

function draw() {
  background(220);
  moveJef()
}


function moveJef() {
// base movement 
  if (keyIsDown(32)) {
    //spacebar
    jump();
  }
  if (keyIsDown(65)) {
    //a
    jef.x -= jef.dx;
  }
  if (keyIsDown(68)) {
    //d
    jef.x =+ jef.dx;
  }
  if (keyIsDown(16)) {
    boost()
  }
//adds gravity and applies it
jef.y += gravityProperties.strength;
jef.y += jef.dy
}

function spawnJef(){
  square(jef.x, jef.y, jef.size)
}