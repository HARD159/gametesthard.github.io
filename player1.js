var player01 = {
	picturePlayer:'<img src="./Images/player1/turn/turn1.png">', // спрайт персонажа
	pointCenter: {x:300, y:300},                   //точка цента персонажа
	oon: {x:300, y:285},
	nne: {x:305, y:285},
	one: {x:310, y:290},
	een: {x:315, y:295},
	ooe: {x:315, y:300},
	ees: {x:315, y:305},
	oes: {x:310, y:310},
	sse: {x:305, y:315},
	oos: {x:300, y:315},
	ssw: {x:295, y:315},
	osw: {x:290, y:310},
	wws: {x:285, y:305},
	oow: {x:285, y:300},
	wwn: {x:285, y:295},
	own: {x:290, y:290},
	nnw: {x:295, y:285},

	stepForward: {x:0 , y:0}, // растояние шага вперед
	stepBack:    {x:0 , y:0}, // растояние шага назад
	stepLeft:    {x:0 , y:0}, // растояние шага влево
	stepRight:   {x:0 , y:0}, // растояние шага вправо

	collisionControlForward:0, // условие столкновения с др.персонажем при движении вперед
	collisionControlBack:0,    // условие столкновения с др.персонажем при движении назад
	collisionControlLeft:0,    // условие столкновения с др.персонажем при движении влево
	collisionControlRight:0,   // условие столкновения с др.персонажем при движении вправо

	ammo: 5,
	directionDegree: 0,                  // градусы поворота персонажа
	HP: 100                              // количество HP
 };

var player02 = {

	picturePlayer:'<img src="./Images/player2/turn/turn1.png">', // спрайт персонажа
	pointCenter: {x:1200, y:300},                   //точка цента персонажа
	oon: {x:1200, y:285},
	nne: {x:1205, y:285},
	one: {x:1210, y:290},
	een: {x:1215, y:295},
	ooe: {x:1215, y:300},
	ees: {x:1215, y:305},
	oes: {x:1210, y:310},
	sse: {x:1205, y:315},
	oos: {x:1200, y:315},
	ssw: {x:1195, y:315},
	osw: {x:1190, y:310},
	wws: {x:1185, y:305},
	oow: {x:1185, y:300},
	wwn: {x:1185, y:295},
	own: {x:1190, y:290},
	nnw: {x:1195, y:285},

	stepForward: {x:0 , y:0}, // растояние шага вперед
	stepBack:    {x:0 , y:0}, // растояние шага назад
	stepRight:   {x:0 , y:0}, // растояние шага вправо
	stepLeft:    {x:0 , y:0}, // растояние шага влево

	collisionControlForward:0, // условие столкновения с др.персонажем при движении вперед
	collisionControlBack:0,    // условие столкновения с др.персонажем при движении назад
	collisionControlLeft:0,    // условие столкновения с др.персонажем при движении влево
	collisionControlRight:0,   // условие столкновения с др.персонажем при движении вправо

	ammo: 5,
	directionDegree: 0,                  // градусы поворота персонажа
	HP: 100                              // количество HP

 };

var turnRight = function (player) { //поворот в право

	var xfe = [];
	var yfe = [];

	xfe[0] = player.oon.x, xfe[1] = player.nne.x, xfe[2] = player.one.x, xfe[3] = player.een.x, xfe[4] = player.ooe.x, xfe[5] = player.ees.x, xfe[6] = player.oes.x,
	xfe[7] = player.sse.x, xfe[8] = player.oos.x, xfe[9] = player.ssw.x, xfe[10] = player.osw.x, xfe[11] = player.wws.x, xfe[12] = player.oow.x, xfe[13] = player.wwn.x,
	xfe[14] = player.own.x, xfe[15] = player.nnw.x;

	yfe[0] = player.oon.y, yfe[1] = player.nne.y, yfe[2] = player.one.y, yfe[3] = player.een.y, yfe[4] = player.ooe.y, yfe[5] = player.ees.y, yfe[6] = player.oes.y,
	yfe[7] = player.sse.y, yfe[8] = player.oos.y, yfe[9] = player.ssw.y, yfe[10] = player.osw.y, yfe[11] = player.wws.y, yfe[12] = player.oow.y, yfe[13] = player.wwn.y,
	yfe[14] = player.own.y, yfe[15] = player.nnw.y;

	player.oon.x = xfe[1], player.nne.x = xfe[2], player.one.x = xfe[3], player.een.x = xfe[4], player.ooe.x = xfe[5], player.ees.x = xfe[6], player.oes.x = xfe[7],
	player.sse.x = xfe[8], player.oos.x = xfe[9], player.ssw.x = xfe[10]; player.osw.x = xfe[11], player.wws.x = xfe[12], player.oow.x = xfe[13], player.wwn.x = xfe[14],
	player.own.x = xfe[15], player.nnw.x = xfe[0];

	player.oon.y = yfe[1], player.nne.y = yfe[2], player.one.y = yfe[3], player.een.y = yfe[4], player.ooe.y = yfe[5], player.ees.y = yfe[6], player.oes.y = yfe[7],
	player.sse.y = yfe[8], player.oos.y = yfe[9], player.ssw.y = yfe[10]; player.osw.y = yfe[11], player.wws.y = yfe[12], player.oow.y = yfe[13], player.wwn.y = yfe[14],
	player.own.y = yfe[15], player.nnw.y = yfe[0];

	player.directionDegree += 22.5;

	if (player == player01) {
		$("#player01").rotate(player.directionDegree);
	};
	if (player == player02) {
		$("#player02").rotate(player.directionDegree);
	};
 };

