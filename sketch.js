// =============================================================
// =                           CORE CODE                       =
// =============================================================

// Variable for scene manager
var mgr;
var friendshipIndex = 0;

p5.disableFriendlyErrors = true;

function preload() {
	audrey = {
		frownPhone: loadImage('assets/Audrey/SVG/audrey_frowning_phone.svg'),
		frown: loadImage('assets/Audrey/SVG/audrey_frowning.svg'),
		happyExplain: loadImage('assets/Audrey/SVG/audrey_happy_explaining.svg'),
		happySpeak: loadImage('assets/Audrey/SVG/audrey_happy_speaking.svg'),
		laugh: loadImage('assets/Audrey/SVG/audrey_laughing.svg'),
		searchComputer: loadImage('assets/Audrey/SVG/audrey_searching_computer.svg'),
		shrug: loadImage('assets/Audrey/SVG/audrey_shrugging.svg'),
		smilePhone: loadImage('assets/Audrey/SVG/audrey_smiling_phone.svg'),
		smile: loadImage('assets/Audrey/SVG/audrey_smiling.svg'),
		surprisedComputer: loadImage('assets/Audrey/SVG/audrey_surprised_computer.svg'),
		upsetExplaining: loadImage('assets/Audrey/SVG/audrey_upset_explaining.svg'),
		upsetPhone: loadImage('assets/Audrey/SVG/audrey_upset_phone.svg'),
		upsetSpeaking: loadImage('assets/Audrey/SVG/audrey_upset_speaking.svg')
	};
	kate = {
		frownBird: loadImage('assets/Kate/SVG/kate frowning bird.svg'),
		frown: loadImage('assets/Kate/SVG/kate frowning.svg'),
		happyExplain: loadImage('assets/Kate/SVG/kate happy explaining.svg'),
		happySpeakBird: loadImage('assets/Kate/SVG/kate happy speaking bird.svg'),
		happySpeak: loadImage('assets/Kate/SVG/kate happy speaking.svg'),
		skepticalSpeak: loadImage('assets/Kate/SVG/kate skeptical speaking bird.svg'),
		smileBird: loadImage('assets/Kate/SVG/kate smiling bird.svg'),
		smile: loadImage('assets/Kate/SVG/kate smiling.svg'),
		upsetExplaining: loadImage('assets/Kate/SVG/kate upset explaining.svg'),
		upsetSpeakBird: loadImage('assets/Kate/SVG/kate upset speaking bird.svg'),
		upsetSpeaking: loadImage('assets/Kate/SVG/kate upset speaking.svg')
	};
	drew = {
		apologyExplain: loadImage('assets/Drew/SVG/drew apologetic explaining.svg'),
		frown: loadImage('assets/Drew/SVG/drew frowning.svg'),
		happyExplain: loadImage('assets/Drew/SVG/drew happy explaining.svg'),
		skeptical: loadImage('assets/Drew/SVG/drew skeptical.svg'),
		smile: loadImage('assets/Drew/SVG/drew smiling.svg'),
		upsetSurprised: loadImage('assets/Drew/SVG/drew surprised.svg'),
		upsetPhone: loadImage('assets/Drew/SVG/drew upset phone.svg'),
		upsetSpeaking: loadImage('assets/Drew/SVG/drew upset speaking.svg')
	};
	emily = {
		happyExplain: loadImage('assets/Emily/SVG/emily happy explaining.svg'),
		neutralExplain: loadImage('assets/Emily/SVG/emily neutral explaining.svg'),
		neutral: loadImage('assets/Emily/SVG/emily neutral.svg'),
		skeptical: loadImage('assets/Emily/SVG/emily skeptical.svg'),
		smile: loadImage('assets/Emily/SVG/emily smiling.svg'),
		upsetPhone: loadImage('assets/Emily/SVG/emily upset phone.svg'),
		upsetSpeaking: loadImage('assets/Emily/SVG/emily upset speaking.svg')
	};
	jack = {
		apologyExplain: loadImage('assets/Jack/SVG/jack apologetic explaining.svg'),
		apologySmile: loadImage('assets/Jack/SVG/jack apologetic smile.svg'),
		apologySpeak: loadImage('assets/Jack/SVG/jack apologetic speaking.svg'),
		browsePhone: loadImage('assets/Jack/SVG/jack browsing phone.svg'),
		happySpeak: loadImage('assets/Jack/SVG/jack happy speaking.svg'),
		neutralExplainPhone: loadImage('assets/Jack/SVG/jack neutral explaining phone.svg'),
		neutralPhone: loadImage('assets/Jack/SVG/jack neutral phone.svg'),
		neutralSpeak: loadImage('assets/Jack/SVG/jack neutral speaking.svg'),
		smile: loadImage('assets/Jack/SVG/jack smiling.svg')
	};
	pigeon = {
		cage: loadImage('assets/Pigeon/SVG/pigeon cage.svg'),
		flapping: loadImage('assets/Pigeon/SVG/pigeon flapping.svg'),
		pigeon: loadImage('assets/Pigeon/SVG/pigeon.svg')
	};
	actors = {
		audrey: audrey,
		kate: kate,
		drew: drew,
		emily: emily,
		jack: jack,
		pigeon: pigeon
	};

	backgrounds = {
		audreyRoom : loadImage('assets/Backgrounds/SVG/audrey_s room.svg'),
		birdShelter :loadImage('assets/Backgrounds/SVG/bird shelter 2.svg'),
		jackRoom : loadImage('assets/Backgrounds/SVG/jack_s room.svg'),
		kitchen :loadImage('assets/Backgrounds/SVG/kitchen.svg'),
		livingRoom : loadImage('assets/Backgrounds/SVG/living room.svg')
	};

	// Text
	sceneOneDialogue = loadStrings('assets/scene1.txt');
	sceneTwoDialogue = loadStrings('assets/scene2.txt');
	sceneThreeDialogue = loadStrings('assets/scene3.txt');
	script = {
		sceneOne : sceneOneDialogue,
		sceneTwo: sceneTwoDialogue,
		sceneThree: sceneThreeDialogue
	};
}

