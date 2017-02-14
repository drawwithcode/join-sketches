function setup() {
  createCanvas(800,300);
}

function draw() {
  // draw background
  background(240,240,240,30);
  // style drawing
  fill('#00a1d3');
  noStroke();
  //set variables
  var x = random() * width;
  var y = random() * height;
  var size = random() * 20 + 20;
  var rotation = random() * PI * 2;
  
  //move to position and rotate
  translate(x,y);
  rotate(rotation);
  //draw rectangle
  rect(0, 0, size, size);
}