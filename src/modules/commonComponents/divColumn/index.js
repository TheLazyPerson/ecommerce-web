import React, { Component } from 'react';
import styles from './div_column.module.scss';

const DivColumn = ({className='', verticalCenter, horizontalCenter ,children}) => {
  return (
    <div 
     className={`
      ${styles.flex_column} ${className}
      ${verticalCenter ? styles.justify_center : ''}
      ${horizontalCenter ? styles.align_center: ''}`}
    >
      {children}
    </div>
  )
}

export default DivColumn;