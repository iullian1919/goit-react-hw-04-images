import React, { useState } from 'react';
import classes from './SearchBar.module.css';
import PropTypes from 'prop-types';

const SearchBar = ({ onSubmit }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(searchQuery);
  };

  return (
    <header className={classes.searchbar}>
      <form className={classes.searchForm} onSubmit={handleSubmit}>
        <button type="submit" className={classes.searchFormButton}>
          <span className={classes.searchFormButtonLabel}>Search</span>
        </button>
        <input
          className={classes.searchFormInput}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
        />
      </form>
    </header>
  );
};

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SearchBar;
