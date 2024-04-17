"use strict";

//Jag glömde att ctx.restore() efter varje
//dumbo mig :(
//Så nu är det fixat men ändå fuckat

const canvasWidth = window.innerWidth * 4;
const canvasHeight = window.innerHeight * 4;
const canvas = new Array(4);
const ctx = new Array(4);

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

let p1H = 12;
let p2H = 12;
let p1N = "Player 1";
let p2N = "Player 2";
let diceroll;

//Canvas på canvas
function drawCanvas() {
  for (let i = 0; i < 4; i++) {
    canvas[i] = document.getElementById("canvas" + i);
    ctx[i] = canvas[i].getContext("2d");
    canvas[i].width = canvasWidth;
    canvas[i].height = canvasHeight;
    canvas[i].style.width = innerWidth + "px";
    canvas[i].style.height = innerHeight + "px";
    canvas[i].style.position = "absolute";
    canvas[i].top = 0;
    canvas[i].left = 0;
  }
}

function red() {
  ctx[0].beginPath();
  ctx[0].fillStyle = "#ebebeb";
  ctx[0].rect(0, 0, canvasWidth, canvasHeight);
  ctx[0].fill();
  //Ena röda
  ctx[0].beginPath();
  ctx[0].fillStyle = "#880808";
  ctx[0].rect(0, 0, canvasWidth, canvasHeight / 5);
  ctx[0].fill();
  //Andra röda
  ctx[0].fillStyle = "#880808";
  ctx[0].rect(0, canvasHeight - canvasHeight / 5, canvasWidth, canvasHeight);
  ctx[0].fill();
}
//Spelare 1
function drawPlayer1() {
  ctx[1].fillStyle = "black"; //"#d3d3d3";
  ctx[2].strokeStyle = "black"; //"#d3d3d3";
  ctx[2].fillStyle = "black"; //"#d3d3d3";
  ctx[1].translate(0, canvasHeight / 5);
  ctx[1].textAlign = "center";
  ctx[1].font = canvasHeight / 250 + "em sans-serif";
  ctx[1].rotate(Math.PI);
  ctx[1].fillText(p1N, -canvasWidth / 2, 0);

  ctx[1].font = canvasHeight / 8 + "px sans-serif";
  ctx[1].fillText("-", -canvasWidth / 4, canvasHeight / 7.5);
  ctx[1].fillText("+", (-canvasWidth / 4) * 3, canvasHeight / 7);
  ctx[1].fillText(p1H, -canvasWidth / 2, canvasHeight / 7);
  ctx[1].translate(0, -canvasHeight / 5);
}
//----------------------Player 2-----------------------------

function drawPlayer2() {
  ctx[1].translate(0, (canvasHeight / 5) * 2);
  ctx[1].font = canvasHeight / 250 + "em sans-serif";
  ctx[1].rotate(Math.PI);
  ctx[1].fillText(p2N, canvasWidth / 2, canvasHeight - canvasHeight / 5);

  ctx[1].font = canvasHeight / 8 + "px sans-serif";
  ctx[1].fillText("+", canvasWidth / 4, (canvasHeight / 7) * 6.6);
  ctx[1].fillText("-", (canvasWidth / 4) * 3, (canvasHeight / 7) * 6.6);
  ctx[1].fillText(p2H, canvasWidth / 2, (canvasHeight / 7) * 6.6);
  ctx[1].resetTransform();
}

//----------------D6--------------

async function rollD6() {
  clearD6();
  D6();
  await sleep(200);
  clearD6();
  D6();
  await sleep(200);
  clearD6();
  D6();
  await sleep(200);
  clearD6();
  D6();
  await sleep(200);
  clearD6();
  D6();
  await sleep(200);
  clearD6();
  D6();
  await sleep(200);
  clearD6();
  D6();
}

