import classNames from 'classnames';
import { NavLink } from 'react-router-dom';
import NumberFormat from 'react-number-format';
import styles from './ProductItem.module.scss';

interface Props {
  phoneImage: string;
  rating: number;
  testimonials: number;
  productName: string;
  priceValue: number;
  productId: number;
}

export const ProductItem = ({ 
  phoneImage, rating, testimonials, productName, priceValue, productId 
}: Props) => {

  return (
    <div className={styles.productItem}>
      <div className={styles.productItemInner}>
        <NavLink to={`/devices/${productId}`} className={styles.image}>
          <img src={phoneImage} />
        </NavLink>
        <div className={styles.icons}>
          <div className={classNames(styles.rating, "tooltip", styles.tooltip)}>
            <i className="fa-solid fa-star"></i>
            <span>{rating}</span>
            <div className={classNames("tooltipText", styles.tooltipText)}>
              Рейтинг {rating} из 5
            </div>
          </div>
          <div className={classNames(styles.testimonials, "tooltip", styles.tooltip)}>
            <i className="fa-solid fa-comment"></i>
            <span>{testimonials}</span>
            <div className={classNames("tooltipText", styles.tooltipText)}>
              {testimonials} отзывов
            </div>
          </div>
          <div className={classNames(styles.favorites, "tooltip", styles.tooltip)}>
            <i className="fa-solid fa-heart"></i>
            <div className={classNames("tooltipText", styles.tooltipText)}>
              Добавить в избранное
            </div>
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
              <button className="tooltip">
                <span className={
                  classNames("material-symbols-outlined", styles.cartIcon)
                }>
                  shopping_cart
                </span>
                <div className="tooltipText">Добавить в корзину</div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};