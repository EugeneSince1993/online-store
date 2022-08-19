import { memo } from 'react';
import styles from './CheckboxList.module.scss';

interface Props {
  itemType: string;
  itemObj: any;
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement>,
    actionCreator: Function,
    entity: any
    ) => any;
  paramArr: any[];
}

export const CheckboxList = memo((
  { itemType, itemObj, handleChange, paramArr }: Props
) => {

  const itemArr = Object.keys(itemObj).map((key) => [key, itemObj[key]]);

  let itemList = itemArr.map((unitArr: any, index: number) => {
    let item = unitArr[0];
    let itemValue = unitArr[1]; 

    let itemNumber = index + 1;
    let itemTypeNumber = itemType + itemNumber;

    return (
      <label 
        key={index}
        className={styles.container} 
      >
        {item}
        <input 
          type="checkbox" 
          id={itemTypeNumber} 
          name={item} 
          value={item}
          checked={itemValue}
          onChange={(e) => handleChange(e, paramArr[0], paramArr[1])} 
        />
        <span className={styles.checkmark}></span>
      </label>
    );
  });

  return (
    <div className={styles.checkboxList}>
      {itemList}
    </div>
  );
});
