// Task 1

function f1() {
  let canvas = document.getElementById("figure-1");
  let ctx = canvas.getContext("2d");

  ctx.beginPath();
  ctx.arc(250, 100, 50, 0, Math.PI * 2, true);
  ctx.fillStyle = "magenta";
  ctx.fill();
  ctx.closePath();


  ctx.beginPath();
  ctx.moveTo(250, 150);
  ctx.lineTo(250, 350);
  ctx.strokeStyle = "magenta";
  ctx.lineWidth = 5;
  ctx.stroke();
  ctx.closePath();


  ctx.beginPath();
  ctx.moveTo(250, 200);
  ctx.lineTo(350, 250);
  ctx.moveTo(250, 200);
  ctx.lineTo(150, 250);
  ctx.stroke();
  ctx.closePath();


  ctx.beginPath();
  ctx.moveTo(250, 350);
  ctx.lineTo(300, 450);
  ctx.moveTo(250, 350);
  ctx.lineTo(200, 450);
  ctx.stroke();
  ctx.closePath();
}
f1();

// Task 2

function f2() {
  let canvas = document.getElementById("figure-2");
  let ctx = canvas.getContext("2d");


  ctx.fillStyle = "red";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

 
  ctx.fillStyle = "blue";
  let widths = [150, 200, 450, 300, 400, 250, 350];
  let yPosition = 50;
  for (let i = 0; i < widths.length; i++) {
    ctx.fillRect(50, yPosition, widths[i], 50);
    yPosition += 70;
  }
}
f2();



// Task 3

function f3() {
  let canvas = document.getElementById("figure-3");
  let ctx = canvas.getContext("2d");

  
  let layers = [
    { width: 500, color: "blue", text: "Total - 100%" },
    { width: 450, color: "red", text: "Verified - 80%" },
    { width: 400, color: "green", text: "Processed - 75%" },
    { width: 350, color: "cyan", text: "Shipped - 70%" },
    { width: 300, color: "purple", text: "Delivered - 68%" },
  ];

  let x = 50;
  let y = 50;
  let height = 60;

  
  layers.forEach((layer, index) => {
    let nextWidth =
      index < layers.length - 1 ? layers[index + 1].width : layer.width - 50;

    ctx.fillStyle = layer.color;
    ctx.beginPath();
    ctx.moveTo(x + (500 - layer.width) / 2, y); 
    ctx.lineTo(x + (500 + layer.width) / 2, y); 
    ctx.lineTo(x + (500 + nextWidth) / 2, y + height); 
    ctx.lineTo(x + (500 - nextWidth) / 2, y + height); 
    ctx.closePath();
    ctx.fill();

    // Додавання тексту
    ctx.fillStyle = "black";
    ctx.font = "20px Arial";
    ctx.textAlign = "center";
    ctx.fillText(layer.text, canvas.width / 2, y + height / 2 + 7);

    y += height;
  });
}
f3();
