// Declare kinectron
let kinectron;
let liveData = false;
let sentTime = Date.now();
let currentFrame = 0;
let recorded_skeleton;
let recorded_data_file = "recorded_skeleton.json";

function preload() {
  if (!liveData) {
    recorded_skeleton = loadJSON(recorded_data_file);
  }
}

function setup() {
  let canvas = createCanvas(960, 540);
  canvas.parent("#sketch-parent");

  // Set background color
  background(0);

  // Initialize Kinectron
  initKinectron();

  // set the color mode to HSB (Hue, Saturation, Brightness)
  colorMode(HSB, 255);

  if (liveData) initKinectron();
}

function draw() {
  if (!liveData) loopRecordedData();
}

function loopRecordedData() {
  // send data every 20 seconds
  if (Date.now() > sentTime + 20) {
    drawSkeleton(recorded_skeleton[currentFrame]);
    sentTime = Date.now();

    if (currentFrame < Object.keys(recorded_skeleton).length - 1) {
      currentFrame++;
    } else {
      currentFrame = 0;
    }
  }
}

function initKinectron() {
  // Define and create an instance of kinectron
  kinectron = new Kinectron("");

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
    fill(100);
    let hue = map(i, 0, body.joints.length, 0, 255);
    fill(hue, 255, 127);

    let jointSize = 24;
    let jointX = joint.depthX * width;
    let jointY = joint.depthY * height;
    // Map Kinect joint data to canvas size; Draw the circle
    ellipse(jointX, jointY, jointSize, jointSize);
    fill(255);
    text(i, jointX - jointSize/4, jointY + jointSize/4);
  }
}