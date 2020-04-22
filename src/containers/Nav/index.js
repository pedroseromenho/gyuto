import React, { useEffect } from 'react';
import {withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';
import Media from 'react-media';
import { useTranslation } from 'react-i18next';
import { routes } from "utils/routes";
import classNames from 'classnames';
import { navEnter } from 'animations/menuMobile';

import ListItem from 'components/ListItem';
import Footer from 'containers/Footer';

import s from './style.module.scss';

const Nav = ({ 
  history, 
  closeMenu,
  openMenu
}) => {
  const { t } = useTranslation('translation');

  const displayPage = (page) => {
    history.push(page);
    closeMenu();
  }

  useEffect(() => {
    const nav = document.querySelector('.tweenMax-navMobile');
    if(openMenu){
      navEnter(nav);
    }
  }, [openMenu])

  return(
    <Media queries={{
      small: "(max-width: 719px)"
    }}>
      {matches => (
        <nav className={classNames(
          s.container,
          matches.small ? 'tweenMax-navMobile' : undefined)}>
          <ul>
            {routes(t).map((r) => 
              matches.small ? (
                <ListItem
                  value={r.name}
                  handleClick={() => displayPage(r.pathname)}
                  key={r.name}
                />
              ) : !r.isFooter && (
                <ListItem
                  value={r.name}
                  handleClick={() => history.push(r.pathname)}
                  key={r.name}
                />
              ))}
            {matches.small && (
              <div className={s.container__footerMobile}>
                <Footer />
              </div>
            )}
          </ul>
        </nav>
      )}
    </Media>
  )}

Nav.defaultProps = {
  closeMenu: undefined,
  openMenu: false
} 

Nav.propTypes = {
  history: PropTypes.any.isRequired,
  closeMenu: PropTypes.any,
  openMenu: PropTypes.bool,
};

export default withRouter(Nav);