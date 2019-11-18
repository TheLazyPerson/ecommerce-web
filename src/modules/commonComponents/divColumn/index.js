import React, { Component } from 'react';
import styles from './div_column.module.scss';

const DivColumn = ({className='', verticalCenter, horizontalCenter ,children}) => {
  return (
    <div 
     className={`
      ${styles.flex_column} ${className}
      ${verticalCenter ? styles.align_center : ''}
      ${horizontalCenter ? styles.justify_center: ''}`}
    >
      {children}
    </div>
  )
}

export default DivColumn;