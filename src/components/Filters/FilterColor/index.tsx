import React, { memo } from 'react';
import styles from './FilterColor.module.scss';

interface IProps {
  itemType: string;
  itemObj: any;
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement>,
    actionCreator: Function,
    entity: any
    ) => any;
  paramArr: any[];
}

export const FilterColor = memo(({
  itemType, itemObj, handleChange, paramArr
}: IProps) => {
  const itemArr = Object.keys(itemObj).map((key) => [key, itemObj[key]]);

  let itemList = itemArr.map((unitArr: any, index: number) => {
    let item = unitArr[0];
    let itemValue = unitArr[1]; 

    let itemNumber = index + 1;
    let itemTypeNumber = itemType + itemNumber;

    return (
      <label 
        key={index}
        className={styles.formControl} 
      >
        <input 
          type="checkbox" 
          id={itemTypeNumber} 
          name={item} 
          value={item}
          className={`fc-${item}`}
          checked={itemValue}
          onChange={(e) => handleChange(e, paramArr[0], paramArr[1])} 
        />
        <span className={styles.checkmark}></span>
      </label>
    );
  });

  return (
    <div className={styles.filterColorList}>
      {itemList}
    </div>
  );
});
