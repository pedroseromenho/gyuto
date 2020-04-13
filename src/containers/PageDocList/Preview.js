import React from 'react';
import PropTypes from 'prop-types';
import YouTube from 'react-youtube';

import s from './style.module.scss';

const Preview = ({video, img, quote, legend, alt}) => (
  <div className={s.container__preview__info}>
    {video && (
      <div className={s.container__preview__info__video}>
        <YouTube 
          videoId={video} 
          opts={{playerVars: {rel: 0}}}
        />
      </div>
    )}
    {img && (
      <div className={s.container__preview__info__img}>
        <img src={img} alt ={alt} />
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
  alt: PropTypes.string,
  quote: PropTypes.string.isRequired,
  legend: PropTypes.string.isRequired,
};

Preview.defaultProps = {
  video: null,
  img: null,
  alt: "",
};

export default Preview;