function D6() {
  ctx[2].resetTransform();
  ctx[2].beginPath();
  ctx[2].roundRect(
    canvasWidth / 2.4,
    canvasHeight / 2.6,
    canvasWidth / 1.9,
    canvasHeight / 4.22,
    canvasHeight / 33.76
  );
  ctx[2].strokeStyle = "black"; //"#d3d3d3";
  ctx[2].lineWidth = canvasHeight / 56;
  ctx[2].stroke();
  ctx[2].beginPath();
  diceroll = Math.ceil(Math.random() * 6);
  if (diceroll == 1) {
    ctx[2].arc(
      canvasWidth / 1.46,
      canvasHeight / 2,
      canvasHeight / 40,
      0,
      2 * Math.PI
    );
    ctx[2].fill();
    ctx[2].stroke();
  } else if (diceroll == 2) {
    ctx[2].arc(
      canvasWidth / 1.9,
      canvasHeight / 2.3,
      canvasHeight / 40,
      0,
      2 * Math.PI
    );
    ctx[2].fill();
    ctx[2].stroke();
    ctx[2].beginPath();
    ctx[2].arc(
      canvasWidth / 1.2,
      canvasHeight / 1.75,
      canvasHeight / 40,
      0,
      2 * Math.PI
    );
    ctx[2].fill();
    ctx[2].stroke();
  } else if (diceroll == 3) {
    ctx[2].arc(
      canvasWidth / 1.46,
      canvasHeight / 2,
      canvasHeight / 40,
      0,
      2 * Math.PI
    );
    ctx[2].fill();
    ctx[2].stroke();
    ctx[2].beginPath();
    ctx[2].arc(
      canvasWidth / 1.9,
      canvasHeight / 2.3,
      canvasHeight / 40,
      0,
      2 * Math.PI
    );
    ctx[2].fill();
    ctx[2].stroke();
    ctx[2].beginPath();
    ctx[2].arc(
      canvasWidth / 1.2,
      canvasHeight / 1.75,
      canvasHeight / 40,
      0,
      2 * Math.PI
    );
    ctx[2].fill();
    ctx[2].stroke();
  } else if (diceroll == 4) {
    ctx[2].fill();
    ctx[2].stroke();
    ctx[2].beginPath();
    ctx[2].arc(
      canvasWidth / 1.9,
      canvasHeight / 2.3,
      canvasHeight / 40,
      0,
      2 * Math.PI
    );
    ctx[2].fill();
    ctx[2].stroke();
    ctx[2].beginPath();
    ctx[2].arc(
      canvasWidth / 1.2,
      canvasHeight / 1.75,
      canvasHeight / 40,
      0,
      2 * Math.PI
    );
    ctx[2].fill();
    ctx[2].stroke();
    ctx[2].beginPath();
    ctx[2].arc(
      canvasWidth / 1.2,
      canvasHeight / 2.3,
      canvasHeight / 40,
      0,
      2 * Math.PI
    );
    ctx[2].fill();
    ctx[2].stroke();
    ctx[2].beginPath();
    ctx[2].arc(
      canvasWidth / 1.9,
      canvasHeight / 1.75,
      canvasHeight / 40,
      0,
      2 * Math.PI
    );
    ctx[2].fill();
    ctx[2].stroke();
  } else if (diceroll == 5) {
    ctx[2].arc(
      canvasWidth / 1.46,
      canvasHeight / 2,
      canvasHeight / 40,
      0,
      2 * Math.PI
    );
    ctx[2].fill();
    ctx[2].stroke();
    ctx[2].beginPath();
    ctx[2].arc(
      canvasWidth / 1.9,
      canvasHeight / 2.3,
      canvasHeight / 40,
      0,
      2 * Math.PI
    );
    ctx[2].fill();
    ctx[2].stroke();
    ctx[2].beginPath();
    ctx[2].arc(
      canvasWidth / 1.2,
      canvasHeight / 1.75,
      canvasHeight / 40,
      0,
      2 * Math.PI
    );
    ctx[2].fill();
    ctx[2].stroke();
    ctx[2].beginPath();
    ctx[2].arc(
      canvasWidth / 1.2,
      canvasHeight / 2.3,
      canvasHeight / 40,
      0,
      2 * Math.PI
    );
    ctx[2].fill();
    ctx[2].stroke();
    ctx[2].beginPath();
    ctx[2].arc(
      canvasWidth / 1.9,
      canvasHeight / 1.75,
      canvasHeight / 40,
      0,
      2 * Math.PI
    );
    ctx[2].fill();
    ctx[2].stroke();
  } else if (diceroll == 6) {
    ctx[2].fill();
    ctx[2].stroke();
    ctx[2].beginPath();
    ctx[2].arc(
      canvasWidth / 1.9,
      canvasHeight / 2.3,
      canvasHeight / 40,
      0,
      2 * Math.PI
    );
    ctx[2].fill();
    ctx[2].stroke();
    ctx[2].beginPath();
    ctx[2].arc(
      canvasWidth / 1.2,
      canvasHeight / 1.75,
      canvasHeight / 40,
      0,
      2 * Math.PI
    );
    ctx[2].fill();
    ctx[2].stroke();
    ctx[2].beginPath();
    ctx[2].arc(
      canvasWidth / 1.2,
      canvasHeight / 2.3,
      canvasHeight / 40,
      0,
      2 * Math.PI
    );
    ctx[2].fill();
    ctx[2].stroke();
    ctx[2].beginPath();
    ctx[2].arc(
      canvasWidth / 1.9,
      canvasHeight / 1.75,
      canvasHeight / 40,
      0,
      2 * Math.PI
    );
    ctx[2].fill();
    ctx[2].stroke();
    ctx[2].beginPath();
    ctx[2].arc(
      canvasWidth / 1.9,
      canvasHeight / 1.987,
      canvasHeight / 40,
      0,
      2 * Math.PI
    );
    ctx[2].fill();
    ctx[2].stroke();
    ctx[2].beginPath();
    ctx[2].arc(
      canvasWidth / 1.2,
      canvasHeight / 1.987,
      canvasHeight / 40,
      0,
      2 * Math.PI
    );
    ctx[2].fill();
    ctx[2].stroke();
  }
}

