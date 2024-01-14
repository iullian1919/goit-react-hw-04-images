import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import ImageGallery from './ImageGallery';
import Button from './Button';
import Loader from './Loader';
import Modal from './Modal';
import classes from './App.module.css';

const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    if (!searchQuery) return;

    const fetchImages = async () => {
      try {
        setIsLoading(true);

        const response = await fetch(
          `https://pixabay.com/api/?q=${searchQuery}&page=${page}&key=41689028-c746e1e6e71d95932f933e2cb&image_type=photo&orientation=horizontal&per_page=12`
        );

        if (!response.ok) {
          throw new Error('Failed to fetch images');
        }

        const data = await response.json();
        setImages(prevImages => [...prevImages, ...data.hits]);
        setPage(prevPage => prevPage + 1);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchImages();
  }, [searchQuery, page]);

  const handleSearchSubmit = query => {
    setSearchQuery(query);
    setImages([]);
    setPage(1);
  };

  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className={classes.App}>
      <SearchBar onSubmit={handleSearchSubmit} />
      <ImageGallery images={images} />
      {isLoading && <Loader />}
      {images.length > 0 && (
        <Button onClick={handleLoadMore} disabled={isLoading} />
      )}
      <Modal
        isOpen={selectedImage !== null}
        onClose={handleCloseModal}
        imageUrl={selectedImage}
      />
    </div>
  );
};

export default App;
