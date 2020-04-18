import React, { useEffect } from 'react';
import AudioPlayer from 'react-h5-audio-player';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './player.scss';
import s from './style.module.scss';

const PlayerAudio = ({
  playlist, 
  className, 
  isPlaying, 
  onPlay, 
  onPause, 
  onClickNext, 
  onClickPrevious, 
  index
}) => {

  const bars = new Array(5).fill('');

  useEffect(() => {
    const buttons = document.querySelectorAll('button[type="button"]');
    const volume = document.querySelector(".rhap_volume-indicator");
    const progress = document.querySelector(".rhap_progress-indicator");
    buttons.forEach(b => {
      b.classList.add("hoverable")
    })
    volume.classList.add("hoverable");
    progress.classList.add("hoverable");
  }, [])

  useEffect(() => {
    const audio = document.querySelector('audio');
    if(isPlaying){
      audio.play();
    }
  }, [isPlaying])

  return(
    <div className={classNames(s.container, className)}>
      <div className={s.container__title}>
        <div 
          className={classNames(
            s.container__title__bars,
            isPlaying 
              ? s.container__title__barsIsPlaying
              : undefined
          )}
        >
          {bars.map((b, index) => (
            <span key={index} className={s.container__title__bar}/>
          ))}
        </div>
        <span>{`${playlist[index].album} - ${playlist[index].music}`}</span>
      </div>
      <AudioPlayer
        src={playlist[index].src}
        customAdditionalControls={[]}
        showSkipControls
        onClickNext={onClickNext}
        onClickPrevious={onClickPrevious}
        onPlay={onPlay}
        onPause={onPause}
      />
    </div>
  )
}

PlayerAudio.propTypes = {
  playlist: PropTypes.arrayOf(
    PropTypes.shape({
      music: PropTypes.string.isRequired,
      album: PropTypes.string.isRequired,
      src: PropTypes.string.isRequired,
    })).isRequired,
  className: PropTypes.any,
  isPlaying: PropTypes.bool.isRequired,
  onPlay: PropTypes.func.isRequired, 
  onPause: PropTypes.func.isRequired,
  onClickNext: PropTypes.func.isRequired,
  onClickPrevious: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
};

PlayerAudio.defaultProps = {
  className: undefined
}
  

export default PlayerAudio