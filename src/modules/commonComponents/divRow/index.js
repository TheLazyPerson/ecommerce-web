import React, { Component } from 'react';
import styles from './div_row.module.scss';

const DivRow = ({className='', children}) => {
  return (
    <div className={`${styles.flex_row} ${className}`}>
      {children}
    </div>
  )
}

export default DivRow;