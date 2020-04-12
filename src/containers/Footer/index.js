import React from 'react';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom';
import classNames from 'classnames';
import Lang from '../Lang';
import Media from 'react-media';
import Nav from '../Nav';
import s from './style.module.scss';

const Footer = ({location}) => {
  return(
    <Media queries={{
      small: "(max-width: 719px)"
    }}>
      {matches => (
        <div 
          className={classNames(
            s.container,
            location.pathname !== '/' ? s.container__background : undefined
          )}
        >
          <Lang />
          {matches.small ? null : <Nav isFooter />}
          {matches.small && <Nav isSocialMobile />}
        </div>
      )}
    </Media>
  )}

Footer.propTypes = {
  location: PropTypes.any.isRequired,
};

export default withRouter(Footer);