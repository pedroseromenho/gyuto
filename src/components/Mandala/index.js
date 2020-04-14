import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import { onClickPoint, setLsCoords, drawLine } from 'utils/mandalaCoords';

import MandalaSvg from './MandalaSvg';

import './style.scss';

const Mandala = ({ getSelectedVideo, getSelectedId, selectedId, videos }) => {
  const [userCoords, setUserCoords] = useState([]);

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

    if(lsCoords){
      coords = drawLine(currentX, currentY, currentX, currentY, lsPrevXCoord, lsPrevYCoord, lsPrevXCoord, lsPrevYCoord, true);
      setUserCoords(userCoords + coords);
      parsedCoords = [...parsedCoords, coords];
      setLsCoords(parsedCoords, currentX, currentY);
    } else{
      if (prevX === "0" && prevY === "0") {
        coords = drawLine(currentX, currentY);
        setUserCoords(coords);
        parsedCoords = [coords];
        setLsCoords(parsedCoords, currentX, currentY);
      } else{
        coords = drawLine(currentX, currentY, currentX, currentY, prevX, prevY, prevX, prevY, true);
        setUserCoords(userCoords + coords);
        parsedCoords = [...parsedCoords, coords];
        setLsCoords(parsedCoords, currentX, currentY);
      }
    }
  }, [userCoords]);


  const handleMandala = useCallback((id, event, coords) => {
    getSelectedId(id);
    if (event === "click") {
      onClickPoint(getCoords, coords);
      getSelectedVideo(videos[id]);
    }
  }, [getSelectedId]); // eslint-disable-line

  useEffect(() => {
    const videoLink =  document.getElementsByClassName('hoverable');
    for (let index = 0, order = 76; index < videos.length; index++ , order--) {
      videoLink[order].setAttribute("r", 0.9);
      videoLink[order].setAttribute("stroke", "transparent");
      videoLink[order].setAttribute("stroke-width", "10");
      videoLink[order].addEventListener('mouseenter', () => {
        if(videoLink[order] !== selectedId){
          handleMandala(index, 'hover', videoLink[order]);
        }
      });
      videoLink[order].addEventListener('click', () => {
        handleMandala(index, 'click', videoLink[order]);
      });
    }

  }, [selectedId]) // eslint-disable-line

  useEffect(() => {
    const lsCoords = localStorage.getItem("coords");
    const parsedCoords = JSON.parse(localStorage.getItem('coords'));
    lsCoords && setUserCoords(parsedCoords);

  }, [videos]);

  return <MandalaSvg coords={userCoords}/>
}

Mandala.propTypes = {
  getSelectedId: PropTypes.func.isRequired,
  getSelectedVideo: PropTypes.func.isRequired,
  videos: PropTypes.any.isRequired,
  selectedId: PropTypes.any,
};

Mandala.defaultProps = {
  // selectedId: undefined,
};

export default Mandala;