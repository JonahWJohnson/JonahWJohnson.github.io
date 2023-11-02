// 2D Grid Game
// Jonah Johnson
// 
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let grid;
let cellSize;
let gridSize = 11;
let bMan = {
  x,
  y,

}


function setup() {
  createCanvas(400, 400);
  if (height > width) {
    cellSize = width/gridSize;
  }
  else {
    cellSize = height/gridSize;
  }
}

function draw() {
  background(220);
  displayGrid();
  displayCharacter();
}


function displayGrid() {
  for (let y = 0; gridSize; y++) {
    fill(0)
    for (let x = 0; gridSize; x++) {
      rect(x * cellSize, y * cellSize, cellSize, cellSize)
      fill(255)
    }
  }
}

function displayCharacter() {

}