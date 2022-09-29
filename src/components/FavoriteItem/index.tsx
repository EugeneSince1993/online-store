import { FC } from "react";
import NumberFormat from "react-number-format";
import { useAppDispatch } from "../../redux/hooks";
import { NavLink } from "react-router-dom";
import classNames from 'classnames';
import styles from './FavoriteItem.module.scss';
import { removeFavoriteItem } from "../../redux/favorites/favoriteSlice";

interface IFavoriteItemProps {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
};

export const FavoriteItem: FC<IFavoriteItemProps> = ({
  id,
  name,
  price,
  imageUrl
}) => {
  const dispatch = useAppDispatch();

  const onClickRemove = () => {
    if (window.confirm('Вы действительно хотите удалить товар?')) {
      dispatch(removeFavoriteItem(id));
    }
  };

  return (
    <div className={styles.productItem}>
      <div className={styles.thumbnail}>
        <img src={imageUrl} />
      </div>
      <div className={styles.dataContainer}>
        <div className={styles.productInfo}>
          <NavLink to={`/products/${id}`} className={styles.productName}>
            {name}
          </NavLink>
        </div>
        <div className={styles.price}>
          <div className={styles.priceValue}>
            <NumberFormat 
              value={price} 
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
