import React from 'react';
import classNames from 'classnames';

import styles from './Filters.module.scss';

export const Filters = () => {
  const collapsible = React.useRef(null);

  const toggleContent = () => {
    collapsible.current.classList.toggle(styles.active);
    let content = collapsible.current.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  };
  // stopped here, need to beautify a collapsible block

  return (
    <div className={styles.filtersContainer}>
      <div className={styles.filterBrands}>
        <div 
          className={styles.collapsible} 
          ref={collapsible}
          onClick={toggleContent}
        >
          Бренд
        </div>
        <div className={styles.content}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
    </div>
  );
};
