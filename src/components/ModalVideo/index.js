import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import classNames from 'classnames';
import YouTube from 'react-youtube';
import { FiX } from 'react-icons/fi';
import { selectedLang } from 'utils/lang';
import { TweenMax, Power2 } from 'gsap';

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
    const modalVideo = document.querySelector('.tweenMax-modalVideo');
    TweenMax.to(modalVideo, 0.1, {
      css: { 
        scaleX: 0.1,
        scaleY: 0.1, 
      }
    });
    TweenMax.to(modalVideo, 0.5, {
      css: { 
        scaleX: 1,
        scaleY: 1,
        transformOrigin: "center bottom",
        autoAlpha: 1 }, 
      ease: Power2.easeOut });
  }, [video]);

  const closeModal = () => {
    const modalVideo = document.querySelector('.tweenMax-modalVideo');
    TweenMax.to(modalVideo, 0.4, {
      css: {        
        scaleX: 0.1,
        scaleY: 0.1, 
        transformOrigin: "center center",
        autoAlpha: 0 }, 
      ease: Power2.easeOut });
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