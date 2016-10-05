
var canvasDiv = document.getElementById("drawingArea");
var canvas = canvasDiv.getContext('2d');




//circle
canvas.beginPath();
canvas.arc(400, 400, 395, 0, 2*Math.PI);
canvas.arc(399, 399, 395, 0, 2*Math.PI);
canvas.arc(398, 398, 395, 0, 2*Math.PI);
canvas.arc(397, 397, 395, 0, 2*Math.PI);
canvas.arc(396, 396, 395, 0, 2*Math.PI);
canvas.arc(395, 395, 395, 0, 2*Math.PI);
canvas.fillStyle = "black";
canvas.closePath();
canvas.stroke();

//square
canvas.fillStyle = "black";
canvas.fillRect(50, 50, 200, 200);
canvas.clearRect(45 ,45,160,160);
canvas.strokeRect(100,100,100,100);

canvas.fillRect(700, 50, 200, 200);
canvas.clearRect(700,45, 160, 160);
canvas.strokeRect(100,100,100,100);
