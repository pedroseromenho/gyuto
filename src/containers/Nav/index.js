import React from 'react';
import {withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';
import ListItem from '../../components/ListItem';
import { useTranslation } from 'react-i18next';
import { FaFacebook } from "react-icons/fa";
import s from './style.module.scss';

const Nav = ({ 
  history, 
  isFooter, 
  isMobile, 
  isSocialMobile, 
  closeMenu
}) => {
  const { t } = useTranslation('common');

  const social = (
    <ListItem 
      value={<FaFacebook />}
      handleClick={undefined}
    />
  );

  const displayPage = (page) => {
    history.push(page);
    if(isMobile){
      closeMenu();
    }
  }

  if(isSocialMobile){
    return(
      <ul>
        {social}
      </ul>
    )
  }
  return(
    <nav 
      className={s.container}
    >
      <ul>
        {!isFooter && (
          <>
            <ListItem
              value={t('info')}
              handleClick={() => displayPage('/info')}
            />
            <ListItem
              value={t('music')}
              handleClick={() => displayPage('/music')}
            />
            <ListItem
              value={t('images')}
              handleClick={() => displayPage('/images')}
            />
          </>
        )}
        {(isFooter || isMobile) && (
          <>
            <ListItem 
              value={t('docList')}
              handleClick={() => displayPage('/doclist')}
            />
            <ListItem 
              value={t('credits')}
              handleClick={() => displayPage('/credits')}
            />
          </>
        )}
        {isFooter && (
          social
        )}
      </ul>
    </nav>
  )}

Nav.defaultProps = {
  isFooter: false,
  isMobile: false,
  isSocialMobile: false,
  closeMenu: undefined,
} 

Nav.propTypes = {
  history: PropTypes.any.isRequired,
  isFooter: PropTypes.bool,
  isMobile: PropTypes.bool,
  isSocialMobile: PropTypes.bool,
  closeMenu: PropTypes.any,
};

export default withRouter(Nav);