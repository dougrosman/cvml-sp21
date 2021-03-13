const MAX_DIMENSION = 400;
const ASPECT_RATIO = 1;
const IS_LANDSCAPE = true;

/////////////////////////////////////////////////
///////////// ADD SKETCH CODE BELOW /////////////
// \/  \/  \/  \/  \/  \/  \/  \/  \/  \/  \/  \/

let w = 640;
let h = 360;
let fr = 24;
var redE = [];
var greenE = [];
var blueE = [];
var whiteE = [];
var blackE = [];
var fleshE = [];
var brownE = [];
var purpleE = [];
var yellowE = [];
var orangeE = [];
let s = 20;

function preload() {
  for (var i = 0; i < 262; i++) {
    redE[i] = loadImage('red' + i + '.png');
  }
  for (var i2 = 0; i2 < 134; i2++) {
    greenE[i2] = loadImage('green' + i2 + '.png');
  }
  for (var i3 = 0; i3 < 310; i3++) {
    blueE[i3] = loadImage('blue' + i3 + '.png');
  }
  for (var i4 = 0; i4 < 218; i4++) {
    whiteE[i4] = loadImage('white' + i4 + '.png');
  }
  for (var i5 = 0; i5 < 369; i5++) {
    blackE[i5] = loadImage('black' + i5 + '.png');
  }
  for (var i6 = 0; i6 < 306; i6++) {
    brownE[i6] = loadImage('brown' + i6 + '.png');
  }
  for (var i7 = 0; i7 < 698; i7++) {
    fleshE[i7] = loadImage('flesh' + i7 + '.png');
  }
  for (var i8 = 0; i8 < 442; i8++) {
    yellowE[i8] = loadImage('yellow' + i8 + '.png');
  }
  for (var i9 = 0; i9 < 106; i9++) {
    orangeE[i9] = loadImage('orange' + i9 + '.png');
  }
  for (var i10 = 0; i10 < 242; i10++) {
    purpleE[i10] = loadImage('purple' + i10 + '.png');
  }
}

function setup() {
  createCanvas(w, h);
  frameRate(fr);
  pixelDensity(1);
  capture = createCapture(VIDEO);
  capture.size(w, h);
  capture.hide();
  capture.position(CENTER);
}

function draw() {
  background(255, 255, 255);
  let stepSize = 6;
  capture.loadPixels();
  push();
  translate(width, 0);
  scale(-1, 1);
  for (let y = 0; y < capture.height; y += stepSize) {
    for (let x = 0; x < capture.width; x += stepSize) {
      const index = (x + y * capture.width) * 4;
      let r = capture.pixels[index];
      let g = capture.pixels[index + 1];
      let b = capture.pixels[index + 2];
      if (r > g + 100 && r > b + 100) {
        image(random(redE), x, y, s, s);
      }
      if (r == 0 && g == 255 && b == 0) {
        image(random(greenE), x, y, s, s);
      }
      if (r == 0 && g == 0 && b == 255) {
        image(random(blueE), x, y, s, s);
      }
      if (r == 0 && g == 0 && b == 0) {
        image(random(blackE), x, y, s, s);
      }
      if (r == 255 && g == 255 && b == 255) {
        image(random(whiteE), x, y, s, s);
      }
      if (r == 139 && g == 69 && b == 19) {
        image(random(brownE), x, y, s, s);
      }
      if (r == 255 && g == 235 && b == 205) {
        image(random(fleshE), x, y, s, s);
      }
      if (r == 255 && g == 255 && b == 0) {
        image(random(yellowE), x, y, s, s);
      }
      if (r == 255 && g == 165 && b == 0) {
        image(random(orangeE), x, y, s, s);
      }
      if (r == 255 && g == 20 && b == 147) {
        image(random(purpleE), x, y, s, s);
      }
    }
  }
  pop();
  capture.updatePixels();
}





// /\  /\  /\  /\  /\  /\  /\  /\  /\  /\  /\  /\
///////////// ADD SKETCH CODE ABOVE /////////////
/////////////////////////////////////////////////

function windowResized() {
  setCanvasSize(MAX_DIMENSION, ASPECT_RATIO, IS_LANDSCAPE);
  resizeCanvas(w, h);
}

function setCanvasSize(maxDimension, aspectRatio, landscape) {

  let sketchParent = document.querySelector("#sketch-parent");
  let paddingStr = window.getComputedStyle(sketchParent).getPropertyValue('padding-left');
  let paddingAmt = +(paddingStr.slice(0, paddingStr.indexOf('p')));
  console.log(paddingAmt);

  if (innerWidth - (paddingAmt * 2) < maxDimension) {
    maxDimension = innerWidth - (paddingAmt * 2);
  }

  if (landscape) {
    w = maxDimension;
    h = w / aspectRatio;
  } else {
    h = maxDimension;
    w = h / aspectRatio;
  }
}