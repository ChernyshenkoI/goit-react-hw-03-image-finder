import React from 'react';
import styles from './searchbar.module.css';
import PropTypes from 'prop-types';

export const SearchBar = ({ onSubmit }) => {
  return (
    <header className={styles.searchbar}>
      <form className={styles.searchForm} onSubmit={onSubmit}>
        <button type="submit" className={styles.searchFormBtn}>
          <span className={styles.searchFormBtnLabel}>Search</span>
        </button>

        <input
          className={styles.searchFormInput}
          name="input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};

SearchBar.propTypes = {
  onSubmit: PropTypes.func,
};