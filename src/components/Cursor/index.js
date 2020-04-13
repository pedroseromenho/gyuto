import React, {useEffect} from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import TweenMax from 'gsap';

import './style.scss';

const Cursor = ({isVideo, location}) => {

  useEffect(() => {
    let $bigBall = document.querySelector('.cursor__ball--big');
    let $smallBall = document.querySelector('.cursor__ball--small');
    let $hoverables = document.querySelectorAll('.hoverable');
    let $homelinkhover = document.querySelectorAll('.homelinkhover');
    
    function onMouseMove(e) {
      TweenMax.to($bigBall, .4, {
        x: e.pageX - 15,
        y: e.pageY - 15
      });
      
      TweenMax.to($smallBall, .1, {
        x: e.pageX - 5,
        y: e.pageY - 7
      });
    }
      
    function onMouseHover() {
      TweenMax.to($bigBall, .3, {
        scale: 4
      });
    }
    function onMouseHoverOut() {
      TweenMax.to($bigBall, .3, {
        scale: 1
      });
    }
    if(!isVideo){
      document.body.addEventListener('mousemove', onMouseMove);
      for (let i = 0; i < $hoverables.length; i++) {
        $hoverables[i].addEventListener('mouseenter', onMouseHover);
        $hoverables[i].addEventListener('mouseleave', onMouseHoverOut);
      }
      document.body.addEventListener('mousemove', onMouseMove);
      for (let j = 0; j < $homelinkhover.length; j++) {
        $homelinkhover[j].addEventListener('mouseenter', onMouseHover);
        $homelinkhover[j].addEventListener('mouseleave', onMouseHoverOut);
      }
    }
  }, [location.pathname, isVideo]);
  return(
    <div className="cursor">
      <div className="cursor__ball cursor__ball--big ">
        <svg height="30" width="30">
          <circle cx="15" cy="15" r="12" strokeWidth="0"></circle>
        </svg>
      </div>
      <div className="cursor__ball cursor__ball--small">
        <svg height="10" width="10">
          <circle cx="5" cy="5" r="4" strokeWidth="0"></circle>
        </svg>
      </div>
    </div>
  )}

Cursor.propTypes = {
  isVideo: PropTypes.any,
  location: PropTypes.any.isRequired,
};

Cursor.defaultProps = {
  video: null,
}

export default withRouter(Cursor);