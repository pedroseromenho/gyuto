import React, { useEffect } from 'react';
import portraits from '__MOCKS__/portraits';
import Swiper from 'react-id-swiper';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { selectedLang } from 'utils/lang';
import classNames from 'classnames';
import {withRouter} from 'react-router-dom';
import { infoEnter } from 'animations/portraits';

import ScrollContainer from 'components/ScrollContainer';

import 'swiper/css/swiper.css';
import './swiper.scss';
import s from "./style.module.scss";
import LazyImg from 'components/LazyImg';

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
    lazy: true
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
    infoEnter(img, text);
  }, [location.pathname])

  return(
    <div className={s.container}>
      <LazyImg 
        isBackground
        className={s.container__backgroundImg}
        imgHigh={portraits.backgroundImg.high}
        imgLow={portraits.backgroundImg.low}
      />
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
              "teewnMax-gallery"
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

PagePortraits.propTypes = {
  location: PropTypes.any.isRequired
}

export default withRouter(PagePortraits);