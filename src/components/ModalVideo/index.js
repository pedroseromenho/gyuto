import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import classNames from 'classnames';
import YouTube from 'react-youtube';
import { FiX } from 'react-icons/fi';
import { selectedLang } from 'utils/lang';
import { TweenMax } from 'gsap';
import { modalLeave, modalEnter } from 'animations/modalVideo';

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

  useEffect(() => {
    const modal = document.querySelector('.tweenMax-modalVideo');
    modalEnter(modal);
  }, [video]);

  const closeModal = () => {
    const modal = document.querySelector('.tweenMax-modalVideo');
    modalLeave(modal);
    TweenMax.delayedCall(0.5, close);
  }

  return(
    <div className={classNames(s.container, 'tweenMax-modalVideo')}>
      {playIntro ? (
        <Button 
          value= {t('skip')}
          handleClick={() => closeModal()}
        />
      ) : (
        <FiX
          onClick={() => closeModal()}
          onKeyPress={() => closeModal()}
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
          onEnd={() => closeModal()}
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