var turnLeft = function (player) { //поворот в лево

	var xfq = [];
	var yfq = [];

	xfq[0] = player.oon.x, xfq[1] = player.nne.x, xfq[2] = player.one.x, xfq[3] = player.een.x, xfq[4] = player.ooe.x, xfq[5] = player.ees.x, xfq[6] = player.oes.x,
	xfq[7] = player.sse.x, xfq[8] = player.oos.x, xfq[9] = player.ssw.x, xfq[10] = player.osw.x, xfq[11] = player.wws.x, xfq[12] = player.oow.x, xfq[13] = player.wwn.x,
	xfq[14] = player.own.x, xfq[15] = player.nnw.x;

	yfq[0] = player.oon.y, yfq[1] = player.nne.y, yfq[2] = player.one.y, yfq[3] = player.een.y, yfq[4] = player.ooe.y, yfq[5] = player.ees.y, yfq[6] = player.oes.y,
	yfq[7] = player.sse.y, yfq[8] = player.oos.y, yfq[9] = player.ssw.y, yfq[10] = player.osw.y, yfq[11] = player.wws.y, yfq[12] = player.oow.y, yfq[13] = player.wwn.y,
	yfq[14] = player.own.y, yfq[15] = player.nnw.y;

	player.oon.x = xfq[15], player.nne.x = xfq[0], player.one.x = xfq[1], player.een.x = xfq[2], player.ooe.x = xfq[3], player.ees.x = xfq[4], player.oes.x = xfq[5],
	player.sse.x = xfq[6], player.oos.x = xfq[7], player.ssw.x = xfq[8]; player.osw.x = xfq[9], player.wws.x = xfq[10], player.oow.x = xfq[11], player.wwn.x = xfq[12],
	player.own.x = xfq[13], player.nnw.x = xfq[14];

	player.oon.y = yfq[15], player.nne.y = yfq[0], player.one.y = yfq[1], player.een.y = yfq[2], player.ooe.y = yfq[3], player.ees.y = yfq[4], player.oes.y = yfq[5],
	player.sse.y = yfq[6], player.oos.y = yfq[7], player.ssw.y = yfq[8]; player.osw.y = yfq[9], player.wws.y = yfq[10], player.oow.y = yfq[11], player.wwn.y = yfq[12],
	player.own.y = yfq[13], player.nnw.y = yfq[14];

	player.directionDegree -= 22.5;

	if (player == player01) {
		$("#player01").rotate(player.directionDegree);
	};
	if (player == player02) {
		$("#player02").rotate(player.directionDegree);
	};
 };

var movePlayerXForward = function (player) { //для функции forwardMovement X
	player.oon.x += player.stepForward.x, player.nne.x += player.stepForward.x, player.one.x += player.stepForward.x, player.een.x += player.stepForward.x,
	player.ooe.x += player.stepForward.x, player.ees.x += player.stepForward.x, player.oes.x += player.stepForward.x, player.sse.x += player.stepForward.x,
	player.oos.x += player.stepForward.x, player.ssw.x += player.stepForward.x, player.osw.x += player.stepForward.x, player.wws.x += player.stepForward.x,	player.oow.x += player.stepForward.x, player.wwn.x += player.stepForward.x, player.own.x += player.stepForward.x, player.nnw.x += player.stepForward.x,
	player.pointCenter.x += player.stepForward.x;
 };

var movePlayerYForward = function (player) { //для функции forwardMovement Y
	player.oon.y += player.stepForward.y, player.nne.y += player.stepForward.y, player.one.y += player.stepForward.y, player.een.y += player.stepForward.y,
	player.ooe.y += player.stepForward.y, player.ees.y += player.stepForward.y, player.oes.y += player.stepForward.y, player.sse.y += player.stepForward.y,
	player.oos.y += player.stepForward.y, player.ssw.y += player.stepForward.y, player.osw.y += player.stepForward.y, player.wws.y += player.stepForward.y,
	player.oow.y += player.stepForward.y, player.wwn.y += player.stepForward.y, player.own.y += player.stepForward.y, player.nnw.y += player.stepForward.y,
	player.pointCenter.y += player.stepForward.y;
 };
	
var collisionPlayer1Forward = function (player, player2) { //функция столкновения forwardMovement
	var collisionXiWW = 0;
	var collisionYiWW = 0;
	var collisionXOONWW = 0;
	var collisionYOONWW = 0;
	if (player.pointCenter.x >= player2.pointCenter.x - 40 && player.pointCenter.x <= player2.pointCenter.x + 40) {
		collisionXiWW = 1;
	} else {collisionXiWW = 0};
	if (player.pointCenter.y >= player2.pointCenter.y - 40 && player.pointCenter.y <= player2.pointCenter.y + 40) {
		collisionYiWW = 1;
	} else {collisionYiWW = 0};
	if (player.oon.x >= player2.pointCenter.x - 40 && player.oon.x <= player2.pointCenter.x + 40) {
		collisionXOONWW = 1;
	} else {collisionXOONWW = 0};
	if (player.oon.y >= player2.pointCenter.y - 40 && player.oon.y <= player2.pointCenter.y + 40) {
		collisionYOONWW = 1;
	} else {collisionYOONWW = 0};
	if (collisionXiWW == 1 && collisionYiWW == 1 && collisionXOONWW == 1 && collisionYOONWW == 1) {
		player.collisionControlForward = 1;
	} else {player.collisionControlForward = 0};
 };

