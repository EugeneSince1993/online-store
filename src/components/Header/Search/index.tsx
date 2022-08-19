import styles from './Search.module.scss';

export const Search = () => {

  return (
    <div className={styles.search}>
      <div className={styles.searchContainer}>
        <div className={styles.searchInput}>
          <input type="text" placeholder="Я ищу..." />
        </div>
        <div className={styles.searchIcon}>
          <i className="fa-solid fa-magnifying-glass"></i>
        </div>
      </div>
    </div>
  );
};
