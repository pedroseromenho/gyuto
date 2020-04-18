import React, { useState } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { IoMdPlayCircle } from "react-icons/io";
import YouTube from 'react-youtube';

import s from './style.module.scss';

const CoverMedia = ({
  isAlbumCover, item, className, isPlaying, onPlay
}) => {
  const [isHover, setIsHover] = useState(false);
  const [playVideo, setPlayVideo] = useState(false);
  const bars = new Array(10).fill('');

  const opts = {
    playerVars: {
      rel: 0,
      showinfo: 0,
      vq: 'large',
      autoplay: 1
    },
  };

  if(isAlbumCover){
    return(
      <div className={classNames(
        s.container, className)}
      onMouseOver={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      >
        {(isPlaying || isHover) && (
          <div className={s.container__hoverImg}>
            {isPlaying
              ? (
                bars.map((b, index) => (
                  <span key={index} className={s.container__hoverImg__bar}/>
                ))
              )
              : (
                <IoMdPlayCircle 
                  className="hoverable"
                  onClick={onPlay}
                />
              )}
          </div>
        )}
        <img src={item.cover} alt={item.title} />
      </div>
    )
  } return (
    <div className={classNames(s.container, "hoverable")}>
      {playVideo 
        ? (
          <div className={s.container__video}>
            <YouTube 
              videoId={item.video.url} 
              opts={opts}
            />
          </div>
        ) 
        : (
          <>
            <img src={item.video.img} alt={item.info.title.en} />
            <div className={s.container__hoverVideo}>
              <IoMdPlayCircle 
                className="hoverable"
                onClick={() => setPlayVideo(true)}
                onKeyPress={() => setPlayVideo(true)}
                role="presentation"
              />
            </div>
          </>
        )}
    </div>
  )
}

CoverMedia.defaultProps = {
  isAlbumCover: false,
  item: undefined,
  className: undefined,
  isPlaying: false,
  onPlay: undefined,
}

CoverMedia.propTypes = {
  isAlbumCover: PropTypes.bool,
  item: PropTypes.any,
  className: PropTypes.any,
  isPlaying: PropTypes.bool,
  onPlay: PropTypes.func,
}

export default CoverMedia