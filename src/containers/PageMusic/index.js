import React from 'react';
import music from '__MOCKS__/music';
import AudioPlayer from 'react-h5-audio-player';

import ScrollContainer from 'components/ScrollContainer';

import './styles.scss'
import s from "./style.module.scss";

const PageMusic = () => (
  <div className={s.container}>
    <div className={s.container__wrapper}>
      <div className={s.container__wrapper__video}>
        <h2>{music.info.title.en}</h2>
        <div className={s.container__wrapper__video__img}>
          <img src={music.video.img} alt={music.info.title.en} />
        </div>
      </div>
      <div className={s.container__wrapper__text}>
        <h2>{music.info.subTitle.en}</h2>
        <ScrollContainer
          classNameContainer={s.container__wrapper__text__box}
          classNameWrapper={s.container__wrapper__text__box__content}
        >
          <div dangerouslySetInnerHTML={{__html: music.info.text.en}} />
        </ScrollContainer>
      </div>
      <div className={s.container__wrapper__albums}>
        <h2>Albums</h2>
        {music.albums.map(e => (
          <div key={e.id} className={s.container__wrapper__albums__img}>
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
)

export default PageMusic;