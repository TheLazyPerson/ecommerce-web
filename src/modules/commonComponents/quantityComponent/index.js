import React, { Component, Fragment } from 'react';
import DivRow from 'CommonComponents/divRow';
import DivColumn from 'CommonComponents/divColumn';
import styles from './quantity_component.module.scss';
import minusIcon from 'Icons/minus-icon.svg';
import plusIcon from 'Icons/plus-icon.svg';

export default class QuantityComponent extends Component {
  render() {
    return (
      <Fragment>
        <DivColumn>
          <div className={styles.quantity_title}>Quantity</div>
          <DivRow verticalCenter className={styles.quantity_container}>
            <img className={styles.quantity_button} src={minusIcon}/>
            <div className={styles.quantity_text}>1</div>
            <img className={styles.quantity_button} src={plusIcon}/>
          </DivRow>
        </DivColumn>
        <div className={styles.sub_info}>Standerd delivery in 2-4 day’s</div>
      </Fragment>
    );
  }
}