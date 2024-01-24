import React from 'react';
import { BackDrop } from 'components/Backdrop/Backdrop';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import styles from './Modal.module.css';

const Modal = ({ closeModal, src }) => {
  const handleClose = () => {
    closeModal('');
  };

  const handleClick = ev => {
    if (ev.target === ev.currentTarget) {
      handleClose();
    }
  };

  return (
    <BackDrop onClick={handleClick}>
      <div className={styles.modal}>
        <img className={styles.modalImage} src={src} alt="modalImg" />
        <button className={styles.closeButton} onClick={handleClose}>
          <FontAwesomeIcon icon={faTimes} />
        </button>
      </div>
    </BackDrop>
  );
};

export default Modal;
