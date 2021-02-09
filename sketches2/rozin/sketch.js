let w = 320;
let h = 180;
let capture;

function setup() {
  let c = createCanvas(w, h);
  c.parent("#sketch-parent");
  pixelDensity(1);
  capture = createCapture(VIDEO);
  capture.size(w, h);
  capture.hide();
}

function draw() {
  background(255);
  
  
  
  let stepSize = 10;
  capture.loadPixels();
  // let threshold = 127;
  let threshold = map(mouseX, 0, width, 0, 255, true);
  
  for(let y = 0; y < capture.height; y+=stepSize) {
    for(let x = 0; x < capture.width; x+=stepSize) {
      const index = (x + y * capture.width) * 4;
      
      let r = capture.pixels[index];
      let g = capture.pixels[index+1];
      let b = capture.pixels[index+2];
      let c = color(r, g, b);
      
      let totalBrightness = r + g + b;
      
      let brightness = totalBrightness/3;
      
      let size = map(brightness, 0, 255, stepSize/4, stepSize*2);
      noStroke();
      //fill(255, 200, 225);
      fill(c);
      
      // RECTANGLES
      
      push();
        translate(width, 0);
        scale(-1, 1);
        
        rect(x, y, size, size);
      pop();
      
      // ELLIPSES
      // push();
      //   translate(width, 0);
      //   scale(-1, 1);
      //   translate(stepSize/2, stepSize/2);
      //   ellipse(x, y, size, size);
      // pop();
      
    }
  }  
}