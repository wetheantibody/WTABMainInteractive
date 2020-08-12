// =============================================================
// =                           CORE CODE                       =
// =============================================================

// Variable for scene manager
var mgr;
var friendshipIndex = 0;

p5.disableFriendlyErrors = true;

function preload() {
	audrey = [
		 loadImage('assets/Audrey/SVG/audrey_frowning_phone.svg'),
		 loadImage('assets/Audrey/SVG/audrey_frowning.svg'),
		 loadImage('assets/Audrey/SVG/audrey_happy_explaining.svg'),
		 loadImage('assets/Audrey/SVG/audrey_happy_speaking.svg'),
		 loadImage('assets/Audrey/SVG/audrey_laughing.svg'),
		 loadImage('assets/Audrey/SVG/audrey_searching_computer.svg'),
		 loadImage('assets/Audrey/SVG/audrey_shrugging.svg'),
		 loadImage('assets/Audrey/SVG/audrey_smiling_phone.svg'),
		 loadImage('assets/Audrey/SVG/audrey_smiling.svg'),
		 loadImage('assets/Audrey/SVG/audrey_surprised_computer.svg'),
		 loadImage('assets/Audrey/SVG/audrey_upset_explaining.svg'),
		 loadImage('assets/Audrey/SVG/audrey_upset_phone.svg'),
		 loadImage('assets/Audrey/SVG/audrey_upset_speaking.svg')
	];
	kate = [
		 loadImage('assets/Kate/SVG/kate frowning bird.svg'),
		 loadImage('assets/Kate/SVG/kate frowning.svg'),
		 loadImage('assets/Kate/SVG/kate happy explaining.svg'),
		 loadImage('assets/Kate/SVG/kate happy speaking bird.svg'),
		 loadImage('assets/Kate/SVG/kate happy speaking.svg'),
		 loadImage('assets/Kate/SVG/kate skeptical speaking bird.svg'),
		 loadImage('assets/Kate/SVG/kate smiling bird.svg'),
		 loadImage('assets/Kate/SVG/kate smiling.svg'),
		 loadImage('assets/Kate/SVG/kate upset explaining.svg'),
		 loadImage('assets/Kate/SVG/kate upset speaking bird.svg'),
		 loadImage('assets/Kate/SVG/kate upset speaking.svg')
];
	drew = [
		 loadImage('assets/Drew/SVG/drew apologetic explaining.svg'),
		 loadImage('assets/Drew/SVG/drew frowning.svg'),
		 loadImage('assets/Drew/SVG/drew happy explaining.svg'),
		 loadImage('assets/Drew/SVG/drew skeptical.svg'),
		 loadImage('assets/Drew/SVG/drew smiling.svg'),
		 loadImage('assets/Drew/SVG/drew surprised.svg'),
		 loadImage('assets/Drew/SVG/drew upset phone.svg'),
		 loadImage('assets/Drew/SVG/drew upset speaking.svg')
];
	emily = [
		 loadImage('assets/Emily/SVG/emily happy explaining.svg'),
		 loadImage('assets/Emily/SVG/emily neutral explaining.svg'),
		 loadImage('assets/Emily/SVG/emily neutral.svg'),
		 loadImage('assets/Emily/SVG/emily skeptical.svg'),
		 loadImage('assets/Emily/SVG/emily smiling.svg'),
		 loadImage('assets/Emily/SVG/emily upset phone.svg'),
		 loadImage('assets/Emily/SVG/emily upset speaking.svg')
 ];
	jack = [
		 loadImage('assets/Jack/SVG/jack apologetic explaining.svg'),
		 loadImage('assets/Jack/SVG/jack apologetic smile.svg'),
		 loadImage('assets/Jack/SVG/jack apologetic speaking.svg'),
		 loadImage('assets/Jack/SVG/jack browsing phone.svg'),
		 loadImage('assets/Jack/SVG/jack happy speaking.svg'),
		 loadImage('assets/Jack/SVG/jack neutral explaining phone.svg'),
		 loadImage('assets/Jack/SVG/jack neutral phone.svg'),
		 loadImage('assets/Jack/SVG/jack neutral speaking.svg'),
		 loadImage('assets/Jack/SVG/jack smiling.svg')
];
	pigeon = [
		 loadImage('assets/Pigeon/SVG/pigeon cage.svg'),
		 loadImage('assets/Pigeon/SVG/pigeon flapping.svg'),
		 loadImage('assets/Pigeon/SVG/pigeon.svg')
 ];
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
	createCanvas(1440, 900)
	frameRate(60);

  mgr = new SceneManager();

  mgr.addScene ( Scene1 );
  mgr.addScene ( Scene2 );
	mgr.addScene ( Scene3 );
	// mgr.addScene ( Scene4 );
	// mgr.addScene ( Scene5 );

  mgr.showNextScene([actors, backgrounds, script, 100]);

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

	var c = 0; // Variable so we can print the dialogue out like a typewriter

  var textBoxAlpha = 0;

  var dialogueIndex = 0;
  var dialogue;

	var friendshipIndex;

	var scale = 1;

	// loadImage('assets/Kate/SVG/kate frowning bird.svg'), 0
	// loadImage('assets/Kate/SVG/kate frowning.svg'), 1
	// loadImage('assets/Kate/SVG/kate happy explaining.svg'), 2
	// loadImage('assets/Kate/SVG/kate happy speaking bird.svg'), 3
	// loadImage('assets/Kate/SVG/kate happy speaking.svg'), 4
	// loadImage('assets/Kate/SVG/kate skeptical speaking bird.svg'), 5
	// loadImage('assets/Kate/SVG/kate smiling bird.svg'), 6
	// loadImage('assets/Kate/SVG/kate smiling.svg'), 7
	// loadImage('assets/Kate/SVG/kate upset explaining.svg'), 8
	// loadImage('assets/Kate/SVG/kate upset speaking bird.svg'), 9
	// loadImage('assets/Kate/SVG/kate upset speaking.svg') 10

	var audreyExpressions = [8, 7, 0, 0, 0, 6, 11, 11, 11, 1, 1, 10, 1, 12, 1, 12, 1, 6, 1, 1, 2, 8]
	var kateExpressions = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 9, 0, 9, 0, 9, 6, 3, 3, 6, 3]
	// 0 - Narrator, 1 - Audrey, 2 - Audrey Thoughts, 3 - Kate, 4 - Drew, 5 - Emily, 6 - Jack
	var whoSpeaking = [0, 2, 4, 5, 6, 2, 0, 2, 2, 2, 3, 1, 3, 1, 3, 1, 3, 1, 3, 3, 1, 3]

	// Another reserved function, sets up our canvas
  this.setup = function() {
		audrey = this.sceneArgs[0].audrey;
		kate = this.sceneArgs[0].kate;
		imgAudrey = audrey[0];
		imgKate = kate[0];
		bg = this.sceneArgs[1].birdShelter;
	  dialogue=this.sceneArgs[2].sceneOne;
		friendshipIndex = this.sceneArgs[3];
    background(bg);
  }

	// enter() happens after setup() but before draw()
	this.enter = function() {
		//scale = windowWidth / 1440;
	}

	// This is the main drawing function - it will run constantly in a loop,
	// which is why we can update variables and create animation
  this.draw = function() {
		background(bg);
		this.drawAudrey();
		if (dialogueIndex > 9) {
			this.drawKate();
		}
		// Textbox code, draws once image has faded in.
		this.drawText();
		this.drawFriendship();
  }

	this.drawAudrey = function() {
  	image(imgAudrey, 60 * scale, 40 * scale, 646 * scale, 861 * scale);
	}

	this.drawKate = function() {
		image(imgKate, 738 * scale, 24 * scale, 657 * scale, 876 * scale);
	}

	this.drawText = function() {
		noStroke();
		// Background
		fill(255, 255, 255, 200);
		rect(0, 758 * scale, 1440 * scale, 142 * scale);
		// Currently speaking
		// Conditional here for fill color
		fill('#6D7488');
		rect(61 * scale, 797 * scale, 180 * scale, 66 * scale, 30);
		textSize(35 * scale);
		textStyle(BOLD);
		fill(255);
		textAlign(CENTER, CENTER);
		var speaker;
		switch(whoSpeaking[dialogueIndex]) {
			case 0:
				speaker = "Narrator"
				break;
			case 3:
				speaker = "Kate"
				break;
			case 4:
				speaker = "Drew"
				break;
			case 5:
				speaker = "Emily"
				break;
			case 6:
				speaker = "Jack"
				break;
			default:
				speaker = "Audrey"
				break;
		}
		text(speaker, 61 * scale, 800 * scale, 180 * scale, 66 * scale);

		// Dialogue
		textSize(25 * scale);
		textStyle(NORMAL);
		textAlign(LEFT, CENTER);
		fill(0);
		text(dialogue[dialogueIndex].substring(0,c), 316 * scale, 758 * scale, 808 * scale, 142 * scale);
		c += 5;
	}

	this.drawFriendship = function() {
		textSize(20 * scale);
		fill(0);
		textAlign(CENTER, CENTER);
		text("Friendship Index", 1195 * scale, 785 * scale, 180 * scale, 32 * scale);
		strokeWeight(6);
		fill(255, 255, 255, 0);
		stroke('#AFAFAF');
		rect(1174 * scale, 825 * scale, 221 * scale, 40 * scale, 50);
		fill(2.5 * (100 - friendshipIndex) + 100, 2.5 * friendshipIndex, 100, 255);
		noStroke();
		rect(1182 * scale, 832 * scale, 204 * (friendshipIndex/100) * scale, 26 * scale, 50);
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
			imgAudrey = audrey[audreyExpressions[dialogueIndex]];
			imgKate = kate[kateExpressions[dialogueIndex]];
			c = 0;
		}
    if (dialogueIndex >= totalLength) {
      this.sceneManager.showNextScene(this.sceneArgs);
    }
  }

	this.windowResized = function() {
		//scale = windowWidth / 1440;
		//resizeCanvas(windowWidth, (windowWidth/16) * 9);
	}
}