var forwardMovement = function (player, player2) { //движение вперед
	player.stepForward.x = (player.oon.x - player.pointCenter.x) / 5 / 4;
	player.stepForward.y = (player.oon.y - player.pointCenter.y) / 5 / 4;
	collisionPlayer1Forward(player, player2);
	if (map [Math.floor(player.oon.y / 10)][Math.floor(player.oon.x / 10)] == 0 && map [Math.floor(player.nnw.y / 10)][Math.floor(player.nnw.x / 10)] == 0 && 
		map [Math.floor(player.nne.y / 10)][Math.floor(player.nne.x / 10)] == 0 && map [Math.floor(player.own.y / 10)][Math.floor(player.own.x / 10)] == 0 &&
		map [Math.floor(player.one.y / 10)][Math.floor(player.one.x / 10)] == 0 && player.collisionControlForward == 0) {
		movePlayerXForward(player);
		movePlayerYForward(player);
	} else if (map [Math.floor((player.pointCenter.y+5)/10)][Math.floor((player.pointCenter.x-15)/10)] == 1 && map [Math.floor((player.pointCenter.y+15)/10)][Math.floor((player.pointCenter.x-5)/10)] == 1) {
		if (player.oon.x-player.pointCenter.x == -15 && player.oon.y-player.pointCenter.y == -5 || player.oon.x-player.pointCenter.x == -10 && 
			player.oon.y-player.pointCenter.y == -10 || player.oon.x-player.pointCenter.x == -5 && player.oon.y-player.pointCenter.y == -15) {
			movePlayerYForward(player);
		} else if (player.oon.x-player.pointCenter.x == 5 && player.oon.y-player.pointCenter.y == 15 || player.oon.x-player.pointCenter.x == 10 && 
			player.oon.y-player.pointCenter.y == 10 || player.oon.x-player.pointCenter.x == 15 && player.oon.y-player.pointCenter.y == 5) {
			movePlayerXForward(player);
		};
	} else if (map [Math.floor((player.pointCenter.y-5)/10)][Math.floor((player.pointCenter.x-15)/10)] == 1 && map [Math.floor((player.pointCenter.y-15)/10)][Math.floor((player.pointCenter.x-5)/10)] == 1) {
		if (player.oon.x-player.pointCenter.x == -15 && player.oon.y-player.pointCenter.y == 5 || player.oon.x-player.pointCenter.x == -10 && 
			player.oon.y-player.pointCenter.y == 10 || player.oon.x-player.pointCenter.x == -5 && player.oon.y-player.pointCenter.y == 15) {
			movePlayerYForward(player);
		} else if (player.oon.x-player.pointCenter.x == 5 && player.oon.y-player.pointCenter.y == -15 || player.oon.x-player.pointCenter.x == 10 && 
			player.oon.y-player.pointCenter.y == -10 || player.oon.x-player.pointCenter.x == 15 && player.oon.y-player.pointCenter.y == -5) {
			movePlayerXForward(player);
		};
	} else if (map [Math.floor((player.pointCenter.y-15)/10)][Math.floor((player.pointCenter.x+5)/10)] == 1 && map [Math.floor((player.pointCenter.y-5)/10)][Math.floor((player.pointCenter.x+15)/10)] == 1) {
		if (player.oon.x-player.pointCenter.x == 15 && player.oon.y-player.pointCenter.y == 5 || player.oon.x-player.pointCenter.x == 10 && 
			player.oon.y-player.pointCenter.y == 10 || player.oon.x-player.pointCenter.x == 5 && player.oon.y-player.pointCenter.y == 15) {
			movePlayerYForward(player);
		} else if (player.oon.x-player.pointCenter.x == -5 && player.oon.y-player.pointCenter.y == -15 || player.oon.x-player.pointCenter.x == -10 && 
			player.oon.y-player.pointCenter.y == -10 || player.oon.x-player.pointCenter.x == -15 && player.oon.y-player.pointCenter.y == -5) {
			movePlayerXForward(player);
		};
	} else if (map [Math.floor((player.pointCenter.y+5)/10)][Math.floor((player.pointCenter.x+15)/10)] == 1 && map [Math.floor((player.pointCenter.y+15)/10)][Math.floor((player.pointCenter.x+5)/10)] == 1) {
		if (player.oon.x-player.pointCenter.x == 15 && player.oon.y-player.pointCenter.y == -5 || player.oon.x-player.pointCenter.x == 10 && 
			player.oon.y-player.pointCenter.y == -10 || player.oon.x-player.pointCenter.x == 5 && player.oon.y-player.pointCenter.y == -15) {
			movePlayerYForward(player);
		} else if (player.oon.x-player.pointCenter.x == -5 && player.oon.y-player.pointCenter.y == 15 || player.oon.x-player.pointCenter.x == -10 && 
			player.oon.y-player.pointCenter.y == 10 || player.oon.x-player.pointCenter.x == -15 && player.oon.y-player.pointCenter.y == 5) {
			movePlayerXForward(player);
		};
	} else if (map [Math.floor((player.pointCenter.y-15)/10)][Math.floor((player.pointCenter.x-5)/10)] == 1 || map [Math.floor((player.pointCenter.y-15)/10)][Math.floor((player.pointCenter.x+5)/10)] == 1 && 
		map [Math.floor(player.pointCenter.y/10)][Math.floor((player.pointCenter.x-15)/10)] == 0 && map [Math.floor(player.pointCenter.y/10)][Math.floor((player.pointCenter.x+15)/10)] == 0) {
		movePlayerXForward(player);
	} else if (map [Math.floor((player.pointCenter.y+15)/10)][Math.floor((player.pointCenter.x-5)/10)] == 1 || map [Math.floor((player.pointCenter.y+15)/10)][Math.floor((player.pointCenter.x+5)/10)] == 1 && 
		map [Math.floor(player.pointCenter.y/10)][Math.floor((player.pointCenter.x-15)/10)] == 0 && map [Math.floor(player.pointCenter.y/10)][Math.floor((player.pointCenter.x+15)/10)] == 0) {
		movePlayerXForward(player);
	} else if (map [Math.floor((player.pointCenter.y-5)/10)][Math.floor((player.pointCenter.x-15)/10)] == 1 || map [Math.floor((player.pointCenter.y+5)/10)][Math.floor((player.pointCenter.x-15)/10)] == 1 && 
		map [Math.floor((player.pointCenter.y-15)/10)][Math.floor(player.pointCenter.x/10)] == 0 && map [Math.floor((player.pointCenter.y+15)/10)][Math.floor(player.pointCenter.x/10)] == 0) {
		movePlayerYForward(player);
	} else if (map [Math.floor((player.pointCenter.y+5)/10)][Math.floor((player.pointCenter.x+15)/10)] == 1 || map [Math.floor((player.pointCenter.y-5)/10)][Math.floor((player.pointCenter.x+15)/10)] == 1 && 
		map [Math.floor((player.pointCenter.y-15)/10)][Math.floor(player.pointCenter.x/10)] == 0 && map [Math.floor((player.pointCenter.y+15)/10)][Math.floor(player.pointCenter.x/10)] == 0) { 
		movePlayerYForward(player);
	};
	drawPlayer();
 };

var movePlayerXBack = function (player) { //для функции backMovement X
	player.oon.x += player.stepBack.x, player.nne.x += player.stepBack.x, player.one.x += player.stepBack.x, player.een.x += player.stepBack.x,
	player.ooe.x += player.stepBack.x, player.ees.x += player.stepBack.x, player.oes.x += player.stepBack.x, player.sse.x += player.stepBack.x,
	player.oos.x += player.stepBack.x, player.ssw.x += player.stepBack.x, player.osw.x += player.stepBack.x, player.wws.x += player.stepBack.x,
	player.oow.x += player.stepBack.x, player.wwn.x += player.stepBack.x, player.own.x += player.stepBack.x, player.nnw.x += player.stepBack.x,
	player.pointCenter.x += player.stepBack.x;
 };

var movePlayerYBack = function (player) { //для функции backMovement Y
	player.oon.y += player.stepBack.y, player.nne.y += player.stepBack.y, player.one.y += player.stepBack.y, player.een.y += player.stepBack.y,
	player.ooe.y += player.stepBack.y, player.ees.y += player.stepBack.y, player.oes.y += player.stepBack.y, player.sse.y += player.stepBack.y,
	player.oos.y += player.stepBack.y, player.ssw.y += player.stepBack.y, player.osw.y += player.stepBack.y, player.wws.y += player.stepBack.y,
	player.oow.y += player.stepBack.y, player.wwn.y += player.stepBack.y, player.own.y += player.stepBack.y, player.nnw.y += player.stepBack.y,
	player.pointCenter.y += player.stepBack.y;
 };

var collisionPlayerBack = function(player, player2) { //функция столкновения backMovement
	var collisionXiSS = 0;
	var collisionYiSS = 0;
	var collisionXOOSSS = 0;
	var collisionYOOSSS = 0;
	if (player.pointCenter.x >= player2.pointCenter.x - 40 && player.pointCenter.x <= player2.pointCenter.x + 40) {
		collisionXiSS = 1;
	} else {collisionXiSS = 0};
	if (player.pointCenter.y >= player2.pointCenter.y - 40 && player.pointCenter.y <= player2.pointCenter.y + 40) {
		collisionYiSS = 1;
	} else {collisionYiSS = 0};
	if (player.oos.x >= player2.pointCenter.x - 40 && player.oos.x <= player2.pointCenter.x + 40) {
		collisionXOONSS = 1;
	} else {collisionXOONSS = 0};
	if (player.oos.y >= player2.pointCenter.y - 40 && player.oos.y <= player2.pointCenter.y + 40) {
		collisionYOONSS = 1;
	} else {collisionYOONSS = 0};
	if (collisionXiSS == 1 && collisionYiSS == 1 && collisionXOONSS == 1 && collisionYOONSS == 1) {
		player.collisionControlBack = 1;
	} else {player.collisionControlBack = 0};
 };

