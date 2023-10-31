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
  createCanvas(windowWidth, windowHeight);
  if (height > width) {
    cellSize = width/GRID_SIZE;
  }
  else {
    cellSize = height/GRID_SIZE;
  }
}

function draw() {
  background(220);
  displayGrid();
}


function displayGrid() {
  for (let y = 0; gridSize; y++) {
    for (let x = 0; gridSize; x++) {
      rect(x * cellSize, y * cellSize, cellSize, cellSize)
    }
  }
}

function displayCharacter() {

}