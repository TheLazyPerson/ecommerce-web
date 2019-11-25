import React, { Component } from 'react';
import DivRow from 'CommonComponents/divRow';
import styles from './secondary_capsule_button.module.scss';

export default class SecondaryCapsuleButton extends Component {
  render() {
    const { children, className } = this.props;

     return (
      <DivRow verticalCenter horizontalCenter className={`${styles.capsule_button} ${className}`}>
        <div>{children}</div>
      </DivRow>
     );
  }
}
