
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

export function setLsCoords (coords, x, y){
  localStorage.setItem("coords", JSON.stringify(coords));
  localStorage.setItem("lastCoordX", x);
  localStorage.setItem("lastCoordY", y);
}


export function drawLine(currentCx, currentCy, x1, y1, x2, y2, prevCx, prevCy, setLs = false){
  if(setLs){
    return (
      `<circle style='pointer-events: none' fill='red' cx="${currentCx}" cy="${currentCy}" r='0.95' />`
          + `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" style='stroke:red; stroke-width:0.6;'/>`
          + `<circle style='pointer-events: none' fill='red' cx="${prevCx}" cy="${prevCy}" r='0.95' /> `
    )
  } return `<circle style='pointer-events: none' fill='red' cx="${currentCx}" cy="${currentCy}" r='0.95' />`
}