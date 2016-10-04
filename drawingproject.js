
var canvasDiv = document.getElementById("drawingArea");
var canvas = canvasDiv.getContext('2d');


//background
canvas.fillStyle = "Azure";
canvas.fillRect(0, 0, 800, 800);

//circle
canvas.beginPath();
canvas.arc(400, 400, 395, 0, 2*Math.PI);
canvas.arc(399, 399, 395, 0, 2*Math.PI);
canvas.arc(398, 398, 395, 0, 2*Math.PI);
canvas.arc(397, 397, 395, 0, 2*Math.PI);
canvas.arc(396, 396, 395, 0, 2*Math.PI);
canvas.arc(395, 395, 395, 0, 2*Math.PI);
canvas.stroke();

//head
canvas.fillStyle = "red";
canvas.beginPath();
canvas.moveTo(200, 100);
canvas.lineTo(400,75);
canvas.lineTo(400,25);
canvas.moveTo(400, 100);
canvas.lineTo(400,75);
canvas.lineTo(200,25);
canvas.fill();

//neck
canvas.beginPath();
canvas.moveTo(20,20);           // Create a starting point
canvas.lineTo(100,20);          // Create a horizontal line
canvas.arcTo(150,20,150,70,50); // Create an arc
canvas.lineTo(150,120);         // Continue with vertical line
canvas.stroke();     
