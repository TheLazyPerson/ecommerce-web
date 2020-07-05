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
import NavHeader from "../profilePages/components/navHeader";
import map from "lodash/map";
import navigatorHoc from "Hoc/navigatorHoc";
import {
  getAddressListAction,
  removeAddressAction,
} from "Core/modules/address/addressActions";
import {
  selectAddressAction,
  selectShippingMethodAction,
} from "Core/modules/checkout/checkoutActions";
import { selectDeliveryAddress } from "Core/modules/checkout/checkoutActions";
import {
  showSuccessFlashMessage,
  showInfoFlashMessage,
} from "Redux/actions/flashMessageActions";
import AddressItemComponent from "CommonComponents/addressItemComponent";
import AddAddressForm from "CommonContainers/addAddressForm";
import { pageStates } from "./constants";
import OrderSummary from "./orderSummary";
import isEmpty from "lodash/isEmpty";
import translatorHoc from "Hoc/translatorHoc";
class PlaceOrderPage extends Component {
  state = {
    currentScreen: pageStates.SELECT_ADDRESS,
    editAddressId: null,
  };

  navigateToWishlist = () => {
    const { navigateTo } = this.props;
    navigateTo("wishlist");
  };

  changePageState = (pageState) => {
    this.setState({ currentScreen: pageState });
  };

  handleEdit = (id) => {
    this.setState({
      editAddressId: id,
      currentScreen: pageStates.EDIT_ADDRESS,
    });
  };

  handleAddressRemove = (id) => {
    const {
      removeAddressAction,
      showSuccessFlashMessage,
      translate,
    } = this.props;

    removeAddressAction(id).then(({ payload }) => {
      if (payload.code === 200 || payload.code === 201) {
        showSuccessFlashMessage(translate("common.address_deleted"));
        window.location.reload(false);
      }
    });
  };

  onPlaceOrderClick = () => {
    const {
      checkoutReducer: { deliveryAddress, shippingMethod },
      signInReducer: { userDetails },
      selectAddressAction,
      selectShippingMethodAction,
      showInfoFlashMessage,
      navigateTo,
      translate,
    } = this.props;

    if (isEmpty(deliveryAddress)) {
      showInfoFlashMessage(translate("place_order_page.select_address"));
    } else if (isEmpty(shippingMethod)) {
      showInfoFlashMessage(translate("place_order_page.shipping_method"));
    } else {
      const selectAddressObject = {
        billing: {
          use_for_shipping: true,
          first_name: deliveryAddress.first_name,
          last_name: deliveryAddress.last_name,
          email: userDetails.email,
          address_id: deliveryAddress.id,
        },
      };

      const shippingObject = {
        shipping_method: shippingMethod,
      };

      selectAddressAction(selectAddressObject).then(({ payload }) => {
        if (payload.code == 200 || payload.code == 201) {
          selectShippingMethodAction(shippingObject).then(({ payload }) => {
            if (payload.code == 200 || payload.code == 201) {
              navigateTo("select-payment");
            }
          });
        }
      });
    }
  };

  onClickHeaderBack = () => {
    const { currentScreen } = this.state;
    if (currentScreen != pageStates.SELECT_ADDRESS) {
      return () => this.changePageState(pageStates.SELECT_ADDRESS);
    }
    return null;
  };

  render() {
    const {
      addressReducer: { addressList },
      checkoutReducer: { deliveryAddress },
      getAddressListAction,
      selectDeliveryAddress,
      translate,
      isRTL,
    } = this.props;
    const { currentScreen, editAddressId } = this.state;
    let navHeaderTitle = translate("place_order_page.title_select_address");

    if (currentScreen == pageStates.ADD_ADDRESS)
      navHeaderTitle = translate("place_order_page.title_add_address");
    else if (currentScreen == pageStates.ADD_ADDRESS)
      navHeaderTitle = translate("place_order_page.title_edit_address");

    return (
      <FullWidthContainer>
        <DivRow
          fillParent
          className={`${styles.checkout_container} ${isRTL ? styles.rtl : ""}`}
        >
          <DivColumn className={styles.cart_list_container}>
            <NavHeader
              title={navHeaderTitle}
              onBackClick={this.onClickHeaderBack()}
            >
              {currentScreen == pageStates.SELECT_ADDRESS && (
                <CapsuleButton
                  onClick={() => this.changePageState(pageStates.ADD_ADDRESS)}
                >
                  {translate("place_order_page.add_address")}
                </CapsuleButton>
              )}
            </NavHeader>

            {currentScreen == pageStates.SELECT_ADDRESS && (
              <InitialPageLoader
                initialPageApi={getAddressListAction}
                isEmpty={isEmpty(addressList)}
              >
                <DivColumn
                  fillParent
                  className={styles.table_content_container}
                >
                  {map(addressList, (address, index) => {
                    return (
                      <AddressItemComponent
                        address={address}
                        isSelected={address.id == deliveryAddress.id}
                        onClickEdit={this.handleEdit}
                        onClickRemove={this.handleAddressRemove}
                        onClickItem={() => selectDeliveryAddress(address)}
                      />
                    );
                  })}
                </DivColumn>
              </InitialPageLoader>
            )}
            {currentScreen == pageStates.EDIT_ADDRESS && (
              <AddAddressForm
                addressId={editAddressId}
                onSubmitComplete={() =>
                  this.changePageState(pageStates.SELECT_ADDRESS)
                }
                onClickCancel={() =>
                  this.changePageState(pageStates.SELECT_ADDRESS)
                }
              />
            )}
            {currentScreen == pageStates.ADD_ADDRESS && (
              <AddAddressForm
                onSubmitComplete={() =>
                  this.changePageState(pageStates.SELECT_ADDRESS)
                }
                onClickCancel={() =>
                  this.changePageState(pageStates.SELECT_ADDRESS)
                }
              />
            )}
          </DivColumn>

          <OrderSummary
            showChooseDelivery
            submitButtonText={translate("place_order_page.place_order")}
            onSubmitButtonClick={this.onPlaceOrderClick}
          />
        </DivRow>
      </FullWidthContainer>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    addressReducer: state.addressReducer,
    checkoutReducer: state.checkoutReducer,
    signInReducer: state.signInReducer,
    isRTL: state.languageReducer.isRTL,
  };
};

const mapDispathToProps = (dispatch) => {
  return {
    getAddressListAction: bindActionCreators(getAddressListAction, dispatch),
    removeAddressAction: bindActionCreators(removeAddressAction, dispatch),
    selectDeliveryAddress: bindActionCreators(selectDeliveryAddress, dispatch),
    selectAddressAction: bindActionCreators(selectAddressAction, dispatch),
    selectShippingMethodAction: bindActionCreators(
      selectShippingMethodAction,
      dispatch
    ),
    showInfoFlashMessage: bindActionCreators(showInfoFlashMessage, dispatch),
    showSuccessFlashMessage: bindActionCreators(
      showSuccessFlashMessage,
      dispatch
    ),
  };
};

export default connect(
  mapStateToProps,
  mapDispathToProps
)(navigatorHoc(translatorHoc(PlaceOrderPage)));
