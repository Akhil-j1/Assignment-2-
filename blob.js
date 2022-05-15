// function for btoh your orb and the 'enemy' orb
function Blob(x, y, r) {
  this.pos = createVector(x, y); //stores an x and y compnent for a position on the screen
  this.r = r; //variable to keep tract of the size 
  this.vel = createVector(0, 0);

  this.update = function() { // to make the orb follow the mouse 
    var newvel = createVector(mouseX - width / 2, mouseY - height / 2);
    newvel.setMag(3);//new velocity
    this.vel.lerp(newvel, 0.2);
    this.pos.add(this.vel);
  }

  this.eats = function(other) { //to determine if the orb eats a blob
    var d = p5.Vector.dist(this.pos, other.pos); // to check the distance between the orb and the blob
    if (d < this.r + other.r) { // checks if the distance is less than the radius of both circles combined
      var sum = PI * this.r * this.r + PI * other.r * other.r; // sumn of the orb and blob
      this.r = sqrt(sum / PI);//increases in size 
      return true;
    } else {
      return false;
    }
  }

  this.show = function() {
    fill(100,20, 4);
    ellipse(this.pos.x, this.pos.y, this.r * 2, this.r * 2);
  }
}