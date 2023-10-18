// Arrays && Object Notation
// Jonah Johnson
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let jef = {
  x: 500,
  y: 500,
  dx: 5,
  dy: 0,
  size: 50,
  weight: 5,
}
let isGrounded;
let gravityProperties = {
  strength: 0.2,
  acceleration: 0.1,

}

function setup() {
  createCanvas(1920, 1080);
}

function draw() {
  background(220);
  spawnJef();
  moveJef();
  collision();
  centerJef()
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
    jef.x += jef.dx;
  }
  if (keyIsDown(16)) {
    //shift
    boost()
  }
//adds gravity and applies it
jef.dy += gravityProperties.strength;
jef.y += jef.dy

//
}

function spawnJef(){
  square(jef.x, jef.y, jef.size)
}

function collision() {
  if (jef.dy === 0) {
    isGrounded === true;
  }
  else {
    isGrounded === false;
  }

  //keeps jef from falling through ground
  if () {
    jef.y = height - jef.size;
  }
}

function jump() {
  // Checks if character is grounded
  if (jef.y + jef.size === height) {
    //adds jumpStrength to vertical velocitty
    jef.dy = jumpStrength;
  }
}

function centerJef() {
  if (keyIsDown(67)) {
    jef.x = width/2;
    jef.y = height/2;
    jef.dy = 0
    jef.dx = 0
  }
}c