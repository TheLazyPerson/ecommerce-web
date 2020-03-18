import React, { Component } from 'react';
import styles from './filter_capsule.module.scss';
import DivRow from 'CommonComponents/divRow';


const FilterCapsule = ({ className }) => (
  <DivRow
    verticalCenter
    horizontalCenter
    className={`${styles.capsule_container} ${className}`}
  >
    <div className={styles.capsule_text}>Shirt</div>
    <span className={styles.close_icon}>x</span>
  </DivRow>
)

export default FilterCapsule;
