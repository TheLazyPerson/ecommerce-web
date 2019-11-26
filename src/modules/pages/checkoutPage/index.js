import React, { Component } from 'react';
import FullWidthContainer from 'CommonContainers/fullwidthContainer';
import DivRow from 'CommonComponents/divRow';
import DivColumn from 'CommonComponents/divColumn';
import styles from './checkout_page.module.scss';
import CheckoutItemComponent from './checkoutItemComponent';

export default class CheckoutPage extends Component {
  render() {
    return (
      <FullWidthContainer>
        <DivRow fillParent className={styles.checkout_container}>
          <DivColumn className={styles.cart_list_container}>
            <DivRow className={styles.table_header}>
              <div className={styles.flex_2}>Product</div>
              <div className={styles.flex_1}>Exhibition</div>
              <div className={styles.flex_1}>Quantity</div>
              <div className={styles.flex_1}>Total Price</div>
            </DivRow>

            <DivColumn fillParent className={styles.table_content_container}>
              <CheckoutItemComponent />
              <CheckoutItemComponent />
              <CheckoutItemComponent />
              <CheckoutItemComponent />
              <CheckoutItemComponent />
              <CheckoutItemComponent />
              <CheckoutItemComponent />
              <CheckoutItemComponent />
              <CheckoutItemComponent />

            </DivColumn>

          </DivColumn>
          
          <DivColumn className={styles.order_summary_container}>
            <div className={styles.order_summary_title}>Order Summary</div>
          </DivColumn>
        </DivRow>
      </FullWidthContainer>
    );
  }
}
