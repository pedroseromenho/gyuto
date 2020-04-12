import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const ListItem = ({handleClick, handleOver, handleOut, value, className }) => (
  <li
    onClick={handleClick}
    onKeyPress={handleClick}
    onMouseOver={handleOver}
    onFocus={handleOver}
    onMouseOut={handleOut}
    onBlur={handleOut}
    role='presentation'
    className={classNames(className, "hoverable")}
  >
    {value}
  </li>
)

ListItem.propTypes = {
  handleClick: PropTypes.func,
  handleOver: PropTypes.func,
  handleOut: PropTypes.func,
  value: PropTypes.any.isRequired,
  className: PropTypes.any,
};

ListItem.defaultProps = {
  handleClick: undefined,
  handleOver: undefined,
  handleOut: undefined,
  className: undefined,
};


export default ListItem;