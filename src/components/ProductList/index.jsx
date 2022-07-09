import React from 'react';
import styles from './ProductList.module.scss';
import iphone12Red from '../../assets/iphone-12-red.jpg';

export const ProductList = () => {

  return (
    <div className={styles.productList}>
      <div className={styles.productItem}>
        <div className={styles.productItemInner}>
          <div className={styles.image}>
            <img src={iphone12Red} />
          </div>
          <div className={styles.icons}>
            <div className={styles.rating}>
              <i class="fa-solid fa-star"></i>
              <span>5.0</span>
            </div>
            <div className={styles.testimonials}>
              <i class="fa-solid fa-comment"></i>
              <span>6</span>
            </div>
            <div className={styles.favorites}>
              <i class="fa-solid fa-heart"></i>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.productItem}>
        <div className={styles.productItemInner}>

        </div>
      </div>
      <div className={styles.productItem}>
        <div className={styles.productItemInner}>
          
        </div>
      </div>
      <div className={styles.productItem}>
        <div className={styles.productItemInner}>
          
        </div>
      </div>
      <div className={styles.productItem}>
        <div className={styles.productItemInner}>
          
        </div>
      </div>
      <div className={styles.productItem}>
        <div className={styles.productItemInner}>
          
        </div>
      </div>
    </div>
  );
};
