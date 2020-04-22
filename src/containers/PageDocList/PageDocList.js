import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Media from 'react-media';
import { useTranslation } from 'react-i18next';
import { selectedLang } from 'utils/lang';
import  videos from '__MOCKS__/videos';
import intro from '__MOCKS__/intro';

import ListItem from 'components/ListItem';
import Preview from './Preview';
import Item from './Item';
import ScrollContainer from 'components/ScrollContainer';

import s from './style.module.scss';

const PageDocList = ({ actions }) => {
  const [selectedId, setSelectedId] = useState(null);
  const displayInfo = videos.filter(i => i.id === selectedId)[0];
  const { i18n } = useTranslation();

  return(
    <Media queries={{
      small: "(max-width: 719px)"
    }}>
      {matches => (
        <div className={s.container}>
          <ScrollContainer
            classNameContainer={s.container__wrapper}
            classNameWrapper={s.container__wrapper__list}
            list
          >
            {videos.map((i, index) => (
              <ListItem 
                key={i.title.fr}
                className={s.container__wrapper__list__item}
                handleClick={!matches.small ? () => actions.setVideo(i) : undefined}
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
                  <Item s={s} item={i} isMobile={matches.small} index={index} />}/>
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
                    imgHigh={intro.img.high}
                    imgLow={intro.img.low}
                    alt='intro'
                  />
                ) : (
                  <Preview 
                    imgHigh={displayInfo.img.high}
                    imgLow={displayInfo.img.low}
                    quote={selectedLang(i18n, 
                      displayInfo.quote.en, displayInfo.quote.fr
                    )} 
                    legend={selectedLang(i18n, 
                      displayInfo.legend.en, displayInfo.legend.fr
                    )} 
                    alt={selectedLang(i18n, 
                      displayInfo.title.en, displayInfo.title.fr
                    )}
                  />
                )}
            </div>
          )}
        </div>
      )}
    </Media>
  )}

PageDocList.propTypes = {
  actions : PropTypes.shape({
    setVideo: PropTypes.func.isRequired,
  }),
};

export default PageDocList;