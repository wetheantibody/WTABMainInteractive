// =============================================================
// =                           CORE CODE                       =
// =============================================================

// Variable for scene manager
var mgr;

function setup() {
	// We can create the interactive so that it starts with the current window width and height
	createCanvas(windowWidth, windowHeight);
  mgr = new SceneManager();

  mgr.addScene ( Scene1 );
  mgr.addScene ( Scene2 );

  mgr.showNextScene();

}

function draw() {
	// I think this is the only code we want in the main draw, the scene manager
	// will handle drawing each scene
	mgr.draw();
}

// This function is provided by p5 and runs whenever the mouse is pressed.
function mousePressed() {
	// We let our scene manager handle the mouse pressed so that each scene can
	// handle it differently
  mgr.handleEvent("mousePressed");
}

// This is a function provided by p5 that triggers whenever the window
// is resized.
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

// =============================================================
// =                         BEGIN SCENES                      =
// =============================================================

function Scene1() {
  let jack;
  var img;
  var imgAlpha = 0;
  var imgX = 500;
  var imgY = 200;

  var textBoxAlpha = 0;

  var dialogueIndex = 0;
  let dialogue = ["Hi there! It's nice to meet you. My name's Jack.", "What's your name?"];

	// This is the syntax for functions in p5 with the scene manager. this.enter
	// is one of those reserved functions and will run everytime the scene
	// is run. We should probably find some way to load images into memory
	// instead of loading them every time.
  this.enter = function() {
    img = loadImage('https://openprocessing-usercontent.s3.amazonaws.com/files/user230475/visual939506/h73cdc2d9d96fd8cc2ca7c50e3c9f4507/Jack%201.png');
  }

	// Another reserved function, sets up our canvas
  this.setup = function() {
    background('#2b5d8a');
  }

	// This is the main drawing function - it will run constantly in a loop,
	// which is why we can update variables and create animation
  this.draw = function() {
    background('#2b5d8a');
		// Functions that affect objects and images are put before the image is
		// drawn - think of it as changing the setting on your paintbrush
		// before then drawing the image with your paintbrush
  	tint(255, imgAlpha);
  	image(img, imgX, imgY);
  	imgAlpha += 5;
  	if (imgX > 100) {
  		imgX -= 5;
  	}
  	if (imgAlpha > 250) {
  		noStroke();
  		fill(255, 255, 255, textBoxAlpha);
  		rect(100, 440, 800, 80, 20);
  		textBoxAlpha += 5;
  		textSize(24);
  		fill(0);
  		text(dialogue[dialogueIndex], 120, 490);
  	}
  }

	// Handles the mouse pressed event passed down by our scene manager
	// in the core code.
  this.mousePressed = function() {
    dialogueIndex++;
    if (dialogueIndex == 2) {
      this.sceneManager.showNextScene();
    }
  }
}

// Just some demo code for scene 2 - feel free to overwrite!! 
function Scene2() {
  this.y = 0;

  this.draw = function()
  {
      background("teal");

      line(0, this.y, width, this.y);
      this.y++;

      if ( this.y > height )
          this.y = 0;
  }
}
