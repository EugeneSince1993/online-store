import { FC } from 'react';
import styles from './Filters.module.scss';
import { Collapse } from '../Collapse';
import { MultiRangeSliderInputs } from './MultiRangeSliderInputs';
import { CheckboxList } from './CheckboxList';
import { FilterColor } from './FilterColor';

type FilterProps = {
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement>,
    actionCreator: Function,
    entityName: any
    ) => any;
  brandsArr: any[];
  memoryArr: any[];
  ramMemoryArr: any[];
  cpuCoresArr: any[];
  colorsArr: any[];
};

export const Filters: FC<FilterProps> = (
  {handleChange, 
    brandsArr, 
    memoryArr,
    ramMemoryArr,
    cpuCoresArr,
    colorsArr}) => {

  return (
    <div className={styles.filtersContainer}>
      <div className={styles.filterBrand}>
        <Collapse filterName="Бренд" elementType="h5">
          <CheckboxList 
            handleChange={handleChange}
            itemType="brand"
            itemObj={brandsArr[1]}
            paramArr={brandsArr}
          />
        </Collapse>
      </div>
      <div className={styles.filterPrice}>
        <Collapse filterName="Цена, ₽" elementType="h5">
          <MultiRangeSliderInputs 
            inputType="price" 
            min={0} 
            max={95000} 
            step={1} 
          />
        </Collapse>
      </div>
      <div className={styles.filterColor}>
        <Collapse filterName="Цвет" elementType="h5">
          <FilterColor 
            handleChange={handleChange}
            itemType="color"
            itemObj={colorsArr[1]}
            paramArr={colorsArr}
          />
        </Collapse>
      </div>
      <div className={styles.filterScreenSize}>
        <Collapse filterName="Диагональ экрана, дюйм" elementType="h5">
          <MultiRangeSliderInputs 
            inputType="screenSize" 
            min={4} 
            max={7} 
            step={0.1} 
          />
        </Collapse>
      </div>
      <div className={styles.filterMemory}>
        <Collapse filterName="Объем встроенной памяти, Гб" elementType="h5">
          <CheckboxList 
            handleChange={handleChange}
            itemType="memory"
            itemObj={memoryArr[1]}
            paramArr={memoryArr}
          />
        </Collapse>
      </div>
      <div className={styles.filterRamMemory}>
        <Collapse filterName="Объем оперативной памяти, Гб" elementType="h5">
          <CheckboxList 
            handleChange={handleChange}
            itemType="ramMemory"
            itemObj={ramMemoryArr[1]}
            paramArr={ramMemoryArr}
          />
        </Collapse>
      </div>
      <div className={styles.filterNumberOfCores}>
        <Collapse filterName="Количество ядер" elementType="h5">
          <CheckboxList 
            handleChange={handleChange}
            itemType="cpuCores"
            itemObj={cpuCoresArr[1]}
            paramArr={cpuCoresArr}
          />
        </Collapse>
      </div>
      <div className={styles.filterBatteryCapacity}>
        <Collapse filterName="Емкость аккумулятора, мАч" elementType="h5">
          <MultiRangeSliderInputs 
            inputType="batteryCapacity" 
            min={1500} 
            max={7000}
            step={100}
          />
        </Collapse>
      </div>
    </div>
  );
}; 
