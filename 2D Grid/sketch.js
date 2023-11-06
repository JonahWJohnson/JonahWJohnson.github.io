// 2D Grid Game
// Jonah Johnson
// 
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let tiles;
let tilesHigh, tileswide;
let tileWidth, tileHeight;
let hardwall, softWall
let grid;
let cellSize;
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
  //displayCharacter();
}

function displayGrid() {
  image(levelBackground, 0, 0, width, height);

  for (let y = 0; y < tilesHigh; y++) {
    for (let x = 0; x < tilesWide; x++) {
      showTile(tiles[y][x], x, y);
    }
  }
}

function displayCharacter() {

}