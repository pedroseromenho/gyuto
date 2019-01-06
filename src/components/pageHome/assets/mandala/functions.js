var anim = 0;
var enterAnim = "right";
var animSpeed = 0.1;

export function animSpeedFun() {
  animSpeed = (Math.floor(Math.random() * 20) + 3) / 100;
}

export function randomSideFun() {
  var randomSide = Math.random() >= 0.2;
  if (randomSide) {
    enterAnim = "right";
  } else {
    enterAnim = "left";
  }
}

export function turnRight() {
  if (enterAnim === "right") {
    setTimeout(function () {
      if (anim >= 360) {
        anim = 0;
      }
      anim += animSpeed;
      if (document.getElementById("contenair")) {
        document.getElementById("contenair").style.transform = "rotate(" + anim + "deg)";
        turnRight();
      }
    }, 10);
  }
}

function turnLeft() {
  if (enterAnim === "left") {
    setTimeout(function () {
      if (anim <= -360) {
        anim = 0;
      }
      anim -= animSpeed;
      if (document.getElementById("contenair")) {
        document.getElementById("contenair").style.transform = "rotate(" + anim + "deg)";
        turnLeft();
      }
    }, 10);
  }
}

export function newAnim(data, symbole) {
  if (enterAnim === "stopRight") {
    document.getElementById("background").style.display = "none";
    document.getElementById("border").style.display = "initial";
    document.getElementById("borderMandala").style.display = "initial";
    enterAnim = "left";
    animSpeedFun();
    turnLeft();
  } else if (enterAnim === "stopLeft") {
    document.getElementById("background").style.display = "none";
    document.getElementById("border").style.display = "initial";
    document.getElementById("borderMandala").style.display = "initial";
    enterAnim = "right";
    animSpeedFun();
    turnRight();
  }

  for (let index = 0, order = 76; index < data.length; index++ , order--) {
    document.getElementsByClassName('hoverable')[order].setAttribute("r", "0.259");
    document.getElementsByClassName('hoverable')[order].setAttribute("stroke", "transparent");
    document.getElementsByClassName('hoverable')[order].setAttribute("stroke-width", "0");
    document.getElementsByClassName('hoverable')[order].setAttribute("fill", "#FFFFFF");
  }
  document.getElementById("addLines").setAttribute("style", "display:none");
}

var eventsAdded = true;

export function stop(callback, data, symbole) {
  if (enterAnim === "right") {
    document.getElementById("background").style.display = "initial";
    document.getElementById("border").style.display = "none";
    document.getElementById("borderMandala").style.display = "none";
    enterAnim = "stopRight";
    slowDownMandala();
  } else if (enterAnim === "left") {
    document.getElementById("background").style.display = "initial";
    document.getElementById("border").style.display = "none";
    document.getElementById("borderMandala").style.display = "none";
    enterAnim = "stopLeft";
    slowDownMandala();
  }

  for (let index = 0, order = 76; index < data.length; index++ , order--) {
    if (data[index].category === symbole || symbole === "") {
      document.getElementsByClassName('hoverable')[order].setAttribute("r", 0.9);
      document.getElementsByClassName('hoverable')[order].setAttribute("stroke", "transparent");
      document.getElementsByClassName('hoverable')[order].setAttribute("stroke-width", "10");
      if (eventsAdded) {
        document.getElementsByClassName('hoverable')[order].addEventListener('mouseenter', () => {
          callback(index, 'hover');
        });
        document.getElementsByClassName('hoverable')[order].addEventListener('click', () => {
          // onClickPoint(document.getElementsByClassName('hoverable')[order]);
          callback(index, 'click', document.getElementsByClassName('hoverable')[order]);
        });
        document.getElementsByClassName('hoverable')[order].addEventListener('mouseleave', () => {
          callback("", 'mouseout');
        });
      }
    }
  }
  document.getElementById("addLines").setAttribute("style", "display:initial");
  eventsAdded = false;
}

var slower = 10;

function slowDownMandala() {
  if (document.getElementById("contenair")) {
    if (slower < 50 && enterAnim === "stopRight") {
      setTimeout(function () {
        if (anim >= 360) {
          anim = 0;
        }
        anim += animSpeed;
        document.getElementById("contenair").style.transform = "rotate(" + anim + "deg)";
        slower += 3;
        slowDownMandala();
      }, slower);
    } else if (slower < 50 && enterAnim === "stopLeft") {
      setTimeout(function () {
        if (anim <= -360) {
          anim = 0;
        }
        anim -= animSpeed;
        document.getElementById("contenair").style.transform = "rotate(" + anim + "deg)";
        slower += 3;
        slowDownMandala();
      }, slower);
    } else if (slower >= 50) {
      slower = 10;
    }
  }
}

var lastCoord = [];
var previousCoord = [];

export function onClickPoint(callbackCoords, eelement) {
  if (lastCoord[0] === undefined) {
    lastCoord[0] = eelement.getAttribute("cx");
    lastCoord[1] = eelement.getAttribute("cy");
    previousCoord[0] = "0";
    previousCoord[1] = "0";
  } else if (lastCoord[0] !== undefined) {
    previousCoord[0] = lastCoord[0];
    previousCoord[1] = lastCoord[1];
    lastCoord[0] = eelement.getAttribute("cx");
    lastCoord[1] = eelement.getAttribute("cy");
  }
  callbackCoords(lastCoord, previousCoord);
}