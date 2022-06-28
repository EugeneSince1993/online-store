import React from 'react';
import classNames from 'classnames';

import styles from './Header.module.scss';

export const Header = () => {

  return (
    <header className={classNames(styles.header, 'container', 'bgLightGray')}>
      <div className={styles.headerLogo}>
        <a href="#">Online store</a>
      </div>
      <div className={styles.headerNav}>
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
