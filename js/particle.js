function Particle(x, y, hu, firework) {
  this.pos = createVector(x, y);
  this.firework = firework;
  this.lifespan = 300;
  this.hu = hu.h;
  this.s = hu.s;
  this.acc = createVector(0, 0);

  if (this.firework) {
    this.vel = createVector(random(-1, 1), random(-9, -8));
  } else {
    this.vel = p5.Vector.random2D();
    this.vel.mult(random(2, 11));
  }
 
  this.applyForce = function(force) {
    this.acc.add(force);
  }

  this.update = function() {
    if (!this.firework) {
      this.vel.mult(0.95);
      this.lifespan -= 3;
    }
    
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);
  }

  this.done = function() {
    if (this.lifespan < 0) {
      return true;
    } else {
      return false;
    }
  }

  this.show = function() {
    colorMode(HSB);

    if (!this.firework) {
      strokeWeight(2);
      stroke(this.hu, this.s, this.lifespan);
      // stroke(hu, 255, this.lifespan);
    } else {
      strokeWeight(2);
      stroke(51.43, 93.33, 100);
      // stroke(hu, 255, 255);
    }
    
    point(this.pos.x, this.pos.y);
  }
}
