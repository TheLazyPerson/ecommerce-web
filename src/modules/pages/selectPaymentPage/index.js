import React, { Component } from "react";
import FullWidthContainer from "CommonContainers/fullwidthContainer";
import DivRow from "CommonComponents/divRow";
import DivColumn from "CommonComponents/divColumn";
import styles from "./select_payment_page.module.scss";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import navigatorHoc from "Hoc/navigatorHoc";
import { showSuccessFlashMessage } from "Redux/actions/flashMessageActions";
import {
  checkoutBagAction,
  selectPaymentMethodAction,
} from "Core/modules/checkout/checkoutActions";
import { getPaymentAction } from "Core/modules/payment/paymentActions";
import checkedIconBlack from "Icons/checked-icon-black.svg";
import OrderSummary from "../placeOrderPage/orderSummary";
import translatorHoc from "Hoc/translatorHoc";

class SelectPaymentPage extends Component {
  componentDidMount() {
    const {
      selectPaymentMethodAction,
      showSuccessFlashMessage,
      translate,
    } = this.props;
    const paymentMethodObject = {
      payment: {
        method: "knet",
      },
    };

    selectPaymentMethodAction(paymentMethodObject).then(({ payload }) => {
      if (payload.code === 200 || payload.code === 201) {
        showSuccessFlashMessage(
          translate("select_payment.payment_gateway_selected")
        );
      }
    });
  }

  placeOrder = () => {
    const { checkoutBagAction, getPaymentAction } = this.props;

    checkoutBagAction().then(({ payload }) => {
      if (payload.code === 200 || payload.code === 201) {
        getPaymentAction(payload.data.id).then(({ payload }) => {
          if (payload.code === 200 || payload.code === 201) {
            window.location.href = payload.data.paymentURL;
          }
        });
      }
    });
  };

  render() {
    const { translate, isRTL } = this.props;

    return (
      <FullWidthContainer>
        <DivRow
          fillParent
          className={`${styles.checkout_container} ${isRTL ? styles.rtl : ""}`}
        >
          <DivColumn className={styles.cart_list_container}>
            <DivRow className={styles.header_container}>
              <div className={styles.header_title}>
                {translate("select_payment.choose_payment_method")}
              </div>
            </DivRow>

            <DivColumn fillParent className={styles.payment_method_container}>
              <DivRow
                verticalCenter
                className={styles.payment_method_item_container}
              >
                <DivColumn style={{ flex: 1 }}>
                  <div className={styles.title}>
                    {translate("select_payment.payment_gateway_title")}
                  </div>
                  <div className={styles.description}>
                    {translate("select_payment.payment_gateway_description")}
                  </div>
                </DivColumn>
                <img
                  alt="checkbox icon"
                  src={checkedIconBlack}
                  className={styles.icon}
                />
              </DivRow>
            </DivColumn>
          </DivColumn>

          <DivColumn>
            <OrderSummary
              onSubmitButtonClick={this.placeOrder}
              submitButtonText={translate("select_payment.place_order_button")}
            />
          </DivColumn>
        </DivRow>
      </FullWidthContainer>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isRTL: state.languageReducer.isRTL,
    languageReducer: state.languageReducer,
  };
};

const mapDispathToProps = (dispatch) => {
  return {
    showSuccessFlashMessage: bindActionCreators(
      showSuccessFlashMessage,
      dispatch
    ),
    checkoutBagAction: bindActionCreators(checkoutBagAction, dispatch),
    getPaymentAction: bindActionCreators(getPaymentAction, dispatch),
    selectPaymentMethodAction: bindActionCreators(
      selectPaymentMethodAction,
      dispatch
    ),
  };
};

export default connect(
  mapStateToProps,
  mapDispathToProps
)(navigatorHoc(translatorHoc(SelectPaymentPage)));