// ================== SCENE 2 ==================
function Scene2() {
	var audrey;
	var drew;

	var bg;

	var c = 0; // Variable so we can print the dialogue out like a typewriter

  var textBoxAlpha = 0;

  var dialogueIndex = 0;
  var dialogue;

	var friendshipIndex;

	var scale = 1;

	// Another reserved function, sets up our canvas
  this.setup = function() {
		audrey = this.sceneArgs[0].audrey;
		drew = this.sceneArgs[0].drew;
		imgAudrey = audrey[0];
		imgDrew = drew[0];
		bg = this.sceneArgs[1].audreyRoom;
	  dialogue = this.sceneArgs[2].sceneTwo;
		friendshipIndex = this.sceneArgs[3];
    background(bg);
  }

	// enter() happens after setup() but before draw()
	this.enter = function() {
		//scale = windowWidth / 1440;
	}

	// This is the main drawing function - it will run constantly in a loop,
	// which is why we can update variables and create animation
  this.draw = function() {
		background(bg);
		this.drawAudrey();
		if (dialogueIndex > 5) {
			this.drawDrew();
		}
		// Textbox code, draws once image has faded in.
		this.drawText();
		this.drawFriendship();
  }

	this.drawAudrey = function() {
  	image(imgAudrey, 60 * scale, 40 * scale, 646 * scale, 861 * scale);
	}

	this.drawDrew = function() {
		image(imgDrew, 738 * scale, 24 * scale, 657 * scale, 876 * scale);
	}

	this.drawText = function() {
		noStroke();
		// Background
		fill(255, 255, 255, 200);
		rect(0, 758 * scale, 1440 * scale, 142 * scale);
		// Currently speaking
		// Conditional here for fill color
		fill('#6D7488');
		rect(61 * scale, 797 * scale, 180 * scale, 66 * scale, 30);
		textSize(35 * scale);
		textStyle(BOLD);
		fill(255);
		textAlign(CENTER, CENTER);
		text("Narrator", 61 * scale, 800 * scale, 180 * scale, 66 * scale);

		// Dialogue
		textSize(25 * scale);
		textStyle(NORMAL);
		textAlign(LEFT, CENTER);
		fill(0);
		text(dialogue[dialogueIndex].substring(0,c), 316 * scale, 758 * scale, 808 * scale, 142 * scale);
		c += 5;
	}

	this.drawFriendship = function() {
		textSize(20 * scale);
		fill(0);
		textAlign(CENTER, CENTER);
		text("Friendship Index", 1195 * scale, 785 * scale, 180 * scale, 32 * scale);
		strokeWeight(6);
		fill(255, 255, 255, 0);
		stroke('#AFAFAF');
		rect(1174 * scale, 825 * scale, 221 * scale, 40 * scale, 50);
		fill(2.5 * (100 - friendshipIndex) + 100, 2.5 * friendshipIndex, 100, 255);
		noStroke();
		rect(1182 * scale, 832 * scale, 204 * (friendshipIndex/100) * scale, 26 * scale, 50);
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
    if (dialogueIndex >= 20) {
      this.sceneManager.showNextScene(this.sceneArgs);
    }
  }

	this.windowResized = function() {
		//scale = windowWidth / 1440;
		//resizeCanvas(windowWidth, (windowWidth/16) * 9);
	}
}
// ================== SCENE 3 ==================
function Scene3() {
	var audrey;
	var emily;

	var bg;

	var c = 0; // Variable so we can print the dialogue out like a typewriter

  var textBoxAlpha = 0;

  var dialogueIndex = 0;
  var dialogue;

	var friendshipIndex;

	var scale = 1;

	// Another reserved function, sets up our canvas
	this.setup = function() {
		audrey = this.sceneArgs[0].audrey;
		emily = this.sceneArgs[0].emily;
		imgAudrey = audrey[0];
		imgEmily = emily[0];
		bg = this.sceneArgs[1].livingRoom;
		dialogue=this.sceneArgs[2].sceneThree;
		friendshipIndex = this.sceneArgs[3];
		background(bg);
	}

	// enter() happens after setup() but before draw()
	this.enter = function() {
		//scale = windowWidth / 1440;
	}

	// This is the main drawing function - it will run constantly in a loop,
	// which is why we can update variables and create animation
  this.draw = function() {
		background(bg);
		this.drawAudrey();
		if (dialogueIndex > 5) {
			this.drawEmily();
		}
		// Textbox code, draws once image has faded in.
		this.drawText();
		this.drawFriendship();
  }

	this.drawAudrey = function() {
  	image(imgAudrey, 60 * scale, 40 * scale, 646 * scale, 861 * scale);
	}

	this.drawEmily = function() {
		image(imgEmily, 738 * scale, 24 * scale, 657 * scale, 876 * scale);
	}

	this.drawText = function() {
		noStroke();
		// Background
		fill(255, 255, 255, 200);
		rect(0, 758 * scale, 1440 * scale, 142 * scale);
		// Currently speaking
		// Conditional here for fill color
		fill('#6D7488');
		rect(61 * scale, 797 * scale, 180 * scale, 66 * scale, 30);
		textSize(35 * scale);
		textStyle(BOLD);
		fill(255);
		textAlign(CENTER, CENTER);
		text("Narrator", 61 * scale, 800 * scale, 180 * scale, 66 * scale);

		// Dialogue
		textSize(25 * scale);
		textStyle(NORMAL);
		textAlign(LEFT, CENTER);
		fill(0);
		text(dialogue[dialogueIndex].substring(0,c), 316 * scale, 758 * scale, 808 * scale, 142 * scale);
		c += 5;
	}

	this.drawFriendship = function() {
		textSize(20 * scale);
		fill(0);
		textAlign(CENTER, CENTER);
		text("Friendship Index", 1195 * scale, 785 * scale, 180 * scale, 32 * scale);
		strokeWeight(6);
		fill(255, 255, 255, 0);
		stroke('#AFAFAF');
		rect(1174 * scale, 825 * scale, 221 * scale, 40 * scale, 50);
		fill(2.5 * (100 - friendshipIndex) + 100, 2.5 * friendshipIndex, 100, 255);
		noStroke();
		rect(1182 * scale, 832 * scale, 204 * (friendshipIndex/100) * scale, 26 * scale, 50);
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
    if (dialogueIndex >= totalLength) {
      this.sceneManager.showNextScene(this.sceneArgs);
    }
  }

	this.windowResized = function() {
		//scale = windowWidth / 1440;
		//resizeCanvas(windowWidth, (windowWidth/16) * 9);
	}
}
// ================== SCENE 4 ==================
function Scene4() {

}
// ================== SCENE 5 ==================
function Scene5() {

}
