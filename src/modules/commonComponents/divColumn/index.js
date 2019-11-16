import React, { Component } from 'react';
import styles from './div_column.module.scss';

const DivColumn = ({className, children}) => {
  return (
    <div className={`${styles.flex_column} ${className}`}>
      {children}
    </div>
  )
}

export default DivColumn;