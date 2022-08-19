import classNames from 'classnames';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.scss';
import { Search } from './Search';

export const Header = () => {
  
  return (
    <header className={classNames(styles.header, 'container', 'bgLightGray')}>
      <div className={styles.logo}>
        <NavLink to="/">Online store</NavLink>
      </div>
      <div className={styles.search}>
        <Search />
      </div>
      <div className={styles.nav}>
        <nav>
          <ul>
            <li>
              <NavLink to="/cart">Корзина</NavLink>
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
