import React, {useState} from 'react';
import {withRouter} from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import Media from 'react-media';
import Nav from '../Nav';
import { FiMenu, FiX } from "react-icons/fi";
import { routes } from "../../utils/routes";
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
          <h2>
            {routes(t)
              .filter(i => i.pathname === location.pathname)
              .map(i => i.name)}
          </h2>
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
            {(openMenu && matches.small && (
              <Nav closeMenu={() => setOpenMenu(false)}/>
            ))}
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