import React, { Component } from 'react';
import FullWidthContainer from 'CommonContainers/fullwidthContainer';
import DivRow from 'CommonComponents/divRow';
import DivColumn from 'CommonComponents/divColumn';
import styles from './product_details_page.module.scss';
import exhibitionImage1 from 'Images/exhibition-item-1.jpg';
import exhibitionImage2 from 'Images/exhibition-item-2.jpg';
import exhibitionImage3 from 'Images/exhibition-item-3.png';

export default class ProductDetailsPage extends Component {
  render() {
    return (
      <FullWidthContainer>
        <DivColumn className={styles.product_details_container}>
         <div>Back Button</div>
         <DivRow className={styles.product_content_container}>

           <DivColumn className={styles.left_content_container}>
            <img src={exhibitionImage3} className={styles.product_image} />
            <DivRow className={styles.product_image_list}>
              <img src={exhibitionImage1} className={styles.small_product_image} />
              <img src={exhibitionImage2} className={styles.small_product_image} />
            </DivRow>
           </DivColumn>

           <DivColumn className={styles.right_content_container}>
           </DivColumn>

         </DivRow>
        </DivColumn>
      </FullWidthContainer>
    );
  }
}
