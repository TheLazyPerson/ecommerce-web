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
  removeAddressAction
} from "Core/modules/address/addressActions";
import { showSuccessFlashMessage } from "Redux/actions/flashMessageActions";
import AddressItemComponent from "CommonComponents/addressItemComponent";
import AddAddressForm from "CommonContainers/addAddressForm";
import { pageStates } from "./constants";
import OrderSummary from "./orderSummary";

class PlaceOrderPage extends Component {
  state = {
    selectedAddressId: 0,
    currentScreen: pageStates.SELECT_ADDRESS
  };

  navigateToWishlist = () => {
    const { navigateTo } = this.props;
    navigateTo("wishlist");
  };

  changePageState = (pageState) => {
    this.setState({ currentScreen: pageState });
  }

  handleEdit = id => {};

  onAddressSelect = address => {
    this.setState({
      selectedAddressId: address.id
    });
  };

  handleAddressRemove = id => {
    const { removeAddressAction, showSuccessFlashMessage } = this.props;
    removeAddressAction(id).then(({ payload }) => {
      if (payload.code === 200 || payload.code === 201) {
        showSuccessFlashMessage("Address Deleted");
        window.location.reload(false);
      }
    });
  };

  onClickHeaderBack = () => {
    const { currentScreen } = this.state;
    
    if(currentScreen == pageStates.ADD_ADDRESS) {
      return () => this.changePageState(pageStates.SELECT_ADDRESS);
    }

    return null;
  }

  render() {
    const {
      addressReducer: { addressList },
      getAddressListAction
    } = this.props;
    const { selectedAddressId, currentScreen } = this.state;
    let navHeaderTitle = "SELECT ADDRESS";

    if (currentScreen == pageStates.ADD_ADDRESS) navHeaderTitle = "ADD ADDRESS";

    return (
      <FullWidthContainer>
        <DivRow fillParent className={styles.checkout_container}>
          <DivColumn className={styles.cart_list_container}>

            <NavHeader 
              title={navHeaderTitle}
              onBackClick={this.onClickHeaderBack()}
            >
              {currentScreen == pageStates.SELECT_ADDRESS && (
                <CapsuleButton onClick={() => this.changePageState(pageStates.ADD_ADDRESS)}>
                  + ADD NEW ADDRESS
                </CapsuleButton>
              )}
            </NavHeader>

            {currentScreen == pageStates.SELECT_ADDRESS && (
              <InitialPageLoader initialPageApi={getAddressListAction}>
                <DivColumn
                  fillParent
                  className={styles.table_content_container}
                >
                  {map(addressList, (address, index) => {
                    return (
                      <AddressItemComponent
                        address={address}
                        isSelected={address.id == selectedAddressId}
                        onClickEdit={this.handleEdit}
                        onClickRemove={this.handleAddressRemove}
                        onClickItem={this.onAddressSelect}
                      />
                    );
                  })}
                </DivColumn>
              </InitialPageLoader>
            )}
            {currentScreen == pageStates.ADD_ADDRESS && <AddAddressForm />}
          </DivColumn>
          <OrderSummary />
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
