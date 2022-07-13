import React from 'react';
import classNames from 'classnames';
import { NavLink } from 'react-router-dom';
import NumberFormat from 'react-number-format';
import styles from './ProductItem.module.scss';

export const ProductItem = ({ 
  phoneImage, rating, testimonials, productName, priceValue, productId }) => {

  return (
    <div className={styles.productItem}>
      <div className={styles.productItemInner}>
        <NavLink to={`/devices/${productId}`} className={styles.image}>
          <img src={phoneImage} />
        </NavLink>
        <div className={styles.icons}>
          <div className={classNames(styles.rating, styles.tooltip)}>
            <i className="fa-solid fa-star"></i>
            <span>{rating}</span>
            <div className={styles.tooltipText}>Рейтинг {rating} из 5</div>
          </div>
          <div className={classNames(styles.testimonials, styles.tooltip)}>
            <i className="fa-solid fa-comment"></i>
            <span>{testimonials}</span>
            <div className={styles.tooltipText}>{testimonials} отзывов</div>
          </div>
          <div className={classNames(styles.favorites, styles.tooltip)}>
            <i className="fa-solid fa-heart"></i>
            <div className={styles.tooltipText}>Добавить в избранное</div>
          </div>
        </div>
        <NavLink to={`/devices/${productId}`} className={styles.productLink}>
          {productName}
        </NavLink>
        <div className={styles.buyContainer}>
          <div className={styles.buy}>
            <NavLink to={`/devices/${productId}`} className={styles.price}>
              <div className={styles.priceValue}>
                <NumberFormat 
                  value={priceValue} 
                  displayType='text' 
                  thousandSeparator=' '
                />
              </div>
              <div className={styles.currency}>₽</div>
            </NavLink>
            <div className={styles.addToCart}>
              <button className={styles.tooltip}>
                <i className="fa-solid fa-cart-shopping"></i>
                <div className={styles.tooltipText}>Добавить в корзину</div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
