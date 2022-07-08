import React from 'react';
import styles from './Filters.module.scss';
import { Collapse } from '../Collapse';
import { MultiRangeSliderInputs } from './MultiRangeSliderInputs';
import { SearchInput } from './SearchInput';
import { CheckboxList } from './CheckboxList';
import { FilterColor } from './FilterColor';

export const Filters = () => {

  return (
    <div className={styles.filtersContainer}>
      <div className={styles.filterBrand}>
        <Collapse filterName={<h5>Бренд</h5>}>
          <SearchInput />
          <CheckboxList 
            itemType="brand"
            itemArr={['Huawei', 'Honor', 'Xiaomi', 'Redmi', 'Samsung', 
            'Apple', 'Realme', 'Nokia']}
          />
        </Collapse>
      </div>
      <div className={styles.filterPrice}>
        <Collapse filterName={<h5>Цена, ₽</h5>}>
          <MultiRangeSliderInputs min={3000} max={150000} step={1000} />
        </Collapse>
      </div>
      <div className={styles.filterColor}>
        <Collapse filterName={<h5>Цвет</h5>}>
          <FilterColor />
        </Collapse>
      </div>
      <div className={styles.filterScreenSize}>
        <Collapse filterName={<h5>Диагональ экрана, дюйм</h5>}>
          <MultiRangeSliderInputs min="4.00" max="7.00" step={1} />
        </Collapse>
      </div>
      <div className={styles.filterMemory}>
        <Collapse filterName={<h5>Объем встроенной памяти</h5>}>
          <CheckboxList 
            itemType="memory"
            itemArr={['8 Гб', '16 Гб', '32 Гб', '64 Гб', '128 Гб', 
            '256 Гб', '512 Гб', '1 Тб']}
          />
        </Collapse>
      </div>
      <div className={styles.filterRamMemory}>
        <Collapse filterName={<h5>Объем оперативной памяти</h5>}>
          <CheckboxList 
            itemType="rammemory"
            itemArr={['1 Гб', '2 Гб', '3 Гб', '4 Гб', '6 Гб', '8 Гб', '12 Гб']}
          />
        </Collapse>
      </div>
      <div className={styles.filterNumberOfCores}>
        <Collapse filterName={<h5>Количество ядер</h5>}>
          <CheckboxList 
            itemType="numberofcores"
            itemArr={['2', '4', '6', '8']}
          />
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
