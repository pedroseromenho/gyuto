import React from 'react';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom';
import classNames from 'classnames';
import Lang from '../Lang';
import Media from 'react-media';
import { useTranslation } from 'react-i18next';
import ListItem from '../../components/ListItem';
import { FaFacebook } from "react-icons/fa";
import { routes } from "../../utils/routes";
import s from './style.module.scss';

const Footer = ({location, history}) => {
  const { t } = useTranslation('common');
  return(
    <Media queries={{
      small: "(max-width: 719px)"
    }}>
      {matches => (
        <div 
          className={classNames(
            s.container,
            location.pathname !== '/' 
              ? s.container__background 
              : undefined
          )}
        >
          <Lang />
          <ul className={s.container__list}>
            {!matches.small && routes(t).map(((r) => 
              r.isFooter && (
                <ListItem
                  value={r.name}
                  handleClick={() => history.push(r.pathname)}
                  key={r.name}
                />
              )))}
            <ListItem 
              value={<FaFacebook />}
              handleClick={undefined}
            /> 
          </ul>
        </div>
      )}
    </Media>
  )}

Footer.propTypes = {
  location: PropTypes.any.isRequired,
  history: PropTypes.any.isRequired,
};

export default withRouter(Footer);