
var canvasDiv = document.getElementById("drawingArea");
var canvas = canvasDiv.getContext('2d');




//big circle
canvas.fillStyle = "purple";
canvas.beginPath();
canvas.arc(400, 400, 395, 0, 2*Math.PI);
canvas.arc(399, 399, 395, 0, 2*Math.PI);
canvas.arc(398, 398, 395, 0, 2*Math.PI);
canvas.arc(397, 397, 395, 0, 2*Math.PI);
canvas.arc(396, 396, 395, 0, 2*Math.PI);
canvas.arc(395, 395, 395, 0, 2*Math.PI);
canvas.closePath();
canvas.stroke();
canvas.fill();

//square
canvas.fillStyle = "black";
canvas.fillRect(50, 50, 200, 200);
canvas.clearRect(45 ,45,160,160);
canvas.strokeRect(100,100,100,100);
canvas.fillRect(560, 50, 200,200);
canvas.clearRect(610, 45, 160, 160);
canvas.strokeRect(620, 100, 100, 100);

//circles
canvas.fillStyle = "black";
canvas.beginPath();
canvas.arc(400, 400, 100, 0, 2*Math.PI);
canvas.stroke();
canvas.fill();
canvas.fillStyle = "red";
canvas.beginPath();
canvas.arc(400, 200, 100, 0, 2*Math.PI);
canvas.stroke();
canvas.fill();
canvas.fillStyle = "yellow";
canvas.beginPath();
canvas.arc(200, 400, 100, 0, 2*Math.PI);
canvas.stroke();
canvas.fill();
canvas.fillStyle = "white";
canvas.beginPath();
canvas.arc(200, 400, 70, 0, 2*Math.PI);
canvas.stroke();
canvas.fill();
canvas.fillStyle = "green";
canvas.beginPath();
canvas.arc(600, 400, 100, 0, 2*Math.PI);
canvas.stroke();
canvas.fill();
canvas.fillStyle = "white";
canvas.beginPath();
canvas.arc(600, 400, 70, 0, 2*Math.PI);
canvas.stroke();
canvas.fill();
canvas.fillStyle = "blue";
canvas.beginPath();
canvas.arc(400, 600, 100, 0, 2*Math.PI);
canvas.stroke();
canvas.fill();

//tri
canvas.fillStyle = "red";
canvas.beginPath();
canvas.moveTo(100, 100);
canvas.lineTo(50, 50);
canvas.lineTo(50, 15);
canvas.fill();
canvas.beginPath();
canvas.moveTo(790, 50);
canvas.lineTo(790, 20);
canvas.lineTo(720, 100);
canvas.fill();

//eyes
canvas.fillStyle = ""
