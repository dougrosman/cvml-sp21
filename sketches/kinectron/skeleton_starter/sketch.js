// Declare kinectron
let kinectron;

function setup() {
  let canvas = createCanvas(960, 540);
  canvas.parent("#sketch-parent");

  // Set background color
  background(0);

  // Initialize Kinectron
  initKinectron();

  // set the color mode to HSB (Hue, Saturation, Brightness)
  colorMode(HSB, 255);
}

function initKinectron() {
  // Define and create an instance of kinectron
  // kinectron = new Kinectron("10.17.18.9");
  // kinectron = new Kinectron("192.168.0.58");
  // kinection = new Kinectron("b375f6036e73.ngrok.io");
  kinectron = new Kinectron("10.19.18.28");

  // Set Kinect type to windows
  kinectron.setKinectType("windows");

  // Connect with server over peer
  kinectron.makeConnection();

  // Request all tracked bodies and pass data to your callback
  kinectron.startTrackedBodies(drawSkeleton);
}

// The incoming "body" argument holds the Kinect skeleton data
function drawSkeleton(body) {
  // Clear the background
  background(0);
  console.log(body);

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