import React, { useEffect } from 'react';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import classes from './ImageGallery.module.css';
import PropTypes from 'prop-types';

const ImageGallery = ({ images }) => {
  useEffect(() => {
    const uniqueIds = new Set(images.map(img => img.id));
    console.log('Numărul total de imagini:', images.length);
    console.log('Numărul unic de id-uri:', uniqueIds.size);

    if (images.length !== uniqueIds.size) {
      console.warn('Există id-uri duplicate în array-ul de imagini!');
    }
  }, [images]);

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