function D6button() {
  ctx[2].rotate(Math.PI / 2);
  ctx[2].roundRect(
    canvasHeight / 2 - canvasHeight / 8.5,
    -canvasWidth / 3,
    canvasHeight / 4,
    canvasWidth / 3.9,
    canvasHeight / 33.76
  );
  ctx[2].lineWidth = canvasWidth / 80;
  ctx[2].font = canvasHeight / 16 + "px sans-serif";
  ctx[2].fillText(
    "Roll D6",
    canvasHeight / 2 - canvasHeight / 9.5,
    -canvasWidth / 6.5
  );
  ctx[2].stroke();
  ctx[2].resetTransform();
}

function clearD6() {
  ctx[2].resetTransform();
  ctx[2].beginPath();
  ctx[2].clearRect(
    canvasWidth / 2.4 - canvasHeight / 56,
    canvasHeight / 2.6 - canvasHeight / 56,
    canvasWidth / 1.84 + canvasHeight / 40,
    canvasHeight / 4 + canvasHeight / 56
  );
  ctx[2].stroke();
  ctx[2].resetTransform();
}

//---------------Knappar-----------
function drawBoxes() {
  ctx[3].rect(
    //Player 1 -
    (75 / 430) * canvasWidth,
    (65 / 932) * canvasHeight,
    (65 / 430) * canvasWidth,
    (60 / 932) * canvasHeight
  );
  ctx[3].rect(
    //Player 1 +
    (290 / 430) * canvasWidth,
    (70 / 932) * canvasHeight,
    (65 / 430) * canvasWidth,
    (60 / 932) * canvasHeight
  );
  ctx[3].rect(
    //Player 2 +
    (75 / 430) * canvasWidth,
    (810 / 932) * canvasHeight,
    (65 / 430) * canvasWidth,
    (60 / 932) * canvasHeight
  );
  ctx[3].rect(
    //Player 2 -
    (290 / 430) * canvasWidth,
    (815 / 932) * canvasHeight,
    (65 / 430) * canvasWidth,
    (60 / 932) * canvasHeight
  );
  //Roll D6
  ctx[3].rect(
    (30 / 430) * canvasWidth,
    (350 / 932) * canvasHeight,
    (115 / 430) * canvasWidth,
    (240 / 932) * canvasHeight
  );
  ctx[3].stroke();
}

