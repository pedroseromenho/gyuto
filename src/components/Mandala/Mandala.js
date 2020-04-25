import React, { useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import { onClickPoint, setLsCoords, drawLine } from 'utils/mandalaCoords';

import MandalaSvg from './MandalaSvg';

import './style.scss';

const Mandala = ({  
  getSelectedId, selectedId, videosList, actions, video, userCoords 
}) => {

  const getCoords = useCallback((currentCoords, prevCoords) => {
    const lsCoords = localStorage.getItem("coords");
    const lsPrevXCoord = localStorage.getItem("lastCoordX");
    const lsPrevYCoord = localStorage.getItem("lastCoordY");
    const currentX = currentCoords[0];
    const currentY = currentCoords[1];
    const prevX = prevCoords[0];
    const prevY = prevCoords[1];
    let parsedCoords = JSON.parse(lsCoords);
    let coords;

    if(userCoords.length > 0){
      coords = drawLine(currentX, currentY, currentX, currentY, lsPrevXCoord, lsPrevYCoord, lsPrevXCoord, lsPrevYCoord, true);
      parsedCoords = parsedCoords + coords;
      setLsCoords(parsedCoords, currentX, currentY);
      actions.setUserCoords(parsedCoords + coords);
    } else{
      if (prevX === "0" && prevY === "0") {
        coords = drawLine(currentX, currentY);
        parsedCoords = [coords];
        setLsCoords(parsedCoords, currentX, currentY);
        actions.setUserCoords(coords);
      } else {
        coords = drawLine(currentX, currentY, currentX, currentY, prevX, prevY, prevX, prevY, true);
        parsedCoords = parsedCoords + coords;
        setLsCoords(parsedCoords, currentX, currentY);
        actions.setUserCoords(parsedCoords + coords);
      }
    }
  }, [userCoords]); // eslint-disable-line


  const handleMandala = useCallback((id, event, coords) => {
    if (event === "click") {
      actions.setVideo(videosList[id]);
      onClickPoint(getCoords, coords);
    } else {
      getSelectedId(id);
    }
  }, [getSelectedId]); // eslint-disable-line

  useEffect(() => {
    const videoLink =  document.getElementsByClassName('hoverable');
    for (let index = 0, order = 76; index < videosList.length; index++ , order--) {
      videoLink[order].setAttribute("r", 1.1);
      videoLink[order].setAttribute("stroke", "transparent");
      videoLink[order].setAttribute("stroke-width", "10");
      videoLink[order].addEventListener('mouseenter', () => {
        if(videoLink[order] !== selectedId){
          handleMandala(index, 'hover', videoLink[order]);
        }
      });
    }
  }, [selectedId, video]) // eslint-disable-line

  useEffect(() => {
    const videoLink =  document.getElementsByClassName('hoverable');
    for (let index = 0, order = 76; index < videosList.length; index++ , order--) {
      videoLink[order].addEventListener('click', () => {
        if(videoLink[order] !== selectedId){
          handleMandala(index, 'click', videoLink[order]);
        }
      });
    }
  }, []) // eslint-disable-line

  return <MandalaSvg coords={userCoords}/>
}

Mandala.defaultProps = {
  video: null,
}

Mandala.propTypes = {
  getSelectedId: PropTypes.func.isRequired,
  videosList: PropTypes.any.isRequired,
  selectedId: PropTypes.any,
  userCoords: PropTypes.any.isRequired,
  actions : PropTypes.shape({
    setUserCoords: PropTypes.func.isRequired,
    setVideo: PropTypes.func.isRequired,
  }),
  video: PropTypes.any,
};


export default Mandala;