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
		 loadImage('assets/Drew/SVG/drew happy speaking.svg'),
		 loadImage('assets/Drew/SVG/drew neutral phone.svg'),
		 loadImage('assets/Drew/SVG/drew neutral speaking phone.svg'),
		 loadImage('assets/Drew/SVG/drew neutral up phone.svg'),
		 loadImage('assets/Drew/SVG/drew neutral up speaking phone.svg'),
		 loadImage('assets/Drew/SVG/drew neutral.svg'),
		 loadImage('assets/Drew/SVG/drew skeptical phone.svg'),
		 loadImage('assets/Drew/SVG/drew skeptical speaking phone.svg'),
		 loadImage('assets/Drew/SVG/drew skeptical speaking.svg'),
		 loadImage('assets/Drew/SVG/drew skeptical up phone.svg'),
		 loadImage('assets/Drew/SVG/drew skeptical up speaking phone.svg'),
		 loadImage('assets/Drew/SVG/drew skeptical.svg'),
		 loadImage('assets/Drew/SVG/drew smiling phone flipped.svg'),
		 loadImage('assets/Drew/SVG/drew smiling.svg'),
		 loadImage('assets/Drew/SVG/drew surprised.svg'),
		 loadImage('assets/Drew/SVG/drew upset phone.svg'),
		 loadImage('assets/Drew/SVG/drew upset speaking.svg')
];
	emily = [
		 loadImage('assets/Emily/SVG/emily angry explaining.svg'),
		 loadImage('assets/Emily/SVG/emily angry speaking.svg'),
		 loadImage('assets/Emily/SVG/emily angry.svg'),
		 loadImage('assets/Emily/SVG/emily happy explaining.svg'),
		 loadImage('assets/Emily/SVG/emily happy speaking.svg'),
		 loadImage('assets/Emily/SVG/emily neutral explaining.svg'),
		 loadImage('assets/Emily/SVG/emily neutral.svg'),
		 loadImage('assets/Emily/SVG/emily skeptical phone.svg'),
		 loadImage('assets/Emily/SVG/emily skeptical speaking phone.svg'),
		 loadImage('assets/Emily/SVG/emily skeptical up phone.svg'),
		 loadImage('assets/Emily/SVG/emily skeptical up speaking phone.svg'),
		 loadImage('assets/Emily/SVG/emily skeptical.svg'),
		 loadImage('assets/Emily/SVG/emily smiling phone.svg'),
		 loadImage('assets/Emily/SVG/emily smiling.svg'),
		 loadImage('assets/Emily/SVG/emily upset explaining.svg'),
		 loadImage('assets/Emily/SVG/emily upset phone.svg'),
		 loadImage('assets/Emily/SVG/emily upset speaking.svg')
 ];
	jack = [
		 loadImage('assets/Jack/SVG/jack apologetic explaining.svg'),
		 loadImage('assets/Jack/SVG/jack apologetic smile.svg'),
		 loadImage('assets/Jack/SVG/jack apologetic speaking.svg'),
		 loadImage('assets/Jack/SVG/jack browsing phone.svg'),
		 loadImage('assets/Jack/SVG/jack guilty speaking.svg'),
		 loadImage('assets/Jack/SVG/jack guilty.svg'),
		 loadImage('assets/Jack/SVG/jack happy speaking.svg'),
		 loadImage('assets/Jack/SVG/jack neutral explaining phone.svg'),
		 loadImage('assets/Jack/SVG/jack neutral phone.svg'),
		 loadImage('assets/Jack/SVG/jack neutral speaking.svg'),
		 loadImage('assets/Jack/SVG/jack neutral.svg'),
		 loadImage('assets/Jack/SVG/jack smiling flipped.svg'),
		 loadImage('assets/Jack/SVG/jack smiling.svg')
	 ];
	pigeon = [
		 loadImage('assets/Pigeon/SVG/pigeon cage.svg'),
		 loadImage('assets/Pigeon/SVG/pigeon flapping.svg'),
		 loadImage('assets/Pigeon/SVG/pigeon.svg')
 ];
 	phone = [
		loadImage('assets/Phone/BIRDBOOK DREW.svg'),
		loadImage('assets/Phone/Drew Comment.svg'),
		loadImage('assets/Phone/Drew post.svg'),
		loadImage('assets/Phone/Emily Comment.svg'),
		loadImage('assets/Phone/Emily Post.svg'),
		loadImage('assets/Phone/Jack Comment.svg'),
		loadImage('assets/Phone/Phone Post.svg'),
	]
	actors = {
		audrey: audrey,
		kate: kate,
		drew: drew,
		emily: emily,
		jack: jack,
		pigeon: pigeon,
		phone: phone,
	};

	backgrounds = {
		audreyRoom : loadImage('assets/Backgrounds/SVG/audrey_s room.svg'),
		birdShelter :loadImage('assets/Backgrounds/SVG/bird shelter 2.svg'),
		jackRoom : loadImage('assets/Backgrounds/SVG/jack_s room.svg'),
		kitchen :loadImage('assets/Backgrounds/SVG/kitchen.svg'),
		livingRoom : loadImage('assets/Backgrounds/SVG/living room.svg'),
		start: loadImage('assets/IntroEnd/landing page.svg'),
		end: loadImage('assets/IntroEnd/happy ending.svg')
	};

	// Text
	sceneOneDialogue = loadStrings('assets/scene1.txt');
	sceneTwoDialogue = loadStrings('assets/scene2.txt');
	sceneThreeDialogue = loadStrings('assets/scene3.txt');
	sceneFourDialogue = loadStrings('assets/scene4.txt');
	sceneFiveDialogue = loadStrings('assets/scene5.txt');
	script = {
		sceneOne : sceneOneDialogue,
		sceneTwo: sceneTwoDialogue,
		sceneThree: sceneThreeDialogue,
		sceneFour: sceneFourDialogue,
		sceneFive: sceneFiveDialogue
	};

	// Fonts
	graphik = {
		regular : loadFont('fonts/GraphikRegular.otf'),
		italic: loadFont('fonts/GraphikRegularItalic.otf'),
		bold: loadFont('fonts/GraphikBold.otf')
	}
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
	mgr.addScene ( Scene4 );
	mgr.addScene ( Scene5 );

  mgr.showNextScene([actors, backgrounds, script, 100, graphik]);

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
	var phone;
	var phoneX = 776;

	var drewPost;
	var emilyPost;
	var jackPost;

	var bg;

	var c = 0; // Variable so we can print the dialogue out like a typewriter

  var textBoxAlpha = 0;

	var graphik;

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

	var audreyExpressions = [8, 7, 0, 0, 0, 6, 11, 11, 11, 1, 1, 10, 1, 12, 1, 12, 1, 6, 1, 1, 2, 8, 8]
	var kateExpressions = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 9, 0, 9, 0, 9, 6, 3, 3, 6, 3, 3]
	// 0 - Narrator, 1 - Audrey, 2 - Audrey Thoughts, 3 - Kate, 4 - Drew, 5 - Emily, 6 - Jack
	var whoSpeaking = [0, 2, 4, 5, 6, 2, 0, 2, 2, 2, 3, 1, 3, 1, 3, 1, 3, 1, 3, 3, 1, 3, 3]

	// Another reserved function, sets up our canvas
  this.setup = function() {
		audrey = this.sceneArgs[0].audrey;
		kate = this.sceneArgs[0].kate;
		phone = this.sceneArgs[0].phone;
		imgAudrey = audrey[0];
		imgKate = kate[0];
		imgPhone = phone[6];
		drewPost = phone[1];
		emilyPost = phone[3];
		jackPost = phone[5];
		bg = this.sceneArgs[1].birdShelter;
		graphik = this.sceneArgs[4];
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
		if (dialogueIndex < 2 || dialogueIndex > 4) {
			this.drawAudrey();
		}
		if (dialogueIndex > 9) {
			this.drawKate();
		}
		if (dialogueIndex > 0 && dialogueIndex < 5) {
			this.drawPhone();
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

	this.drawPhone = function() {
		image(imgPhone, phoneX * scale, 105 * scale, 500 * scale, 920 * scale);
		if (dialogueIndex > 1) {
			if (phoneX > 165) {
				phoneX -= 30;
			}
			if (phoneX <= 165) {
				if (dialogueIndex >= 2) {
					image(drewPost, 754 * scale, 33 * scale, 532 * scale, 225 * scale);
					if (friendshipIndex > 70) {
						friendshipIndex -= 2;
					}
				}
				if (dialogueIndex >= 3) {
					image(emilyPost, 754 * scale, 279 * scale, 532 * scale, 197 * scale);;
					if (friendshipIndex > 40) {
						friendshipIndex -= 2;
					}
				}
				if (dialogueIndex >= 4) {
					image(jackPost, 754 * scale, 496 * scale, 532 * scale, 202 * scale);
					if (friendshipIndex > 10) {
						friendshipIndex -= 2;
					}
				}
			}
		}
	}

	this.drawText = function() {
		noStroke();
		// Background
		fill(255, 255, 255, 200);
		rect(0, 758 * scale, 1440 * scale, 142 * scale);
		// Currently speaking
		var speaker;
		var currFont = graphik.regular;
		switch(whoSpeaking[dialogueIndex]) {
			case 0:
				fill('#6D7488');
				speaker = "Narrator"
				break;
			case 1:
				fill('#843539');
				speaker = "Audrey"
				break;
			case 2:
				currFont = graphik.italic;
				fill('#843539');
				speaker = "Audrey"
				break;
			case 3:
				fill('#20252F');
				speaker = "Kate"
				break;
			case 4:
				fill('#30455D');
				speaker = "Drew"
				break;
			case 5:
				fill('#8FB7E5');
				speaker = "Emily"
				break;
			case 6:
				 fill('#EF8465');
				speaker = "Jack"
				break;
			default:
				fill('#843539');
				speaker = "Audrey"
				break;
		}
		rect(61 * scale, 797 * scale, 180 * scale, 66 * scale, 30);
		textSize(35 * scale);
		textStyle(BOLD);
		textFont(graphik.bold);
		fill(255);
		textAlign(CENTER, CENTER);
		text(speaker, 62 * scale, 795 * scale, 180 * scale, 66 * scale);

		// Dialogue
		textSize(25 * scale);
		textStyle(NORMAL);
		textFont(currFont);
		textAlign(LEFT, CENTER);
		fill(0);
		text(dialogue[dialogueIndex].substring(0,c), 316 * scale, 758 * scale, 808 * scale, 142 * scale);
		c += 5;
	}

	this.drawFriendship = function() {
		textSize(20 * scale);
		fill(0);
		textAlign(CENTER, CENTER);
		textFont(graphik.regular);
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
		var totalLength = dialogue.length;
		if (c >= 0 && c < totalLength) {
			// Jump ahead if clicked while text is printing
			c = dialogue[dialogueIndex].length;
		} else {
			dialogueIndex++;
			imgAudrey = audrey[audreyExpressions[dialogueIndex]];
			imgKate = kate[kateExpressions[dialogueIndex]];
			c = 0;
		}
    if (dialogueIndex >= totalLength - 1) {
			this.sceneArgs[3] = friendshipIndex;
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
	var phone;

	var bg;

	var option;

	var article;

	var c = 0; // Variable so we can print the dialogue out like a typewriter

  var textBoxAlpha = 0;

	var graphik;

  var dialogueIndex = 0;
  var dialogue;

	var friendshipIndex;

	var scale = 1;

	var audreyExpressions = [6, 6, 10, 6, 9, 4, 2, 4, 9, 3, 2, 13, 2, 2, 2, 2, 2, 2, 3, 9, 4, 9, 8, 8, 8, 8, 8, 9, 4, 9, 3, 5, 3, 9, 4, 9, 4, 5, 4, 4, 3, 9, 4, 9, 4, 9, 3, 9, 4, 9, 9, 3, 9, 8, 8, 8, 8, 8, 9, 3, 9, 4, 9, 3, 9, 4, 9, 4, 5, 4]
	var drewExpressions = [17, 17, 17, 17, 17, 17, 20, 2, 20, 15, 20, 15, 19, 19, 19, 19, 19, 19, 15, 12, 15, 12, 15, 15, 15, 15, 15, 18, 9, 18, 9, 1, 17, 3, 17, 3, 17, 4, 17, 17, 7, 6, 7, 6, 7, 8, 7, 6, 5, 6, 8, 7, 12, 15, 15, 15, 15, 15, 18, 9, 18, 9, 1, 17, 3, 17, 3, 4, 17, 17]
	// 0 - Narrator, 1 - Audrey, 2 - Audrey Thoughts, 3 - Kate, 4 - Drew, 5 - Emily, 6 - Jack
	var whoSpeaking = [2, 2, 2, 2, 4, 1, 4, 1, 4, 1, 4, 1, 4, 4, 4, 4, 4, 4, 1, 4, 1, 4, 1, 1, 1, 1, 1, 4, 1, 4, 1, 4, 1, 4, 1, 4, 1, 4, 1, 1, 1, 4, 1, 4, 1, 4, 1, 4, 1, 4, 4, 1, 4, 1, 1, 1, 1, 1, 4, 1, 4, 1, 4, 1, 4, 1, 4, 1, 4, 1, 1]

	// Another reserved function, sets up our canvas
  this.setup = function() {
		option = false;
		article = false;
		audrey = this.sceneArgs[0].audrey;
		drew = this.sceneArgs[0].drew;
		phone = this.sceneArgs[0].phone;
		imgAudrey = audrey[6];
		imgDrew = drew[17];
		bg = this.sceneArgs[1].audreyRoom;
		graphik = this.sceneArgs[4];
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
		if (dialogueIndex != 13) {
			this.drawAudrey();
		} else {
			image(phone[0], 165 * scale, 105 * scale, 500 * scale, 920 * scale);
		}
		if (dialogueIndex > 3) {
			bg = this.sceneArgs[1].kitchen;
			this.drawDrew();
		}

		if (option) {
			this.drawOption();
		} else if (article) {
			this.drawArticle();
		} else {
			this.drawText();
			this.drawFriendship();
		}
		if (friendshipIndex < 40 && (dialogueIndex >= dialogue.length - 2 || dialogueIndex == 37 || dialogueIndex == 38)) {
			friendshipIndex += 2;
		}
  }

	this.drawAudrey = function() {
  	image(imgAudrey, 60 * scale, 40 * scale, 646 * scale, 861 * scale);
	}

	this.drawDrew = function() {
		image(imgDrew, 738 * scale, 24 * scale, 657 * scale, 876 * scale);
	}

	this.drawPhone = function() {
		image(imgPhone, phoneX * scale, 105 * scale, 475 * scale, 920 * scale);
	}

	this.drawText = function() {
		noStroke();
		// Background
		fill(255, 255, 255, 200);
		rect(0, 758 * scale, 1440 * scale, 142 * scale);
		// Currently speaking
		var speaker;
		var currFont = graphik.regular;
		switch(whoSpeaking[dialogueIndex]) {
			case 0:
				fill('#6D7488');
				speaker = "Narrator"
				break;
			case 1:
				fill('#843539');
				speaker = "Audrey"
				break;
			case 2:
				currFont = graphik.italic;
				fill('#843539');
				speaker = "Audrey"
				break;
			case 3:
				fill('#20252F');
				speaker = "Kate"
				break;
			case 4:
				fill('#30455D');
				speaker = "Drew"
				break;
			case 5:
				fill('#8FB7E5');
				speaker = "Emily"
				break;
			case 6:
				 fill('#EF8465');
				speaker = "Jack"
				break;
			default:
				fill('#843539');
				speaker = "Audrey"
				break;
		}
		rect(61 * scale, 797 * scale, 180 * scale, 66 * scale, 30);
		textSize(35 * scale);
		textStyle(BOLD);
		textFont(graphik.bold);
		fill(255);
		textAlign(CENTER, CENTER);
		text(speaker, 62 * scale, 795 * scale, 180 * scale, 66 * scale);

		// Dialogue
		textSize(25 * scale);
		textStyle(NORMAL);
		textFont(currFont);
		textAlign(LEFT, CENTER);
		fill(0);
		text(dialogue[dialogueIndex].substring(0,c), 316 * scale, 758 * scale, 808 * scale, 142 * scale);
		c += 5;
	}

	this.drawOption = function() {
		noStroke();
		// Background
		fill(255, 255, 255, 200);
		rect(0, 538 * scale, 1440 * scale, 363 * scale);

		// Question
		textSize(30 * scale);
		fill(0);
		textStyle(BOLD);
		textAlign(CENTER, CENTER);
		text(dialogue[dialogueIndex + 1], 327 * scale, 582 * scale, 758 * scale, 69 * scale);

		//Options
		fill('#F7BA63');
		rect(89 * scale, 688 * scale, 599 * scale, 162 * scale, 50);
		fill('#9AB5E2');
		rect(756 * scale, 688 * scale, 599 * scale, 162 * scale, 50);
		fill(0)
		textAlign(CENTER, CENTER);
		textStyle(NORMAL);
		text(dialogue[dialogueIndex + 2], 184, 734, 401, 70);
		text(dialogue[dialogueIndex + 3], 819, 725, 472, 88);
	}

	this.drawCrashCourse = function() {

	}

	this.drawArticle = function() {
		fill(255);
		rect(203 * scale, 95 * scale, 1082 * scale, 606 * scale, 30);
		textSize(25 * scale);
		textStyle(NORMAL);
		textFont(graphik.italic);
		textAlign(LEFT, TOP);
		fill(0);
		text(dialogue[dialogueIndex + 1], 275 * scale, 213 * scale, 910 * scale, 125 * scale);
		text(dialogue[dialogueIndex + 2], 275 * scale, 400 * scale, 910 * scale, 325 * scale);

		noStroke();
		// Background
		fill(255, 255, 255, 200);
		rect(0, 758 * scale, 1440 * scale, 142 * scale);
		// Currently speaking
		var speaker;
		speaker = "Source";
		fill('#F4A940');
		rect(61 * scale, 797 * scale, 180 * scale, 66 * scale, 30);
		textSize(35 * scale);
		textStyle(BOLD);
		textFont(graphik.bold);
		fill(255);
		textAlign(CENTER, CENTER);
		text(speaker, 62 * scale, 795 * scale, 180 * scale, 66 * scale);

		// Dialogue
		textSize(25 * scale);
		textStyle(NORMAL);
		textFont(graphik.italic);
		textAlign(LEFT, CENTER);
		fill(0);
		text(dialogue[dialogueIndex + 3], 316 * scale, 758 * scale, 808 * scale, 142 * scale);
		c += 5;
		this.drawFriendship();
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
		var totalLength = dialogue.length;
		if (c >= 0 && c < totalLength && !option && !article) {
			// Jump ahead if clicked while text is printing
			c = dialogue[dialogueIndex].length;
		} else {
			if (option) {
				if (mouseY > 688 * scale && mouseY < 850 * scale) {
					if (mouseX > 89 * scale && mouseX < 688 * scale) {
						// Option 1
						option = false;
						dialogueIndex = 18;
					}
					if (mouseX > 756 * scale && mouseX < 1355 * scale) {
						// Option 2
						option = false;
						dialogueIndex = 40;
					}
				}
			} else if (article) {
				article = false;
				dialogueIndex += 4;
				print("After article " + dialogueIndex);
			} else {
				dialogueIndex++;
				imgAudrey = audrey[audreyExpressions[dialogueIndex] - 1];
				imgDrew = drew[drewExpressions[dialogueIndex] - 1];
				if (dialogue[dialogueIndex] == 'OPTION') {
					option = true;
				}
				if (dialogue[dialogueIndex] == 'ARTICLE') {
					article = true;
				}
				c = 0;
			}

		}
    if (dialogueIndex >= totalLength - 1 || dialogue[dialogueIndex] == "OPTIONENDING") {
			this.sceneArgs[3] = 40;
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

	var audreyExpressions = [3, 8, 3, 1, 10, 1, 12, 1, 1, 1, 1, 1, 10, 1, 12, 1, 12, 1, 1, 1, 10, 1, 2, 8, 2, 7, 7, 7, 7, 8, 2, 8, 3, 8, 3, 8, 3, 3, 3]
	var emilyExpressions = [13, 4, 6, 16, 11, 14, 11, 16, 16, 16, 16, 16, 2, 0, 2, 1, 2, 1, 1, 1, 11, 5, 6, 5, 6, 6, 6, 6, 6, 5, 6, 5, 13, 3, 13, 4, 13, 13, 13]
	// 0 - Narrator, 1 - Audrey, 2 - Audrey Thoughts, 3 - Kate, 4 - Drew, 5 - Emily, 6 - Jack
	var whoSpeaking = [1, 5, 1, 5, 1, 5, 1, 5, 5, 5, 5, 5, 1, 5, 1, 5, 1, 5, 5, 5, 1, 5, 1, 5, 1, 1, 1, 1, 1, 5, 1, 5, 1, 5, 1, 5, 1, 1]

	var bg;

	var c = 0; // Variable so we can print the dialogue out like a typewriter

  var textBoxAlpha = 0;

  var dialogueIndex = 0;
  var dialogue;

	var friendshipIndex;

	var option;
	var article;
	var emotion;

	var scale = 1;

	// Another reserved function, sets up our canvas
	this.setup = function() {
		option = false;
		article = false;
		emotion = false;
		audrey = this.sceneArgs[0].audrey;
	  emily = this.sceneArgs[0].emily;
		imgAudrey = audrey[3];
		imgEmily = emily[13];
		bg = this.sceneArgs[1].livingRoom;
		graphik = this.sceneArgs[4];
	  dialogue = this.sceneArgs[2].sceneThree;
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
		this.drawEmily();

		if (option) {
			this.drawOption();
		} else if (article) {
			this.drawArticle();
		} else if (emotion) {
			this.drawEmotion();
		} else {
			this.drawText();
			this.drawFriendship();
		}
		if (friendshipIndex < 70 && dialogueIndex >= dialogue.length - 2) {
			friendshipIndex += 2;
		}
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
		var speaker;
		var currFont = graphik.regular;
		switch(whoSpeaking[dialogueIndex]) {
			case 0:
				fill('#6D7488');
				speaker = "Narrator"
				break;
			case 1:
				fill('#843539');
				speaker = "Audrey"
				break;
			case 2:
				currFont = graphik.italic;
				fill('#843539');
				speaker = "Audrey"
				break;
			case 3:
				fill('#20252F');
				speaker = "Kate"
				break;
			case 4:
				fill('#30455D');
				speaker = "Drew"
				break;
			case 5:
				fill('#8FB7E5');
				speaker = "Emily"
				break;
			case 6:
				 fill('#EF8465');
				speaker = "Jack"
				break;
			default:
				fill('#843539');
				speaker = "Audrey"
				break;
		}
		rect(61 * scale, 797 * scale, 180 * scale, 66 * scale, 30);
		textSize(35 * scale);
		textStyle(BOLD);
		textFont(graphik.bold);
		fill(255);
		textAlign(CENTER, CENTER);
		text(speaker, 62 * scale, 795 * scale, 180 * scale, 66 * scale);

		// Dialogue
		textSize(25 * scale);
		textStyle(NORMAL);
		textFont(currFont);
		textAlign(LEFT, CENTER);
		fill(0);
		text(dialogue[dialogueIndex].substring(0,c), 316 * scale, 758 * scale, 808 * scale, 142 * scale);
		c += 5;
	}

	this.drawOption = function() {
		noStroke();
		// Background
		fill(255, 255, 255, 200);
		rect(0, 538 * scale, 1440 * scale, 363 * scale);

		// Question
		textSize(30 * scale);
		fill(0);
		textStyle(BOLD);
		textAlign(CENTER, CENTER);
		text(dialogue[dialogueIndex + 1], 327 * scale, 582 * scale, 758 * scale, 69 * scale);

		//Options
		fill('#F7BA63');
		rect(89 * scale, 688 * scale, 599 * scale, 162 * scale, 50);
		fill('#9AB5E2');
		rect(756 * scale, 688 * scale, 599 * scale, 162 * scale, 50);
		fill(0)
		textAlign(CENTER, CENTER);
		textStyle(NORMAL);
		text(dialogue[dialogueIndex + 2], 184, 734, 401, 70);
		text(dialogue[dialogueIndex + 3], 819, 725, 472, 88);
	}

	this.drawEmotion = function() {
		noStroke();
		// Background
		fill(255, 255, 255, 200);
		rect(0, 538 * scale, 1440 * scale, 363 * scale);

		// Question
		textSize(30 * scale);
		fill(0);
		textStyle(BOLD);
		textAlign(CENTER, CENTER);
		text(dialogue[dialogueIndex + 1], 235 * scale, 597 * scale, 969 * scale, 112 * scale);

		//Options
		fill('#9AB5E2');
		rect(574 * scale, 749 * scale, 254 * scale, 99 * scale, 50);
		fill(0)
		textAlign(CENTER, CENTER);
		textStyle(NORMAL);
		textFont(graphik.regular);
		text("Continue?", 574 * scale, 749 * scale, 254 * scale, 99 * scale);
	}

	this.drawArticle = function() {
		fill(255);
		rect(203 * scale, 95 * scale, 1082 * scale, 606 * scale, 30);
		textSize(25 * scale);
		textStyle(NORMAL);
		textFont(graphik.italic);
		textAlign(LEFT, TOP);
		fill(0);
		text(dialogue[dialogueIndex + 1], 275 * scale, 213 * scale, 910 * scale, 625 * scale);

		noStroke();
		// Background
		fill(255, 255, 255, 200);
		rect(0, 758 * scale, 1440 * scale, 142 * scale);
		// Currently speaking
		var speaker;
		speaker = "Source";
		fill('#F4A940');
		rect(61 * scale, 797 * scale, 180 * scale, 66 * scale, 30);
		textSize(35 * scale);
		textStyle(BOLD);
		textFont(graphik.bold);
		fill(255);
		textAlign(CENTER, CENTER);
		text(speaker, 62 * scale, 795 * scale, 180 * scale, 66 * scale);

		// Dialogue
		textSize(25 * scale);
		textStyle(NORMAL);
		textFont(graphik.italic);
		textAlign(LEFT, CENTER);
		fill(0);
		text(dialogue[dialogueIndex + 2], 316 * scale, 758 * scale, 808 * scale, 142 * scale);
		c += 5;
		this.drawFriendship();
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
		var totalLength = dialogue.length;
		if (c >= 0 && c < totalLength && !option && !article && !emotion) {
			// Jump ahead if clicked while text is printing
			c = dialogue[dialogueIndex].length;
		} else {
			if (option) {
				if (mouseY > 688 * scale && mouseY < 850 * scale) {
					if (mouseX > 89 * scale && mouseX < 688 * scale) {
						// Option 1
						option = false;
						dialogueIndex = 12;
					}
					if (mouseX > 756 * scale && mouseX < 1355 * scale) {
						// Option 2
						option = false;
						dialogueIndex = 20;
					}
				}
			} else if (article) {
				article = false;
				dialogueIndex += 4;
			} else if (emotion) {
				if (mouseX > 574 * scale && mouseX < 828 * scale && mouseY > 749 * scale && mouseY < 848 * scale) {
					emotion = false;
					dialogueIndex += 2;
				}
			} else {
				dialogueIndex++;
				imgAudrey = audrey[audreyExpressions[dialogueIndex]];
				imgEmily = emily[emilyExpressions[dialogueIndex]];
				if (dialogue[dialogueIndex] == 'OPTION') {
					option = true;
				}
				if (dialogue[dialogueIndex] == 'ARTICLE') {
					article = true;
				}
				if (dialogue[dialogueIndex] == 'EMOTIONCHECK') {
					emotion = true;
				}
				c = 0;
			}

		}
    if (dialogueIndex >= totalLength - 1 || dialogue[dialogueIndex] == "OPTIONENDING") {
			this.sceneArgs[3] = 70;
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
	var audrey;
	var jack;
	var emily;
	var drew;

	var audreyExpressions = [3, 8, 2, 1, 2, 8, 1, 6, 1, 12, 12, 1, 1, 1, 1, 1, 1, 1, 10, 1, 10, 1, 12, 1, 12, 1, 10, 2, 8, 2, 8, 4, 4]
	var jackExpressions =  [3, 7, 8, 7, 8, 7, 3, 3, 7, 3, 8, 7, 3, 3, 3, 8, 7, 9, 10, 9, 10, 4, 5, 4, 5, 0, 5, 1, 2, 12, 6, 12, 12]
	var emilyExpressions = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 7, 8, 9, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
	var drewExpressions = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10, 9, 13, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
	// 0 - Narrator, 1 - Audrey, 2 - Audrey Thoughts, 3 - Kate, 4 - Drew, 5 - Emily, 6 - Jack
	var whoSpeaking = [1, 6, 1, 6, 1, 6, 1, 1, 6, 1, 1, 6, 6, 4, 5, 4, 6, 6, 1, 6, 1, 6, 1, 6, 1, 6, 1, 1, 6, 1, 6, 1]

	var bg;

	var c = 0; // Variable so we can print the dialogue out like a typewriter

  var textBoxAlpha = 0;

  var dialogueIndex = 0;
  var dialogue;

	var friendshipIndex;

	var option;
	var article;
	var flashback;

	var scale = 1;

	// Another reserved function, sets up our canvas
	this.setup = function() {
		option = false;
		article = false;
		flashback = false;
		audrey = this.sceneArgs[0].audrey;
	  jack = this.sceneArgs[0].jack;
		emily = this.sceneArgs[0].emily;
		drew = this.sceneArgs[0].drew;
		imgAudrey = audrey[3];
		imgJack = jack[3];
		imgEmily = emily[0];
		imgDrew = drew[0];
		bg = this.sceneArgs[1].jackRoom;
		graphik = this.sceneArgs[4];
	  dialogue = this.sceneArgs[2].sceneFour;
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
		if (dialogueIndex < 12 || dialogueIndex > 16) {
					this.drawAudrey();
					bg = this.sceneArgs[1].jackRoom;
		}
		this.drawJack();
		if (dialogueIndex > 11 && dialogueIndex < 17) {
			bg = this.sceneArgs[1].livingRoom;
			this.drawEmily();
			this.drawDrew();
		}
		if (option) {
			this.drawOption();
		} else if (article) {
			this.drawArticle();
		} else if (flashback) {
			this.drawFlashback();
		} else {
			this.drawText();
			this.drawFriendship();
		}
		if (friendshipIndex < 100 && dialogueIndex >= dialogue.length - 2) {
			friendshipIndex += 2;
		}
  }

	this.drawAudrey = function() {
  	image(imgAudrey, 60 * scale, 40 * scale, 646 * scale, 861 * scale);
	}

	this.drawJack = function() {
  	image(imgJack, 828 * scale, 59 * scale, 632 * scale, 841 * scale);
	}

	this.drawEmily = function() {
		image(imgEmily, 302 * scale, 50 * scale, 657 * scale, 876 * scale);
	}

	this.drawDrew = function() {
		image(imgDrew, 1 * scale, 17 * scale, 657 * scale, 885 * scale);
	}

	this.drawText = function() {
		noStroke();
		// Background
		fill(255, 255, 255, 200);
		rect(0, 758 * scale, 1440 * scale, 142 * scale);
		// Currently speaking
		var speaker;
		var currFont = graphik.regular;
		switch(whoSpeaking[dialogueIndex]) {
			case 0:
				fill('#6D7488');
				speaker = "Narrator"
				break;
			case 1:
				fill('#843539');
				speaker = "Audrey"
				break;
			case 2:
				currFont = graphik.italic;
				fill('#843539');
				speaker = "Audrey"
				break;
			case 3:
				fill('#20252F');
				speaker = "Kate"
				break;
			case 4:
				fill('#30455D');
				speaker = "Drew"
				break;
			case 5:
				fill('#8FB7E5');
				speaker = "Emily"
				break;
			case 6:
				 fill('#EF8465');
				speaker = "Jack"
				break;
			default:
				fill('#843539');
				speaker = "Audrey"
				break;
		}
		rect(61 * scale, 797 * scale, 180 * scale, 66 * scale, 30);
		textSize(35 * scale);
		textStyle(BOLD);
		textFont(graphik.bold);
		fill(255);
		textAlign(CENTER, CENTER);
		text(speaker, 62 * scale, 795 * scale, 180 * scale, 66 * scale);

		// Dialogue
		textSize(25 * scale);
		textStyle(NORMAL);
		textFont(currFont);
		textAlign(LEFT, CENTER);
		fill(0);
		text(dialogue[dialogueIndex].substring(0,c), 316 * scale, 758 * scale, 808 * scale, 142 * scale);
		c += 5;
	}

	this.drawOption = function() {
		noStroke();
		// Background
		fill(255, 255, 255, 200);
		rect(0, 538 * scale, 1440 * scale, 363 * scale);

		// Question
		textSize(30 * scale);
		fill(0);
		textStyle(BOLD);
		textAlign(CENTER, CENTER);
		text(dialogue[dialogueIndex + 1], 327 * scale, 582 * scale, 758 * scale, 69 * scale);

		//Options
		fill('#F7BA63');
		rect(89 * scale, 688 * scale, 599 * scale, 162 * scale, 50);
		fill('#9AB5E2');
		rect(756 * scale, 688 * scale, 599 * scale, 162 * scale, 50);
		fill(0)
		textAlign(CENTER, CENTER);
		textStyle(NORMAL);
		text(dialogue[dialogueIndex + 2], 184, 734, 401, 70);
		text(dialogue[dialogueIndex + 3], 819, 725, 472, 88);
	}

	this.drawFlashback = function() {
		noStroke();
		// Background
		fill(255, 255, 255, 200);
		rect(0, 538 * scale, 1440 * scale, 363 * scale);

		// Question
		textSize(30 * scale);
		fill(0);
		textStyle(BOLD);
		textAlign(CENTER, CENTER);
		text("Earlier that day...", 235 * scale, 597 * scale, 969 * scale, 112 * scale);

		//Options
		fill('#9AB5E2');
		rect(574 * scale, 749 * scale, 254 * scale, 99 * scale, 50);
		fill(0)
		textAlign(CENTER, CENTER);
		textStyle(NORMAL);
		textFont(graphik.regular);
		text("Continue?", 574 * scale, 749 * scale, 254 * scale, 99 * scale);
	}

	this.drawArticle = function() {
		fill(255);
		rect(203 * scale, 95 * scale, 1082 * scale, 606 * scale, 30);
		textSize(25 * scale);
		textStyle(NORMAL);
		textFont(graphik.italic);
		textAlign(LEFT, TOP);
		fill(0);
		text(dialogue[dialogueIndex + 1], 275 * scale, 213 * scale, 910 * scale, 625 * scale);

		noStroke();
		// Background
		fill(255, 255, 255, 200);
		rect(0, 758 * scale, 1440 * scale, 142 * scale);
		// Currently speaking
		var speaker;
		speaker = "Source";
		fill('#F4A940');
		rect(61 * scale, 797 * scale, 180 * scale, 66 * scale, 30);
		textSize(35 * scale);
		textStyle(BOLD);
		textFont(graphik.bold);
		fill(255);
		textAlign(CENTER, CENTER);
		text(speaker, 62 * scale, 795 * scale, 180 * scale, 66 * scale);

		// Dialogue
		textSize(25 * scale);
		textStyle(NORMAL);
		textFont(graphik.italic);
		textAlign(LEFT, CENTER);
		fill(0);
		text(dialogue[dialogueIndex + 2], 316 * scale, 758 * scale, 808 * scale, 142 * scale);
		c += 5;
		this.drawFriendship();
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
		var totalLength = dialogue.length;
		if (c >= 0 && c < totalLength && !option && !article && !flashback) {
			// Jump ahead if clicked while text is printing
			c = dialogue[dialogueIndex].length;
		} else {
			if (option) {
				if (mouseY > 688 * scale && mouseY < 850 * scale) {
					if (mouseX > 89 * scale && mouseX < 688 * scale) {
						// Option 1
						option = false;
						dialogueIndex = 12;
					}
					if (mouseX > 756 * scale && mouseX < 1355 * scale) {
						// Option 2
						option = false;
						dialogueIndex = 20;
					}
				}
			} else if (article) {
				article = false;
				dialogueIndex += 4;
			} else if (flashback) {
				if (mouseX > 574 * scale && mouseX < 828 * scale && mouseY > 749 * scale && mouseY < 848 * scale) {
					flashback = false;
					dialogueIndex += 1;
				}
			} else {
				dialogueIndex++;
				imgAudrey = audrey[audreyExpressions[dialogueIndex]];
				imgJack = jack[jackExpressions[dialogueIndex]];
				imgEmily = emily[emilyExpressions[dialogueIndex]];
				imgDrew = drew[drewExpressions[dialogueIndex]];
				if (dialogue[dialogueIndex] == 'OPTION') {
					option = true;
				}
				if (dialogue[dialogueIndex] == 'ARTICLE') {
					article = true;
				}
				if (dialogue[dialogueIndex] == 'FLASHBACK') {
					bg = this.sceneArgs[1].livingRoom;
					flashback = true;
				}
				c = 0;
			}

		}
    if (dialogueIndex >= totalLength - 1 || dialogue[dialogueIndex] == "OPTIONENDING") {
			this.sceneArgs[3] = 100;
      this.sceneManager.showNextScene(this.sceneArgs);
    }
  }

	this.windowResized = function() {
		//scale = windowWidth / 1440;
		//resizeCanvas(windowWidth, (windowWidth/16) * 9);
	}
}
// ================== SCENE 5 ==================
function Scene5() {
	var audrey;
	var drew;
	var emily;
	var jack;
	var phone;

	var bg;

	var c = 0; // Variable so we can print the dialogue out like a typewriter

  var textBoxAlpha = 0;

	var graphik;

  var dialogueIndex = 0;
  var dialogue;

	var friendshipIndex;

	var scale = 1;

	// Another reserved function, sets up our canvas
  this.setup = function() {
		audrey = this.sceneArgs[0].audrey;
		jack = this.sceneArgs[0].jack;
		drew = this.sceneArgs[0].drew;
		emily = this.sceneArgs[0].emily;
		kate = this.sceneArgs[0].kate;
		phone = this.sceneArgs[0].phone;
		bg = this.sceneArgs[1].livingRoom;
		graphik = this.sceneArgs[4];
	  dialogue = this.sceneArgs[2].sceneFive;
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
		if (dialogueIndex == 0) {
			image(drew[15], 50 * scale, 17 * scale, 657 * scale, 885 * scale);
			image(phone[2], 776 * scale, 105 * scale, 500 * scale, 920 * scale);
		}
		if (dialogueIndex == 1) {
			image(emily[12], 796 * scale, 50 * scale, 657 * scale, 876 * scale);
			image(phone[4], 165 * scale, 105 * scale, 500 * scale, 920 * scale);
		}
		if (dialogueIndex == 2) {
			bg = this.sceneArgs[1].birdShelter;
			image(audrey[4], -51 * scale, 43 * scale, 644 * scale, 857 * scale);
			image(jack[11], 240 * scale, 43 * scale, 646 * scale, 860 * scale);
			image(kate[6], 782 * scale, 24 * scale, 658 * scale, 876 * scale);
		}
		if (dialogueIndex == 3) {
			bg = this.sceneArgs[1].end;
		}
		if (dialogueIndex < 4) {
			this.drawText();
			this.drawFriendship();
		} else {
			 fill(255, 255, 255, 150);
			 rect(0, 0, 1440 * scale, 900 * scale);
			 fill(0);
			 textStyle(BOLD);
			 textFont(graphik.bold);
			 textSize(60);
			 textAlign(CENTER, CENTER);
			 text('The End!', 499 * scale, 360 * scale, 442 * scale, 212 * scale)
		}

  }

	this.drawText = function() {
		noStroke();
		// Background
		fill(255, 255, 255, 200);
		rect(0, 758 * scale, 1440 * scale, 142 * scale);
		// Currently speaking
		fill('#6D7488');
		rect(61 * scale, 797 * scale, 180 * scale, 66 * scale, 30);
		textSize(35 * scale);
		textStyle(BOLD);
		textFont(graphik.bold);
		fill(255);
		textAlign(CENTER, CENTER);
		text("Narrator", 62 * scale, 795 * scale, 180 * scale, 66 * scale);

		// Dialogue
		textSize(25 * scale);
		textStyle(NORMAL);
		textFont(graphik.regular);
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
		var totalLength = dialogue.length;
		if (c >= 0 && c < totalLength) {
			// Jump ahead if clicked while text is printing
			c = dialogue[dialogueIndex].length;
		} else {
			dialogueIndex++;
			c = 0;
		}
  }

	this.windowResized = function() {
		//scale = windowWidth / 1440;
		//resizeCanvas(windowWidth, (windowWidth/16) * 9);
	}
}
