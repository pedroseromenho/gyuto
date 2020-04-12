import React, {useState} from 'react';
import {videos} from '../../data/videos';
import ListItem from '../../components/ListItem';
import s from './style.module.scss';

const PageDocList = () => {
  const [selectedId, setSelectedId] = useState(null);
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
                <div className={s.container__wrapper__list__item__wrapper}>
                  <h3>{i.title.fr}</h3>
                  <span>{i.duration}</span>
                </div>
              }/>
          ))}
        </ul>
      </div>
      <div className={s.container__preview}>
        {selectedId === null 
          ? (
            <div>Intro</div>
          ) : (
            <div>
              {videos
                .filter(i => i.id === selectedId)
                .map(s => (
                  <div key={s.id}>
                    {s.title.fr}
                  </div>
                ))
              }
            </div>
          )}
      </div>
    </div>
  )}

export default PageDocList;