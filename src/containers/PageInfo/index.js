import React, {useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import {sections} from './sections';
import {selectedLang} from 'utils/lang';
import classNames from 'classnames';
import { textEnter } from 'animations/info';

import MountainSvg from './MountainSvg';
import ScrollContainer from 'components/ScrollContainer';

import s from './style.module.scss';

const PageInfo = () => {
  const [ currentSection, setCurrentSection ] = useState('intro');
  const [ loadedImg, setLoadedImg ] = useState(false);
  const { t, i18n } = useTranslation('pageInfo');

  const sectionContent = sections(t).filter(i => i.section === currentSection)[0];

  const preloadImg = () => {
    setLoadedImg(false)
    let img = new Image();
    img.onload = () => {
      setLoadedImg(true);
    }
    img.src = sectionContent.img.high;
  }

  const changeSection = (current) => {
    setCurrentSection(current);
  } 

  useEffect(() => {
    const text = document.querySelector(".tweenMax-info-text")
    preloadImg();
    textEnter(text)
  }, [currentSection]) //eslint-disable-line

  return(
    <div className={s.container}>
      <div className={s.container__wrapper} key={sectionContent.section}>
        <ScrollContainer
          classNameContainer={classNames(
            s.container__wrapper__info, 
            "tweenMax-info-text"
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
          <span>{selectedLang(i18n, 
            sectionContent.legend.en, 
            sectionContent.legend.fr
          )}</span>
          <div 
            className={s.container__wrapper__info__content__text}
            dangerouslySetInnerHTML={{__html: selectedLang(
              i18n, 
              sectionContent.text.en, 
              sectionContent.text.fr
            )}} 
          />
        </ScrollContainer>
        <div 
          className={classNames(
            s.container__wrapper__img, 
            "tweenMax-info-img",
            loadedImg && s.container__wrapper__imgLoaded)}
          style={{backgroundImage: `url('${loadedImg 
            ? sectionContent.img.high : sectionContent.img.low}')`}}
        />
      </div>
      <MountainSvg 
        sections={sections(t)} 
        changeSection={changeSection} 
        currentSection={currentSection} 
      />
    </div>
  )}

export default PageInfo;