function handleClick(event) {
  const x = Math.floor(event.clientX);
  const y = Math.floor(event.clientY);

  if (
    Math.floor((75 / 430) * canvasWidth) / 4 <= x &&
    x <= Math.floor(((65 + 75) / 430) * canvasWidth) / 4 &&
    Math.floor((65 / 932) * canvasHeight) / 4 <= y &&
    y <= Math.floor(((60 + 65) / 932) * canvasHeight) / 4
  ) {
    if (p1H > 0) p1H--;
    start();
  } else if (
    Math.floor((290 / 430) * canvasWidth) / 4 <= x &&
    x <= Math.floor(((65 + 290) / 430) * canvasHeight) / 4 &&
    Math.floor((70 / 932) * canvasHeight) / 4 <= y &&
    y <= Math.floor(((60 + 70) / 932) * canvasHeight) / 4
  ) {
    p1H++;
    start();
  } else if (
    Math.floor((75 / 430) * canvasWidth) / 4 <= x &&
    x <= Math.floor(((75 + 65) / 430) * canvasWidth) / 4 &&
    Math.floor((810 / 932) * canvasHeight) / 4 <= y &&
    y <= Math.floor(((810 + 60) / 932) * canvasHeight) / 4
  ) {
    p2H++;
    start();
  } else if (
    Math.floor((290 / 430) * canvasWidth) / 4 <= x &&
    x <= Math.floor(((290 + 65) / 430) * canvasWidth) / 4 &&
    Math.floor((810 / 932) * canvasHeight) / 4 <= y &&
    y <= Math.floor(((810 + 60) / 932) * canvasHeight) / 4
  ) {
    if (p2H > 0) {
      p2H--;
      start();
    }
  } else if (
    ((30 / 430) * canvasWidth) / 4 <= x &&
    x <= (((30 + 115) / 430) * canvasWidth) / 4 &&
    ((350 / 932) * canvasHeight) / 4 <= y &&
    y <= (((350 + 215) / 932) * canvasHeight) / 4
  ) {
    clearD6();
    rollD6();
  }
}

//------------Reset----------

function clear() {
  ctx[2].rotate(Math.PI / 2);
  ctx[2].clearRect(
    canvasHeight / 2 - canvasHeight / 8.5,
    -canvasWidth / 3,
    canvasHeight / 4,
    canvasWidth / 3.9
  );
  ctx[2].resetTransform();
  ctx[1].clearRect(0, 0, canvasWidth, canvasHeight);
}

function start() {
  ctx[1].resetTransform();
  clear();
  red();
  drawPlayer1();
  drawPlayer2();
  D6button();
}

(function (a, b) {
  if (
    /ipad/i.test(a) ||
    /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|pro|Air|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
      a.substr(0, 4)
    )
  )
    window.location = b;
})(navigator.userAgent || navigator.vendor || window.opera, "ipad.html");

function launch() {
  document.getElementById("startScreen").hidden = "true";
  //document.getElementById("gameScreen").hidden = "false";
  p1N = document.getElementById("player1Input").value;
  p2N = document.getElementById("player2Input").value;
  drawCanvas();
  start();
  canvas[3].addEventListener("click", handleClick);
}
