import React, { Component } from "react";
import FullWidthContainer from "CommonContainers/fullwidthContainer";
import DivRow from "CommonComponents/divRow";
import DivColumn from "CommonComponents/divColumn";
import styles from "./place_order_page.module.scss";
import HorizontalBorder from "CommonComponents/horizontalBorder";
import couponIcon from "Icons/coupon-icon-white.svg";
import CapsuleButton from "CommonComponents/capsuleButton";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import InitialPageLoader from "CommonContainers/initialPageLoader";
import map from "lodash/map";
import navigatorHoc from "Hoc/navigatorHoc";
import {
  getAddressListAction,
  removeAddressAction
} from "Core/modules/address/addressActions";
import { showSuccessFlashMessage } from "Redux/actions/flashMessageActions";

class PlaceOrderPage extends Component {
  navigateToWishlist = () => {
    const { navigateTo } = this.props;
    navigateTo("wishlist");
  };

  onAddressSelect = address => {
    console.log(address.address1);
  };

  handleRemove = id => {
    const { removeAddressAction, showSuccessFlashMessage } = this.props;
    removeAddressAction(id).then(({ payload }) => {
      if (payload.code === 200 || payload.code === 201) {
        showSuccessFlashMessage("Address Deleted");
        window.location.reload(false);
      }
    });
  };

  render() {
    const {
      addressReducer: { addressList },
      getAddressListAction
    } = this.props;
    return (
      <FullWidthContainer>
        <DivRow fillParent className={styles.checkout_container}>
          <DivColumn className={styles.cart_list_container}>
            <DivRow className={styles.header_container}>
              <div className={styles.header_title}>SELECT ADDRESS</div>
              <CapsuleButton onClick={() => this.onAddressSelect()}>
                + ADD NEW ADDRESS
              </CapsuleButton>
            </DivRow>
            <InitialPageLoader initialPageApi={getAddressListAction}>
              <DivColumn fillParent className={styles.table_content_container}>
                {map(addressList, (address, index) => {
                  return (
                    <label>
                      <input
                        type="radio"
                        name="product"
                        class={styles.card_input_element}
                        onChange={() => this.onAddressSelect(address)}
                      />

                      <DivColumn className={styles.address_item}>
                        <DivColumn
                          fillParent
                          className={styles.item_content_container}
                        >
                          <div className={styles.item_name}>{address.name}</div>
                          <div className={styles.item_address}>
                            {address.address1}, <br />
                            {address.address2}, <br />
                            {address.city}, {address.state}, <br />
                            {address.country} - {address.postcode}
                          </div>
                          <div className={styles.item_phonenumber}>
                            Phone Number: {address.country_code}-
                            {address.phone_number}
                          </div>
                        </DivColumn>
                        <DivRow className={styles.action_container}>
                          <div
                            className={styles.action_button}
                            onClick={() => this.handleEdit(address.id)}
                          >
                            Edit
                          </div>
                          <div
                            className={styles.action_button}
                            onClick={() => this.handleRemove(address.id)}
                          >
                            Remove
                          </div>
                        </DivRow>
                      </DivColumn>
                    </label>
                  );
                })}
              </DivColumn>
            </InitialPageLoader>
          </DivColumn>
          <DivColumn>
            <DivColumn className={styles.order_summary_container}>
              {/* <div className={styles.order_summary_title}>Order Summary</div>
              <HorizontalBorder />
              <DivRow verticalCenter className={styles.coupon_input}>
                <img src={couponIcon} className={styles.icon} />
                <input
                  type="text"
                  placeholder="Apply Coupon"
                  className={styles.input}
                />
                <div className={styles.apply_button}>APPLY</div>
              </DivRow>
              <HorizontalBorder /> */}

              <div className={styles.coupon_header_text}>
                Choose Delivery Speed
              </div>
              <DivColumn className={styles.coupon_description_container}>
                <DivColumn className={styles.coupon_content_container}>
                  <div className={styles.coupon_title}>Standard Delivery</div>
                  <div className={styles.coupon_description}>
                    Get it by 22 Dec | Free Delivery.
                  </div>
                </DivColumn>
              </DivColumn>

              <DivColumn className={styles.coupon_description_container}>
                <DivColumn className={styles.coupon_content_container}>
                  <div className={styles.coupon_title}>Express Delivery</div>
                  <div className={styles.coupon_description}>
                    Get it by 18 Dec | Charges Applied.
                  </div>
                </DivColumn>
              </DivColumn>

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

              <CapsuleButton className={styles.capsule_button}>
                Continue
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
    addressReducer: state.addressReducer
  };
};

const mapDispathToProps = dispatch => {
  return {
    getAddressListAction: bindActionCreators(getAddressListAction, dispatch),
    removeAddressAction: bindActionCreators(removeAddressAction, dispatch),
    showSuccessFlashMessage: bindActionCreators(
      showSuccessFlashMessage,
      dispatch
    )
  };
};

export default connect(
  mapStateToProps,
  mapDispathToProps
)(navigatorHoc(PlaceOrderPage));
