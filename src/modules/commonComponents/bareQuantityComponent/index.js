import React, { Component, Fragment } from 'react';
import DivRow from 'CommonComponents/divRow';
import DivColumn from 'CommonComponents/divColumn';
import styles from './bare_quantity_component.module.scss';
import minusIcon from 'Icons/minus-icon.svg';
import plusIcon from 'Icons/plus-icon.svg';

export default class QuantityComponent extends Component {
  render() {
    const { className } = this.props;

    return (
        <DivRow verticalCenter className={`${styles.quantity_container} ${className}`}>
          <img className={styles.quantity_button} src={minusIcon}/>
          <div className={styles.quantity_text}>1</div>
          <img className={styles.quantity_button} src={plusIcon}/>
        </DivRow>
    );
  }
}