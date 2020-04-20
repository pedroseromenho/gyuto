import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import s from './style.module.scss';

const Button = ({handleClick, value, className}) => (
  <button
    onClick={handleClick}
    onKeyPress={handleClick}
    role='presentation'
    className={classNames(s.container, className)}
  >
    {value}
  </button>
)

Button.propTypes = {
  handleClick: PropTypes.func,
  value: PropTypes.any.isRequired,
  className: PropTypes.any,
};

Button.defaultProps = {
  handleClick: undefined,
  className: undefined
};


export default Button;