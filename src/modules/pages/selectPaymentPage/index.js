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
import { checkoutBagAction } from 'Core/modules/bag/bagActions';
import checkedIconBlack from 'Icons/checked-icon-black.svg';

class SelectPaymentPage extends Component {

  placeOrder = () => {
    const {
      navigateTo,
      showSuccessFlashMessage,
      checkoutBagAction
    } = this.props;

    checkoutBagAction().then(data => {
      if(data.code ==200 || data.code == 201) {
       navigateTo('');
       showSuccessFlashMessage('Your Order has been successfuly placed');
      }
    });
  }

  render() {
    return (
      <FullWidthContainer>
        <DivRow fillParent className={styles.checkout_container}>

          <DivColumn className={styles.cart_list_container}>
            <DivRow className={styles.header_container}>
              <div className={styles.header_title}>CHOOSE PAYMENT METHOD</div>
            </DivRow>

            <DivColumn fillParent className={styles.payment_method_container}>

              <DivRow verticalCenter className={styles.payment_method_item_container}>
                <DivColumn style={{flex:1}}>
                  <div className={styles.title}>Cash on delivery</div>
                  <div className={styles.description}>Pay cash during delivery</div>
                </DivColumn>
                <img src={checkedIconBlack} className={styles.icon}/>
              </DivRow>

            </DivColumn>            
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
              <CapsuleButton className={styles.capsule_button} onClick={this.placeOrder}>
                Place Order
              </CapsuleButton>
            </DivColumn>
          </DivColumn>
        </DivRow>
      </FullWidthContainer>
    );
  }
}

const mapDispathToProps = dispatch => {
  return {
    showSuccessFlashMessage: bindActionCreators(
      showSuccessFlashMessage,
      dispatch
    ),
    checkoutBagAction:  bindActionCreators(checkoutBagAction, dispatch)
  };
};

export default connect(
  null,
  mapDispathToProps
)(navigatorHoc(SelectPaymentPage));
