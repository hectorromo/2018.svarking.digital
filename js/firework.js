var colors = [
  { h:60, s:49, b:100 },
  { h:213, s:38, b:97 },
  { h:95, s:28, b:85 },
  { h:1, s:60, b:90 }

  // { h:39, s:32, b:97 },
  // { h:21, s:44, b:95 },
  // { h:20, s:56, b:77 },
  // { h:90, s:8, b:83 }
]

function Firework() {
  this.hu = random(colors);
  // this.hu = random(255);
  // console.log(random(colors));
  this.firework = new Particle(random(width/2-50, width/2+50), height, this.hu, true);
  // this.firework = new Particle(random(width), height, this.hu, true);
  this.exploded = false;
  this.particles = [];

  this.done = function() {
    if (this.exploded && this.particles.length === 0) {
      return true;
    } else {
      return false;
    }
  }

  this.update = function() {
    if (!this.exploded) {
      this.firework.applyForce(gravity);
      this.firework.update();
      
      if (this.firework.vel.y >= 0) {
        this.exploded = true;
        this.explode();
      }
    }
    
    for (var i = this.particles.length - 1; i >= 0; i--) {
      this.particles[i].applyForce(gravity);
      this.particles[i].update();
      
      if (this.particles[i].done()) {
        this.particles.splice(i, 1);
      }
    }
  }

  this.explode = function() {
    for (var i = 0; i < 200; i++) {
      var p = new Particle(this.firework.pos.x, this.firework.pos.y, this.hu, false);
      this.particles.push(p);
    }
  }

  this.show = function() {
    if (!this.exploded) {
      this.firework.show();
    }
    
    for (var i = 0; i < this.particles.length; i++) {
      this.particles[i].show();
    }
  }
}
