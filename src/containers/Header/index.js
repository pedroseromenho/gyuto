import React, {useState} from 'react';
import {withRouter} from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import Media from 'react-media';
import { routes } from "utils/routes";

import Nav from 'containers/Nav';
import Burger from 'components/Burger';

import s from './style.module.scss';

const Header = ({ history, location }) => {
  const { t } = useTranslation('translation');
  const [openMenu, setOpenMenu] = useState(false);

  const filteredRoutes = routes(t).filter(r => r.pathname !== '/');
  const matchRoute = filteredRoutes.filter(f => f.pathname === location.pathname)

  return(
    <div className={s.container}>
      <div className={s.container__wrapper}>
        <h1
          onClick={() => history.push('/')}
          onKeyPress={() => history.push('/')}
          role="presentation"
          className="hoverable"
        >
          {t('title')}
        </h1>
        {matchRoute.length > 0 && (
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
                <Burger 
                  isOpen={openMenu}
                  toggle={() => setOpenMenu(!openMenu)}
                />
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