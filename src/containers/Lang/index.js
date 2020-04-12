import React from 'react';
import { useTranslation } from 'react-i18next';
import classNames from 'classnames';
import s from './style.module.scss';

const Lang = () => {
  const { i18n } = useTranslation();
  const changeLanguage = () => {
    i18n.changeLanguage(
      i18n.language === 'en' 
        ? 'fr' 
        : 'en')
  }
  return(
    <div 
      className={classNames(s.container, 'hoverable')}
      onClick={() => changeLanguage()}
      onKeyPress={() => changeLanguage()}
      role="presentation"
    >
      {i18n.language === 'en' 
        ? 'FR'
        : "EN"}
    </div>
  )}

export default Lang;