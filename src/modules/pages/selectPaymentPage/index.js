import React, { Component } from "react";
import FullWidthContainer from "CommonContainers/fullwidthContainer";
import DivRow from "CommonComponents/divRow";
import DivColumn from "CommonComponents/divColumn";
import styles from "./select_payment_page.module.scss";
import HorizontalBorder from "CommonComponents/horizontalBorder";
import CapsuleButton from "CommonComponents/capsuleButton";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import InitialPageLoader from "CommonContainers/initialPageLoader";
import navigatorHoc from "Hoc/navigatorHoc";
import { showSuccessFlashMessage } from "Redux/actions/flashMessageActions";

class SelectPaymentPage extends Component {
  render() {
    return (
      <FullWidthContainer>
        <DivRow fillParent className={styles.checkout_container}>
          <DivColumn className={styles.cart_list_container}>
            <DivRow className={styles.header_container}>
              <div className={styles.header_title}>CHOOSE PAYMENT METHOD</div>
            </DivRow>
            <DivColumn
              fillParent
              className={styles.table_content_container}
            ></DivColumn>
          </DivColumn>
          <DivColumn>
            <DivColumn className={styles.order_summary_container}>
              <div className={styles.order_summary_title}>Order Summary</div>
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

                <HorizontalBorder className={styles.price_divider} />

                <DivRow className={styles.price_details_container}>
                  <div className={styles.title}>Total</div>
                  <div className={styles.value}>KD 1534</div>
                </DivRow>
              </DivColumn>
              <HorizontalBorder />
              <div className={styles.coupon_header_text}>Delivery Address</div>
              <DivColumn
                className={styles.coupon_description_container}
              ></DivColumn>
              <CapsuleButton className={styles.capsule_button}>
                Place Order
              </CapsuleButton>
            </DivColumn>
          </DivColumn>
        </DivRow>
      </FullWidthContainer>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

const mapDispathToProps = dispatch => {
  return {
    showSuccessFlashMessage: bindActionCreators(
      showSuccessFlashMessage,
      dispatch
    )
  };
};

export default connect(
  mapStateToProps,
  mapDispathToProps
)(navigatorHoc(SelectPaymentPage));
