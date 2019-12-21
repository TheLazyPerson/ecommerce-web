import React, { Component } from "react";
import DivColumn from "CommonComponents/divColumn";
import DivRow from 'CommonComponents/divRow';
import HorizontalBorder from "CommonComponents/horizontalBorder";
import styles from './order_summary.module.scss';
import CapsuleButton from "CommonComponents/capsuleButton";
import map from 'lodash/map';
import navigatorHoc from 'Hoc/navigatorHoc';

class OrderSummary extends Component {
  state = {
    selectedDeliveryType: "standard",
  };

  navigateToSelectPayment = () => {
    const { navigateTo } = this.props;
    navigateTo("select-payment");
  };

  setDeliveryMethod = type => {
    this.setState({
      selectedDeliveryType: type
    });
  };

  render() {
    const deliveryTypes = [
      {
        type: "standard",
        name: "Standard Delivery",
        priceType: "Free Delivery",
        deliveryDate: "22 Dec"
      },
      {
        type: "express",
        name: "Express Delivery",
        priceType: "Paid Delivery",
        deliveryDate: "18 Dec"
      }
    ];
    const { selectedDeliveryType } = this.state;

    return (
      <DivColumn>
        <DivColumn className={styles.order_summary_container}>
          <div className={styles.order_summary_title}>Order Summary</div>
          <HorizontalBorder />

          <div className={styles.coupon_header_text}>Choose Delivery Speed</div>
          {map(deliveryTypes, (delivery, index) => {
            return (
              <DivColumn
                className={`${styles.coupon_description_container} ${
                  selectedDeliveryType === delivery.type
                    ? styles.selected_delivery
                    : ""
                }`}
                onClick={() => this.setDeliveryMethod(delivery.type)}
              >
                <DivColumn className={styles.coupon_content_container}>
                  <div className={styles.coupon_title}>{delivery.name}</div>
                  <div className={styles.coupon_description}>
                    Get it by {delivery.deliveryDate} | {delivery.priceType}
                  </div>
                </DivColumn>
              </DivColumn>
            );
          })}

          <HorizontalBorder />

          <DivColumn>
            <div className={styles.coupon_header_text}>Price Details</div>
            <DivRow className={styles.price_details_container}>
              <div className={styles.title}>Bag Total</div>
              <div className={styles.value}>KD 1322</div>
            </DivRow>
            <DivRow className={styles.price_details_container}>
              <div className={styles.title}>Coupon Discount</div>
              <div className={styles.value}>Not Applied</div>
            </DivRow>
            <DivRow className={styles.price_details_container}>
              <div className={styles.title}>Order Total</div>
              <div className={styles.value}>KD 1103</div>
            </DivRow>
            {/* <DivRow className={styles.price_details_container}>
              <div className={styles.title}>Delivery Charges</div>
              <div className={styles.value}>FREE</div>
            </DivRow> */}

            <HorizontalBorder className={styles.price_divider} />

            <DivRow className={styles.price_details_container}>
              <div className={styles.title}>Total</div>
              <div className={styles.value}>KD 1534</div>
            </DivRow>
          </DivColumn>

          <CapsuleButton
            className={styles.capsule_button}
            onClick={this.navigateToSelectPayment}
          >
            Make Payment
          </CapsuleButton>
        </DivColumn>
      </DivColumn>
    );
  }
}

export default navigatorHoc(OrderSummary);