var backMovement = function (player, player2) { //движение назад
	player.stepBack.x = (player.oos.x - player.pointCenter.x) / 5 / 4;
	player.stepBack.y = (player.oos.y - player.pointCenter.y) / 5 / 4;
	collisionPlayerBack(player, player2);
	if (map [Math.floor(player.oos.y / 10)][Math.floor(player.oos.x / 10)] == 0 && map [Math.floor(player.sse.y / 10)][Math.floor(player.sse.x / 10)] == 0 &&
	map [Math.floor(player.ssw.y / 10)][Math.floor(player.ssw.x / 10)] == 0 && map [Math.floor(player.oes.y / 10)][Math.floor(player.oes.x / 10)] == 0 &&
	map [Math.floor(player.osw.y / 10)][Math.floor(player.osw.x / 10)] == 0 && player.collisionControlBack == 0) {
		movePlayerXBack(player);
		movePlayerYBack(player);//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
	} else if (map [Math.floor((player.pointCenter.y+5)/10)][Math.floor((player.pointCenter.x-15)/10)] == 1 && map [Math.floor((player.pointCenter.y+15)/10)][Math.floor((player.pointCenter.x-5)/10)] == 1) {
		if (player.oon.x-player.pointCenter.x == -15 && player.oon.y-player.pointCenter.y == -5 || player.oon.x-player.pointCenter.x == -10 &&
		player.oon.y-player.pointCenter.y == -10 || player.oon.x-player.pointCenter.x == -5 && player.oon.y-player.pointCenter.y == -15) {
			movePlayerXBack(player);
		} else if (player.oon.x-player.pointCenter.x == 5 && player.oon.y-player.pointCenter.y == 15 || player.oon.x-player.pointCenter.x == 10 && 
			player.oon.y-player.pointCenter.y == 10 || player.oon.x-player.pointCenter.x == 15 && player.oon.y-player.pointCenter.y == 5) {
			movePlayerYBack(player);
		};
	} else if (map [Math.floor((player.pointCenter.y-5)/10)][Math.floor((player.pointCenter.x-15)/10)] == 1 && map [Math.floor((player.pointCenter.y-15)/10)][Math.floor((player.pointCenter.x-5)/10)] == 1) {
		if (player.oon.x-player.pointCenter.x == -15 && player.oon.y-player.pointCenter.y == 5 || player.oon.x-player.pointCenter.x == -10 && 
			player.oon.y-player.pointCenter.y == 10 || player.oon.x-player.pointCenter.x == -5 && player.oon.y-player.pointCenter.y == 15) {
			movePlayerXBack(player);
		} else if (player.oon.x-player.pointCenter.x == 5 && player.oon.y-player.pointCenter.y == -15 || player.oon.x-player.pointCenter.x == 10 && 
			player.oon.y-player.pointCenter.y == -10 || player.oon.x-player.pointCenter.x == 15 && player.oon.y-player.pointCenter.y == -5) {
			movePlayerYBack(player);
		};
	} else if (map [Math.floor((player.pointCenter.y-15)/10)][Math.floor((player.pointCenter.x+5)/10)] == 1 && map [Math.floor((player.pointCenter.y-5)/10)][Math.floor((player.pointCenter.x+15)/10)] == 1) {
		if (player.oon.x-player.pointCenter.x == 15 && player.oon.y-player.pointCenter.y == 5 || player.oon.x-player.pointCenter.x == 10 && 
			player.oon.y-player.pointCenter.y == 10 || player.oon.x-player.pointCenter.x == 5 && player.oon.y-player.pointCenter.y == 15) {
			movePlayerXBack(player);
		} else if (player.oon.x-player.pointCenter.x == -5 && player.oon.y-player.pointCenter.y == -15 || player.oon.x-player.pointCenter.x == -10 && 
			player.oon.y-player.pointCenter.y == -10 || player.oon.x-player.pointCenter.x == -15 && player.oon.y-player.pointCenter.y == -5) {
			movePlayerYBack(player);
		};
	} else if (map [Math.floor((player.pointCenter.y+5)/10)][Math.floor((player.pointCenter.x+15)/10)] == 1 && map [Math.floor((player.pointCenter.y+15)/10)][Math.floor((player.pointCenter.x+5)/10)] == 1) {
		if (player.oon.x-player.pointCenter.x == 15 && player.oon.y-player.pointCenter.y == -5 || player.oon.x-player.pointCenter.x == 10 && 
			player.oon.y-player.pointCenter.y == -10 || player.oon.x-player.pointCenter.x == 5 && player.oon.y-player.pointCenter.y == -15) {
			movePlayerXBack(player);
		} else if (player.oon.x-player.pointCenter.x == -5 && player.oon.y-player.pointCenter.y == 15 || player.oon.x-player.pointCenter.x == -10 && 
			player.oon.y-player.pointCenter.y == 10 || player.oon.x-player.pointCenter.x == -15 && player.oon.y-player.pointCenter.y == 5) {
			movePlayerYBack(player);
		};
	} else if (map [Math.floor((player.pointCenter.y-15)/10)][Math.floor((player.pointCenter.x-5)/10)] == 1 || map [Math.floor((player.pointCenter.y-15)/10)][Math.floor((player.pointCenter.x+5)/10)] == 1 && map [Math.floor(player.pointCenter.y/10)][Math.floor((player.pointCenter.x-15)/10)] == 0 && map [Math.floor(player.pointCenter.y/10)][Math.floor((player.pointCenter.x+15)/10)] == 0) {
		movePlayerXBack(player);
	} else if (map [Math.floor((player.pointCenter.y+15)/10)][Math.floor((player.pointCenter.x-5)/10)] == 1 || map [Math.floor((player.pointCenter.y+15)/10)][Math.floor((player.pointCenter.x+5)/10)] == 1 && map [Math.floor(player.pointCenter.y/10)][Math.floor((player.pointCenter.x-15)/10)] == 0 && map [Math.floor(player.pointCenter.y/10)][Math.floor((player.pointCenter.x+15)/10)] == 0) {
		movePlayerXBack(player);
	} else if (map [Math.floor((player.pointCenter.y-5)/10)][Math.floor((player.pointCenter.x-15)/10)] == 1 || map [Math.floor((player.pointCenter.y+5)/10)][Math.floor((player.pointCenter.x-15)/10)] == 1 && map [Math.floor((player.pointCenter.y-15)/10)][Math.floor(player.pointCenter.x/10)] == 0 && map [Math.floor((player.pointCenter.y+15)/10)][Math.floor(player.pointCenter.x/10)] == 0) {
		movePlayerYBack(player);
	} else if (map [Math.floor((player.pointCenter.y+5)/10)][Math.floor((player.pointCenter.x+15)/10)] == 1 || map [Math.floor((player.pointCenter.y-5)/10)][Math.floor((player.pointCenter.x+15)/10)] == 1 && map [Math.floor((player.pointCenter.y-15)/10)][Math.floor(player.pointCenter.x/10)] == 0 && map [Math.floor((player.pointCenter.y+15)/10)][Math.floor(player.pointCenter.x/10)] == 0) { 
		movePlayerYBack(player);
	};
	drawPlayer();
 };

