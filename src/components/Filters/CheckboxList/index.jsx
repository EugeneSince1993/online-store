import React from 'react';
import styles from './CheckboxList.module.scss';

export const CheckboxList = ({ itemType, itemArr }) => {

  let itemList = itemArr.map((item, index) => {
    let itemNumber = index + 1;
    let itemTypeNumber = itemType + itemNumber;
    return (
      <label className={styles.container} key={index}>{item}
        <input type="checkbox" id={itemTypeNumber} name={itemTypeNumber} value={item} />
        <span className={styles.checkmark}></span>
      </label>
    );
  });

  return (
    <div className={styles.checkboxList}>
      {itemList}
    </div>
  );
};
