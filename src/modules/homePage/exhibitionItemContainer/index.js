import React, { Component } from 'react';
import styles from './exhibition_item_container.module.scss';
import DivColumn from 'CommonComponents/divColumn';
import exhibitionItem1 from 'Images/exhibition-item-1.jpg';
import DivRow from 'CommonComponents/divRow';

export default class ExhibitionItemContainer extends Component {
  constructor(props) {
        super(props);
  }
  render() {
     return(
      <DivRow className={styles.exhibition_item_container}>
        <img src={exhibitionItem1} className={styles.exhibition_image}/>
        <DivColumn className={styles.exhibition_details_container}>
          <div className={styles.exhibition_number_text}>Exhibition 1</div>
          <div className={styles.exhibition_name_text}>The Craft Show</div>
          <div className={styles.small_divider}></div>
          <DivRow>
            <div className={styles.capsule_items}>capsule1</div>
            <div className={styles.capsule_items}>capsule2</div>
            <div className={styles.capsule_items}>capsule2</div>
          </DivRow>
          <div className={styles.exhibition_description_text}>
            The Craft Show will display products like Handcrafted Watches, Products, Farsis, Palazzos,  Culottes and Products.With love, and much more.
          </div>
          <div className={styles.view_exhibition_button}>View Exibition</div>
        </DivColumn>
      </DivRow>
     )
  }
}