var movePlayerXLeft = function (player) { //для функции leftMovement X
	player.oon.x += player.stepLeft.x, player.nne.x += player.stepLeft.x, player.one.x += player.stepLeft.x, player.een.x += player.stepLeft.x,
	player.ooe.x += player.stepLeft.x, player.ees.x += player.stepLeft.x, player.oes.x += player.stepLeft.x, player.sse.x += player.stepLeft.x,
	player.oos.x += player.stepLeft.x, player.ssw.x += player.stepLeft.x, player.osw.x += player.stepLeft.x, player.wws.x += player.stepLeft.x,
	player.oow.x += player.stepLeft.x, player.wwn.x += player.stepLeft.x, player.own.x += player.stepLeft.x, player.nnw.x += player.stepLeft.x,
	player.pointCenter.x += player.stepLeft.x;
 };

var movePlayerYLeft = function (player) { //для функции leftMovement Y
	player.oon.y += player.stepLeft.y, player.nne.y += player.stepLeft.y, player.one.y += player.stepLeft.y, player.een.y += player.stepLeft.y,
	player.ooe.y += player.stepLeft.y, player.ees.y += player.stepLeft.y, player.oes.y += player.stepLeft.y, player.sse.y += player.stepLeft.y,
	player.oos.y += player.stepLeft.y, player.ssw.y += player.stepLeft.y, player.osw.y += player.stepLeft.y, player.wws.y += player.stepLeft.y,
	player.oow.y += player.stepLeft.y, player.wwn.y += player.stepLeft.y, player.own.y += player.stepLeft.y, player.nnw.y += player.stepLeft.y,
	player.pointCenter.y += player.stepLeft.y;
 };

var collisionPlayerLeft = function(player, player2) { //функция столкновения leftMovement
	var collisionXiAA = 0;
	var collisionYiAA = 0;
	var collisionXOOSAA = 0;
	var collisionYOOSAA = 0;
	if (player.pointCenter.x >= player2.pointCenter.x - 40 && player.pointCenter.x <= player2.pointCenter.x + 40) {
		collisionXiAA = 1;
	} else {collisionXiAA = 0};
	if (player.pointCenter.y >= player2.pointCenter.y - 40 && player.pointCenter.y <= player2.pointCenter.y + 40) {
		collisionYiAA = 1;
	} else {collisionYiAA = 0};
	if (player.oow.x >= player2.pointCenter.x - 40 && player.oow.x <= player2.pointCenter.x + 40) {
		collisionXOONAA = 1;
	} else {collisionXOONAA = 0};
	if (player.oow.y >= player2.pointCenter.y - 40 && player.oow.y <= player2.pointCenter.y + 40) {
		collisionYOONAA = 1;
	} else {collisionYOONAA = 0};
	if (collisionXiAA == 1 && collisionYiAA == 1 && collisionXOONAA == 1 && collisionYOONAA == 1) {
		collisionControlLeft = 1;
	} else {collisionControlLeft = 0};
 };

