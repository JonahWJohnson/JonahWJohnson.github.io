// 2D Grid Game
// Jonah Johnson
// 
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let p;
let tiles;
let tilesHigh, tilesWide;
let tileWidth, tileHeight;
let hardwall, softWall;
let mapBackground;
let mapToLoad;
let lines;
let bMan = {
  x : 0,
  y : 0,
}

function preload() {
  // load map data
  mapToLoad = "assets/map/map_0.txt";
  lines = loadStrings(mapToLoad);

  //load background
  mapBackground = loadImage("assets/images/background.png");

  //load tile images
  softWall = loadImage("assets/images/softWall.png");
  hardWall = loadImage("assets/images/hardWall.png");
  bomberMan = loadImage("assets/images/bMan.png")
  bomb = loadImage("assets/images/bomb.png")
  empty = loadImage("assets/images/empty.png");
}

function setup() {
  createCanvas(1000, 750);
  
  tilesHigh = lines.length;
  tilesWide = lines[0].length;

  tileWidth = width / tilesWide;
  tileHeight = height / tilesHigh;

  tiles = createEmpty2dArray(tilesWide, tilesHigh);

  //put values into 2d array of characters
  for (let y = 0; y< tilesHigh; y++) {
    for (let x = 0; x < tilesWide; x++) {
      let tileType = lines[y][x];
      tiles[y][x] = tileType;
    }
  }
}

function draw() {
  displayGrid();
}

function displayGrid() {
  image(mapBackground, 0, 0, width, height);

  for (let y = 0; y < tilesHigh; y++) {
    for (let x = 0; x < tilesWide; x++) {
      showTile(tiles[y][x], x, y);
    }
  }
}

function showTile(location, x, y) {
  if (location === "#") {
    image(hardWall, x * tileWidth, y * tileHeight, tileWidth, tileHeight);
  }
  else if (location === "*") {
    image(softWall, x * tileWidth, y * tileHeight, tileWidth, tileHeight);
  }

  else if (location === "M") {
    image(bomberMan, x * tileWidth, y * tileHeight, tileWidth, tileHeight);

    p = location;
    return p;
  }
  else if (location === "B") {
    image(bomb, x * tileWidth, y * tileHeight, tileWidth, tileHeight);
    
  }
  else {
    image(empty, x * tileWidth, y * tileHeight, tileWidth, tileHeight);
  }
}

function createEmpty2dArray(cols, rows) {
  let randomGrid = [];
  for (let y = 0; y < rows; y++) {
    randomGrid.push([]);
    for (let x = 0; x < cols; x++) {
      randomGrid[y].push(0);
    }
  }
  return randomGrid;
}

function checkInputs {
  if 
}