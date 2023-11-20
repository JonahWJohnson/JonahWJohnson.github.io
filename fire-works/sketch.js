// fire works demo

let theFireworks = [];

class Particle {
  constructor(x, y, dx, dy) {
    this.spotClicked;
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = 5;
    this.r = 255;
    this.g = 0;
    this.b = 0;
    this.alpha = 255;
  }


  display() {
    noStroke()
    fill(this.r, this.g, this.b, this.alpha);
    circle(this.x, this.y, this.radius*2)
  }

  update() {
    //move
    this.x += this.dx
    this.y += this.dy

    //make transparent
    this.alpha--;
  }
  isDead() {
    return this.alpha <= 0;
  }
}



function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);

  //for (let Particle of theFireworks) {
    for (let i = theFireworks.length; i >=0; i--) {
      let Particle = 
      Particle.update();
      Particle.display();
      if (Particle.isDead()) {
        theFireworks.splice(i, 1)
      }
    }
  //}
}

function mousePressed() {
  for (let i = 0; i < 100; i++){
    let dx = random(-5, 5);
    let dy = random(-5, 5);
    theFireworks.push(new Particle(mouseX, mouseY, dx, dy ));

  }
}
