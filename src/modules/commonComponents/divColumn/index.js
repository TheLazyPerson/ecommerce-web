import React, { Component } from 'react';
import styles from './div_column.module.scss';

const DivColumn = ({className='', verticalCenter, horizontalCenter, fillParent, children}) => {
  return (
    <div
     className={`
      ${styles.flex_column} ${className}
      ${verticalCenter ? styles.justify_center : ''}
      ${horizontalCenter ? styles.align_center: ''}`}
      style={fillParent ? {
        flex: 1,
        alignSelf: 'stretch'
      }: {}}
    >
      {children}
    </div>
  )
}

export default DivColumn;