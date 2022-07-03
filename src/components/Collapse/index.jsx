import React from 'react';
import styles from "./Collapse.module.scss";
import classNames from 'classnames';

export const Collapse = ({ collapsed, children }) => {
  const [isCollapsed, setIsCollapsed] = React.useState(collapsed);

  return (
    <>
      <button
        className={styles.collapseButton}
        onClick={() => setIsCollapsed(!isCollapsed)}
      >
        {isCollapsed ? 'Show' : 'Hide'} content
      </button>
      <div
        className={classNames(
          styles.collapseContent, 
          { 
            [styles.collapsed]: isCollapsed,
            [styles.expanded]: !isCollapsed
          })}
        aria-expanded={isCollapsed}
      >
        {children}
      </div>
    </>
  );
};