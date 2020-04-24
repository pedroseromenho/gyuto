import React, { useState, Fragment, useEffect } from 'react';
import music from '__MOCKS__/music';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import Media from 'react-media';
import { useTranslation } from 'react-i18next';
import { selectedLang } from 'utils/lang';
import {playlist} from 'utils/playlist';
import classNames from 'classnames';
import { infoEnter } from 'animations/music';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

import ScrollContainer from 'components/ScrollContainer';
import PlayerAudio from 'components/PlayerAudio';
import CoverMedia from 'components/CoverMedia';

import s from "./style.module.scss";

const PageMusic = ({ location }) => {
  const [musicIndex, setMusicIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [list, setList] = useState(playlist);
  const [openText, setOpenText] = useState(false);
  const [openAlbums, setOpenAlbums] = useState(false);

  const { i18n, t } = useTranslation('translation');

  const playAlbum = (album) => {
    const filtered = playlist().filter(i => i.album === album);
    setList(filtered)
    setIsPlaying(true);
  }

  useEffect(() => {
    const video = document.querySelector(".tweenMax-music-video");
    const text = document.querySelector(".tweenMax-music-text");
    const albums = document.querySelector(".tweenMax-music-albums");
    infoEnter(video, text, albums)
  }, [location.pathname])
  return(
    <Media queries={{
      small: "(max-width: 839px)"
    }}>
      {matches => (
        <div className={s.container}>
          <div className={s.container__wrapper}>
            <div className={classNames(
              s.container__wrapper__video, 
              !matches.small ? "tweenMax-music-video" : undefined
            )}>
              <h2>
                {selectedLang(i18n, music.info.title.en, music.info.title.fr)}
              </h2>
              <div className={s.container__wrapper__video__iframe}>
                <CoverMedia 
                  imgHigh={music.video.img.medium}
                  imgLow={music.video.img.low}
                  alt={music.info.title.en}
                  video={music.video.url}
                />
                <div className={s.container__wrapper__video__iframe__link}>
                  <a 
                    href={music.info.siteWeb}
                    className="hoverable"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    {music.info.siteWeb.replace(/(^\w+:|^)\/\//, '')}
                  </a> 
                </div>
              </div>
            </div>
            <div className={classNames(
              s.container__wrapper__text, 
              !matches.small ? "tweenMax-music-text" : undefined
            )}>
              <div 
                className={s.container__wrapper__toogle}
                onClick={matches.small ? () => setOpenText(!openText) : undefined}
                onKeyPress={matches.small ? () => setOpenText(!openText) : undefined}
                role="presentation"
              >
                <h2>
                  {selectedLang(i18n, music.info.subTitle.en, music.info.subTitle.fr)}
                </h2>
                {matches.small && (openText ? <FiChevronUp /> : <FiChevronDown />)}
              </div>
              {matches.small && !openText 
                ? null
                : (
                  <ScrollContainer
                    classNameContainer={s.container__wrapper__text__box}
                    classNameWrapper={s.container__wrapper__text__box__content}
                  >
                    <div 
                      dangerouslySetInnerHTML={{__html: 
                selectedLang(i18n, music.info.text.en, music.info.text.fr)
                      }} 
                    />
                    <span>{selectedLang(i18n, music.info.legend.en, music.info.legend.fr)}</span>
                  </ScrollContainer>
                )}
            </div>
            <div className={classNames(
              s.container__wrapper__albums, 
              !matches.small ? "tweenMax-music-albums" : undefined
            )}>
              <div 
                className={s.container__wrapper__toogle}
                onClick={matches.small ? () => setOpenAlbums(!openAlbums) : undefined}
                onKeyPress={matches.small ? () => setOpenAlbums(!openAlbums) : undefined}
                role="presentation"
              >
                <h2>{t('albums')}</h2>
                {matches.small && (openAlbums ? <FiChevronUp /> : <FiChevronDown />)}
              </div>
              {matches.small && !openAlbums 
                ? null
                : (
                  <ScrollContainer 
                    classNameContainer={s.container__wrapper__albums__box}
                    classNameWrapper={s.container__wrapper__albums__box__content}
                  >
                    {music.albums.map(e => (
                      <Fragment key={e.title}>
                        <CoverMedia
                          className={s.container__wrapper__albums__box__img} 
                          item={e}
                          isPlaying={isPlaying && e.title === list[musicIndex].album}
                          onPlay={() => playAlbum(e.title)}
                          isAlbumCover
                          imgHigh={e.cover.high}
                          imgLow={e.cover.low}
                          alt={e.title}
                        />
                        <div className={s.container__wrapper__albums__box__order}>
                          <a 
                            href={e.url_order}
                            className="hoverable"
                            rel="noopener noreferrer"
                            target="_blank"
                          >
                            {`${t('order')} ${e.title}`}
                          </a> 
                        </div>
                      </Fragment>
                    ))}
                  </ScrollContainer>
                )}
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
    </Media>
  )
}

PageMusic.propTypes = {
  location: PropTypes.any.isRequired
}

export default withRouter(PageMusic);