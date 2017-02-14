function setup() {
  createCanvas(800,300);
}

function draw() {
  // draw background
  background(240,240,240,30);
  // style drawing
  fill('#ed225d');
  noStroke();
  //draw a new circle
  var x = random() * width;
  var y = random() * height;
  var size = random() * 10 + 10;
  ellipse(x,y,size);
}