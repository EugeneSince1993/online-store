import { FC, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import classNames from 'classnames';
import { NavLink, useLocation } from 'react-router-dom';
import { Search } from './Search';
import { selectCart } from '../../redux/cart/selectors';
import { selectFavorites } from '../../redux/favorites/selectors';
import styles from './Header.module.scss';
import onlineStoreLogo from '../../assets/img/online-store-logo-min.png';

export const Header: FC = () => {
  const { items: cartItems } = useSelector(selectCart);
  const { items: favoriteItems } = useSelector(selectFavorites);
  const location = useLocation();
  const isMounted = useRef(false);

  const cartTotal = cartItems.reduce((sum: number, item: any) => sum + item.count, 0);
  const favoritesTotal = favoriteItems.reduce((sum: number, item: any) => sum + item.count, 0);

  useEffect(() => {
    if (isMounted.current) {
      const json = JSON.stringify(cartItems);
      localStorage.setItem('cart', json);
    }
  }, [cartItems]);

  useEffect(() => {
    if (isMounted.current) {
      const json = JSON.stringify(favoriteItems);
      localStorage.setItem('favorites', json);
    }
  }, [favoriteItems]);

  return (
    <header className={classNames(styles.header, 'bgLightGray')}>
      <div className={styles.logo}>
        <NavLink to="/">
          <img src={onlineStoreLogo} alt="online store" />
        </NavLink>
      </div>
      {(location.pathname !== '/cart' && location.pathname !== '/favorites') && (
        <div className={styles.search}>
          <Search />
        </div>
      )}
      <div className={styles.nav}>
        <nav>
          <ul>
            <li>
              <NavLink to="/cart">
                <div className={classNames(styles.linkInner, styles.cartLink)}>
                  <div className={styles.linkInnerText}>Корзина</div>
                  {cartTotal > 0 && (
                    <div className={styles.totalCount}>
                      <div>{cartTotal}</div>
                    </div>
                  )}
                </div>
              </NavLink>
            </li>
            <li>
              <NavLink to="/favorites">
                <div className={classNames(styles.linkInner, styles.favoritesLink)}>
                  <div className={styles.linkInnerText}>Избранное</div>
                  {favoritesTotal > 0 && (
                    <div className={styles.totalCount}>
                      <div>{favoritesTotal}</div>
                    </div>
                  )}
                </div>
              </NavLink>
            </li>
            <li style={{display: "none"}}>
              <a href="#">Войти</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
