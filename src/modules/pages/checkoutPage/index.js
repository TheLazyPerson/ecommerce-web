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
import translatorHoc from "Hoc/translatorHoc";

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
      getBagListAction,
      translate,
      isRTL,
    } = this.props;
    return (
      <FullWidthContainer>
        <DivRow
          fillParent
          className={`${styles.checkout_container} ${isRTL ? styles.rtl : ""}`}
        >
          <DivColumn className={styles.cart_list_container}>
            <DivRow className={styles.table_header}>
              <div className={styles.flex_2}>
                {translate("checkout_page.header_product")}
              </div>
              <div className={`${styles.flex_1} ${styles.exhibition_header}`}>
                {translate("checkout_page.header_exhibition")}
              </div>
              <div className={styles.flex_1}>
                {translate("checkout_page.header_price")}
              </div>
              <div className={styles.flex_1}>
                {translate("checkout_page.header_quantity")}
              </div>
              <div className={`${styles.flex_1} ${styles.total_price_header}`}>
                {translate("checkout_page.header_total_price")}
              </div>
            </DivRow>

            <InitialPageLoader
              isEmpty={!size(bagData.items)}
              initialPageApi={getBagListAction}
              customEmptyScreen={
                <EmptyScreenComponent
                  title={translate("checkout_page.empty_title")}
                  description={translate("checkout_page.empty_description")}
                  buttonTitle={translate("checkout_page.go_to_wishlist")}
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
              submitButtonText={translate(
                "checkout_page.select_delivery_address"
              )}
            />
          </DivColumn>
        </DivRow>
      </FullWidthContainer>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    bagReducer: state.bagReducer,
    isRTL: state.languageReducer.isRTL,
  };
};

const mapDispathToProps = (dispatch) => {
  return {
    getBagListAction: bindActionCreators(getBagListAction, dispatch),
  };
};

export default connect(
  mapStateToProps,
  mapDispathToProps
)(navigatorHoc(translatorHoc(CheckoutPage)));
