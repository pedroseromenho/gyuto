
export function mandala(callback, data) {
  const videoLink =  document.getElementsByClassName('hoverable');
  for (let index = 0, order = 76; index < data.length; index++ , order--) {
    videoLink[order].setAttribute("r", 0.9);
    videoLink[order].setAttribute("stroke", "transparent");
    videoLink[order].setAttribute("stroke-width", "10");
    videoLink[order].addEventListener('mouseenter', () => {
      callback(index, 'hover', videoLink[order]);
    });
    videoLink[order].addEventListener('click', () => {
      callback(index, 'click', videoLink[order]);
    });
    videoLink[order].addEventListener('mouseleave', () => {
      callback("", 'mouseout');
    });
  }
}

let currentCoords = [];
let prevCoords = [];

export function onClickPoint(callbackCoords, el) {
  if (currentCoords[0] === undefined) {
    currentCoords[0] = el.getAttribute("cx");
    currentCoords[1] = el.getAttribute("cy");
    prevCoords[0] = "0";
    prevCoords[1] = "0";
  } else if (currentCoords[0] !== undefined) {
    prevCoords[0] = currentCoords[0];
    prevCoords[1] = currentCoords[1];
    currentCoords[0] = el.getAttribute("cx");
    currentCoords[1] = el.getAttribute("cy");
  }
  callbackCoords(currentCoords, prevCoords);
}