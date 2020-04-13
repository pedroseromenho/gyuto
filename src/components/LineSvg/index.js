import React, {useEffect} from 'react';
import classNames from 'classnames';
import { TweenMax, TimelineMax, Power4 } from 'gsap';

import './style.scss';

const LineSvg = () => {
  useEffect(() => {
    const line = document.getElementById("path");
    TweenMax.to(line, 5, {drawSVG:0, repeat:10, yoyo:true});
  })
  return(
    <svg width="1500" height="65" viewBox="0 0 1500 65" fill="none" xmlns="http://www.w3.org/2000/svg" xhtml="http://www.w3.org/1999/xhtml">
      <path id="path" d="M0 11.0213L216.848 23.4822L358.696 11.0213H471.196L523.37 23.4822L691.304 11.0213L904.891 23.4822L1094.02 11.0213H1170.65L1291.3 30.2791L1426.63 16.6853L1500 1.95874" stroke="white" strokeWidth="2" />
      <foreignObject width="150" height="20" x="145" y="39">
        <div xmlns="http://www.w3.org/1999/xhtml" className={classNames('svg-sectionName', 'hoverable')}>
      Monastery
        </div>
      </foreignObject>
      <foreignObject width="150" height="20" x="286" y="27">
        <div xmlns="http://www.w3.org/1999/xhtml" className={classNames('svg-sectionName', 'hoverable')}>
      Genesis
        </div>
      </foreignObject>
      <foreignObject width="150" height="20" x="451" y="39">
        <div xmlns="http://www.w3.org/1999/xhtml" className={classNames('svg-sectionName', 'hoverable')}>
      Immersion
        </div>
      </foreignObject>
      <foreignObject width="150" height="20" x="618" y="26">
        <div xmlns="http://www.w3.org/1999/xhtml" className={classNames('svg-sectionName', 'hoverable')}>
      Transmission
        </div>
      </foreignObject>
      <foreignObject width="150" height="20" x="832" y="38">
        <div xmlns="http://www.w3.org/1999/xhtml" className={classNames('svg-sectionName', 'hoverable')}>
      Dharma
        </div>
      </foreignObject>
      <foreignObject width="150" height="20" x="1100" y="26">
        <div xmlns="http://www.w3.org/1999/xhtml" className={classNames('svg-sectionName', 'hoverable')}>
      Sound
        </div>
      </foreignObject>
      <foreignObject width="150" height="20" x="1219" y="45">
        <div xmlns="http://www.w3.org/1999/xhtml" className={classNames('svg-sectionName', 'hoverable')}>
      Characters
        </div>

      </foreignObject>
      {/* Monastery */}
      <circle cx="217" cy="24" r="4" fill="white" stroke="transparent" strokeWidth="10" className="hoverable" />

      {/* Genesis */}
      <circle cx="358" cy="12" r="4" fill="white" stroke="transparent" strokeWidth="10" className="hoverable" />

      {/* Immersion */}
      <circle cx="523" cy="24" r="4" fill="white" stroke="transparent" strokeWidth="10" className="hoverable" />

      {/* Transmission */}
      <circle cx="690" cy="11" r="4" fill="white" stroke="transparent" strokeWidth="10" className="hoverable" />

      {/* Dharma */}
      <circle cx="904" cy="23" r="4" fill="white" stroke="transparent" strokeWidth="10" className="hoverable" />

      {/* Sound */}
      <circle cx="1172" cy="11" r="4" fill="white" stroke="transparent" strokeWidth="10" className="hoverable" />

      {/* Characters */}
      <circle cx="1291" cy="30" r="4" fill="white" stroke="transparent" strokeWidth="10" className="hoverable" />
    </svg>
  )}

export default LineSvg;