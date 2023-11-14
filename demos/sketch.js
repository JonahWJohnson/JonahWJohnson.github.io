// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

class Dog {
  constructor(name, color, breed, age, size) {
    this.name = name;
    this.color = color;
    this.breed = breed;
    this.age = age;
    this.size = size;
  }

  bark() {
    console.log("Arf! says " + this.name);
  }
}

let spot = new Dog("spot", 'black', "poodle", 3, "smallish");
let rover = new Dog("rover", 'white', "pug", 5, "small");

function setup() {
  createCanvas(windowWidth, windowHeight);
  spot.bark()
  rover.bark()
}

function draw() {
  background(220);
}
