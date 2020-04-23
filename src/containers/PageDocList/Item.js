import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { selectedLang } from 'utils/lang';
import { FiChevronUp, FiChevronDown } from 'react-icons/fi';

import CoverMedia from 'components/CoverMedia/CoverMedia';

const Item = ({ s, item, isMobile, index, isIntro }) => {
  const [isOpen, setIsOpen] = useState(index === 0 || false);
  const { i18n, t } = useTranslation('pageInfo');

  return(
    <div className={s.container__wrapper__list__item__info}>
      <div 
        className={s.container__wrapper__list__item__info__title}
        onClick={isMobile ? () => setIsOpen(!isOpen) : undefined}
        onKeyPress={isMobile ? () => setIsOpen(!isOpen) : undefined}
        role="presentation"
      >
        <h3>{isIntro ? t('intro') : selectedLang(i18n, item.title.en, item.title.fr)}</h3>
        <span>{item.duration}{" "}{isMobile && (isOpen ? <FiChevronUp /> : <FiChevronDown />)}</span>
      </div>
      {isMobile && isOpen && (
        <div className={s.container__preview__info__img}>
          <CoverMedia 
            imgHigh={item.img.high}
            imgLow={item.img.low}
            video={isIntro ? item.url : selectedLang(i18n, item.url.en, item.url.fr)}
            alt={isIntro ? t('intro') : selectedLang(i18n, item.title.en, item.title.fr)}
          />
          <div className={s.container__preview__info__text}>
            <h5>{`"${selectedLang(i18n, item.quote.en, item.quote.fr)}"`}</h5>
            <p>{selectedLang(i18n, item.legend.en, item.legend.fr)}</p>
          </div>
        </div>
      )}
    </div>
  )
}

Item.defaultProps = {
  isIntro: false,
  index: undefined
}

Item.propTypes = {
  s: PropTypes.any.isRequired,
  item: PropTypes.any.isRequired,
  isMobile: PropTypes.bool.isRequired,
  isIntro: PropTypes.bool,
  index: PropTypes.any
};
  

export default Item;