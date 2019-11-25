import React, { Component } from 'react';
import DivRow from 'CommonComponents/divRow';
import styles from './capsule_button.module.scss';

export default class CapsuleButton extends Component {
  render() {
    const { children } = this.props;

     return (
      <DivRow verticalCenter horizontalCenter className={styles.capsule_button}>
        <div>{children}</div>
      </DivRow>
     )
  }
}
