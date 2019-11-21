import React, { Component } from 'react';
import styles from './filter_capsule.module.scss';
import DivRow from 'CommonComponents/divRow';

export default class FilterCapsule extends Component {
  render() {
    return (
      <DivRow
        verticalCenter
        horizontalCenter 
        className={styles.capsule_container}
      >
       <div className={styles.capsule_text}>Shirt</div>
       <span className={styles.close_icon}>x</span>
      </DivRow>
    );
  }
}
