import React from 'react';
import styles from './Sorting.module.scss';

export const Sorting = () => {

  return (
    <div className={styles.sorting}>
      <div className={styles.popular}>по популярности</div>
      <div className={styles.price}>
        <span>по цене</span>
        <i className="fa-solid fa-arrow-down-short-wide"></i>
      </div>
      <div className={styles.rating}>по рейтингу</div>
    </div>
  );
};
