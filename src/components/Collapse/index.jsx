import React from 'react';
import styles from "./Collapse.module.scss";
import classNames from 'classnames';

export const Collapse = ({ collapsed, children, filterName }) => {
  const [isCollapsed, setIsCollapsed] = React.useState(collapsed);

  return (
    <>
      <div
        className={styles.collapseDiv}
        onClick={() => setIsCollapsed(!isCollapsed)}
      >
        {filterName}
        {
          isCollapsed ? (
            <i className="fa-solid fa-chevron-down"></i>
          ) : (
            <i className="fa-solid fa-chevron-up"></i>
          )
        }
      </div>
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