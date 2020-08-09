// =============================================================
// =                           CORE CODE                       =
// =============================================================

// Variable for scene manager
var mgr;
var friendshipIndex = 0;

p5.disableFriendlyErrors = true;

function setup() {
	// We can create the interactive so that it starts with the current window width and height
	createCanvas(windowWidth, windowHeight);
	frameRate(60);

  mgr = new SceneManager();

  mgr.addScene ( Scene1 );
  mgr.addScene ( Scene2 );
	mgr.addScene ( Scene3 );
	mgr.addScene ( Scene4 );
	mgr.addScene ( Scene5 );

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
  //resizeCanvas(windowWidth, windowHeight);
	mgr.handleEvent("windowResized");
}

// =============================================================
// =                         BEGIN SCENES                      =
// =                 Scene 1: Audrey at the Shelter            =
// =                  Scene 2: Audrey in her room              =
// =               Scene 3: Audrey in the living room          =
// =                 Scene 4: Audrey in Jack's room            =
// =                   Scene 5: Conclusion scene               =
// =============================================================

function Scene1() {
  var audrey = {
	  computer: loadImage('images/audrey/audrey computer.PNG'),
	  explain: loadImage('images/audrey/audrey happy explaining.PNG'),
	  speak: loadImage('images/audrey/audrey happy speaking.PNG'),
	  laugh: loadImage('images/audrey/audrey laugh.PNG'),
	  phone: loadImage('images/audrey/audrey phone.PNG'),
	  shrug: loadImage('images/audrey/audrey shrug.PNG'),
	  smile: loadImage('images/audrey/audrey smiling.PNG'),
	  surprise: loadImage('images/audrey/audrey surprise computer.PNG'),
	  unconvinced: loadImage('images/audrey/audrey unconvinced.PNG'),
	  upset_explaining: loadImage('images/audrey/audrey upset explaining.PNG'),
	  upset_speakign: loadImage('images/audrey/audrey upset speaking.PNG')
  };
	var kate = {

	};

  var imgAlpha = 0;
  var imgX = 500;
  var imgY = 200;

	var c = 0; // Variable so we can print the dialogue out like a typewriter

  var textBoxAlpha = 0;

  var dialogueIndex = 0;
  let dialogue = ["Hi there! It's nice to meet you. My name's Audrey.", "What's your name?"];

	var scale;
	var fadeInRate = 20;
	var slideInRate = 20;

  this.enter = function() {
		img = audrey.explain;
		scale = windowWidth / 1920;
  }

	// Another reserved function, sets up our canvas
  this.setup = function() {
    background('#2b5d8a');
  }

	// This is the main drawing function - it will run constantly in a loop,
	// which is why we can update variables and create animation
  this.draw = function() {
    background('#2b5d8a');

  	this.drawImage();
		// Textbox code, draws once image has faded in.
  	if (imgAlpha > 250) {
			this.drawText();
  	}
  }

	this.drawImage = function() {
		tint(255, imgAlpha);
  	image(img, imgX * scale, 100 * scale, 800 * scale, 1067 * scale);
  	imgAlpha += fadeInRate;
  	if (imgX > 100 * scale) {
  		imgX -= slideInRate;
  	}
	}

	this.drawText = function() {
		noStroke();
		fill(255, 255, 255, textBoxAlpha);
		rect(100 * scale, 840 * scale, 1700 * scale, 200 * scale, 20);
		textBoxAlpha += 20;
		textSize(42 * scale);
		fill(0);
		text(dialogue[dialogueIndex].substring(0,c), 150 * scale, 910 * scale);
		c++;
	}

	// Handles the mouse pressed event passed down by our scene manager
	// in the core code.
  this.mousePressed = function() {
		var totalLength = dialogue[dialogueIndex].length;
		if (c >= 0 && c < totalLength) {
			// Jump ahead if clicked while text is printing
			c = dialogue[dialogueIndex].length;
		} else {
			dialogueIndex++;
			c = 0;
		}
    if (dialogueIndex == 2) {
			this.friendshipIndex++;
      this.sceneManager.showNextScene();
    }
  }

	this.windowResized = function() {
		scale = windowWidth / 1920;
	}
}

