import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import YouTube from 'react-youtube';
import Button from "../Button"
import s from './style.module.scss';
import { FiX } from 'react-icons/fi';

const ModalVideo = ({link, close, playIntro}) => {
  const { t } = useTranslation('common');

  const opts = {
    playerVars: {
      autoplay: 1,
      rel: 0,
      showinfo: 0,
      ecver: 2,
      mute: playIntro ? 1 : 0,
    },
  };
  return(
    <div className={s.container}>
      {playIntro ? (
        <Button 
          value= {t('skip')}
          handleClick={() => close()}
        />
      ) : (
        <FiX
          onClick={() => close()}
          onKeyPress={() => close()}
          role="presentation"
          className="hoverable"
        />
      )}
      <div className={s.container__video}>
        <YouTube 
          videoId={link} 
          opts={opts}
          onEnd={() => close()}
        />
      </div>
    </div>
  )
}

ModalVideo.propTypes = {
  close: PropTypes.func.isRequired,
  link: PropTypes.string.isRequired,
  playIntro: PropTypes.bool.isRequired,
};

export default ModalVideo;