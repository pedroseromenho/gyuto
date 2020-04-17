import React from 'react';
import music from '__MOCKS__/music';
import AudioPlayer from 'react-h5-audio-player';
import { useTranslation } from 'react-i18next';
import { selectedLang } from 'utils/lang';

import ScrollContainer from 'components/ScrollContainer';

import './styles.scss'
import s from "./style.module.scss";
import YouTube from 'react-youtube';

const PageMusic = () => {
  const { i18n, t } = useTranslation('common');

  const opts = {
    playerVars: {
      rel: 0,
      showinfo: 0,
      vq: 'large',
    },
  };

  return(
    <div className={s.container}>
      <div className={s.container__wrapper}>
        <div className={s.container__wrapper__video}>
          <h2>
            {selectedLang(i18n, music.info.title.en, music.info.title.fr)}
          </h2>
          <div className={s.container__wrapper__video__iframe}>
            {/* <img src={music.video.img} alt={music.info.title.en} /> */}
            <YouTube 
              videoId={music.video.url} 
              opts={opts}
            />
          </div>
        </div>
        <div className={s.container__wrapper__text}>
          <h2>
            {selectedLang(i18n, music.info.subTitle.en, music.info.subTitle.fr)}
          </h2>
          <ScrollContainer
            classNameContainer={s.container__wrapper__text__box}
            classNameWrapper={s.container__wrapper__text__box__content}
          >
            <div 
              dangerouslySetInnerHTML={{__html: 
                selectedLang(i18n, music.info.text.en, music.info.text.fr)
              }} 
            />
          </ScrollContainer>
        </div>
        <div className={s.container__wrapper__albums}>
          <h2>{t('albums')}</h2>
          {music.albums.map(e => (
            <div key={e.title} className={s.container__wrapper__albums__img}>
              <img src={e.cover} alt={e.title} />
            </div>
          ))}
        </div>
      </div>
      <div className={s.container__player}>
        <div className={s.container__player__title}>
        Tantric college - Kailash
        </div>
        <AudioPlayer
          autoPlay
          src="http://example.com/audio.mp3"
          onPlay={() => console.log("onPlay")}
        // other props here
        />
      </div>
    </div>
  )}

export default PageMusic;