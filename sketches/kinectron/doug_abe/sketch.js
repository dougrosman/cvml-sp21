// Declare kinectron
let kinectron;
let w = 1440;
let h = 1440;
let frames = [];

function setup() {
  let canvas = createCanvas(w, h);
  canvas.parent("#sketch-parent");

  // Set background color
  background(0);

  // Initialize Kinectron
  initKinectron();

}

function draw() {
  // background(127);
}

function initKinectron() {  
  // Define and create an instance of kinectron
  kinectron = new Kinectron("192.168.0.58");

  // Set Kinect type to windows
  kinectron.setKinectType("windows");

  // Connect with server over peer
  kinectron.makeConnection();

  // Request all tracked bodies and pass data to your callback
  //kinectron.startDepth(drawDepth);
  kinectron.setColorCallback(colorCallback);
	kinectron.setDepthCallback(depthCallback);
	kinectron.setBodiesCallback(bodyCallback);

	// Set frames wanted from Kinectron 
	frames = ["color", "depth", "body"];

  kinectron.startMultiFrame(frames);
}


function colorCallback(colorImg) {
	loadImage(colorImg.src, function(loadedImage) {
    image(loadedImage, 0, 0);
  });
}

function depthCallback(depthImg) {
  loadImage(depthImg.src, function(img) {
    image(img, w/2, 0);
	});	
}

// The incoming "body" argument holds the Kinect skeleton data
function bodyCallback(body) {

  // Draw a circle at the location of each joint
  for (let i = 0; i < body.joints.length; i++) {
    // Get the joint
    let joint = body.joints[i];

    // Set the drawing color
    // fill(100);
    let hue = map(i, 0, body.joints.length, 0, 255);
    fill(hue, 255, 127);

    let jointSize = 24;
    let jointX = joint.depthX * width;
    let jointY = joint.depthY * height;

    // Map Kinect joint data to canvas size; Draw the circle
    ellipse(jointX, jointY, jointSize, jointSize);
    fill(255);
    text(joint.jointType, jointX - jointSize/4, jointY + jointSize/4);
  }
}