import React from 'react';
import classNames from 'classnames';

import styles from './Footer.module.scss';

export const Footer = () => {
  const date = new Date();
  let year = date.getFullYear();

  return (
    <footer className={classNames(styles.footerContainer, 'container', 'bgLightGray')}>
      <div className={classNames(styles.footerRow, styles.footerLinks)}>
        <div className={classNames(styles.forClients)}>
          <h6>Покупателям</h6>
          <ul>
            <li>
              <a href="#">Lorem ipsum</a>
            </li>
            <li>
              <a href="#">Lorem ipsum</a>
            </li>
            <li>
              <a href="#">Lorem ipsum</a>
            </li>
          </ul>
        </div>
        <div className={classNames(styles.aboutCompany)}>
          <h6>О компании</h6>
          <ul>
            <li>
              <a href="#">Lorem ipsum</a>
            </li>
            <li>
              <a href="#">Lorem ipsum</a>
            </li>
            <li>
              <a href="#">Lorem ipsum</a>
            </li>
          </ul>
        </div>
        <div className={styles.followUs}>
          <h6>Мы в соцсетях</h6>
          <ul>
            <li>
              <a href="#">Lorem ipsum</a>
            </li>
            <li>
              <a href="#">Lorem ipsum</a>
            </li>
            <li>
              <a href="#">Lorem ipsum</a>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.footerRow}>
        <div>
          <span>{year} </span> 
          &copy; Online store
        </div>
      </div>
    </footer>
  );
};
