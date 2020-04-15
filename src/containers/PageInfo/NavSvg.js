import React, {useEffect, Fragment} from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { TimelineMax } from 'gsap';

import './svg.scss';
import { imgEnter } from 'animations/info';

const NavSvg = ({sections, changeSection, currentSection}) => {
  useEffect(() => {
    const loaderAnimation = new TimelineMax();
    loaderAnimation
      .to(".load-svg", 1.2, { 
        width: 0 
      })
  }, [])

  const handleChangeSection = (section) =>{
    const img = document.querySelector(".tweenMax-info-img"); 
    changeSection(section);
    imgEnter(img);
  }


  return(
    <>
      <div className="load-svg" />
      <div className="backgroung-svg" />
      <svg className="nav-svg" width="1500" height="65" viewBox="0 0 1500 65" fill="none" xmlns="http://www.w3.org/2000/svg" xhtml="http://www.w3.org/1999/xhtml">
        <path 
          d="M0 11.0213L216.848 23.4822L358.696 11.0213H471.196L523.37 23.4822L691.304 11.0213L904.891 23.4822L1094.02 11.0213H1170.65L1291.3 30.2791L1426.63 16.6853L1500 1.95874" 
          stroke="white" 
          strokeWidth="2" 
        />
        {sections.filter(i => i.section !== "intro").map(s => (
          <Fragment key={s.section}>
            <foreignObject width="150" height="20" x={s.x} y={s.y}>
              <div 
                xmlns="http://www.w3.org/1999/xhtml" 
                className={classNames(
                  'svg-sectionName', 
                  'hoverable',
                  currentSection === s.section 
                    ? 'svg-sectionName-selected' 
                    : undefined
                )}
                onClick={() => handleChangeSection(s.section)}
                onKeyPress={() => handleChangeSection(s.section)}
                role="presentation"
              >
                {s.name}
              </div>
            </foreignObject>
            <circle
              cx={s.cx} 
              cy={s.cy} 
              r="4" 
              fill={'white'} 
              stroke="transparent" 
              strokeWidth="10" 
              className="hoverable" 
              onClick={() => handleChangeSection(s.section)}
              onKeyPress={() => handleChangeSection(s.section)}
              role="presentation"
            />
          </Fragment>
        ))}
      </svg>
    </>
  )}

NavSvg.propTypes = {
  sections: PropTypes.any.isRequired,
  changeSection: PropTypes.func.isRequired,
  currentSection: PropTypes.string.isRequired,
};

export default NavSvg;