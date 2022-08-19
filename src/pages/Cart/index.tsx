import { NavLink } from 'react-router-dom';
import NumberFormat from 'react-number-format';
import classNames from 'classnames';
import styles from './Cart.module.scss';
import ipad from '../../assets/img/ipad.jpg';
import { Button } from '../../components';

export const Cart = () => {
  const productCode = 1092452;
  const priceValue = 60000;
  const totalValue = 100000;

  return (
    <div>
      <h1>Корзина</h1>
      <div className={styles.cartContainer}>
        <div className={styles.productList}>
          <div className={styles.productItem}>
            <div className={styles.thumbnail}>
              <img src={ipad} />
            </div>
            <div className={styles.dataContainer}>
              <div className={styles.productInfo}>
                <NavLink to="/" className={styles.productName}>
                  6.6" Смартфон POCO M4 Pro 5G 64 ГБ голубой
                </NavLink>
                <div className={styles.productCode}>
                  Код товара: {productCode}
                </div>
              </div>
              <div className={styles.quantityContainer}>
                <div className={styles.quantity}>
                  <i className="fa-solid fa-minus"></i>
                  <input type="text" defaultValue="1" />
                  <i className="fa-solid fa-plus"></i>
                </div>
              </div>
              <div className={styles.price}>
                <div className={styles.priceValue}>
                  <NumberFormat 
                    value={priceValue} 
                    displayType='text' 
                    thousandSeparator=' '
                  />
                </div>
                <div className={styles.currency}>₽</div>
              </div>
              <div className={classNames(styles.deleteProduct, "tooltip", styles.tooltip)}>
                <i className="fa-solid fa-trash"></i>
                <div className={classNames("tooltipText", styles.tooltipText)}>
                  Удалить
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.summary}>
          <div className={styles.summaryContainer}>
            <h3>Итого</h3>
            <div className={styles.summaryBlocks}>
              <div className={styles.productQuantity}>
                <div className={styles.quantityKey}>Количество товаров</div>
                <div className={styles.quantityValue}>5</div>
              </div>
              <div className={styles.total}>
                <div className={styles.totalKey}>Сумма</div>
                <div className={classNames(styles.price, styles.totalValue)}>
                  <div className={styles.priceValue}>
                    <NumberFormat 
                      value={totalValue} 
                      displayType='text' 
                      thousandSeparator=' '
                    />
                  </div>
                  <div className={styles.currency}>₽</div>
                </div>        
              </div>
            </div>
          </div>
          <Button display="block" variant="solid">
            Оформить заказ
          </Button>
          <Button display="block" variant="outlined">
            Очистить корзину
          </Button>
        </div>
      </div>
    </div>
  );
};
