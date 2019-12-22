import React, { Component } from "react";
import FullWidthContainer from "CommonContainers/fullwidthContainer";
import DivRow from "CommonComponents/divRow";
import DivColumn from "CommonComponents/divColumn";
import styles from "./checkout_page.module.scss";
import CheckoutItemComponent from "./checkoutItemComponent";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getBagListAction } from "Core/modules/bag/bagActions";
import InitialPageLoader from "CommonContainers/initialPageLoader";
import map from "lodash/map";
import size from "lodash/size";
import EmptyScreenComponent from "CommonComponents/emptyScreenComponent";
import navigatorHoc from "Hoc/navigatorHoc";
import OrderSummary from "../placeOrderPage/orderSummary";

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
            <OrderSummary 
              onSubmitButtonClick={this.navigateToPlaceOrder}
              submitButtonText="Select Delivery Address"
            />
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
