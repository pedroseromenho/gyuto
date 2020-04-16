import React from 'react';
import PropTypes from 'prop-types';
import { FiX, FiMenu } from 'react-icons/fi';

const Burger = ({isOpen, toggle}) => {
  if(isOpen){
    return (
      <FiX
        onClick={toggle}
        onKeyPress={toggle}
        role='presentation'
      />
    )
  } return (
    <FiMenu
      onClick={toggle}
      onKeyPress={toggle}
      role='presentation'
    />
  )
}

Burger.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
};
  

export default Burger;

