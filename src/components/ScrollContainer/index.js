import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './style.scss';


const ScrollContainer = ({ 
  children, 
  classNameContainer, 
  classNameWrapper, 
  list,
  showScrollBar,
  isWhite
}) => (
  <div className={
    classNames(
      classNameContainer,
      "tweenMax-scrollContainer",
      showScrollBar 
        ? "container-scroll-bar"
        : "container-scroll",
      isWhite && "container-scroll-bar-white"
    )}>
    {list ? (
      <ul className={
        classNames(
          "wrapper-scroll", 
          classNameWrapper
        )}>
        {children}
      </ul>
    ) : (
      <div className={
        classNames(
          "wrapper-scroll", 
          classNameWrapper
        )}>
        {children}
      </div>
    )}

    <div className="scrollBar" />
  </div>
);

ScrollContainer.defaultProps = {
  list: false,
  showScrollBar: false,
  classNameContainer: undefined,
  classNameWrapper: undefined,
  isWhite: false,
}

ScrollContainer.propTypes = {
  list: PropTypes.bool,
  showScrollBar: PropTypes.bool,
  children: PropTypes.any.isRequired,
  classNameContainer: PropTypes.any,
  classNameWrapper: PropTypes.any,
  isWhite: PropTypes.bool,
}

export default ScrollContainer;