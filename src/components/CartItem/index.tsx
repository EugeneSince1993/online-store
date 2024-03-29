import { FC } from "react";
import NumberFormat from "react-number-format";
import { useAppDispatch } from "../../redux/hooks";
import { NavLink } from "react-router-dom";
import classNames from 'classnames';
import { addItem, subtractItem, removeItem } from "../../redux/cart/cartSlice";
import { CartItem as CartItemType } from "../../redux/cart/types";
import styles from './CartItem.module.scss';

interface CartItemProps {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  count: number;
  productCode: number;
};

export const CartItem: FC<CartItemProps> = ({
  id,
  name,
  price,
  imageUrl,
  count,
  productCode
}) => {
  const dispatch = useAppDispatch();

  const onClickAdd = () => {
    dispatch(addItem({
      id,
    } as CartItemType));
  };

  const onClickSubtract = () => {
    dispatch(subtractItem(id));
  };

  const onClickRemove = () => {
    if (window.confirm('Вы действительно хотите удалить товар?')) {
      dispatch(removeItem(id));
    }
  };

  return (
    <div className={styles.productItem}>
      <NavLink to={`/products/${id}`} className={styles.thumbnail}>
        <img src={imageUrl} />
      </NavLink>
      <div className={styles.dataContainer}>
        <div className={styles.productInfo}>
          <NavLink to={`/products/${id}`} className={styles.productName}>
            {name}
          </NavLink>
          <div className={styles.productCode}>
            Код товара: {productCode}
          </div>
        </div>
        <div className={styles.quantityContainer}>
          <div className={styles.quantity}>
            <button
              disabled={count === 1}
              onClick={onClickSubtract}
            >
              <i className="fa-solid fa-minus"></i>
            </button>
            <div>{count}</div>
            <button onClick={onClickAdd}>
              <i className="fa-solid fa-plus"></i>
            </button>
          </div>
        </div>
        <div className={styles.price}>
          <div className={styles.priceValue}>
            <NumberFormat 
              value={price * count} 
              displayType='text' 
              thousandSeparator=' '
            />
          </div>
          <div className={styles.currency}>₽</div>
        </div>
        <div className={classNames(styles.deleteProduct, "tooltip", styles.tooltip)}>
          <div onClick={onClickRemove}>
            <i className="fa-solid fa-trash"></i>
            <div className={classNames("tooltipText", styles.tooltipText)}>
              Удалить
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
