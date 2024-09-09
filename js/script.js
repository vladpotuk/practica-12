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

// Task 4

function f4() {
  let canvas = document.getElementById("figure-4");
  let ctx = canvas.getContext("2d");

  let data = [
    { label: "one", value: 25, color: "teal" },
    { label: "tow", value: 35, color: "red" },
    { label: "three", value: 40, color: "purple" },
  ];

  let totalValue = data.reduce((acc, item) => acc + item.value, 0);

  let centerX = canvas.width / 2;
  let centerY = canvas.height / 2;
  let radius = 100;
  let innerRadius = 50;

  let startAngle = 0;

  data.forEach((item) => {
    let sliceAngle = (item.value / totalValue) * 2 * Math.PI;
    let endAngle = startAngle + sliceAngle;

    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, startAngle, endAngle);
    ctx.arc(centerX, centerY, innerRadius, endAngle, startAngle, true);
    ctx.closePath();
    ctx.fillStyle = item.color;
    ctx.fill();

    let midAngle = startAngle + sliceAngle / 2;
    let labelX = centerX + (radius + 30) * Math.cos(midAngle);
    let labelY = centerY + (radius + 30) * Math.sin(midAngle);

    ctx.fillStyle = "black";
    ctx.font = "16px Arial";
    ctx.fillText(item.label, labelX, labelY);

    startAngle = endAngle;
  });

  ctx.beginPath();
  ctx.arc(centerX, centerY, innerRadius, 0, 2 * Math.PI);
  ctx.fillStyle = "white";
  ctx.fill();
}

f4();

// Task 5

function f5() {
  let canvas = document.getElementById("figure-5");
  let ctx = canvas.getContext("2d");

  let centerX = canvas.width / 2;
  let centerY = canvas.height / 2;

  let numberOfLines = 16;
  let lineLength = 180;
  let innerCircleRadius = 60;
  let colors = ["yellow", "green", "red", "blue"];

  ctx.beginPath();
  ctx.arc(centerX, centerY, innerCircleRadius, 0, Math.PI * 2);
  ctx.fillStyle = "white";
  ctx.fill();
  ctx.closePath();

  for (let i = 0; i < numberOfLines; i++) {
    let angle = ((Math.PI * 2) / numberOfLines) * i;
    let startX = centerX + innerCircleRadius * Math.cos(angle);
    let startY = centerY + innerCircleRadius * Math.sin(angle);
    let endX = centerX + lineLength * Math.cos(angle);
    let endY = centerY + lineLength * Math.sin(angle);

    ctx.beginPath();
    ctx.moveTo(startX, startY);
    ctx.lineTo(endX, endY);
    ctx.strokeStyle = colors[i % colors.length];
    ctx.lineWidth = 15;
    ctx.stroke();
    ctx.closePath();
  }

  let smallLineLength = 120;
  for (let i = 0; i < numberOfLines; i++) {
    let angle = ((Math.PI * 2) / numberOfLines) * (i + 0.5);
    let startX = centerX + innerCircleRadius * Math.cos(angle);
    let startY = centerY + innerCircleRadius * Math.sin(angle);
    let endX = centerX + smallLineLength * Math.cos(angle);
    let endY = centerY + smallLineLength * Math.sin(angle);

    ctx.beginPath();
    ctx.moveTo(startX, startY);
    ctx.lineTo(endX, endY);
    ctx.strokeStyle = colors[(i + 1) % colors.length];
    ctx.lineWidth = 10; // Width of the inner rays
    ctx.stroke();
    ctx.closePath();
  }
}

f5();
