import React, {useState} from 'react';
import {withRouter} from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import Media from 'react-media';
import Nav from '../Nav';
import { FiMenu, FiX } from "react-icons/fi";
import s from './style.module.scss';

const Header = ({ history, location }) => {
  const { t } = useTranslation('common');
  const [openMenu, setOpenMenu] = useState(false);

  const MenuBurger = () => {
    if(!openMenu){
      return (
        <FiMenu
          onClick={() => setOpenMenu(!openMenu)}
          onKeyPress={() => setOpenMenu(!openMenu)}
          role='presentation'
        />
      )
    } return (
      <FiX
        onClick={() => setOpenMenu(!openMenu)}
        onKeyPress={() => setOpenMenu(!openMenu)}
        role='presentation'
      />
    )
  }

  const getPageTitle = () => {
    switch(location.pathname){
    case '/info':
      return t('info');
    case '/music':
      return t('music');
    case '/images':
      return t('images');
    case '/doclist':
      return t('docList');
    case '/credits':
      return t('credits');
    default:
      return null;
    }
  }

  return(
    <div 
      className={classNames(
        s.container,
        location.pathname !== '/' ? s.container__background : undefined
      )}
    >
      <div className={s.container__wrapper}>
        <h1
          onClick={() => history.push('/')}
          onKeyPress={() => history.push('/')}
          role="presentation"
          className="hoverable"
        >
          {t('title')}
        </h1>
        {location.pathname !== '/' && (
          <h2>{getPageTitle()}</h2>
        )}
      </div>
      <Media queries={{
        small: "(max-width: 719px)"
      }}>
        {matches => (
          <>
            {matches.small 
              ? (
                <MenuBurger/>
              )
              : <Nav />}
            {openMenu && matches.small && (
              <Nav isMobile closeMenu={() => setOpenMenu(false)}/>
            )}
          </>
        )}
      </Media>
    </div>
  )}

Header.propTypes = {
  history: PropTypes.any.isRequired,
  location: PropTypes.any.isRequired,
};


export default withRouter(Header);