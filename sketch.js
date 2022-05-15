var blob;

var blobs = [];
var zoom = 1;

function setup() {
  createCanvas(600, 600);
  blob = new Blob(0, 0, 64); //size and puts it in the middle 
  for (var i = 0; i < 200; i++) {
    var x = random(-width, width);// puts it in a random location
    var y = random(-height, height);//puts it in a random location
    blobs[i] = new Blob(x, y, 16);// size of smaller orb
  }
}

function draw() {
  background(0);

  translate(width / 2, height /2); // to move the screen to follow the mouse
  
  var newzoom = 64 / blob.r;// to zoom out of the screen
  
  zoom = lerp(zoom, newzoom, 0.1);// zooms out 
  scale(zoom);
  translate(-blob.pos.x, -blob.pos.y);//to shift the origin of the orb and scale the world

  for (var i = blobs.length - 1; i >= 0; i--) {
    blobs[i].show();
    if (blob.eats(blobs[i])) {//if the orb eats a blob
      blobs.splice(i, 1);//to remove the blob
    }
  }


  blob.show();
  blob.update();

}