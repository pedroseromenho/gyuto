import React, {useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Media from 'react-media';
import {sections} from 'utils/sections';
import {selectedLang} from 'utils/lang';
import classNames from 'classnames';
import { textEnter } from 'animations/info';
import { useSwipeable } from 'react-swipeable'

import MountainSvg from './MountainSvg';
import ScrollContainer from 'components/ScrollContainer';
import ScrollNav from 'components/ScrollNav';
import LazyImg from 'components/LazyImg';

import s from './style.module.scss';

const PageInfo = () => {
  const [ currentSection, setCurrentSection ] = useState('intro');
  const { t, i18n } = useTranslation('pageInfo');

  const sectionContent = sections(t).filter(i => i.section === currentSection)[0];

  const changeSection = (current) => {
    setCurrentSection(current);
  } 

  useEffect(() => {
    const text = document.querySelector(".tweenMax-info-text")
    textEnter(text)
  }, [currentSection]) //eslint-disable-line

  const currentIndex = sections(t).findIndex((e) => e.section === currentSection);

  const handlers = useSwipeable({
    onSwipedRight: () => setCurrentSection(
      currentIndex === 0 
        ? sections(t)[sections(t).length - 1].section
        : sections(t)[currentIndex - 1].section
    ),
    onSwipedLeft: () =>  setCurrentSection(
      currentIndex === sections(t).length - 1
        ? sections(t)[0].section
        : sections(t)[currentIndex + 1].section
    ),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  return(
    <Media queries={{
      small: "(max-width: 719px)"
    }}>
      {matches => (
        <div className={s.container}>
          {matches.small && (
            <ScrollNav 
              sections={sections(t)} 
              changeSection={changeSection} 
              currentSection={currentSection} 
            />
          )}
          <div className={s.container__wrapper} key={sectionContent.section} {...handlers}>
            <ScrollContainer
              classNameContainer={classNames(
                s.container__wrapper__info, 
                !matches.small ? "tweenMax-info-text" : undefined
              )}
              classNameWrapper={s.container__wrapper__info__content}
              showScrollBar
            >
              {selectedLang( 
                i18n, 
                sectionContent.quote.en, 
                sectionContent.quote.fr
              ) && (
                <h3>
                  {`"${selectedLang( 
                    i18n, 
                    sectionContent.quote.en, 
                    sectionContent.quote.fr
                  )}"`}</h3>
              )}
              <span>
                {selectedLang(i18n, 
                  sectionContent.legend.en, 
                  sectionContent.legend.fr
                )}
              </span>
              <div 
                className={s.container__wrapper__info__content__text}
                dangerouslySetInnerHTML={{__html: selectedLang(
                  i18n, 
                  sectionContent.text.en, 
                  sectionContent.text.fr
                )}} 
              />
            </ScrollContainer>
            <LazyImg 
              isBackground={!matches.small}
              className={s.container__wrapper__img}
              imgHigh={sectionContent.img.high}
              imgLow={sectionContent.img.low}
            />
          </div>
          {!matches.small && (
            <MountainSvg 
              sections={sections(t)} 
              changeSection={changeSection} 
              currentSection={currentSection} 
            />
          )}
        </div>
      )}
    </Media>
  )}

export default PageInfo;