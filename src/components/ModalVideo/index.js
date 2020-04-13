import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import YouTube from 'react-youtube';
import { FiX } from 'react-icons/fi';
import { selectedLang } from 'utils/lang';

import Button from "components/Button";

import s from './style.module.scss';

const ModalVideo = ({video, close, playIntro}) => {
  const { t, i18n } = useTranslation('common');

  const opts = {
    playerVars: {
      autoplay: 1,
      rel: 0,
      showinfo: 0,
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
          videoId={playIntro 
            ? video.url 
            : selectedLang(i18n, video.url.en, video.url.fr)
          } 
          opts={opts}
          onEnd={() => close()}
        />
      </div>
    </div>
  )
}

ModalVideo.propTypes = {
  close: PropTypes.func.isRequired,
  video: PropTypes.object.isRequired,
  playIntro: PropTypes.bool.isRequired,
};

export default ModalVideo;