var leftMovement = function (player, player2) { //движение на лево
	player.stepLeft.x = (player.oow.x - player.pointCenter.x) / 5 / 4;
	player.stepLeft.y = (player.oow.y - player.pointCenter.y) / 5 / 4;
	collisionPlayerLeft(player, player2);
	if (map [Math.floor(player.oow.y / 10)][Math.floor(player.oow.x / 10)] == 0 && map [Math.floor(player.wws.y / 10)][Math.floor(player.wws.x / 10)] == 0 &&
	map [Math.floor(player.wwn.y / 10)][Math.floor(player.wwn.x / 10)] == 0 && map [Math.floor(player.osw.y / 10)][Math.floor(player.osw.x / 10)] == 0 &&
	map [Math.floor(player.own.y / 10)][Math.floor(player.own.x / 10)] == 0 && collisionControlLeft == 0) {
		movePlayerXLeft(player);
		movePlayerYLeft(player);
	} else if (map [Math.floor((player.pointCenter.y+5)/10)][Math.floor((player.pointCenter.x-15)/10)] == 1 && map [Math.floor((player.pointCenter.y+15)/10)][Math.floor((player.pointCenter.x-5)/10)] == 1) {
		if (player.oow.x-player.pointCenter.x == -15 && player.oow.y-player.pointCenter.y == -5 || player.oow.x-player.pointCenter.x == -10 && 
			player.oow.y-player.pointCenter.y == -10 || player.oow.x-player.pointCenter.x == -5 && player.oow.y-player.pointCenter.y == -15) {
			movePlayerYLeft(player);
		} else if (player.oow.x-player.pointCenter.x == 5 && player.oow.y-player.pointCenter.y == 15 || player.oow.x-player.pointCenter.x == 10 && 
			player.oow.y-player.pointCenter.y == 10 || player.oow.x-player.pointCenter.x == 15 && player.oow.y-player.pointCenter.y == 5) {
			movePlayerXLeft(player);
		};
	} else if (map [Math.floor((player.pointCenter.y-5)/10)][Math.floor((player.pointCenter.x-15)/10)] == 1 && map [Math.floor((player.pointCenter.y-15)/10)][Math.floor((player.pointCenter.x-5)/10)] == 1) {
		if (player.oow.x-player.pointCenter.x == -15 && player.oow.y-player.pointCenter.y == 5 || player.oow.x-player.pointCenter.x == -10 && 
			player.oow.y-player.pointCenter.y == 10 || player.oow.x-player.pointCenter.x == -5 && player.oow.y-player.pointCenter.y == 15) {
			movePlayerYLeft(player);
		} else if (player.oow.x-player.pointCenter.x == 5 && player.oow.y-player.pointCenter.y == -15 || player.oow.x-player.pointCenter.x == 10 && 
			player.oow.y-player.pointCenter.y == -10 || player.oow.x-player.pointCenter.x == 15 && player.oow.y-player.pointCenter.y == -5) {
			movePlayerXLeft(player);
		};
	} else if (map [Math.floor((player.pointCenter.y-15)/10)][Math.floor((player.pointCenter.x+5)/10)] == 1 && map [Math.floor((player.pointCenter.y-5)/10)][Math.floor((player.pointCenter.x+15)/10)] == 1) {
		if (player.oow.x-player.pointCenter.x == 15 && player.oow.y-player.pointCenter.y == 5 || player.oow.x-player.pointCenter.x == 10 && 
			player.oow.y-player.pointCenter.y == 10 || player.oow.x-player.pointCenter.x == 5 && player.oow.y-player.pointCenter.y == 15) {
			movePlayerYLeft(player);
		} else if (player.oow.x-player.pointCenter.x == -5 && player.oow.y-player.pointCenter.y == -15 || player.oow.x-player.pointCenter.x == -10 && 
			player.oow.y-player.pointCenter.y == -10 || player.oow.x-player.pointCenter.x == -15 && player.oow.y-player.pointCenter.y == -5) {
			movePlayerXLeft(player);
		};
	} else if (map [Math.floor((player.pointCenter.y+5)/10)][Math.floor((player.pointCenter.x+15)/10)] == 1 && map [Math.floor((player.pointCenter.y+15)/10)][Math.floor((player.pointCenter.x+5)/10)] == 1) {
		if (player.oow.x-player.pointCenter.x == 15 && player.oow.y-player.pointCenter.y == -5 || player.oow.x-player.pointCenter.x == 10 && 
			player.oow.y-player.pointCenter.y == -10 || player.oow.x-player.pointCenter.x == 5 && player.oow.y-player.pointCenter.y == -15) {
			movePlayerYLeft(player);
		} else if (player.oow.x-player.pointCenter.x == -5 && player.oow.y-player.pointCenter.y == 15 || player.oow.x-player.pointCenter.x == -10 && 
			player.oow.y-player.pointCenter.y == 10 || player.oow.x-player.pointCenter.x == -15 && player.oow.y-player.pointCenter.y == 5) {
			movePlayerXLeft(player);
		};
	} else if (map [Math.floor((player.pointCenter.y-15)/10)][Math.floor((player.pointCenter.x-5)/10)] == 1 || map [Math.floor((player.pointCenter.y-15)/10)][Math.floor((player.pointCenter.x+5)/10)] == 1 && 
		map [Math.floor(player.pointCenter.y/10)][Math.floor((player.pointCenter.x-15)/10)] == 0 && map [Math.floor(player.pointCenter.y/10)][Math.floor((player.pointCenter.x+15)/10)] == 0) {
		movePlayerXLeft(player);
	} else if (map [Math.floor((player.pointCenter.y+15)/10)][Math.floor((player.pointCenter.x-5)/10)] == 1 || map [Math.floor((player.pointCenter.y+15)/10)][Math.floor((player.pointCenter.x+5)/10)] == 1 && 
		map [Math.floor(player.pointCenter.y/10)][Math.floor((player.pointCenter.x-15)/10)] == 0 && map [Math.floor(player.pointCenter.y/10)][Math.floor((player.pointCenter.x+15)/10)] == 0) {
		movePlayerXLeft(player);
	} else if (map [Math.floor((player.pointCenter.y-5)/10)][Math.floor((player.pointCenter.x-15)/10)] == 1 || map [Math.floor((player.pointCenter.y+5)/10)][Math.floor((player.pointCenter.x-15)/10)] == 1 && 
		map [Math.floor((player.pointCenter.y-15)/10)][Math.floor(player.pointCenter.x/10)] == 0 && map [Math.floor((player.pointCenter.y+15)/10)][Math.floor(player.pointCenter.x/10)] == 0) {
		movePlayerYLeft(player);
	} else if (map [Math.floor((player.pointCenter.y+5)/10)][Math.floor((player.pointCenter.x+15)/10)] == 1 || map [Math.floor((player.pointCenter.y-5)/10)][Math.floor((player.pointCenter.x+15)/10)] == 1 && 
		map [Math.floor((player.pointCenter.y-15)/10)][Math.floor(player.pointCenter.x/10)] == 0 && map [Math.floor((player.pointCenter.y+15)/10)][Math.floor(player.pointCenter.x/10)] == 0) { 
		movePlayerYLeft(player);
	};
	drawPlayer();
 };

var collisionPlayerRight = function(player, player2) { //функция столкновения RightMovement
	var collisionXiDD = 0;
	var collisionYiDD = 0;
	var collisionXOOSDD = 0;
	var collisionYOOSDD = 0;
	if (player.pointCenter.x >= player2.pointCenter.x - 40 && player.pointCenter.x <= player2.pointCenter.x + 40) {
		collisionXiDD = 1;
	} else {collisionXiDD = 0};
	if (player.pointCenter.y >= player2.pointCenter.y - 40 && player.pointCenter.y <= player2.pointCenter.y + 40) {
		collisionYiDD = 1;
	} else {collisionYiDD = 0};
	if (player.ooe.x >= player2.pointCenter.x - 40 && player.ooe.x <= player2.pointCenter.x + 40) {
		collisionXOONDD = 1;
	} else {collisionXOONDD = 0};
	if (player.ooe.y >= player2.pointCenter.y - 40 && player.ooe.y <= player2.pointCenter.y + 40) {
		collisionYOONDD = 1;
	} else {collisionYOONDD = 0};
	if (collisionXiDD == 1 && collisionYiDD == 1 && collisionXOONDD == 1 && collisionYOONDD == 1) {
		collisionControlRight = 1;
	} else {collisionControlRight = 0};
 };

var movePlayerXRight = function (player) { //для функции RightMovement X
	player.oon.x += player.stepRight.x, player.nne.x += player.stepRight.x, player.one.x += player.stepRight.x, player.een.x += player.stepRight.x,
	player.ooe.x += player.stepRight.x, player.ees.x += player.stepRight.x, player.oes.x += player.stepRight.x, player.sse.x += player.stepRight.x,
	player.oos.x += player.stepRight.x, player.ssw.x += player.stepRight.x, player.osw.x += player.stepRight.x, player.wws.x += player.stepRight.x,
	player.oow.x += player.stepRight.x, player.wwn.x += player.stepRight.x, player.own.x += player.stepRight.x, player.nnw.x += player.stepRight.x,
	player.pointCenter.x += player.stepRight.x;
 };

