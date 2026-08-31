import React from 'react'
import styles from "./SearchBar.module.css";
import { SearchIcon } from 'lucide-react';

const SearchBar = () => {
  return (
    <div className={styles['search-bar']}>
            <span>Search</span>
            <div className={styles['search-bar-container']}>
                <div className={styles['search-bar-wrapper']}>
                <input type='text' placeholder='Dr Stone Pharmacy, 123 High Street, Boston,'/>
                <SearchIcon/>
            </div>
            </div>
    </div>
  )
}

export default SearchBar