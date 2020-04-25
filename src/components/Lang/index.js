import React from 'react';
import { useTranslation } from 'react-i18next';
import classNames from 'classnames';
import { changeLang } from 'utils/lang';

import s from './style.module.scss';

const Lang = () => {
  const { i18n } = useTranslation();
  return(
    <div 
      className={classNames(s.container, 'hoverable')}
      onClick={() => changeLang(i18n)}
      onKeyPress={() => changeLang(i18n)}
      role="presentation"
    >
      {i18n.language === 'en' 
        ? 'FR'
        : "EN"}
    </div>
  )}

export default Lang;