function setup() {
	// We can create the interactive so that it starts with the current window width and height
	//createCanvas(windowWidth, (windowWidth / 16) * 9);
	createCanvas(1920, 1080)
	frameRate(60);

  mgr = new SceneManager();

  mgr.addScene ( Scene1 );
  mgr.addScene ( Scene2 );
	mgr.addScene ( Scene3 );
	// mgr.addScene ( Scene4 );
	// mgr.addScene ( Scene5 );

  mgr.showNextScene([actors, backgrounds, script]);

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
  var audrey;
	var kate;

	var bg;

	var redraw;

	var c = 0; // Variable so we can print the dialogue out like a typewriter

  var textBoxAlpha = 0;

  var dialogueIndex = 0;
  var dialogue;

	var scale;

	// Another reserved function, sets up our canvas
  this.setup = function() {
		audrey = this.sceneArgs[0].audrey;
		kate = this.sceneArgs[0].kate;
		imgAudrey = audrey.frownPhone;
		imgKate = kate.happySpeakBird;
		bg = this.sceneArgs[1].birdShelter;
	  dialogue=this.sceneArgs[2].sceneOne;
    background(bg);
  }

	// enter() happens after setup() but before draw()
	this.enter = function() {
		scale = windowWidth / 1920;
		redraw = true;
	}

	// This is the main drawing function - it will run constantly in a loop,
	// which is why we can update variables and create animation
  this.draw = function() {
		if (redraw) {
			background(bg);
			this.drawAudrey();
			if (dialogueIndex > 5) {
				this.drawKate();
			}
		}
		// Textbox code, draws once image has faded in.
		this.drawText();
  }

	this.drawAudrey = function() {
  	image(imgAudrey, 100 * scale, 100 * scale, 800 * scale, 1067 * scale);
	}

	this.drawKate = function() {
		image(imgKate, 1200 * scale, 100 * scale, 800 * scale, 1067 * scale);
	}

	this.drawText = function() {
		noStroke();
		fill(255, 255, 255, textBoxAlpha);
		rect(100 * scale, 840 * scale, 1700 * scale, 200 * scale, 20);
		textBoxAlpha += 20;
		textSize(42 * scale);
		fill(0);
		text(dialogue[dialogueIndex].substring(0,c), 150 * scale, 910 * scale, 1600 * scale, 150 * scale);
		c += 5;
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
		if (dialogueIndex == 5) {
			redraw = true;
		}
    if (dialogueIndex >= 19) {
      this.sceneManager.showNextScene(this.sceneArgs);
    }
  }

	this.windowResized = function() {
		scale = windowWidth / 1920;
		//resizeCanvas(windowWidth, (windowWidth/16) * 9);
	}
}

