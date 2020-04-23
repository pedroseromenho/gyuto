import React, {useEffect} from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { cursor } from 'animations/cursor';

import './style.scss';

const Cursor = ({location, video}) => {
  useEffect(() => {
    const bigBall = document.querySelector('.cursor__ball--big');
    const smallBall = document.querySelector('.cursor__ball--small');
    const hoverables = document.querySelectorAll('.hoverable');

    cursor(bigBall, smallBall, hoverables);
  }, [location.pathname, video]);

  return(
    <div className="cursor">
      <div className="cursor__ball cursor__ball--big ">
        <svg height="100" width="100">
          <circle cx="50" cy="50" r="12" strokeWidth="50" stroke="white"/>
        </svg>
      </div>
      <div className="cursor__ball cursor__ball--small">
        <svg height="10" width="10">
          <circle cx="5" cy="5" r="4" strokeWidth="0" shapeRendering="geometricPrecision"/>
        </svg>
      </div>
    </div>
  )}

Cursor.propTypes = {
  location: PropTypes.any.isRequired,
  video: PropTypes.any
};

Cursor.defaultProps = {
  video: null
};

export default withRouter(Cursor);