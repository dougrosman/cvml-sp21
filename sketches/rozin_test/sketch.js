let w = 640;
let h = 360;
let capture;

function setup() {
  let c = createCanvas(w, h);
  c.parent('#sketch-parent');
  background(0);
  pixelDensity(1);
  capture = createCapture(VIDEO);
  capture.size(w, h);
  capture.hide();
}

function draw() {
  background(0);
  let stepSize = 10;
  capture.loadPixels();
  
  for(let y = 0; y < capture.height; y+=stepSize) {
    for(let x = 0; x < capture.width; x+=stepSize) {
      const index = (x + y * capture.width) * 4;
      
      let r = capture.pixels[index];
      let g = capture.pixels[index+1];
      let b = capture.pixels[index+2];
      let c = color(r, g, b);
      
      let totalBrightness = r + g + b;
      let brightness = totalBrightness/3;
      let size = map(brightness, 0, 255, stepSize/2, stepSize*2);
      
      // let scaleRatio;
      // if(windowWidth > windowHeight) {
      //   scaleRatio = windowHeight/capture.height;
      // } else {
      //   scaleRatio = windowWidth/capture.width;
      // }
      

      // RECTANGLES
      push();
        //scale(scaleRatio, scaleRatio);
        translate(capture.width, 0);
        scale(-1, 1);
        noStroke();
        fill(c);
        rect(x, y, size, size);
      pop();      
    }
  }
}

// function windowResized() {
//   resizeCanvas(windowWidth, windowHeight);
// }