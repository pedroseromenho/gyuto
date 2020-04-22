import React, { useEffect } from 'react';
import portraits from '__MOCKS__/portraits';
import Swiper from 'react-id-swiper';
import PropTypes from 'prop-types';
import Media from 'react-media';
import { useTranslation } from 'react-i18next';
import { selectedLang } from 'utils/lang';
import classNames from 'classnames';
import {withRouter} from 'react-router-dom';
import { infoEnter } from 'animations/portraits';

import ScrollContainer from 'components/ScrollContainer';
import LazyImg from 'components/LazyImg';

import 'swiper/css/swiper.css';
import './swiper.scss';
import s from "./style.module.scss";
import { detectMobile } from 'utils/detectMobile';

const PagePortraits = ({location}) => {
  const { i18n } = useTranslation('pageInfo');

  const params = {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    autoplay: {
      delay: 2500,
    },
    spaceBetween: 0,
    loop: true,
    watchOveflow: true,
  }

  useEffect(() =>{
    const prev = document.querySelector(".swiper-button-prev");
    const next = document.querySelector(".swiper-button-next");
    prev.classList.add('hoverable');
    next.classList.add('hoverable');
  }, []);

  useEffect(() => {
    const img = document.querySelector(".swiper-container");
    const text = document.querySelector(".teewnMax-gallery");
    infoEnter(detectMobile() ? null : img, text);

  }, [location.pathname])

  return(
    <Media queries={{
      small: "(max-width: 719px)"
    }}>
      {matches => (
        <div className={s.container}>
          {!matches.small && (
            <LazyImg 
              isBackground
              className={s.container__backgroundImg}
              imgHigh={portraits.backgroundImg.high}
              imgLow={portraits.backgroundImg.low}
            />
          )}
          <div className={s.container__wrapper}>
            <Swiper {...params}>
              {portraits.gallery.map(i => (
                <div key={i.url} className={s.container__wrapper__slide}>
                  <img src={i.url} alt={i.name} />
                  <div className={s.container__wrapper__slide__legend}>
                    {i.name}
                  </div>
                </div>
              ))}
            </Swiper>
            <ScrollContainer 
              classNameContainer={
                classNames(
                  s.container__wrapper__text,
                  !matches.small ? "teewnMax-gallery" : undefined
                )}
              isWhite
            >
              <div 
                className={s.container__wrapper__text__content} 
                dangerouslySetInnerHTML={{__html: selectedLang(i18n, portraits.text.en, portraits.text.fr)}}
              />
              <span>{selectedLang(i18n, portraits.credits.en, portraits.credits.fr)}</span>
            </ScrollContainer>
          </div>
        </div>
      )}
    </Media>
  )}

PagePortraits.propTypes = {
  location: PropTypes.any.isRequired
}

export default withRouter(PagePortraits);