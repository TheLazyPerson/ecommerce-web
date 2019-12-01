import React , { Component } from 'react'
import DivRow from 'CommonComponents/divRow';
import DivColumn from 'CommonComponents/divColumn';
import CapsuleButton from 'CommonComponents/capsuleButton';
import CapsuleText from 'CommonComponents/capsuleText';
import exhibitionImage1 from 'Images/exhibition-item-1.jpg';
import styles from './exhibition_item_component.module.scss';

export default class ExhibitionItemComponent extends Component {
  render() {
    return (
      <DivRow className={styles.exhibition_item_container}>
      <img src={exhibitionImage1} className={styles.exhibition_image}/>
      
      <DivColumn className={styles.exhibition_details_container}>
        <div className={styles.exhibition_name}>
          The Craft Show
        </div>
        <div className={styles.exhibition_details}>
          The Craft Show will display products like Handcrafted Watches, Products, Farsis, Palazzos,  Culottes and Products.With love, and much more.
        </div>

        <DivRow className={styles.capsule_container}>
          <CapsuleText text="watches" className={styles.capsule}/>
          <CapsuleText text="craft" className={styles.capsule}/>
          <CapsuleText text="crafted" className={styles.capsule}/>
        </DivRow>

        <CapsuleButton className={styles.view_exhibition_button}>View Exhibition</CapsuleButton>
      </DivColumn>
    </DivRow>
    );
  }
}
