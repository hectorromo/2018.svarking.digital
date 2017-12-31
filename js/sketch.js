var fireworks = [];
var gravity;

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB);
  gravity = createVector(0, 0.07);
  stroke(255);
  strokeWeight(2);
  background(203, 92, 15);
}

function draw() {
  colorMode(RGB);
  background(3, 25, 39, 35);
  
  if (random(1) < 0.028) {
    fireworks.push(new Firework());
  }
  
  for (var i = fireworks.length - 1; i >= 0; i--) {
    fireworks[i].update();
    fireworks[i].show();
    
    if (fireworks[i].done()) {
      fireworks.splice(i, 1);
    }
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}