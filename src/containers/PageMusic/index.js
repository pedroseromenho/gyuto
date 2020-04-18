import React, { useState } from 'react';
import music from '__MOCKS__/music';
import { useTranslation } from 'react-i18next';
import { selectedLang } from 'utils/lang';
import {playlist} from 'utils/playlist'

import ScrollContainer from 'components/ScrollContainer';
import PlayerAudio from 'components/PlayerAudio';
import CoverMedia from 'components/CoverMedia';

import s from "./style.module.scss";

const PageMusic = () => {
  const [musicIndex, setMusicIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [list, setList] = useState(playlist);

  const { i18n, t } = useTranslation('common');

  const playAlbum = (album) => {
    const filtered = playlist().filter(i => i.album === album);
    setList(filtered)
    setIsPlaying(true);
  }

  return(
    <div className={s.container}>
      <div className={s.container__wrapper}>
        <div className={s.container__wrapper__video}>
          <h2>
            {selectedLang(i18n, music.info.title.en, music.info.title.fr)}
          </h2>
          <div className={s.container__wrapper__video__iframe}>
            <CoverMedia item={music} />
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
            <CoverMedia 
              key={e.title}
              className={s.container__wrapper__albums__img} 
              item={e}
              isPlaying={isPlaying && e.title === list[musicIndex].album}
              onPlay={() => playAlbum(e.title)}
              isAlbumCover
            />
          ))}
        </div>
      </div>
      <PlayerAudio 
        className={s.container__player}
        playlist={list}
        index={musicIndex}
        onClickNext={
          musicIndex < list.length - 1
            ? () => setMusicIndex(musicIndex + 1) 
            : () => setMusicIndex(0)
        }
        onClickPrevious={
          musicIndex === 0 
            ? () => setMusicIndex(list.length - 1)
            : () => setMusicIndex(musicIndex - 1)
        }
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        isPlaying={isPlaying}
      />
    </div>
  )}

export default PageMusic;