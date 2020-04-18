import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import Media from 'react-media';
import { useTranslation } from 'react-i18next';
import { selectedLang } from 'utils/lang';
import  videos from '__MOCKS__/videos';
import intro from '__MOCKS__/intro';

import ListItem from 'components/ListItem';
import Preview from './Preview';

import s from './style.module.scss';
import ScrollContainer from 'components/ScrollContainer';

const PageDocList = ({ openModalVideo }) => {
  const [selectedId, setSelectedId] = useState(null);
  const [ loadedImg, setLoadedImg ] = useState(false);
  const displayInfo = videos.filter(i => i.id === selectedId)[0];
  const { i18n } = useTranslation();

  const preloadImg = () => {
    setLoadedImg(false)
    let img = new Image();
    img.onload = () => {
      setLoadedImg(true);
    }
    img.src = displayInfo.img.high;
  }

  useEffect(() => {
    if(selectedId){
      preloadImg();
    }
  }, [selectedId]) //eslint-disable-line

  return(
    <div className={s.container}>
      <Media queries={{
        small: "(max-width: 719px)"
      }}>
        {matches => (
          <>
            <ScrollContainer
              classNameContainer={s.container__wrapper}
              classNameWrapper={s.container__wrapper__list}
              list
            >
              {videos.map(i => (
                <ListItem 
                  key={i.title.fr}
                  className={s.container__wrapper__list__item}
                  handleClick={() => openModalVideo(i)}
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
            </ScrollContainer>
            {!matches.small && (
              <div className={s.container__preview}>
                {selectedId === null 
                  ? (
                    <Preview 
                      video={intro.url} 
                      quote={selectedLang(i18n, 
                        intro.quote.en, intro.quote.fr
                      )} 
                      legend={selectedLang(i18n, 
                        intro.legend.en, intro.legend.fr
                      )} 
                    />
                  ) : (
                    <Preview 
                      img={loadedImg ? displayInfo.img.high : displayInfo.img.low} 
                      quote={selectedLang(i18n, 
                        displayInfo.quote.en, displayInfo.quote.fr
                      )} 
                      legend={selectedLang(i18n, 
                        displayInfo.legend.en, displayInfo.legend.fr
                      )} 
                      alt={selectedLang(i18n, 
                        displayInfo.title.en, displayInfo.title.fr
                      )}
                      className={s.loaded}
                    />
                  )}
              </div>
            )}
          </>
        )}
      </Media>
    </div>
  )}

PageDocList.propTypes = {
  openModalVideo: PropTypes.func,
};
  
PageDocList.defaultProps = {
  openModalVideo: undefined,
};

export default PageDocList;