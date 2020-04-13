import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';
import { mandala, onClickPoint, setLsCoords, drawLine } from 'utils/mandala';
import { selectedLang } from 'utils/lang';

import MandalaSvg from './MandalaSvg';

import './style.scss';

class Mandala extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userCoords: [],
    };
  }

  componentDidMount(){
    const { videos } = this.props;
    mandala(this.handleMandala.bind(this), videos);

    const lsCoords = localStorage.getItem("coords");
    lsCoords && this.setState({
      userCoords: JSON.parse(localStorage.getItem('coords'))
    })
  }

  getCoords(currentCoords, prevCoords) {
    const { userCoords } = this.state;
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
      this.setState({
        userCoords : userCoords + coords,
      })
      parsedCoords = [...parsedCoords, coords];
      setLsCoords(parsedCoords, currentX, currentY);
    } else{
      if (prevX === "0" && prevY === "0") {
        coords = drawLine(currentX, currentY);
        this.setState({
          userCoords : coords,
        })
        parsedCoords = [coords];
        setLsCoords(parsedCoords, currentX, currentY);
      } else{
        coords = drawLine(currentX, currentY, currentX, currentY, prevX, prevY, prevX, prevY, true);
        this.setState({
          userCoords : userCoords + coords,
        })
        parsedCoords = [...parsedCoords, coords];
        setLsCoords(parsedCoords, currentX, currentY);
      }
    }
  }

  handleMandala(id, event, coords){
    const {getSelectedId, getSelectedVideo, videos, i18n} = this.props;
    getSelectedId(id);
    if (event === "click") {
      onClickPoint(this.getCoords.bind(this), coords);
      getSelectedVideo(selectedLang(i18n, videos[id].url.en, videos[id].url.fr));
    }
  }

  render(){
    const { userCoords } = this.state;
    return <MandalaSvg coords={userCoords}/>
  }
}

Mandala.propTypes = {
  getSelectedId: PropTypes.func.isRequired,
  getSelectedVideo: PropTypes.func.isRequired,
  videos: PropTypes.any.isRequired,
  i18n: PropTypes.any.isRequired,
};

export default withTranslation()(Mandala);