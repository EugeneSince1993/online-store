import { FC, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import classNames from 'classnames';
import { NavLink, useLocation } from 'react-router-dom';
import { Search } from './Search';
import { selectCart } from '../../redux/cart/selectors';
import styles from './Header.module.scss';

export const Header: FC = () => {
  const { items } = useSelector(selectCart);
  const location = useLocation();
  const isMounted = useRef(false);

  const totalCount = items.reduce((sum: number, item: any) => sum + item.count, 0);

  useEffect(() => {
    if (isMounted.current) {
      const json = JSON.stringify(items);
      localStorage.setItem('cart', json);
    }
  }, [items]);

  return (
    <header className={classNames(styles.header, 'container', 'bgLightGray')}>
      <div className={styles.logo}>
        <NavLink to="/">Online store</NavLink>
      </div>
      {location.pathname !== '/cart' && (
        <div className={styles.search}>
          <Search />
        </div>
      )}
      <div className={styles.nav}>
        <nav>
          <ul>
            <li>
              <NavLink to="/cart">
                <div className={styles.cartLink}>
                  <div className={styles.cartText}>Корзина</div>
                  {totalCount > 0 && (
                    <div className={styles.totalCount}>
                      <div>{totalCount}</div>
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
