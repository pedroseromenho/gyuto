import React from 'react';
import { useTranslation } from 'react-i18next';

import s from './style.module.scss';

const NoMatch = () => {
  const { t } = useTranslation('translation');
  return(
    <div className={s.container}>
      {t('404')}
    </div>
  )}

export default NoMatch;