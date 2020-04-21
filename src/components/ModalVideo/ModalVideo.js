import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import classNames from 'classnames';
import YouTube from 'react-youtube';
import { FiX, FiMinus, FiArrowUpLeft } from 'react-icons/fi';
import { selectedLang } from 'utils/lang';
import { TweenMax } from 'gsap';
import { modalLeave, modalEnter, modalMinimize, modalMaximize } from 'animations/modalVideo';
import ReactTooltip from "react-tooltip";

import Button from "components/Button";

import s from './style.module.scss';

const ModalVideo = ({
  video, actions, playIntro, hoverVideo
}) => {
  const { t, i18n } = useTranslation('translation');
  const [minimize, setMinimize] = useState(false)

  const opts = {
    playerVars: {
      autoplay: 1,
      rel: 0,
      showinfo: 0,
      mute: playIntro ? 1 : 0,
      vq: 'large',
    },
  };

  useEffect(() => {
    ReactTooltip.rebuild()
  }, [minimize])

  useEffect(() => {
    const modal = document.querySelector('.tweenMax-modalVideo');
    modalEnter(modal);
  }, [video]); // eslint-disable-line

  const closeModal = () => {
    const modal = document.querySelector('.tweenMax-modalVideo');
    modalLeave(modal);
    TweenMax.delayedCall(0.5, () => actions.setVideo(null));
    if(playIntro){
      actions.setPlayIntro(false);
    }
    actions.setHoverVideo(false);
  }

  const minimizeModal = () => {
    const sized = setMinimize(true);
    const modal = document.querySelector('.tweenMax-modalVideo');
    modalMinimize(modal);
    actions.setHoverVideo(false);
    TweenMax.delayedCall(0.5, sized);
  }

  const maximizeModal = () => {
    const sized = setMinimize(false);
    const modal = document.querySelector('.tweenMax-modalVideo');
    modalMaximize(modal);
    actions.setHoverVideo(true);
    TweenMax.delayedCall(0.2, sized);
  }

  return(
    <div className={classNames(
      s.container, 
      'tweenMax-modalVideo',
      minimize && s.container__minimized
    )}
    onMouseEnter={!hoverVideo 
      ? () => actions.setHoverVideo(true) 
      : undefined}
    onMouseLeave={hoverVideo 
      ? () => actions.setHoverVideo(false) 
      : undefined}
    >
      {playIntro ? (
        <Button 
          value={t('skip')}
          handleClick={() => closeModal()}
          className={s.container__skip}
        />
      ) : (
        <div className={
          classNames(s.container__buttons,
            minimize && s.container__buttonsMinimized
          )}>
          <FiX
            onClick={() => closeModal()}
            onKeyPress={() => closeModal()}
            role="presentation"
            data-tip={t('close')}
            data-place={minimize ? "left" : "bottom"}
          />
          {minimize 
            ? (
              <FiArrowUpLeft
                onClick={() => maximizeModal()}
                onKeyPress={() => maximizeModal()}
                role="presentation"
                data-tip={t('maximize')}
                data-place={minimize ? "left" : "bottom"}
              />
            ) :(
              <FiMinus
                onClick={() => minimizeModal()}
                onKeyPress={() => minimizeModal()}
                role="presentation"
                data-tip={t('minimize')}
                data-place="bottom"
              />
            ) }
        </div>
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
      {hoverVideo && (
        <ReactTooltip/>
      )}
    </div>
  )
}

ModalVideo.propTypes = {
  video: PropTypes.object.isRequired,
  playIntro: PropTypes.bool.isRequired,
  hoverVideo: PropTypes.bool.isRequired,
  actions : PropTypes.shape({
    setVideo: PropTypes.func.isRequired,
    setPlayIntro: PropTypes.func.isRequired,
    setHoverVideo: PropTypes.func.isRequired,
  }),
};

export default ModalVideo;