import React, { Component } from "react";
import FullWidthContainer from "CommonContainers/fullwidthContainer";
import DivRow from "CommonComponents/divRow";
import DivColumn from "CommonComponents/divColumn";
import styles from "./place_order_page.module.scss";
import HorizontalBorder from "CommonComponents/horizontalBorder";
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
  state = {
    selectedAddressId: 0,
    selectedDeliveryType: "standard"
  };

  navigateToWishlist = () => {
    const { navigateTo } = this.props;
    navigateTo("wishlist");
  };

  onAddressSelect = address => {
    this.setState({
      selectedAddressId: address.id
    });
    console.log(address);
  };

  setDeliveryMethod = type => {
    console.log(type);
    this.setState({
      selectedDeliveryType: type
    });
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
    const {
      addressReducer: { addressList },
      getAddressListAction
    } = this.props;
    const { selectedAddressId, selectedDeliveryType } = this.state;

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
                    <DivColumn
                      className={`${styles.address_item} ${
                        selectedAddressId === address.id
                          ? styles.selected_address
                          : ""
                      }`}
                      onClick={() => this.onAddressSelect(address)}
                    >
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
                  );
                })}
              </DivColumn>
            </InitialPageLoader>
          </DivColumn>
          <DivColumn>
            <DivColumn className={styles.order_summary_container}>
              <div className={styles.order_summary_title}>Order Summary</div>
              <HorizontalBorder />

              <div className={styles.coupon_header_text}>
                Choose Delivery Speed
              </div>
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
