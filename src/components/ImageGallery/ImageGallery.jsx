import React from 'react';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import classes from './ImageGallery.module.css';
import PropTypes from 'prop-types';

const ImageGallery = ({ images }) => {
  return (
    <ul className={classes.imageGallery}>
      {images.map(image => (
        <ImageGalleryItem key={image.id} image={image} />
      ))}
    </ul>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default ImageGallery;
