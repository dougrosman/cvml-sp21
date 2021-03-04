function setup() {
  let canvas = createCanvas(innerWidth, innerHeight);
  canvas.parent('#sketch-parent');
  pixelDensity(1);
}

function draw() {
  background(200);

}

function windowResized() {
  resizeCanvas(innerWidth, innerHeight);
  background(200);
}

