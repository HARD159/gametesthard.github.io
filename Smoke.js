var smokecox = 50;
var smokecoy = 50;
var sxoon = smokecox;       // положение 1 Х
var syoon = smokecoy - 15;  // положение 1 У
var sxnne = smokecox + 5;   // положение 2 Х
var synne = smokecoy - 15;  // положение 2 У
var sxone = smokecox + 10;  // положение 3 Х
var syone = smokecoy - 10;  // положение 3 У
var sxeen = smokecox + 15;  // положение 4 Х
var syeen = smokecoy - 5;   // положение 4 У
var sxooe = smokecox + 15;  // положение 5 Х
var syooe = smokecoy;       // положение 5 У
var sxees = smokecox + 15;  // положение 6 Х
var syees = smokecoy + 5;   // положение 6 У
var sxoes = smokecox + 10;  // положение 7 Х
var syoes = smokecoy + 10;  // положение 7 У
var sxsse = smokecox + 5;   // положение 8 Х
var sysse = smokecoy + 15;  // положение 8 У
var sxoos = smokecox;       // положение 9 Х
var syoos = smokecoy + 15;  // положение 9 У
var sxssw = smokecox - 5;   // положение 10 Х
var syssw = smokecoy + 15;  // положение 10 У
var sxosw = smokecox - 10;  // положение 11 Х
var syosw = smokecoy + 10;  // положение 11 У
var sxwws = smokecox - 15;  // положение 12 Х
var sywws = smokecoy + 5;   // положение 12 У
var sxoow = smokecox - 15;  // положение 13 Х
var syoow = smokecoy;       // положение 13 У
var sxwwn = smokecox - 15;  // положение 14 Х
var sywwn = smokecoy - 5;   // положение 14 У
var sxown = smokecox - 10;  // положение 15 Х
var syown = smokecoy - 10;  // положение 15 У
var sxnnw = smokecox - 5;   // положение 16 Х
var synnw = smokecoy - 15;  // положение 16 У
var scoxww;
var scoyww;

var windStrength = 10;

var DirectionOfTheWind = function () {
	var ranomDirection = Math.floor(Math.random() * 2);
	var ranomForce = Math.floor(Math.random() * 2);
	if (ranomDirection == 0) { // поворот в право
		var sxfe = [];
		var syfe = [];

		sxfe[0] = sxoon, sxfe[1] = sxnne, sxfe[2] = sxone, sxfe[3] = sxeen, sxfe[4] = sxooe, sxfe[5] = sxees, sxfe[6] = sxoes, sxfe[7] = sxsse,
		sxfe[8] = sxoos; sxfe[9] = sxssw; sxfe[10] = sxosw, sxfe[11] = sxwws, sxfe[12] = sxoow, sxfe[13] = sxwwn, sxfe[14] = sxown, sxfe[15] = sxnnw;

		syfe[0] = syoon, syfe[1] = synne, syfe[2] = syone, syfe[3] = syeen, syfe[4] = syooe, syfe[5] = syees, syfe[6] = syoes, syfe[7] = sysse,
		syfe[8] = syoos; syfe[9] = syssw; syfe[10] = syosw, syfe[11] = sywws, syfe[12] = syoow, syfe[13] = sywwn, syfe[14] = syown, syfe[15] = synnw;

		sxoon = sxfe[1], sxnne = sxfe[2], sxone = sxfe[3], sxeen = sxfe[4], sxooe = sxfe[5], sxees = sxfe[6], sxoes = sxfe[7], sxsse = sxfe[8],
		sxoos = sxfe[9], sxssw = sxfe[10]; sxosw = sxfe[11], sxwws = sxfe[12], sxoow = sxfe[13], sxwwn = sxfe[14], sxown = sxfe[15], sxnnw = sxfe[0];

		syoon = syfe[1], synne = syfe[2], syone = syfe[3], syeen = syfe[4], syooe = syfe[5], syees = syfe[6], syoes = syfe[7], sysse = syfe[8],
		syoos = syfe[9], syssw = syfe[10]; syosw = syfe[11], sywws = syfe[12], syoow = syfe[13], sywwn = syfe[14], syown = syfe[15], synnw = syfe[0];

	} else if (ranomDirection == 1) { // поворот в лево
		var sxfq = [];
		var syfq = [];

		sxfq[0] = sxoon, sxfq[1] = sxnne, sxfq[2] = sxone, sxfq[3] = sxeen, sxfq[4] = sxooe, sxfq[5] = sxees, sxfq[6] = sxoes, sxfq[7] = sxsse,
		sxfq[8] = sxoos; sxfq[9] = sxssw; sxfq[10] = sxosw, sxfq[11] = sxwws, sxfq[12] = sxoow, sxfq[13] = sxwwn, sxfq[14] = sxown, sxfq[15] = sxnnw;

		syfq[0] = syoon, syfq[1] = synne, syfq[2] = syone, syfq[3] = syeen, syfq[4] = syooe, syfq[5] = syees, syfq[6] = syoes, syfq[7] = sysse,
		syfq[8] = syoos; syfq[9] = syssw; syfq[10] = syosw, syfq[11] = sywws, syfq[12] = syoow, syfq[13] = sywwn, syfq[14] = syown, syfq[15] = synnw;

		sxoon = sxfq[15], sxnne = sxfq[0], sxone = sxfq[1], sxeen = sxfq[2], sxooe = sxfq[3], sxees = sxfq[4], sxoes = sxfq[5], sxsse = sxfq[6],
		sxoos = sxfq[7], sxssw = sxfq[8]; sxosw = sxfq[9], sxwws = sxfq[10], sxoow = sxfq[11], sxwwn = sxfq[12], sxown = sxfq[13], sxnnw = sxfq[14];

		syoon = syfq[15], synne = syfq[0], syone = syfq[1], syeen = syfq[2], syooe = syfq[3], syees = syfq[4], syoes = syfq[5], sysse = syfq[6],
		syoos = syfq[7], syssw = syfq[8]; syosw = syfq[9], sywws = syfq[10], syoow = syfq[11], sywwn = syfq[12], syown = syfq[13], synnw = syfq[14];
	};
	if (ranomForce == 0) {
		windStrength += 1
	} else if (ranomForce == 1) {
		windStrength -= 1
	};

	if (windStrength < 8) { // максимальный предел ветра
		windStrength += 2
	} else if (windStrength > 12) { // минимальный предел ветра
		windStrength -= 2
	};
};

