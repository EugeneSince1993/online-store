import { FC } from 'react';
import styles from './Filters.module.scss';
import { Collapse } from '../Collapse';
import { MultiRangeSliderInputs } from './MultiRangeSliderInputs';
import { CheckboxList } from './CheckboxList';
import { FilterColor } from './FilterColor';
import { useAppSelector } from '../../redux/hooks';

type FilterProps = {
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement>,
    actionCreator: Function,
    entityName: any
    ) => any;
  brandsArr: any[];
  memoryArr: any[];
};

export const Filters: FC<FilterProps> = (
  {handleChange, 
    brandsArr, 
    memoryArr}) => {

  const data = useAppSelector((state) => state.product.products);

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
          <MultiRangeSliderInputs min={3000} max={150000} step={1000} />
        </Collapse>
      </div>
      <div className={styles.filterColor}>
        <Collapse filterName="Цвет" elementType="h5">
          <FilterColor />
        </Collapse>
      </div>
      <div className={styles.filterScreenSize}>
        <Collapse filterName="Диагональ экрана, дюйм" elementType="h5">
          <MultiRangeSliderInputs min={4.00} max={7.00} step={1} />
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
          {/* <CheckboxList 
            itemType="rammemory"
            itemArr={['1 Гб', '2 Гб', '3 Гб', '4 Гб', '6 Гб', '8 Гб', '12 Гб']}
          /> */}
        </Collapse>
      </div>
      <div className={styles.filterNumberOfCores}>
        <Collapse filterName="Количество ядер" elementType="h5">
          {/* <CheckboxList 
            itemType="numberofcores"
            itemArr={['2', '4', '6', '8']}
          /> */}
        </Collapse>
      </div>
      <div className={styles.filterBatteryCapacity}>
        <Collapse filterName="Емкость аккумулятора, мАч" elementType="h5">
          <MultiRangeSliderInputs min={1500} max={15000} step={500} />
        </Collapse>
      </div>
    </div>
  );
}; 
