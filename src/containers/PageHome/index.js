import React, { useState, useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import classNames from 'classnames';
import Media from 'react-media';
import  videos from '__MOCKS__/videos';
import intro from '__MOCKS__/intro';
import { selectedLang } from 'utils/lang';
import { TweenMax } from 'gsap';
import { infoEnter, infoLeave } from 'animations/home';

import CoverMedia from 'components/CoverMedia';
import Mandala from 'components/Mandala';
import Button from 'components/Button';

import s from './style.module.scss';

const PageHome = () => {
  const [selectedId, setSelectedId] = useState(null);
  const { i18n } = useTranslation();

  useEffect(() => {
    const title = document.querySelector('.tweenMax-video-title');
    const quote = document.querySelector('.tweenMax-video-quote');
    const legend = document.querySelector('.tweenMax-video-legend');
    const img = document.querySelector(`.tweenMax-video-img`);
    infoEnter(title, quote, legend, img);
  }, [selectedId])

  const getSelectedId = (id) => {
    if(selectedId !== id){
      setSelectedId(id);
    }
  }

  const hideInfo = () => {
    const title = document.querySelector('.tweenMax-video-title');
    const quote = document.querySelector('.tweenMax-video-quote');
    const legend = document.querySelector('.tweenMax-video-legend');
    const img = document.querySelector(`.tweenMax-video-img`);
    if(setSelectedId !== null ){
      infoLeave(title, quote, legend, img);
      TweenMax.delayedCall(0.5, () => setSelectedId(null));
    }
  };

  return (
    <div className={s.container}>
      <Media queries={{
        small: "(max-width: 719px)"
      }}>
        {matches => (
          matches.small 
            ? (
              <div className={s.container__mobile}>
                <CoverMedia 
                  video={intro.url}
                  imgHigh={intro.img.high}
                  imgLow={intro.img.low}
                  alt='intro'
                />
                <h3>{selectedLang(i18n, intro.quote.en, intro.quote.fr)}</h3>
                <p>{selectedLang(i18n, intro.legend.en, intro.legend.fr)}</p>
                <Button 
                  value="Voir les videos"
                />
              </div>
            ) : (
              <Fragment>
                <div className={s.container__legend}>
                  {selectedId !== null && (
                    <>
                      <h2 className="tweenMax-video-title">
                        {selectedLang(i18n, videos[selectedId].title.en, videos[selectedId].title.fr)}
                      </h2>
                      <h4 className="tweenMax-video-quote">
                        {`"${selectedLang(i18n, videos[selectedId].quote.en, videos[selectedId].quote.fr)}"`}
                      </h4>
                      <p className="tweenMax-video-legend">
                        {`${selectedLang(i18n, videos[selectedId].legend.en, videos[selectedId].legend.fr)} / ${videos[selectedId].duration}`}
                      </p>
                    </>
                  )}
                </div>
                <div 
                  className={s.container__background}
                  onMouseOver={() => hideInfo()}
                />
                <div className={classNames(s.container__mandala, "tweenMax-mandala")}>
                  <Mandala
                    getSelectedId={getSelectedId}
                    videosList={videos}
                    selectedId={selectedId}
                  />
                </div>
                <div className={s.container__img}>
                  {selectedId !== null && (
                    <img 
                      src={videos[selectedId].img.medium} 
                      alt={selectedLang(i18n, videos[selectedId].title.en, videos[selectedId].title.fr)} 
                      className="tweenMax-video-img"
                    />
                  )}
                </div>
              </Fragment>
            )
        )}
      </Media>
    </div>
  );
}
PageHome.propTypes = {
  i18n: PropTypes.any,
};

PageHome.defaultProps = {
  i18n: null,
};

export default PageHome;