setInterval(DirectionOfTheWind, 3000)

var smokeGr = [];

var CloudListX = [370, 370, 370, 370, 370, 370, 370, 370, 370, 370, 370, 370, 370, 370, 370, 370, 370, 370, 370, 370];

var CloudListY = [500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500];


var iCloudSprites = 0;

while (iCloudSprites < 20) { // функция которая соеденяет точки координат с изображениями!
	smokeGr[iCloudSprites] = $(spritesCloud[iCloudSprites]);
	smokeGr[iCloudSprites].css({
		position: "absolute",
		left: CloudListX[iCloudSprites],
		top: CloudListY[iCloudSprites]
	});
	iCloudSprites += 1;
};

var smokeGrTimePlus = [];
var intervalSmokeGrTime;
var iGr = 0;

var smokeGrTime = function () { // функция для работы с бади
	if (smokeGr.length > smokeGrTimePlus.length) {
		smokeGrTimePlus[iGr] = smokeGr[iGr];
		iGr += 1;
	} else {
		clearInterval(intervalSmokeGrTime);
	};
};

 intervalSmokeGrTime = setInterval(smokeGrTime, 500);



var stopSGrTP = 0;

var smokeMovement = function() { //прорисовка!

	scoxww = (sxoon - smokecox) / windStrength;
	scoyww = (syoon - smokecoy) / windStrength;

	var iSM = 0;

	while (iSM < smokeGrTimePlus.length) {
		CloudListX[iSM] += scoxww
		CloudListY[iSM] += scoyww
		$(smokeGrTimePlus[iSM]).attr('id', 'smoke[iSM]');
		smokeGrTimePlus[iSM].css({
			position: "absolute",
			left: CloudListX[iSM],
			top: CloudListY[iSM]
		});
	$("body").append(smokeGrTimePlus[iSM]);
	//$("smoke[iSM]").fadeOut(3000);
	iSM += 1;
	};
	if (smokeGrTimePlus.length == 20 && stopSGrTP == 0) {
		setInterval(smokeDelete, 500);
		stopSGrTP += 1;
	};
};
setInterval(smokeMovement, 100);


var iSD = 0;

var smokeDelete = function () {
	//$("#smoke[iSD]").fadeOut(3000);
	//$("#smoke[iSD]").remove();
	CloudListX[iSD] = 370;
	CloudListY[iSD] = 500;
	iSD += 1;
	if (iSD == 20) {
		iSD = 0;
	};

};




