import React, { Component } from 'react';
import styles from './dropdown_capsule.module.scss';
import DivRow from 'CommonComponents/divRow';

export default class DropdownCapsule extends Component {
  render() {
    return (
      <DivRow
        verticalCenter
        horizontalCenter 
        className={styles.capsule_container}
      >
       <div className={styles.capsule_text}>Sort by</div>
       <span className={styles.close_icon}>></span>
      </DivRow>
    );
  }
}
