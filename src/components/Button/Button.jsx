import React from 'react';
import classes from './Button.module.css';
import PropTypes from 'prop-types';

const Button = ({ onClick, disabled }) => {
  return (
    <button className={classes.button} onClick={onClick} disabled={disabled}>
      Load more
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.oneOfType([PropTypes.func, PropTypes.oneOf([null])])
    .isRequired,
  disabled: PropTypes.bool.isRequired,
};

export default Button;
