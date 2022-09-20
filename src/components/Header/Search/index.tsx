import React, { FC, useEffect, useState } from 'react';
import { useAppDispatch } from '../../../redux/hooks';
import { setSearchValue } from '../../../redux/filter/filterSlice';
import styles from './Search.module.scss';

export const Search: FC = () => {
  const dispatch = useAppDispatch();
  const [value, setValue] = useState<string>('');

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value.toLocaleLowerCase());
  };

  const updateSearchValue = () => {
    dispatch(setSearchValue(value));
  };

  const handleOnEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      dispatch(setSearchValue(value));
    }
  };

  useEffect(() => {
    if (value === '') {
      dispatch(setSearchValue(''));
    }
  }, [value]);

  return (
    <div className={styles.search}>
      <div className={styles.searchContainer}>
        <div className={styles.searchInput}>
          <input 
            type="text" 
            value={value}
            onChange={onInputChange}
            onKeyDown={handleOnEnter}
            placeholder="Я ищу..." 
          />
        </div>
        <div 
          className={styles.searchIcon}
          onClick={updateSearchValue}
        >
          <i className="fa-solid fa-magnifying-glass"></i>
        </div>
      </div>
    </div>
  );
};
