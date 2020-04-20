import React from 'react';
import credits from '__MOCKS__/credits'
import { useTranslation } from 'react-i18next';
import { selectedLang } from 'utils/lang';

import ScrollContainer from 'components/ScrollContainer';

import s from './style.module.scss';
import LazyImg from 'components/LazyImg';

const PageCredits = () => {
  const { i18n, t } = useTranslation('translation');

  return(
    <ScrollContainer classNameContainer={s.container}>
      <LazyImg
        imgHigh={credits.contact.images[0].high}
        imgLow={credits.contact.images[0].low}
        alt={credits.contact.name}
      />
      <h3>{credits.contact.name}</h3>
      <div className={s.container__email}>
        <a href={`mailto: ${credits.contact.email.movie}`} className="hoverable">
          {credits.contact.email.movie}
        </a>
        <a href={`mailto: ${credits.contact.email.personal}`} className="hoverable">
          {credits.contact.email.personal}
        </a>
      </div>
      <p>{selectedLang(i18n, credits.contact.bio.en, credits.contact.bio.fr)}</p>
      <h4>{t('credits')}</h4>
      <LazyImg
        imgHigh={credits.contact.images[1].high}
        imgLow={credits.contact.images[1].low}
        alt={credits.contact.name}
      />
      {credits.credits.map(c => (
        <ul 
          key={c.what.en}
          className={s.container__credits}
        >
          <h5>{selectedLang(i18n, c.what.en, c.what.fr)}</h5>
          {c.whatelse && (
            <h6>{selectedLang(i18n, c.whatelse.en, c.whatelse.fr)}</h6>
          )}
          <li>
            {c.who.map(w =>(
              <div key={w.en}>
                {selectedLang(i18n, w.en, w.fr)}
                {w.link && (
                  <div>
                    <a 
                      className="hoverable"
                      href={w.link}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      {w.link.replace(/(^\w+:|^)\/\//, '')}
                    </a>
                  </div>
                )}
              </div>
            ))}
          </li>
        </ul>
      ))}
    </ScrollContainer>
  )}

export default PageCredits;