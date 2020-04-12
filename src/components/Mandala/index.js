import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';
import { mandala, onClickPoint } from '../../utils/mandala';
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
    let parsedCoords = JSON.parse(lsCoords);
    let coords;

    if(!lsCoords){
      if (prevCoords[0] === "0" && prevCoords[1] === "0") {
        coords = `<circle style='pointer-events: none' fill='red' cx="${currentCoords[0]}" cy="${currentCoords[1]}" r='0.95' />`;
        this.setState({
          userCoords : coords,
        })
        parsedCoords = [coords];
        localStorage.setItem("coords", JSON.stringify(parsedCoords));
        localStorage.setItem("lastCoordX", currentCoords[0]);
        localStorage.setItem("lastCoordY", currentCoords[1]);
      } else{
        coords = `<circle style='pointer-events: none' fill='red' cx="${currentCoords[0]}" cy="${currentCoords[1]}" r='0.95' />`
        + `<line x1="${currentCoords[0]}" y1="${currentCoords[1]}" x2="${prevCoords[0]}" y2="${prevCoords[1]}" style='stroke:red; stroke-width:0.6;'/>`
        + `<circle style='pointer-events: none' fill='red' cx="${prevCoords[0]}" cy="${prevCoords[1]}" r='0.95' /> `;
        this.setState({
          userCoords : userCoords + coords,
        })
        parsedCoords = [...parsedCoords, coords];
        localStorage.setItem("coords", JSON.stringify(parsedCoords));
        localStorage.setItem("lastCoordX", currentCoords[0]);
        localStorage.setItem("lastCoordY", currentCoords[1]);
      }
    } else{
      coords = `<circle style='pointer-events: none' fill='red' cx="${currentCoords[0]}" cy="${currentCoords[1]}" r='0.95' />`
      + `<line x1="${currentCoords[0]}" y1="${currentCoords[1]}" x2="${lsPrevXCoord}" y2="${lsPrevYCoord}" style='stroke:red; stroke-width:0.6;'/>`
      + `<circle style='pointer-events: none' fill='red' cx="${lsPrevXCoord}" cy="${lsPrevYCoord}" r='0.95' /> `;
      this.setState({
        userCoords : userCoords + coords,
      })
      parsedCoords = [...parsedCoords, coords];
      localStorage.setItem("coords", JSON.stringify(parsedCoords));
      localStorage.setItem("lastCoordX", currentCoords[0]);
      localStorage.setItem("lastCoordY", currentCoords[1]);
    }
  }

  handleMandala(id, event, coords){
    const {getSelectedId, getSelectedVideo, videos, i18n} = this.props;
    const isEnglish = (i18n.language === 'en');
    getSelectedId(id);
    if (event === "click") {
      onClickPoint(this.getCoords.bind(this), coords);
      getSelectedVideo(isEnglish ? videos[id].url.en : videos[id].url.fr);
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