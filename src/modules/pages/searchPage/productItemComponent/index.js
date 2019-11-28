import React, { Component } from 'react';
import DivRow from 'CommonComponents/divRow';
import DivColumn from 'CommonComponents/divColumn';
import styles from './product_item_component.module.scss';
import exhibitionImage1 from 'Images/exhibition-item-1.jpg';
import heartFilledIcon from 'Icons/heart-filled-icon.svg';

export default class ProductItemComponent extends Component {
  render() {
    return (
      <DivColumn className={styles.product_container}>
        <DivColumn className={styles.product_details_container}>
          <div className={styles.product_name}>Adidas Red Shoes</div>
          <div className={styles.product_description}>Elegant. Timeless. The quitessensial symbol of love</div>
          <img src={exhibitionImage1} className={styles.product_image}/>
        </DivColumn>

        <DivColumn verticalCenter horizontalCenter className={styles.exhibition_details_container}>
          <div className={styles.exhibition_title}>EXHIBITION</div>
          <DivRow verticalCenter>
            <img src={exhibitionImage1} className={styles.exhibition_image}/>
            <div className={styles.exhibition_name}>The Craft Show</div>
          </DivRow>
        </DivColumn>

        <DivRow className={styles.action_container}>
          <img src={heartFilledIcon} className={styles.wishlist_icon} />
          <DivRow className={styles.action_buttons}>
            <DivRow verticalCenter horizontalCenter className={styles.action_button}>View Product</DivRow>
            <DivRow verticalCenter horizontalCenter className={`${styles.action_button} ${styles.primary}`}>View Exhibition</DivRow>
          </DivRow>
        </DivRow>

      </DivColumn>
    );
  }
}