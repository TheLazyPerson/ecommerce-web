import React, { Component } from 'react';
import styles from './div_row.module.scss';

const DivRow = ({className='', verticalCenter, horizontalCenter , fillParent, children}) => {
  return (
    <div
     className={`
      ${styles.flex_row} ${className}
      ${verticalCenter ? styles.align_center : ''}
      ${horizontalCenter ? styles.justify_center: ''}`}
      style={fillParent ? {
        flex: 1,
        alignSelf: 'stretch'
      }: {}}
    >
      {children}
    </div>
  )
}

export default DivRow;