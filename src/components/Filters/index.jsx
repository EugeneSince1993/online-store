import React from 'react';
import classNames from 'classnames';
import { Collapse } from '../Collapse';
import styles from './Filters.module.scss';
import { MultiRangeSliderInputs } from './MultiRangeSliderInputs';

export const Filters = () => {

  return (
    <div className={styles.filtersContainer}>
      <div className={styles.filterBrand}>
        <Collapse filterName={<h5>Бренд</h5>}>
          <div className={styles.inputSearchContainer}>
            <input type="text" placeholder="Я ищу..." className={styles.inputSearch} />
          </div>
          <div className={styles.filterList}>
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
          <MultiRangeSliderInputs min={3000} max={150000} step={1000} />
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
          <MultiRangeSliderInputs min="4.00" max="7.00" step={1} />
        </Collapse>
      </div>
      <div className={styles.filterMemory}>
        <Collapse filterName={<h5>Объем встроенной памяти</h5>}>
          <div className={styles.filterList}>
            <label className={styles.container}>
              8 Гб
              <input type="checkbox" id="memory1" name="memory1" value="8 Гб" />
              <span className={styles.checkmark}></span>
            </label>
            <label className={styles.container}>
              16 Гб
              <input type="checkbox" id="memory2" name="memory2" value="16 Гб" />
              <span className={styles.checkmark}></span>
            </label>
            <label className={styles.container}>
              32 Гб
              <input type="checkbox" id="memory3" name="memory3" value="32 Гб" />
              <span className={styles.checkmark}></span>
            </label>
            <label className={styles.container}>
              64 Гб
              <input type="checkbox" id="memory4" name="memory4" value="64 Гб" />
              <span className={styles.checkmark}></span>
            </label>
            <label className={styles.container}>
              128 Гб
              <input type="checkbox" id="memory5" name="memory5" value="128 Гб" />
              <span className={styles.checkmark}></span>
            </label>  
            <label className={styles.container}>
              256 Гб
              <input type="checkbox" id="memory6" name="memory6" value="256 Гб" />
              <span className={styles.checkmark}></span>
            </label>
            <label className={styles.container}>
              512 Гб
              <input type="checkbox" id="memory7" name="memory7" value="512 Гб" />
              <span className={styles.checkmark}></span>
            </label>
            <label className={styles.container}>
              1 Тб
              <input type="checkbox" id="memory8" name="memory8" value="1 Тб" />
              <span className={styles.checkmark}></span>
            </label>
          </div>
        </Collapse>
      </div>
      <div className={styles.filterRamMemory}>
        <Collapse filterName={<h5>Объем оперативной памяти</h5>}>
          <div className={styles.filterList}>
            <label className={styles.container}>
              1 Гб
              <input type="checkbox" id="rammemory1" name="rammemory1" value="1 Гб" />
              <span className={styles.checkmark}></span>
            </label>
            <label className={styles.container}>
              2 Гб
              <input type="checkbox" id="rammemory2" name="rammemory2" value="2 Гб" />
              <span className={styles.checkmark}></span>
            </label>
            <label className={styles.container}>
              3 Гб
              <input type="checkbox" id="rammemory3" name="rammemory3" value="3 Гб" />
              <span className={styles.checkmark}></span>
            </label>
            <label className={styles.container}>
              4 Гб
              <input type="checkbox" id="rammemory4" name="rammemory4" value="4 Гб" />
              <span className={styles.checkmark}></span>
            </label>
            <label className={styles.container}>
              6 Гб
              <input type="checkbox" id="rammemory5" name="rammemory5" value="6 Гб" />
              <span className={styles.checkmark}></span>
            </label>  
            <label className={styles.container}>
              8 Гб
              <input type="checkbox" id="rammemory6" name="rammemory6" value="8 Гб" />
              <span className={styles.checkmark}></span>
            </label>
            <label className={styles.container}>
              12 Гб
              <input type="checkbox" id="rammemory7" name="rammemory7" value="12 Гб" />
              <span className={styles.checkmark}></span>
            </label>
          </div>
        </Collapse>
      </div>
      <div className={styles.filterNumberOfCores}>
        <Collapse filterName={<h5>Количество ядер</h5>}>
          <div className={styles.filterList}>
            <label className={styles.container}>
              2
              <input type="checkbox" id="numberofcores1" name="numberofcores1" value="2" />
              <span className={styles.checkmark}></span>
            </label>
            <label className={styles.container}>
              4
              <input type="checkbox" id="numberofcores2" name="numberofcores2" value="4" />
              <span className={styles.checkmark}></span>
            </label>
            <label className={styles.container}>
              6
              <input type="checkbox" id="numberofcores3" name="numberofcores3" value="6" />
              <span className={styles.checkmark}></span>
            </label>
            <label className={styles.container}>
              8
              <input type="checkbox" id="numberofcores4" name="numberofcores4" value="8" />
              <span className={styles.checkmark}></span>
            </label>
          </div>
        </Collapse>
      </div>
      <div className={styles.filterBatteryCapacity}>
        <Collapse filterName={<h5>Емкость аккумулятора, мАч</h5>}>
          <MultiRangeSliderInputs min={1500} max={15000} step={500} />
        </Collapse>
      </div>
    </div>
  );
};
