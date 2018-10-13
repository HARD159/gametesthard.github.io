var keyActions = {                             //список клавиш
	69:  "turnRight",   // E
	81:  "turnLeft",    // Q
	87:  "forward",     // W
	83:  "back",        // S
	65:  "left",        // A
	68:  "right",       // D
	32:  "shot",        // SPACE
	82:  "reload",      // R
	19:  "pause",       // pause
	103: "turnLeftp2",  // Num 7
	105: "turnRightp2", // Num 9
	104: "forwardp2",   // Num 8
	101: "backp2",      // Num 5
	100: "leftp2",      // Num 4
	102: "rightp2",     // Num 6
	107: "shotp2",      // Num +
	109: "reloadp2"     // Num -
 };

var iee = 0; //счетчик поворота в право
var iqq = 0; //счетчик поворота в лево
var iww = 0; //счетчик движения вперед
var iss = 0; //счетчик движения назад
var iaa = 0; //счетчик движения на лево
var idd = 0; //счетчик движения на право

var ieep2 = 0; //счетчик поворота в право
var iqqp2 = 0; //счетчик поворота в лево
var iwwp2 = 0; //счетчик движения вперед
var issp2 = 0; //счетчик движения назад
var iaap2 = 0; //счетчик движения на лево
var iddp2 = 0; //счетчик движения на право

var intervalEE;
var intervalQQ;
var intervalWW;
var intervalSS;
var intervalAA;
var intervalDD;
var intervalShot;

var intervalEEp2;
var intervalQQp2;
var intervalWWp2;
var intervalSSp2;
var intervalAAp2;
var intervalDDp2;

var klickDown = function (direction) {         //клавиша вниз
	if (direction === "turnRight") {
		if (iee == 0) {
			iee += 1
			intervalEE = setInterval(()=>turnRight(player01),60);
		};
	} else if (direction === "turnLeft") {
		if (iqq == 0) {
			iqq += 1
			intervalQQ = setInterval(()=>turnLeft(player01),60);
		};
	};
	if (direction === "forward") {
		if (iww == 0) {
			iww += 1
			intervalWW = setInterval(()=>forwardMovement(player01, player02),5);
		};
	} else if (direction === "back") {
		if (iss == 0) {
			iss += 1
			intervalSS = setInterval(()=>backMovement(player01, player02),10);
		};
	};
	if (direction === "left") {
		if (iaa == 0) {
			iaa += 1
			intervalAA = setInterval(()=>leftMovement(player01, player02),7);
		};
	} else if (direction === "right") {
		if (idd == 0) {
			idd += 1
			intervalDD = setInterval(()=>rightMovement(player01, player02),7);
		}; 
	};
	if (direction === "shot") {
		shotP1();
	};
	if (direction === "reload") {
		player01.ammo = 0;
		drawBulletP1();
	};
	if (direction === "pause") {
		alert("PAUSE");
	}

	if (direction === "turnRightp2") {
		if (ieep2 == 0) {
			ieep2 += 1
			intervalEEp2 = setInterval(()=>turnRight(player02),60);
		};
	} else if (direction === "turnLeftp2") {
		if (iqqp2 == 0) {
			iqqp2 += 1
			intervalQQp2 = setInterval(()=>turnLeft(player02),60);
		};
	};
	if (direction === "forwardp2") {
		if (iwwp2 == 0) {
			iwwp2 += 1
			intervalWWp2 = setInterval(()=>forwardMovement(player02, player01),5);
		};
	} else if (direction === "backp2") {
		if (issp2 == 0) {
			issp2 += 1
			intervalSSp2 = setInterval(()=>backMovement(player02, player01),10);
		};
	};
	if (direction === "leftp2") {
		if (iaap2 == 0) {
			iaap2 += 1
			intervalAAp2 = setInterval(()=>leftMovement(player02, player01),7);
		};
	} else if (direction === "rightp2") {
		if (iddp2 == 0) {
			iddp2 += 1
			intervalDDp2 = setInterval(()=>rightMovement(player02, player01),7);
		}; 
	};
	if (direction === "shotp2") {
		shotP2();
	};
	if (direction === "reloadp2") {
		player02.ammo = 0;
		drawBulletP2();
	};
 };

var klickUp = function (direction) {           //клавиша вверх
	if (direction === "turnRight") {
		clearInterval(intervalEE);
		iee = 0
	} else if (direction === "turnLeft") {
		clearInterval(intervalQQ);
		iqq = 0
	};
	if (direction === "forward") {
		clearInterval(intervalWW);
		iww = 0
	} else if (direction === "back") {
		clearInterval(intervalSS);
		iss = 0
	};
	if (direction === "left") {
		clearInterval(intervalAA);
		iaa = 0
	} else if (direction === "right") {
		clearInterval(intervalDD);
		idd = 0
	};
	if (direction === "shot") {
		//ishot = 0
	};

		if (direction === "turnRightp2") {
		clearInterval(intervalEEp2);
		ieep2 = 0
	} else if (direction === "turnLeftp2") {
		clearInterval(intervalQQp2);
		iqqp2 = 0
	};
	if (direction === "forwardp2") {
		clearInterval(intervalWWp2);
		iwwp2 = 0
	} else if (direction === "backp2") {
		clearInterval(intervalSSp2);
		issp2 = 0
	};
	if (direction === "leftp2") {
		clearInterval(intervalAAp2);
		iaap2 = 0
	} else if (direction === "rightp2") {
		clearInterval(intervalDDp2);
		iddp2 = 0
	};
 };

$("body").keydown(function (event) {
		var direction = keyActions[event.keyCode];
		klickDown(direction);
	});

$("body").keyup(function (event) {
		var direction = keyActions[event.keyCode];
		klickUp(direction);
	});