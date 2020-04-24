import React, { useState, useRef, useEffect } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { IoMdPlayCircle } from "react-icons/io";
import YouTube from 'react-youtube';
import Media from 'react-media';

import LazyImg from 'components/LazyImg';

import s from './style.module.scss';

const CoverMedia = ({
  isAlbumCover, 
  className, 
  isPlaying, 
  onPlay, 
  imgHigh, 
  alt, 
  imgLow, 
  video, 
  actions, 
  hoverVideo,
  onReady,
  currentVideo
}) => {
  const [isHover, setIsHover] = useState(false);
  const [playVideo, setPlayVideo] = useState(false);

  const player = useRef(null);

  const bars = new Array(10).fill('');

  const opts = {
    playerVars: {
      rel: 0,
      showinfo: 0,
      vq: 'large',
      autoplay: 1,
    },
  };

  const isPlayingVideo = () => {
    setPlayVideo(true);
    actions.setHoverVideo(true);
  }

  useEffect(() => {
    if(player !== null && playVideo){
      player.current.internalPlayer.pauseVideo()
    }
  }, [currentVideo]) //eslint-disable-line

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
        <LazyImg 
          imgHigh={imgHigh} 
          imgLow={imgLow} 
          alt={alt} 
        />
      </div>
    )
  } return (
    <Media queries={{
      small: "(max-width: 839px)"
    }}>
      {matches => (
        <div className={classNames(s.container, "hoverable")}>
          {playVideo 
            ? (
              <div 
                className={s.container__video}
                onMouseEnter={!hoverVideo 
                  ? () => actions.setHoverVideo(true) 
                  : undefined}
                onMouseLeave={hoverVideo 
                  ? () => actions.setHoverVideo(false) 
                  : undefined}
              >
                <YouTube 
                  videoId={video} 
                  opts={opts}
                  onReady={onReady}
                  ref={player}
                />
              </div>
            ) 
            : (
              <>
                <LazyImg 
                  imgHigh={imgHigh} 
                  imgLow={imgLow} 
                  alt={alt} 
                />
                <div className={s.container__hoverVideo}>
                  <IoMdPlayCircle 
                    className="hoverable"
                    onClick={matches.small ? () => setPlayVideo(true) : () => isPlayingVideo()}
                    onKeyPress={matches.small ? () => setPlayVideo(true) : () => isPlayingVideo()}
                    role="presentation"
                  />
                </div>
              </>
            )}
        </div>
      )}
    </Media>
  )
}

CoverMedia.defaultProps = {
  isAlbumCover: false,
  className: undefined,
  isPlaying: false,
  onPlay: undefined,
  imgHigh: "",
  imgLow: "",
  alt: "",
  video: "",
  hoverVideo: false,
  onReady: undefined,
  currentVideo: null
}

CoverMedia.propTypes = {
  isAlbumCover: PropTypes.bool,
  className: PropTypes.any,
  isPlaying: PropTypes.bool,
  onPlay: PropTypes.func,
  imgHigh: PropTypes.string,
  imgLow: PropTypes.string,
  alt: PropTypes.string,
  video: PropTypes.string,
  hoverVideo: PropTypes.bool,
  actions : PropTypes.shape({
    setHoverVideo: PropTypes.func.isRequired,
  }),
  onReady: PropTypes.func,
  currentVideo: PropTypes.any
}

export default CoverMedia