import React, { Component } from 'react';
import DivRow from 'CommonComponents/divRow';
import DivColumn from 'CommonComponents/divColumn';
import styles from './checkout_item_component.module.scss';
import BareQuantityComponent from 'CommonComponents/bareQuantityComponent';
import exhibitionImage1 from 'Images/exhibition-item-1.jpg';
import closeIcon from 'Icons/close-icon-black.svg';

export default class CheckoutItemComponent extends Component {
  render() {
    return (
      <DivRow className={styles.table_item}>

        <DivRow className={`${styles.product_column} ${styles.flex_2}`}>
          <img src={exhibitionImage1} className={styles.product_image}/>
          <DivColumn>
            <div className={styles.title}>Product 1</div>
            <div className={styles.description}>Light gray</div>
          </DivColumn>
        </DivRow>

        <DivColumn className={`${styles.exhibition_column} ${styles.flex_1}`}>
        <div className={styles.title}>The Craft Show</div>
        <div className={styles.description}>Expires in: 2 days</div>
        </DivColumn>

        <DivRow className={`${styles.flex_1}`}>
          <BareQuantityComponent className={styles.quantity_container} />
        </DivRow>

        <DivRow verticalCenter className={`${styles.price_column} ${styles.flex_1}`}>
          <div className={styles.product_price}>$39.99</div>
          <img src={closeIcon} />
        </DivRow>

      </DivRow>
    );
  }
}