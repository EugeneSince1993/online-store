import styles from './FilterColor.module.scss';

export const FilterColor = () => {

  return (
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
  );
};