var movePlayerYRight = function (player) { //для функции RightMovement Y
	player.oon.y += player.stepRight.y, player.nne.y += player.stepRight.y, player.one.y += player.stepRight.y, player.een.y += player.stepRight.y,
	player.ooe.y += player.stepRight.y, player.ees.y += player.stepRight.y, player.oes.y += player.stepRight.y, player.sse.y += player.stepRight.y,
	player.oos.y += player.stepRight.y, player.ssw.y += player.stepRight.y, player.osw.y += player.stepRight.y, player.wws.y += player.stepRight.y,
	player.oow.y += player.stepRight.y, player.wwn.y += player.stepRight.y, player.own.y += player.stepRight.y, player.nnw.y += player.stepRight.y,
	player.pointCenter.y += player.stepRight.y;
 };

var rightMovement = function (player, player2) { // движение на право
	player.stepRight.x = (player.ooe.x - player.pointCenter.x) / 5 / 4;
	player.stepRight.y = (player.ooe.y - player.pointCenter.y) / 5 / 4;
	collisionPlayerRight(player, player2);
	if (map [Math.floor(player.ooe.y / 10)][Math.floor(player.ooe.x / 10)] == 0 && map [Math.floor(player.een.y / 10)][Math.floor(player.een.x / 10)] == 0 && 
		map [Math.floor(player.ees.y / 10)][Math.floor(player.ees.x / 10)] == 0 && map [Math.floor(player.one.y / 10)][Math.floor(player.one.x / 10)] == 0 && 
		map [Math.floor(player.oes.y / 10)][Math.floor(player.oes.x / 10)] == 0 && collisionControlRight == 0) {
		movePlayerXRight(player);
		movePlayerYRight(player);
	} else if (map [Math.floor((player.pointCenter.y+5)/10)][Math.floor((player.pointCenter.x-15)/10)] == 1 && map [Math.floor((player.pointCenter.y+15)/10)][Math.floor((player.pointCenter.x-5)/10)] == 1) {
		if (player.oow.x-player.pointCenter.x == -15 && player.oow.y-player.pointCenter.y == -5 || player.oow.x-player.pointCenter.x == -10 && 
			player.oow.y-player.pointCenter.y == -10 || player.oow.x-player.pointCenter.x == -5 && player.oow.y-player.pointCenter.y == -15) {
			movePlayerXRight(player);
		} else if (player.oow.x-player.pointCenter.x == 5 && player.oow.y-player.pointCenter.y == 15 || player.oow.x-player.pointCenter.x == 10 && 
			player.oow.y-player.pointCenter.y == 10 || player.oow.x-player.pointCenter.x == 15 && player.oow.y-player.pointCenter.y == 5) {
			movePlayerYRight(player);
		};
	} else if (map [Math.floor((player.pointCenter.y-5)/10)][Math.floor((player.pointCenter.x-15)/10)] == 1 && map [Math.floor((player.pointCenter.y-15)/10)][Math.floor((player.pointCenter.x-5)/10)] == 1) {
		if (player.oow.x-player.pointCenter.x == -15 && player.oow.y-player.pointCenter.y == 5 || player.oow.x-player.pointCenter.x == -10 && 
			player.oow.y-player.pointCenter.y == 10 || player.oow.x-player.pointCenter.x == -5 && player.oow.y-player.pointCenter.y == 15) {
			movePlayerXRight(player);
		} else if (player.oow.x-player.pointCenter.x == 5 && player.oow.y-player.pointCenter.y == -15 || player.oow.x-player.pointCenter.x == 10 &&
		player.oow.y-player.pointCenter.y == -10 || player.oow.x-player.pointCenter.x == 15 && player.oow.y-player.pointCenter.y == -5) {
			movePlayerYRight(player);
		};
	} else if (map [Math.floor((player.pointCenter.y-15)/10)][Math.floor((player.pointCenter.x+5)/10)] == 1 && map [Math.floor((player.pointCenter.y-5)/10)][Math.floor((player.pointCenter.x+15)/10)] == 1) {
		if (player.oow.x-player.pointCenter.x == 15 && player.oow.y-player.pointCenter.y == 5 || player.oow.x-player.pointCenter.x == 10 && 
			player.oow.y-player.pointCenter.y == 10 || player.oow.x-player.pointCenter.x == 5 && player.oow.y-player.pointCenter.y == 15) {
			movePlayerXRight(player);
		} else if (player.oow.x-player.pointCenter.x == -5 && player.oow.y-player.pointCenter.y == -15 || player.oow.x-player.pointCenter.x == -10 && 
			player.oow.y-player.pointCenter.y == -10 || player.oow.x-player.pointCenter.x == -15 && player.oow.y-player.pointCenter.y == -5) {
			movePlayerYRight(player);
		};
	} else if (map [Math.floor((player.pointCenter.y+5)/10)][Math.floor((player.pointCenter.x+15)/10)] == 1 && map [Math.floor((player.pointCenter.y+15)/10)][Math.floor((player.pointCenter.x+5)/10)] == 1) {
		if (player.oow.x-player.pointCenter.x == 15 && player.oow.y-player.pointCenter.y == -5 || player.oow.x-player.pointCenter.x == 10 && 
			player.oow.y-player.pointCenter.y == -10 || player.oow.x-player.pointCenter.x == 5 && player.oow.y-player.pointCenter.y == -15) {
			movePlayerXRight(player);
		} else if (player.oow.x-player.pointCenter.x == -5 && player.oow.y-player.pointCenter.y == 15 || player.oow.x-player.pointCenter.x == -10 && 
			player.oow.y-player.pointCenter.y == 10 || player.oow.x-player.pointCenter.x == -15 && player.oow.y-player.pointCenter.y == 5) {
			movePlayerYRight(player);
		};
	} else if (map [Math.floor((player.pointCenter.y-15)/10)][Math.floor((player.pointCenter.x-5)/10)] == 1 || map [Math.floor((player.pointCenter.y-15)/10)][Math.floor((player.pointCenter.x+5)/10)] == 1 && 
		map [Math.floor(player.pointCenter.y/10)][Math.floor((player.pointCenter.x-15)/10)] == 0 && map [Math.floor(player.pointCenter.y/10)][Math.floor((player.pointCenter.x+15)/10)] == 0) {
		movePlayerXRight(player);
	} else if (map [Math.floor((player.pointCenter.y+15)/10)][Math.floor((player.pointCenter.x-5)/10)] == 1 || map [Math.floor((player.pointCenter.y+15)/10)][Math.floor((player.pointCenter.x+5)/10)] == 1 && 
		map [Math.floor(player.pointCenter.y/10)][Math.floor((player.pointCenter.x-15)/10)] == 0 && map [Math.floor(player.pointCenter.y/10)][Math.floor((player.pointCenter.x+15)/10)] == 0) {
		movePlayerXRight(player);
	} else if (map [Math.floor((player.pointCenter.y-5)/10)][Math.floor((player.pointCenter.x-15)/10)] == 1 || map [Math.floor((player.pointCenter.y+5)/10)][Math.floor((player.pointCenter.x-15)/10)] == 1 && 
		map [Math.floor((player.pointCenter.y-15)/10)][Math.floor(player.pointCenter.x/10)] == 0 && map [Math.floor((player.pointCenter.y+15)/10)][Math.floor(player.pointCenter.x/10)] == 0) {
		movePlayerYRight(player);
	} else if (map [Math.floor((player.pointCenter.y+5)/10)][Math.floor((player.pointCenter.x+15)/10)] == 1 || map [Math.floor((player.pointCenter.y-5)/10)][Math.floor((player.pointCenter.x+15)/10)] == 1 && 
		map [Math.floor((player.pointCenter.y-15)/10)][Math.floor(player.pointCenter.x/10)] == 0 && map [Math.floor((player.pointCenter.y+15)/10)][Math.floor(player.pointCenter.x/10)] == 0) { 
		movePlayerYRight(player);
	};
	drawPlayer();
 };




