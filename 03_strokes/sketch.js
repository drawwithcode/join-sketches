function setup() {
  createCanvas(800,300)
}

//create avriables
var x1,y1,x2,y2

function draw() {
  // draw background
  background(240,240,240,30);
  // style drawing
  stroke('#f49334');
  strokeWeight(2);
  //in half the cases, draw horizontal line. in the other half, draw a vertical one.
  if(random() > 0.5) {
    // horizontal
    x1 = 0;
    x2 = width;
    y1 = random() * height;
    y2 = random() * height;
  } else {
    // vertical
    x1 = random() * width;
    x2 = random() * width;
    y1 = 0;
    y2 = height;
  }
  
  line(x1, y1, x2, y2);
  
}