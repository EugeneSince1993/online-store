import React from 'react';
import classNames from 'classnames';
import { Collapse } from '../Collapse';

import styles from './Filters.module.scss';

export const Filters = () => {

  return (
    <div className={styles.filtersContainer}>
      <div className={styles.filterBrands}>
        <Collapse filterName="Бренд">
          <div className={styles.brandList}>
            <label className={styles.container}>Huawei
              <input type="checkbox" id="brand1" name="brand1" value="Huawei" />
              <span className={styles.checkmark}></span>
            </label>
            <label className={styles.container}>Honor
              <input type="checkbox" id="brand2" name="brand2" value="Honor" />
              <span className={styles.checkmark}></span>
            </label>
            <label className={styles.container}>Xiaomi
              <input type="checkbox" id="brand3" name="brand3" value="Xiaomi" />
              <span className={styles.checkmark}></span>
            </label>
            <label className={styles.container}>Redmi
              <input type="checkbox" id="brand4" name="brand4" value="Redmi" />
              <span className={styles.checkmark}></span>
            </label>
            <label className={styles.container}>Samsung
              <input type="checkbox" id="brand5" name="brand5" value="Samsung" />
              <span className={styles.checkmark}></span>
            </label>  
            <label className={styles.container}>Apple
              <input type="checkbox" id="brand6" name="brand6" value="Apple" />
              <span className={styles.checkmark}></span>
            </label>
            <label className={styles.container}>Realme
              <input type="checkbox" id="brand7" name="brand7" value="Realme" />
              <span className={styles.checkmark}></span>
            </label>
            <label className={styles.container}>Nokia
              <input type="checkbox" id="brand8" name="brand8" value="Nokia" />
              <span className={styles.checkmark}></span>
            </label>
          </div>
        </Collapse>
      </div>
    </div>
  );
};
