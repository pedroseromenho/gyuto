/* eslint-disable no-nested-ternary */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import s from './style.module.scss';

const ScrollNav = ({ sections, changeSection, currentSection }) => {
  useEffect(() => {
    const container = document.querySelector('.navfeed');
    const item = document.querySelector('.navfeed__active');
    const containerWidth = container.clientWidth;
    const { scrollWidth } = container;
    if (item) {
      const itemInfo = item.getBoundingClientRect();
      if (itemInfo.x + itemInfo.width > (containerWidth - 20)) {
        if (container.scrollLeft === 0) {
          container.scrollLeft = containerWidth - itemInfo.width - 10;
        } else {
          container.scrollLeft = scrollWidth - itemInfo.width - 10;
        }
      } else if (itemInfo.x < 0) {
        container.scrollLeft = container.scrollLeft - itemInfo.width - 20;
        if (container.firstChild === item) {
          container.scrollLeft = 0;
        }
      }
    }
  }, [currentSection]);

  function activeItem(section) {
    if (currentSection === section) {
      return classNames(s.container__nav__activeItem, 'navfeed__active');
    } return null;
  }

  return (
    <div className={s.container}>
      <ul className={classNames(s.container__nav, 'navfeed')}>
        {sections.map((c) => (
          <li
            key={c.section}
            onClick={() => changeSection(c.section)}
            onKeyPress={() => changeSection(c.section)}
            className={classNames(
              s.container__nav__item, 
              activeItem(c.section))}
            role="presentation"
          >
            {c.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

ScrollNav.propTypes = {
  sections: PropTypes.any.isRequired,
  changeSection: PropTypes.func.isRequired,
  currentSection: PropTypes.string.isRequired,
};

export default ScrollNav;
