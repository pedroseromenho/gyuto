import React, {useState } from 'react';
import { useTranslation } from 'react-i18next';
import {sections} from './sections';
import {selectedLang} from 'utils/lang';

import NavSvg from './NavSvg';

import s from './style.module.scss';
import ScrollContainer from 'components/ScrollContainer';

const PageInfo = () => {
  const [ currentSection, setCurrentSection ] = useState('intro');
  const { t, i18n } = useTranslation('pageInfo');

  const changeSection = (current) => {
    setCurrentSection(current);
  } 

  return(
    <div className={s.container}>
      {sections(t).filter(i => i.section === currentSection)
        .map(e => (
          <div className={s.container__wrapper} key={e.section}>
            <ScrollContainer
              classNameContainer={s.container__wrapper__info}
              classNameWrapper={s.container__wrapper__info__content}
              showScrollBar
            >
              {selectedLang( i18n, e.quote.en, e.quote.fr) && (
                <h3>{`"${selectedLang( i18n, e.quote.en, e.quote.fr)}"`}</h3>
              )}
              <span>{selectedLang(i18n, e.legend.en, e.legend.fr)}</span>
              <div 
                className={s.container__wrapper__info__content__text}
                dangerouslySetInnerHTML={{__html: selectedLang(i18n, e.text.en, e.text.fr)}} 
              />
            </ScrollContainer>
            <div 
              className={s.container__wrapper__img}
              style={{backgroundImage: `url('${e.img}')`}}
            />
          </div>
        ))}
      <NavSvg 
        sections={sections(t)} 
        changeSection={changeSection} 
        currentSection={currentSection} 
      />
    </div>
  )}

export default PageInfo;