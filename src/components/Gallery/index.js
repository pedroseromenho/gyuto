import React from 'react';
import PropTypes from 'prop-types';
import Swiper from 'react-id-swiper';

import 'swiper/css/swiper.css';
import s from './style.module.scss';

const Gallery = ({ items }) => {
  const params = {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    spaceBetween: 30
  }
  return(
    <Swiper {...params}>
      {items.map(i => (
        <div key={i.url} className={s.container}>
          <div 
            className={s.container__backgroundImg} 
            style={{backgroundImage: `url('${i.url}')`}}
          />
          <div className={s.container__legend}>{i.name}</div>
        </div>
      ))}
    </Swiper>
  )
}

Gallery.propTypes = {
  items: PropTypes.any.isRequired,
};
  

export default Gallery;