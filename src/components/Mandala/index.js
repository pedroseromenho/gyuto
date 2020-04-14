import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import { mandala, onClickPoint, setLsCoords, drawLine } from 'utils/mandala';

import MandalaSvg from './MandalaSvg';

import './style.scss';

const Mandala = ({ getSelectedVideo, getSelectedId, videos }) => {
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
    mandala(handleMandala, videos);

    const lsCoords = localStorage.getItem("coords");
    const parsedCoords = JSON.parse(localStorage.getItem('coords'));
    lsCoords && setUserCoords(parsedCoords);

  }, [handleMandala, videos]);

  return <MandalaSvg coords={userCoords}/>
}

Mandala.propTypes = {
  getSelectedId: PropTypes.func.isRequired,
  getSelectedVideo: PropTypes.func.isRequired,
  videos: PropTypes.any.isRequired,
};

export default Mandala;