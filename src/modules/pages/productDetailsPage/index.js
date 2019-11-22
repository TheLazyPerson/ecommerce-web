import React, { Component } from 'react';
import FullWidthContainer from 'CommonContainers/fullwidthContainer';
import DivRow from 'CommonComponents/divRow';
import DivColumn from 'CommonComponents/divColumn';
import styles from './product_details_page.module.scss';

export default class ProductDetailsPage extends Component {

  render() {
    return (
      <FullWidthContainer>
        <DivColumn className={styles.product_details_container}>
         <div>back button</div>
         <DivRow className={styles.product_content_container}>
           <DivColumn className={styles.left_content_container}>
             product image
           </DivColumn>
           <DivColumn className={styles.right_content_container}>

           </DivColumn>
         </DivRow>
        </DivColumn>
      </FullWidthContainer>
    );
  }
}
