import React, { Component } from "react";
import FullWidthContainer from "CommonContainers/fullwidthContainer";
import DivRow from "CommonComponents/divRow";
import DivColumn from "CommonComponents/divColumn";
import styles from "./checkout_page.module.scss";
import CheckoutItemComponent from "./checkoutItemComponent";
import HorizontalBorder from "CommonComponents/horizontalBorder";
import couponIcon from "Icons/coupon-icon-white.svg";
import CapsuleButton from "CommonComponents/capsuleButton";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getBagListAction } from "Core/modules/bag/bagActions";
import InitialPageLoader from "CommonContainers/initialPageLoader";
import map from "lodash/map";
import size from "lodash/size";
import EmptyScreenComponent from "CommonComponents/emptyScreenComponent";
import navigatorHoc from "Hoc/navigatorHoc";

class CheckoutPage extends Component {
  navigateToWishlist = () => {
    const { navigateTo } = this.props;
    navigateTo("wishlist");
  };

  navigateToPlaceOrder = () => {
    const { navigateTo } = this.props;
    navigateTo("place-order");
  };

  render() {
    const {
      bagReducer: { bagData },
      getBagListAction
    } = this.props;
    return (
      <FullWidthContainer>
        <DivRow fillParent className={styles.checkout_container}>
          <DivColumn className={styles.cart_list_container}>
            <DivRow className={styles.table_header}>
              <div className={styles.flex_2}>Product</div>
              <div className={styles.flex_1}>Exhibition</div>
              <div className={styles.flex_1}>Price</div>
              <div className={styles.flex_1}>Quantity</div>
              <div className={styles.flex_1}>Total Price</div>
            </DivRow>

            <InitialPageLoader
              isEmpty={!size(bagData.items)}
              initialPageApi={getBagListAction}
              customEmptyScreen={
                <EmptyScreenComponent
                  title="Hey, it feels so light!"
                  description="There is nothing in your bag. Let’s add some items."
                  buttonTitle="ADD ITEMS FROM WISHLIST"
                  className={styles.empty_page_container}
                  buttonOnClick={this.navigateToWishlist}
                />
              }
            >
              <DivColumn fillParent className={styles.table_content_container}>
                {map(bagData.items, (item, index) => {
                  return <CheckoutItemComponent checkoutItem={item} />;
                })}
              </DivColumn>
            </InitialPageLoader>
          </DivColumn>

          <DivColumn>
            <DivColumn className={styles.order_summary_container}>
              <div className={styles.order_summary_title}>Order Summary</div>
              {/* <HorizontalBorder />
              <DivRow verticalCenter className={styles.coupon_input}>
                <img src={couponIcon} className={styles.icon} />
                <input
                  type="text"
                  placeholder="Apply Coupon"
                  className={styles.input}
                />
                <div className={styles.apply_button}>APPLY</div>
              </DivRow>
              <HorizontalBorder />

              <div className={styles.coupon_header_text}>Coupons</div>
              <DivColumn className={styles.coupon_description_container}>
                <DivColumn className={styles.coupon_content_container}>
                  <div className={styles.coupon_title}>40% OFF up to KD 29</div>
                  <div className={styles.coupon_description}>
                    On order of KD 400 and above. Valid once per user.
                  </div>
                </DivColumn>
                <HorizontalBorder />
                <DivRow className={styles.coupon_container}>
                  <div className={styles.coupon}>FREEITEM29</div>
                  <div className={styles.coupon_apply}>APPLY</div>
                </DivRow>
              </DivColumn> */}

              <HorizontalBorder />

              <DivColumn>
                <div className={styles.coupon_header_text}>Price Details</div>
                <DivRow className={styles.price_details_container}>
                  <div className={styles.title}>Bag Total</div>
                  <div className={styles.value}>
                    {bagData.formated_grand_total}
                  </div>
                </DivRow>
                <DivRow className={styles.price_details_container}>
                  <div className={styles.title}>Coupon Discount</div>
                  <div className={styles.value}>Apply Coupon</div>
                </DivRow>
                <DivRow className={styles.price_details_container}>
                  <div className={styles.title}>Order Total</div>
                  <div className={styles.value}>
                    {bagData.formated_sub_total}
                  </div>
                </DivRow>
                {/* <DivRow className={styles.price_details_container}>
                    <div className={styles.title}>Delivery Charges</div>
                    <div className={styles.value}>FREE</div>
                  </DivRow> */}

                <HorizontalBorder className={styles.price_divider} />

                <DivRow className={styles.price_details_container}>
                  <div className={styles.title}>Total</div>
                  <div className={styles.value}>
                    {bagData.formated_sub_total}
                  </div>
                </DivRow>
              </DivColumn>

              <CapsuleButton
                className={styles.capsule_button}
                onClick={this.navigateToPlaceOrder}
              >
                Select Delivery Address
              </CapsuleButton>
            </DivColumn>
          </DivColumn>
        </DivRow>
      </FullWidthContainer>
    );
  }
}

const mapStateToProps = state => {
  return {
    bagReducer: state.bagReducer
  };
};

const mapDispathToProps = dispatch => {
  return {
    getBagListAction: bindActionCreators(getBagListAction, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispathToProps
)(navigatorHoc(CheckoutPage));