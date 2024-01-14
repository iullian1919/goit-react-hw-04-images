import React from 'react';
import classes from './ImageGalleryItem.module.css';
import PropTypes from 'prop-types';

const ImageGalleryItem = ({ image }) => {
  return (
    <li className={classes.imageGalleryItem}>
      <img
        className={classes.imageGalleryItemImage}
        src={image.webformatURL}
        alt=""
      />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  image: PropTypes.shape({
    webformatURL: PropTypes.string.isRequired,
  }).isRequired,
};

export default ImageGalleryItem;
