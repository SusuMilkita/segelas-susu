var can, ctx, step, steps = 0,
	  delay = 20;

function init() {
	can = document.getElementById("milkitaCanvas");
	ctx = can.getContext("2d");
	ctx.fillStyle = "blue";
	ctx.font = "20pt Verdana";
	ctx.textAlign = "center";
	ctx.textBaseline = "middle";
	step = 0;
	steps = can.width + 50;
	RunTextLeftToRight();
}

function RunTextLeftToRight() {
	step++;
	ctx.clearRect(0, 0, can.width, can.height);
	ctx.save();
	ctx.translate(step, can.height / 2);
	ctx.fillText("Susu Milkita", 0, 0);
	ctx.restore();
	if (step == steps)
		step = 0;
	if (step < steps)
		var t = setTimeout('RunTextLeftToRight()', delay);
}
