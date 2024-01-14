import React from 'react';
import classes from './Modal.module.css';
import PropTypes from 'prop-types';

const Modal = ({ isOpen, onClose, largeImageURL }) => {
  return (
    isOpen && (
      <div className={classes.overlay} onClick={onClose}>
        <div className={classes.modal}>
          <img src={largeImageURL} alt="Large" />
        </div>
      </div>
    )
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  largeImageURL: PropTypes.arrayOf(PropTypes.shape({})),
};

export default Modal;
