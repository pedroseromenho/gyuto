import React from 'react';
import PropTypes from 'prop-types';
import s from './style.module.scss';

const Button = ({handleClick, value}) => (
  <button
    onClick={handleClick}
    onKeyPress={handleClick}
    role='presentation'
    className={s.container}
  >
    {value}
  </button>
)

Button.propTypes = {
  handleClick: PropTypes.func,
  value: PropTypes.any.isRequired,
};

Button.defaultProps = {
  handleClick: undefined,
};


export default Button;