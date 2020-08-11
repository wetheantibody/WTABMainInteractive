// =============================================================
// =                           CORE CODE                       =
// =============================================================

// Variable for scene manager
var mgr;
var friendshipIndex = 0;

p5.disableFriendlyErrors = true;

function setup() {
	// We can create the interactive so that it starts with the current window width and height
	//createCanvas(windowWidth, (windowWidth / 16) * 9);
	createCanvas(1920, 1080)
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
	var kate = {
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

	var bg = loadImage('assets/Backgrounds/PNG/bird shelter.png')

  var imgAlpha = 0;
  var imgX = 500;
  var imgY = 200;

	var c = 0; // Variable so we can print the dialogue out like a typewriter

  var textBoxAlpha = 0;

  var dialogueIndex = 0;
  let dialogue = ["(Woah, I wasn't expecting this kind of reaction from my friends...What should I do?)",
									"(Oh my gosh, why are people so mean?)",
									"(Pigeons aren't government surveillance! And they aren't rats either!)",
									"(My friends are spreading this misinformation like crazy...Pigeons are so misunderstood.)",
									"(They're just birds that need homes!)",
									"(I guess...I guess I can't get this pigeon then. Not when my friends are so upset about it.)",
									"Alright! Looks like this little gal is ready for you to take her home!",
									"Oh- sorry, but I don't think I can take her home after all. My roommates all freaked out \n when I told them that I wanted to adopt a pigeon.",
									"What? Oh, no! That's a shame.",
									"Yeah, they were explaining to me some crazy facts about how they think pigeons are \ngovernment surveillance or gross like rats\-",
									"Woah woah woah, those are some pretty nasty rumors. Do they really believe that? \nDo you believe that?",
									"Well, no, but I don't really know how to change their minds. They are pretty opinionated \npeople.",
									"There is a lot of misinformation about pigeons online. I have been working with these \nawesome birds for a long time, and I can tell you for a fact that they are not what your \nfriends say they are.",
									"I agree! I think pigeons are super cute!",
									"Maybe you should try to talk to your friends about pigeons. Misinformation today is like \na pandemic and it spreads faster and wider than the truth.",
									"I encourage you to research where they got that misinformation and help them \nunderstand the truth about pigeons.",
									"Because I know this lil' gal is still going to need a home.",
									"That sounds like a solid plan. I really do want to take this cute pigeon home. \nI'll talk to my friends and see if I can change their minds. Look out for him for me!",
									"Will do! Good luck!"];

	var scale;
	var fadeInRate = 20;
	var slideInRate = 20;

  this.enter = function() {
		imgAudrey = audrey.frownPhone;
		imgKate = kate.happySpeakBird;
		scale = windowWidth / 1920;
  }

	// Another reserved function, sets up our canvas
  this.setup = function() {

    background(bg);
  }

	// This is the main drawing function - it will run constantly in a loop,
	// which is why we can update variables and create animation
  this.draw = function() {
    background(bg);

  	this.drawAudrey();
		if (dialogueIndex > 5) {
			this.drawKate();
		}
		// Textbox code, draws once image has faded in.
  	if (imgAlpha > 250) {
			this.drawText();
  	}
  }

	this.drawAudrey = function() {
		tint(255, imgAlpha);
  	image(imgAudrey, imgX * scale, 100 * scale, 800 * scale, 1067 * scale);
  	imgAlpha += fadeInRate;
  	if (imgX > 100 * scale) {
  		imgX -= slideInRate;
  	}
	}

	this.drawKate = function() {
		tint(255, imgAlpha);
		image(imgKate, 1200 * scale, 100 * scale, 800 * scale, 1067 * scale);
		imgAlpha += fadeInRate;
	}

	this.drawText = function() {
		noStroke();
		fill(255, 255, 255, textBoxAlpha);
		rect(100 * scale, 840 * scale, 1700 * scale, 200 * scale, 20);
		textBoxAlpha += 20;
		textSize(42 * scale);
		fill(0);
		text(dialogue[dialogueIndex].substring(0,c), 150 * scale, 910 * scale);
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
    if (dialogueIndex == 19) {
      this.sceneManager.showNextScene();
    }
  }

	this.windowResized = function() {
		scale = windowWidth / 1920;
		//resizeCanvas(windowWidth, (windowWidth/16) * 9);
	}
}

// ================== SCENE 2 ==================
function Scene2() {
	var audrey = {
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
