import React, { useEffect, useState } from 'react';
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

const PagePortraits = ({location}) => {
  const [ loadedImg, setLoadedImg ] = useState(false);
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

  const preloadImg = () => {
    setLoadedImg(false)
    let img = new Image();
    img.onload = () => {
      setLoadedImg(true);
      console.log('loaded');
    }
    img.src = portraits.backgroundImg.high;
  }

  useEffect(() =>{
    const prev = document.querySelector(".swiper-button-prev");
    const next = document.querySelector(".swiper-button-next");
    prev.classList.add('hoverable');
    next.classList.add('hoverable');
    preloadImg();
  }, []);

  useEffect(() => {
    const img = document.querySelector(".swiper-container");
    const text = document.querySelector(".teewnMax-gallery");
    infoEnter(img, text);
  }, [location.pathname])

  return(
    <div className={s.container}>
      <div 
        className={classNames(s.container__backgroundImg,
          loadedImg && s.container__backgroundImgLoaded)} 
        style={{backgroundImage: `url('${
          loadedImg 
            ? portraits.backgroundImg.high
            : portraits.backgroundImg.low}')`}}
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
        </ScrollContainer>
      </div>
    </div>
  )}

PagePortraits.propTypes = {
  location: PropTypes.any.isRequired
}

export default withRouter(PagePortraits);