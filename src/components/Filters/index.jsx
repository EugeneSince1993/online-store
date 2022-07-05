import React from 'react';
import classNames from 'classnames';
import { Collapse } from '../Collapse';

import styles from './Filters.module.scss';

export const Filters = () => {

  return (
    <div className={styles.filtersContainer}>
      <div className={styles.filterBrand}>
        <Collapse filterName={<h5>Бренд</h5>}>
          <div className={styles.inputSearchContainer}>
            <input type="text" placeholder="Я ищу..." className={styles.inputSearch} />
          </div>
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
      <div className={styles.filterPrice}>
        <Collapse filterName={<h5>Цена, ₽</h5>}>
          <div className={styles.fromToContainer}>
            <div className={styles.from}>От</div>
            <div className={styles.to}>До</div>
          </div>
          <div className={styles.priceRange}>
            <div className={styles.priceRangeInput}>
              <input type="number" placeholder="3000" className={styles.inputLeft} />
            </div>
            <div className={styles.priceRangeInput}>
              <input type="number" placeholder="150000" className={styles.inputRight} />
            </div>
          </div>
        </Collapse>
      </div>
      <div className={styles.filterColor}>
        <Collapse filterName={<h5>Цвет</h5>}>
          <form>
            <label className={styles.formControl}>
              <input 
                type="checkbox" 
                id="color1" 
                name="color1" 
                value="белый" 
                className={styles.white} 
              />
            </label>
            <label className={styles.formControl}>
              <input 
                type="checkbox" 
                id="color2" 
                name="color2" 
                value="черный" 
                className={styles.black} 
              />
            </label>
            <label className={styles.formControl}>
              <input 
                type="checkbox" 
                id="color3" 
                name="color3" 
                value="серебристый" 
                className={styles.silver} 
              />
            </label>
            <label className={styles.formControl}>
              <input 
                type="checkbox" 
                id="color4" 
                name="color4" 
                value="синий" 
                className={styles.blue} 
              />
            </label>
            <label className={styles.formControl}>
              <input 
                type="checkbox" 
                id="color5" 
                name="color5" 
                value="красный" 
                className={styles.red} 
              />
            </label>
            <label className={styles.formControl}>
              <input 
                type="checkbox" 
                id="color6" 
                name="color6" 
                value="розовый" 
                className={styles.pink} 
              />
            </label>
            <label className={styles.formControl}>
              <input 
                type="checkbox" 
                id="color7" 
                name="color7" 
                value="зеленый" 
                className={styles.green} 
              />
            </label>
            <label className={styles.formControl}>
              <input 
                type="checkbox" 
                id="color8" 
                name="color8" 
                value="желтый" 
                className={styles.yellow} 
              />
            </label>
          </form>
        </Collapse>
      </div>
      <div className={styles.filterScreenSize}>
        <Collapse filterName={<h5>Диагональ экрана, дюйм</h5>}>
          <div className={styles.fromToContainer}>
            <div className={styles.from}>От</div>
            <div className={styles.to}>До</div>
          </div>
          <div className={styles.screenSizeRange}>
            <div className={styles.screenSizeRangeInput}>
              <input type="number" placeholder="4.00" className={styles.inputLeft} />
            </div>
            <div className={styles.screenSizeRangeInput}>
              <input type="number" placeholder="7.00" className={styles.inputRight} />
            </div>
          </div>
          <div className={styles.screenSizeList}>
            <label className={styles.container}>
              Все
              <input type="checkbox" id="screensize1" name="screensize1" value="Все" />
              <span className={styles.checkmark}></span>
            </label>
            <label className={styles.container}>
              Менее 6.09
              <input 
                type="checkbox" 
                id="screensize2" 
                name="screensize2" 
                value="Менее 6.00" 
              />
              <span className={styles.checkmark}></span>
            </label>
            <label className={styles.container}>
              6.1 - 6.29
              <input 
                type="checkbox" 
                id="screensize3" 
                name="screensize3" 
                value="6.1 - 6.29" 
              />
              <span className={styles.checkmark}></span>
            </label>
            <label className={styles.container}>
              6.3 - 6.49
              <input 
                type="checkbox" 
                id="screensize4" 
                name="screensize4" 
                value="6.3 - 6.49" 
              />
              <span className={styles.checkmark}></span>
            </label>
            <label className={styles.container}>
              6.5 - 6.59
              <input 
                type="checkbox" 
                id="screensize5" 
                name="screensize5" 
                value="6.5 - 6.59" 
              />
              <span className={styles.checkmark}></span>
            </label>  
            <label className={styles.container}>
              6.6 и более
              <input 
                type="checkbox" 
                id="screensize6" 
                name="screensize6" 
                value="6.6 и более" 
              />
              <span className={styles.checkmark}></span>
            </label>
          </div>
        </Collapse>
      </div>
    </div>
  );
};
