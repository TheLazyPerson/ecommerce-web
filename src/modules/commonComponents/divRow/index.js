import React, { Component } from 'react';
import styles from './div_row.module.scss';

const DivRow = ({className='', verticalCenter, horizontalCenter ,children}) => {
  return (
    <div 
     className={`
      ${styles.flex_row} ${className}
      ${verticalCenter ? styles.align_center : ''}
      ${horizontalCenter ? styles.justify_center: ''}`}
    >
      {children}
    </div>
  )
}

export default DivRow;