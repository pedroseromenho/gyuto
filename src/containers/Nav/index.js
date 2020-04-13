import React from 'react';
import {withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';
import Media from 'react-media';
import ListItem from '../../components/ListItem';
import { useTranslation } from 'react-i18next';
import { routes } from "../../utils/routes";
import s from './style.module.scss';

const Nav = ({ 
  history, 
  closeMenu,
}) => {
  const { t } = useTranslation('common');

  const displayPage = (page) => {
    history.push(page);
    closeMenu();
  }

  return(
    <nav className={s.container}>
      <Media queries={{
        small: "(max-width: 719px)"
      }}>
        {matches => (
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
          </ul>
        )}
      </Media>
    </nav>
  )}

Nav.defaultProps = {
  closeMenu: undefined,
} 

Nav.propTypes = {
  history: PropTypes.any.isRequired,
  closeMenu: PropTypes.any,
};

export default withRouter(Nav);