// ================== SCENE 2 ==================
function Scene2() {
	var audrey = {
	  computer: loadImage('images/audrey/audrey computer.PNG'),
	  explain: loadImage('images/audrey/audrey happy explaining.PNG'),
	  speak: loadImage('images/audrey/audrey happy speaking.PNG'),
	  laugh: loadImage('images/audrey/audrey laugh.PNG'),
	  phone: loadImage('images/audrey/audrey phone.PNG'),
	  shrug: loadImage('images/audrey/audrey shrug.PNG'),
	  smile: loadImage('images/audrey/audrey smiling.PNG'),
	  surprise: loadImage('images/audrey/audrey surprise computer.PNG'),
	  unconvinced: loadImage('images/audrey/audrey unconvinced.PNG'),
	  upset_explaining: loadImage('images/audrey/audrey upset explaining.PNG'),
	  upset_speakign: loadImage('images/audrey/audrey upset speaking.PNG')
  };
	var drew = {

	};

  var imgAlpha = 0;
  var imgX = 500;
  var imgY = 200;

	var c = 0; // Variable so we can print the dialogue out like a typewriter

  var textBoxAlpha = 0;

  var dialogueIndex = 0;
  let dialogue = ["Hi there! This is Scene 2", "What's your name?"];

	var scale;
	var fadeInRate = 20;
	var slideInRate = 20;

  this.enter = function() {
		img = audrey.explain;
		scale = windowWidth / 1920;
  }

	// Another reserved function, sets up our canvas
  this.setup = function() {
    background('#2b5d8a');
  }

	// This is the main drawing function - it will run constantly in a loop,
	// which is why we can update variables and create animation
  this.draw = function() {
    background('#2b5d8a');

  	this.drawImage();
		// Textbox code, draws once image has faded in.
  	if (imgAlpha > 250) {
			this.drawText();
  	}
  }

	this.drawImage = function() {
		tint(255, imgAlpha);
  	image(img, imgX * scale, 100 * scale, 800 * scale, 1067 * scale);
  	imgAlpha += fadeInRate;
  	if (imgX > 100 * scale) {
  		imgX -= slideInRate;
  	}
	}

	this.drawText = function() {
		noStroke();
		fill(255, 255, 255, textBoxAlpha);
		rect(100 * scale, 840 * scale, 1700 * scale, 200 * scale, 20);
		textBoxAlpha += 20;
		textSize(42 * scale);
		fill(0);
		text(dialogue[dialogueIndex].substring(0,c), 150 * scale, 910 * scale);
		c++;
	}

	// Handles the mouse pressed event passed down by our scene manager
	// in the core code.
  this.mousePressed = function() {
		var totalLength = dialogue[dialogueIndex].length;
		if (c >= 0 && c < totalLength) {
			// Jump ahead if clicked while text is printing
			c = dialogue[dialogueIndex].length;
		} else {
			dialogueIndex++;
			c = 0;
		}
    if (dialogueIndex == 2) {
			this.friendshipIndex++;
      this.sceneManager.showNextScene();
    }
  }

	this.windowResized = function() {
		scale = windowWidth / 1920;
	}
}
// ================== SCENE 3 ==================
function Scene3() {
	var audrey = {
	  computer: loadImage('images/audrey/audrey computer.PNG'),
	  explain: loadImage('images/audrey/audrey happy explaining.PNG'),
	  speak: loadImage('images/audrey/audrey happy speaking.PNG'),
	  laugh: loadImage('images/audrey/audrey laugh.PNG'),
	  phone: loadImage('images/audrey/audrey phone.PNG'),
	  shrug: loadImage('images/audrey/audrey shrug.PNG'),
	  smile: loadImage('images/audrey/audrey smiling.PNG'),
	  surprise: loadImage('images/audrey/audrey surprise computer.PNG'),
	  unconvinced: loadImage('images/audrey/audrey unconvinced.PNG'),
	  upset_explaining: loadImage('images/audrey/audrey upset explaining.PNG'),
	  upset_speakign: loadImage('images/audrey/audrey upset speaking.PNG')
  };
	var emily = {

	};

  var imgAlpha = 0;
  var imgX = 500;
  var imgY = 200;

	var c = 0; // Variable so we can print the dialogue out like a typewriter

  var textBoxAlpha = 0;

  var dialogueIndex = 0;
  let dialogue = ["Hi there! This is Scene 3. Friendship index is " + this.friendshipIndex, "What's your name?"];

	var scale;
	var fadeInRate = 20;
	var slideInRate = 20;

  this.enter = function() {
		img = audrey.explain;
		scale = windowWidth / 1920;
  }

	// Another reserved function, sets up our canvas
  this.setup = function() {
    background('#2b5d8a');
  }

	// This is the main drawing function - it will run constantly in a loop,
	// which is why we can update variables and create animation
  this.draw = function() {
    background('#2b5d8a');

  	this.drawImage();
		// Textbox code, draws once image has faded in.
  	if (imgAlpha > 250) {
			this.drawText();
  	}
  }

	this.drawImage = function() {
		tint(255, imgAlpha);
  	image(img, imgX * scale, 100 * scale, 800 * scale, 1067 * scale);
  	imgAlpha += fadeInRate;
  	if (imgX > 100 * scale) {
  		imgX -= slideInRate;
  	}
	}

	this.drawText = function() {
		noStroke();
		fill(255, 255, 255, textBoxAlpha);
		rect(100 * scale, 840 * scale, 1700 * scale, 200 * scale, 20);
		textBoxAlpha += 20;
		textSize(42 * scale);
		fill(0);
		text(dialogue[dialogueIndex].substring(0,c), 150 * scale, 910 * scale);
		c++;
	}

	// Handles the mouse pressed event passed down by our scene manager
	// in the core code.
  this.mousePressed = function() {
		var totalLength = dialogue[dialogueIndex].length;
		if (c >= 0 && c < totalLength) {
			// Jump ahead if clicked while text is printing
			c = dialogue[dialogueIndex].length;
		} else {
			dialogueIndex++;
			c = 0;
		}
    if (dialogueIndex == 2) {
      this.sceneManager.showNextScene();
    }
  }

	this.windowResized = function() {
		scale = windowWidth / 1920;
	}
}
// ================== SCENE 4 ==================
function Scene4() {
	var audrey = {
	  computer: loadImage('images/audrey/audrey computer.PNG'),
	  explain: loadImage('images/audrey/audrey happy explaining.PNG'),
	  speak: loadImage('images/audrey/audrey happy speaking.PNG'),
	  laugh: loadImage('images/audrey/audrey laugh.PNG'),
	  phone: loadImage('images/audrey/audrey phone.PNG'),
	  shrug: loadImage('images/audrey/audrey shrug.PNG'),
	  smile: loadImage('images/audrey/audrey smiling.PNG'),
	  surprise: loadImage('images/audrey/audrey surprise computer.PNG'),
	  unconvinced: loadImage('images/audrey/audrey unconvinced.PNG'),
	  upset_explaining: loadImage('images/audrey/audrey upset explaining.PNG'),
	  upset_speakign: loadImage('images/audrey/audrey upset speaking.PNG')
  };
	var jack = {

	};

  var imgAlpha = 0;
  var imgX = 500;
  var imgY = 200;

	var c = 0; // Variable so we can print the dialogue out like a typewriter

  var textBoxAlpha = 0;

  var dialogueIndex = 0;
  let dialogue = ["Hi there! This is Scene 4", "What's your name?"];

	var scale;
	var fadeInRate = 20;
	var slideInRate = 20;

  this.enter = function() {
		img = audrey.explain;
		scale = windowWidth / 1920;
  }

	// Another reserved function, sets up our canvas
  this.setup = function() {
    background('#2b5d8a');
  }

	// This is the main drawing function - it will run constantly in a loop,
	// which is why we can update variables and create animation
  this.draw = function() {
    background('#2b5d8a');

  	this.drawImage();
		// Textbox code, draws once image has faded in.
  	if (imgAlpha > 250) {
			this.drawText();
  	}
  }

	this.drawImage = function() {
		tint(255, imgAlpha);
  	image(img, imgX * scale, 100 * scale, 800 * scale, 1067 * scale);
  	imgAlpha += fadeInRate;
  	if (imgX > 100 * scale) {
  		imgX -= slideInRate;
  	}
	}

	this.drawText = function() {
		noStroke();
		fill(255, 255, 255, textBoxAlpha);
		rect(100 * scale, 840 * scale, 1700 * scale, 200 * scale, 20);
		textBoxAlpha += 20;
		textSize(42 * scale);
		fill(0);
		text(dialogue[dialogueIndex].substring(0,c), 150 * scale, 910 * scale);
		c++;
	}

	// Handles the mouse pressed event passed down by our scene manager
	// in the core code.
  this.mousePressed = function() {
		var totalLength = dialogue[dialogueIndex].length;
		if (c >= 0 && c < totalLength) {
			// Jump ahead if clicked while text is printing
			c = dialogue[dialogueIndex].length;
		} else {
			dialogueIndex++;
			c = 0;
		}
    if (dialogueIndex == 2) {
      this.sceneManager.showNextScene();
    }
  }

	this.windowResized = function() {
		scale = windowWidth / 1920;
	}
}
// ================== SCENE 5 ==================
function Scene5() {
	var audrey = {
	  computer: loadImage('images/audrey/audrey computer.PNG'),
	  explain: loadImage('images/audrey/audrey happy explaining.PNG'),
	  speak: loadImage('images/audrey/audrey happy speaking.PNG'),
	  laugh: loadImage('images/audrey/audrey laugh.PNG'),
	  phone: loadImage('images/audrey/audrey phone.PNG'),
	  shrug: loadImage('images/audrey/audrey shrug.PNG'),
	  smile: loadImage('images/audrey/audrey smiling.PNG'),
	  surprise: loadImage('images/audrey/audrey surprise computer.PNG'),
	  unconvinced: loadImage('images/audrey/audrey unconvinced.PNG'),
	  upset_explaining: loadImage('images/audrey/audrey upset explaining.PNG'),
	  upset_speakign: loadImage('images/audrey/audrey upset speaking.PNG')
  };
	var emily = {

	};
	var jack = {

	};
	var drew = {

	};
	var late = {

	};

  var imgAlpha = 0;
  var imgX = 500;
  var imgY = 200;

	var c = 0; // Variable so we can print the dialogue out like a typewriter

  var textBoxAlpha = 0;

  var dialogueIndex = 0;
  let dialogue = ["Hi there! This is Scene 5", "What's your name?"];

	var scale;
	var fadeInRate = 20;
	var slideInRate = 20;

  this.enter = function() {
		img = audrey.explain;
		scale = windowWidth / 1920;
  }

	// Another reserved function, sets up our canvas
  this.setup = function() {
    background('#2b5d8a');
  }

	// This is the main drawing function - it will run constantly in a loop,
	// which is why we can update variables and create animation
  this.draw = function() {
    background('#2b5d8a');

  	this.drawImage();
		// Textbox code, draws once image has faded in.
  	if (imgAlpha > 250) {
			this.drawText();
  	}
  }

	this.drawImage = function() {
		tint(255, imgAlpha);
  	image(img, imgX * scale, 100 * scale, 800 * scale, 1067 * scale);
  	imgAlpha += fadeInRate;
  	if (imgX > 100 * scale) {
  		imgX -= slideInRate;
  	}
	}

	this.drawText = function() {
		noStroke();
		fill(255, 255, 255, textBoxAlpha);
		rect(100 * scale, 840 * scale, 1700 * scale, 200 * scale, 20);
		textBoxAlpha += 20;
		textSize(42 * scale);
		fill(0);
		text(dialogue[dialogueIndex].substring(0,c), 150 * scale, 910 * scale);
		c++;
	}

	// Handles the mouse pressed event passed down by our scene manager
	// in the core code.
  this.mousePressed = function() {
		var totalLength = dialogue[dialogueIndex].length;
		if (c >= 0 && c < totalLength) {
			// Jump ahead if clicked while text is printing
			c = dialogue[dialogueIndex].length;
		} else {
			dialogueIndex++;
			c = 0;
		}
    if (dialogueIndex == 2) {
      this.sceneManager.showNextScene();
    }
  }

	this.windowResized = function() {
		scale = windowWidth / 1920;
	}
}
