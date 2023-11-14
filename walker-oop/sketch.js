// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

class Walker {
  constructor(x, y, color) {
    this.x = x;
    this.y = y;
    this.color = color;
    this.speed = 5;
    this.size = 5;
  }

  display() {
    noStroke();
    fill(this.color);
    circle(this.x, this.y, this.size);
  }

  move() {
    let theChoice = random(100);
    if (theChoice < 25) {
      //down
      this.y += this.speed;
    }
    else if (theChoice < 50) {
      //up
      this.y -= this.speed;
    }
    else if (theChoice < 75) {
      //left
      this.x -= this.speed;
    }
    else {
      //right
      this.x += this.speed
    }
  }
}

let gabe;
//let emma;
let theWalkers = [];


function setup() {
  createCanvas(windowWidth, windowHeight);
  gabe = new Walker (width/2, height/2, "orange");
  //emma = new Walker (width/2, height/2,"blue");
  theWalkers.push(gabe);


}

function draw() {
  for (let person of theWalkers) {
    person.move();
    person.display();
  }
  // gabe.move();
  // gabe.display();
  // emma.move();
  // emma.display();
}

function mousePressed() {
  let gabe
}
