import React from 'react';
import { Filters, Sorting, ProductList } from '../../components';
import styles from './Home.module.scss';

export const Home = () => {

  return (
    <div className={styles.homeContainer}>
      <div className={styles.filtersColumn}>
        <Filters />
      </div>
      <div className={styles.productsColumn}>
        <Sorting />
        <ProductList />
      </div>
    </div>
  );
};
