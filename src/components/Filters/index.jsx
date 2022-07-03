import React from 'react';
import classNames from 'classnames';
import { Collapse } from '../Collapse';

import styles from './Filters.module.scss';

export const Filters = () => {

  return (
    <div className={styles.filtersContainer}>
      <div className={styles.filterBrands}>
        <Collapse>
          <div>
            <input type="checkbox" id="brand1" name="brand1" value="Huawei" />
            <label htmlFor="brand1">Huawei</label>
            <input type="checkbox" id="brand2" name="brand2" value="Samsung" />
            <label htmlFor="brand2">Samsung</label>
            <input type="checkbox" id="brand3" name="brand3" value="Honor" />
            <label htmlFor="brand3">Honor</label>
            <input type="checkbox" id="brand4" name="brand4" value="Apple" />
            <label htmlFor="brand4">Apple</label>
            <input type="checkbox" id="brand5" name="brand5" value="Xiaomi" />
            <label htmlFor="brand5">Xiaomi</label>
            <input type="checkbox" id="brand6" name="brand6" value="Redmi" />
            <label htmlFor="brand6">Redmi</label>
            <input type="checkbox" id="brand7" name="brand7" value="Realme" />
            <label htmlFor="brand7">Realme</label>
          </div>
        </Collapse>
      </div>
    </div>
  );
};