// ================== SCENE 2 ==================
function Scene2() {
	var audrey;
	var drew;

	var bg

	var redraw;

	var c = 0; // Variable so we can print the dialogue out like a typewriter

  var textBoxAlpha = 0;

  var dialogueIndex = 0;
  var dialogue;

	var scale;

	// Another reserved function, sets up our canvas
  this.setup = function() {
		audrey = this.sceneArgs[0].audrey;
		drew = this.sceneArgs[0].drew;
		imgAudrey = audrey.frownPhone;
		imgDrew = drew.skeptical;
		bg = this.sceneArgs[1].audreyRoom;
	  dialogue = this.sceneArgs[2].sceneTwo;
    background(bg);
  }

	// enter() happens after setup() but before draw()
	this.enter = function() {
		scale = windowWidth / 1920;
		redraw = true;
	}

	// This is the main drawing function - it will run constantly in a loop,
	// which is why we can update variables and create animation
  this.draw = function() {
		if (redraw) {
			background(bg);
			this.drawAudrey();
			if (dialogueIndex > 2) {
				this.drawDrew();
			}
		}
		// Textbox code, draws once image has faded in.
		this.drawText();
  }

	this.drawAudrey = function() {
  	image(imgAudrey, 100 * scale, 100 * scale, 800 * scale, 1067 * scale);
	}

	this.drawDrew = function() {
		image(imgDrew, 1200 * scale, 100 * scale, 800 * scale, 1067 * scale);
	}

	this.drawText = function() {
		noStroke();
		fill(255, 255, 255, textBoxAlpha);
		rect(100 * scale, 840 * scale, 1700 * scale, 200 * scale, 20);
		textBoxAlpha += 20;
		textSize(42 * scale);
		fill(0);
		text(dialogue[dialogueIndex].substring(0,c), 150 * scale, 910 * scale, 1600 * scale, 150 * scale);
		c += 5;
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
		if (dialogueIndex == 3) {
			redraw = true;
			bg = this.sceneArgs[1].kitchen;
		}
    if (dialogueIndex == 20) {
      this.sceneManager.showNextScene(this.sceneArgs);
    }
  }

	this.windowResized = function() {
		scale = windowWidth / 1920;
		//resizeCanvas(windowWidth, (windowWidth/16) * 9);
	}
}
// ================== SCENE 3 ==================
function Scene3() {
	var audrey;
	var drew;

	var bg;

	var redraw;

	var c = 0; // Variable so we can print the dialogue out like a typewriter

	var textBoxAlpha = 0;

	var dialogueIndex = 0;
	var dialogue;

	var scale;

	// Another reserved function, sets up our canvas
	this.setup = function() {
		audrey = this.sceneArgs[0].audrey;
		emily = this.sceneArgs[0].emily;
		imgAudrey = audrey.frownPhone;
		imgEmily = emily.skeptical;
		bg = this.sceneArgs[1].livingRoom;
		dialogue=this.sceneArgs[2].sceneThree;
		background(bg);
	}

	// enter() happens after setup() but before draw()
	this.enter = function() {
		scale = windowWidth / 1920;
		redraw = true;
	}

	// This is the main drawing function - it will run constantly in a loop,
	// which is why we can update variables and create animation
	this.draw = function() {
		if (redraw) {
			background(bg);
			this.drawAudrey();
			this.drawEmily();
		}
		// Textbox code, draws once image has faded in.
		this.drawText();
	}

	this.drawAudrey = function() {
		image(imgAudrey, 100 * scale, 100 * scale, 800 * scale, 1067 * scale);
	}

	this.drawEmily = function() {
		image(imgEmily, 1200 * scale, 100 * scale, 800 * scale, 1067 * scale);
	}

	this.drawText = function() {
		noStroke();
		fill(255, 255, 255, textBoxAlpha);
		rect(100 * scale, 840 * scale, 1700 * scale, 200 * scale, 20);
		textBoxAlpha += 20;
		textSize(42 * scale);
		fill(0);
		text(dialogue[dialogueIndex].substring(0,c), 150 * scale, 910 * scale, 1600 * scale, 150 * scale);
		c += 5;
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
		if (dialogueIndex == 5) {
			redraw = true;
		}
		if (dialogueIndex == 57) {
			this.sceneManager.showNextScene(this.sceneArgs);
		}
	}

	this.windowResized = function() {
		scale = windowWidth / 1920;
		//resizeCanvas(windowWidth, (windowWidth/16) * 9);
	}
}
// ================== SCENE 4 ==================
function Scene4() {

}
// ================== SCENE 5 ==================
function Scene5() {

}
