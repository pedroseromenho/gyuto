import React, { useState } from 'react';
import {withRouter} from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import Media from 'react-media';
import { routes } from "utils/routes";
import { navLeave } from 'animations/menuMobile';
import { TweenMax } from 'gsap';

import Nav from 'containers/Nav';
import Burger from 'components/Burger';

import s from './style.module.scss';

const Header = ({ history, location }) => {
  const { t } = useTranslation('translation');
  const [openMenu, setOpenMenu] = useState(false);

  const filteredRoutes = routes(t).filter(r => r.pathname !== '/');
  const matchRoute = filteredRoutes.filter(f => f.pathname === location.pathname);

  const handleOpenMenu = () => {
    const nav = document.querySelector('.tweenMax-navMobile');
    if(openMenu){
      navLeave(nav);
      TweenMax.delayedCall(0.2, () => setOpenMenu(false));
    }else{
      setOpenMenu(true)
    }
  }

  const homePageButton = (mobile) => {
    const nav = document.querySelector('.tweenMax-navMobile');
    history.push('/');
    if(mobile && openMenu){
      navLeave(nav);
      TweenMax.delayedCall(0.2, () => setOpenMenu(false));
    }
  }

  return(
    <Media queries={{
      small: "(max-width: 839px)"
    }}>
      {matches => (
        <div className={s.container}>
          <div className={s.container__wrapper}>
            <h1
              onClick={() => homePageButton(matches.small)}
              onKeyPress={() => homePageButton(matches.small)}
              role="presentation"
              className="hoverable"
            >
              {t('title')}
            </h1>
            {matchRoute.length > 0 && (
              <h2>
                {routes(t)
                  .filter(i => i.pathname === location.pathname)
                  .filter(i => matches.small ? i.displayMobile : i.displayDesktop)
                  .map(i => i.name)}
              </h2>
            )}
          </div>
          {matches.small 
            ? (
              <Burger 
                isOpen={openMenu}
                toggle={() => handleOpenMenu()}
              />
            )
            : <Nav />}
          {(openMenu && matches.small && (
            <Nav closeMenu={() => setOpenMenu(false)} openMenu={openMenu}/>
          ))}
        </div>
      )}
    </Media>
  )}

Header.propTypes = {
  history: PropTypes.any.isRequired,
  location: PropTypes.any.isRequired,
};


export default withRouter(Header);