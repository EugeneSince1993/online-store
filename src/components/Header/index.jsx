import React from 'react';
import classNames from 'classnames';
import styles from './Header.module.scss';
import { Search } from './Search';

export const Header = () => {

  return (
    <header className={classNames(styles.header, 'container', 'bgLightGray')}>
      <div className={styles.logo}>
        <a href="#">Online store</a>
      </div>
      <div className={styles.search}>
        <Search />
      </div>
      <div className={styles.nav}>
        <nav>
          <ul>
            <li>
              <a href="#">Корзина</a>
            </li>
            <li>
              <a href="#">Войти</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
