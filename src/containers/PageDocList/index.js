import React, {useState} from 'react';
import YouTube from 'react-youtube';
import { useTranslation } from 'react-i18next';
import { selectedLang } from 'utils/lang';
import {videos} from 'data/videos';
import {intro} from 'data/intro';

import ListItem from 'components/ListItem';

import s from './style.module.scss';

const PageDocList = () => {
  const [selectedId, setSelectedId] = useState(null);
  const displayInfo = videos.filter(i => i.id === selectedId)[0];

  const { i18n } = useTranslation();

  return(
    <div className={s.container}>
      <div className={s.container__wrapper}>
        <ul className={s.container__wrapper__list}>
          {videos.map(i => (
            <ListItem 
              key={i.title.fr}
              className={s.container__wrapper__list__item}
              handleOver={
                selectedId === null 
                  ? () => setSelectedId(i.id) 
                  : undefined
              }
              handleOut={
                selectedId !== null 
                  ? () => setSelectedId(null) 
                  : undefined
              }
              value={
                <div className={s.container__wrapper__list__item__info}>
                  <h3>{selectedLang(i18n, i.title.en, i.title.fr)}</h3>
                  <span>{i.duration}</span>
                </div>
              }/>
          ))}
        </ul>
        <div className={s.container__wrapper__scrollBar} />
      </div>
      <div className={s.container__preview}>
        {selectedId === null 
          ? (
            <div className={s.container__preview__info}>
              <div className={s.container__preview__info__video}>
                <YouTube 
                  videoId={intro.url} 
                  opts={{playerVars: {rel: 0}}}
                />
              </div>
              <div className={s.container__preview__info__text}>
                <h5>{selectedLang(i18n, intro.quote.en, intro.quote.fr)}</h5>
                <p>{selectedLang(i18n, intro.legend.en, intro.legend.fr)}</p>
              </div>
            </div>
          ) : (
            <div className={s.container__preview__info}>
              <div className={s.container__preview__info__img}>
                <img src={displayInfo.img} alt ={selectedLang(i18n, displayInfo.title.en, displayInfo.title.fr)} />
              </div>
              <div className={s.container__preview__info__text}>
                <h5>{selectedLang(i18n, displayInfo.quote.en, displayInfo.quote.fr)}</h5>
                <p>{selectedLang(i18n, displayInfo.legend.en, displayInfo.legend.fr)}</p>
              </div>
            </div>
          )}
      </div>
    </div>
  )}

export default PageDocList;