// Arrays && Object Notation
// Jonah Johnson
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let jef = {
  x: 500,
  y: 500,
  dx: 8,
  dy: 0,
  size: 50,
  weight: 5,
  jumpStrength: -8,
}
let gravityProperties = {
  strength: 0.2,
  acceleration: 0.1,
}
let isInAir = true;


function setup() {
  createCanvas(1920, 1080);
}

function draw() {
  background(220);
  spawnJef();
  moveJef();
  centerJef();
  collision();
  console.log(isInAir);
}


function moveJef() {
// base movement 
  if (keyIsDown(32)) {
    //spacebar
    jump();
  }
  if (keyIsDown(65)) {
    //a move_left
    jef.x -= jef.dx;
  }
  if (keyIsDown(68)) {
    //d move_right
    jef.x += jef.dx;
  }
  if (keyIsDown(83)) {
    //s fast_fall
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
  square(jef.x, jef.y, jef.size);
  
}

function collision() {
  // checks if the character is on the ground
  if (jef.y + jef.size >= height) {
    //keeps character from falling through ground
    isInAir = false;
    jef.y = height - jef.size;
    jef.dy = 0;
  } else {
    isInAir = true;
  }
}

function jump() {
  // Checks if character is grounded
  if (!(isInAir)) {
    //adds jumpStrength to vertical velocitty
    jef.dy += jef.jumpStrength;
  }
}

function centerJef() {
  //c
  if (keyIsDown(67)) {
    jef.x = width/2;
    jef.y = height/2;
    jef.dy = 0
    jef.dx = 5
  }
}