var testHP = function() {
	if (player01.HP <= 0) {
		alert("victory player 2");
	};
	if (player02.HP <= 0) {
		alert("victory player 1");
	};
};











var stopFireP1 = function () {
	$("#shut01").remove();
} ;

var speedShut = 0;

var speedShutTime = function() {
	speedShut = 0;
};

var shotP1 = function() {

	setTimeout(stopFireP1, 50);

	var fireXww = (player01.oon.x - player01.pointCenter.x) / 2;
	var fireYww = (player01.oon.y - player01.pointCenter.y) / 2;

	var FireShut = '<img src="./Images/Shut/FireShut.png">';

	var FireShutP1 = $(FireShut);

	if (player01.ammo > 0 && speedShut == 0) {
		$(FireShutP1).attr('id', 'shut01');
		FireShutP1.css({
		position: "absolute",
		left: player01.oon.x + fireXww ,
		top: player01.oon.y + fireYww
		});

		$("body").append(FireShutP1);
		$("#shut01").rotate(player01.directionDegree);
	};

	var shotDotXp1 = player01.pointCenter.x;
	var shotDotYp1 = player01.pointCenter.y;
	var shotStepXP1;
	var shotStepYP1;
	var shotDotXDirectionp1 = player01.oon.x;
	var shotDotYDirectionp1 = player01.oon.y;

	var iShotP1 = 0;

	shotStepXP1 = (shotDotXDirectionp1 - shotDotXp1) / 5 / 4;
	shotStepYP1 = (shotDotYDirectionp1 - shotDotYp1) / 5 / 4;

	while (map [Math.floor(shotDotYp1 / 10)][Math.floor(shotDotXp1 / 10)] < 2 && iShotP1 == 0 && player01.ammo > 0 && speedShut == 0) {
		if (shotDotXp1 >= player02.pointCenter.x - 18 && shotDotXp1 <= player02.pointCenter.x + 18 && shotDotYp1 >= player02.pointCenter.y - 18 && 
			shotDotYp1 <= player02.pointCenter.y + 18) {
			iShotP1 = 1;
		}
		shotDotXp1 += shotStepXP1; 
		shotDotYp1 += shotStepYP1;
	};
	if (map [Math.floor(shotDotYp1 / 10)][Math.floor(shotDotXp1 / 10)] == 2) {
		player01.ammo -= 1;
		speedShut = 1;
		setTimeout(speedShutTime, 350);
		console.log(player01.ammo + " P1");
		console.log("Стена");
	};
	if (shotDotXp1 >= player02.pointCenter.x - 18 && shotDotXp1 <= player02.pointCenter.x + 18 && shotDotYp1 >= player02.pointCenter.y - 18 && 
		shotDotYp1 <= player02.pointCenter.y + 18) {
		player02.HP -= 20;
		player01.ammo -= 1;
		speedShut = 1;
		setTimeout(speedShutTime, 350);
		console.log(player01.ammo + " P1");
		console.log("ранение персонажа 2");
		woundplayer2();
		testHP();
	};
	drawBulletP1();
};



var stopFireP2 = function () {
	$("#shut02").remove();
} ;

var speedShutP2 = 0;

var speedShutTimeP2 = function() {
	speedShutP2 = 0;
}

var shotP2 = function() {
	setTimeout(stopFireP2, 50);

	var fireXwwp2 = (player02.oon.x - player02.pointCenter.x) / 2;
	var fireYwwp2 = (player02.oon.y - player02.pointCenter.y) / 2;

	var FireShut = '<img src="./Images/Shut/FireShut.png">';

	var FireShutp2 = $(FireShut);

	if (player02.ammo > 0 && speedShutP2 == 0) {
		$(FireShutp2).attr('id', 'shut02');
		FireShutp2.css({
		position: "absolute",
		left: player02.oon.x + fireXwwp2 ,
		top: player02.oon.y + fireYwwp2
		});

		$("body").append(FireShutp2);
		$("#shut02").rotate(player02.directionDegree);
	};

	var shotDotXp2 = player02.pointCenter.x;
	var shotDotYp2 = player02.pointCenter.y;
	var shotStepXP2;
	var shotStepYP2;
	var shotDotXDirectionp2 = player02.oon.x;
	var shotDotYDirectionp2 = player02.oon.y;

	var iShotP2 = 0;

	shotStepXP2 = (shotDotXDirectionp2 - shotDotXp2) / 5 / 4;
	shotStepYP2 = (shotDotYDirectionp2 - shotDotYp2) / 5 / 4;

	while (map [Math.floor(shotDotYp2 / 10)][Math.floor(shotDotXp2 / 10)] < 2 && iShotP2 == 0 && player02.ammo > 0 && speedShutP2 == 0) {
		if (shotDotXp2 >= player01.pointCenter.x - 18 && shotDotXp2 <= player01.pointCenter.x + 18 &&
		shotDotYp2 >= player01.pointCenter.y - 18 && shotDotYp2 <= player01.pointCenter.y + 18) {
			iShotP2 = 1;
		}
		shotDotXp2 += shotStepXP2; 
		shotDotYp2 += shotStepYP2;
	};
	if (map [Math.floor(shotDotYp2 / 10)][Math.floor(shotDotXp2 / 10)] == 2) {
		player02.ammo -= 1;
		speedShutP2 = 1;
		setTimeout(speedShutTimeP2, 350);
		console.log(player02.ammo + " P2");
		console.log("Стена");
	};
	if (shotDotXp2 >= player01.pointCenter.x - 18 && shotDotXp2 <= player01.pointCenter.x + 18 &&
	shotDotYp2 >= player01.pointCenter.y - 18 && shotDotYp2 <= player01.pointCenter.y + 18) {
		player01.HP -= 20;
		player02.ammo -= 1;
		speedShutP2 = 1;
		setTimeout(speedShutTimeP2, 350);
		console.log(player02.ammo + " P2");
		console.log("ранение персонажа 1");
		woundplayer1();
		testHP();
	};
	drawBulletP2();
};