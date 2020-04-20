import React, {useState, useEffect} from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import s from "./style.module.scss";

const LazyImg = ({ 
  imgHigh, imgLow, alt, isBackground, className
}) => {
  const [ loadedImg, setLoadedImg ] = useState(false);
  const preloadImg = () => {
    setLoadedImg(false)
    let img = new Image();
    img.onload = () => {
      setLoadedImg(true);
    }
    img.src = imgHigh;
  }
    
  useEffect(() => {
    preloadImg();
  }, []) // eslint-disable-line 

  if(isBackground){
    return(
      <div 
        className={classNames(s.background, className,
          loadedImg ? s.background__loaded : undefined)}
        style={{backgroundImage: `url('${loadedImg 
          ? imgHigh : imgLow}')`}}
      />
    )
  }
  return(
    <div className={s.img}>
      <img 
        src={loadedImg 
          ? imgHigh
          : imgLow
        } 
        alt={alt}
        className={classNames(
          s.img,
          loadedImg ? s.img__loaded : s.img__load
        )}
      />
    </div>
  )
}

LazyImg.propTypes = {
  imgHigh: PropTypes.string,
  imgLow: PropTypes.string,
  alt: PropTypes.string,
  isBackground: PropTypes.bool,
  className: PropTypes.any,
}

LazyImg.defaultProps = {
  alt: "",
  imgHigh: "",
  imgLow: "",
  isBackground: false,
  className: undefined,
};

export default LazyImg;