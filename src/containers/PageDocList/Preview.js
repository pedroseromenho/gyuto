import React from 'react';
import PropTypes from 'prop-types';
import LazyImg from 'components/LazyImg';

import s from './style.module.scss';
import CoverMedia from 'components/CoverMedia';

const Preview = ({video, quote, legend, alt, imgHigh, imgLow}) => (
  <div className={s.container__preview__info}>
    {video && (
      <CoverMedia 
        imgHigh={imgHigh}
        imgLow={imgLow}
        video={video}
        alt={alt}
      />
    )}
    {imgHigh && video === null && (
      <div className={s.container__preview__info__img}>
        <LazyImg 
          imgHigh={imgHigh}
          imgLow={imgLow}
          alt={alt}
        />
      </div>
    )}
    <div className={s.container__preview__info__text}>
      <h5>{`"${quote}"`}</h5>
      <p>{legend}</p>
    </div>
  </div>
)

Preview.propTypes = {
  video: PropTypes.any,
  img: PropTypes.any,
  className: PropTypes.any,
  alt: PropTypes.string,
  quote: PropTypes.string.isRequired,
  legend: PropTypes.string.isRequired,
  imgHigh: PropTypes.string,
  imgLow: PropTypes.string,
};

Preview.defaultProps = {
  video: null,
  img: null,
  alt: "",
  className: undefined,
  imgHigh: "",
  imgLow: ""
};

export default Preview;