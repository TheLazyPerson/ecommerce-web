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
import { checkoutBagAction, selectPaymentMethodAction } from 'Core/modules/checkout/checkoutActions';
import checkedIconBlack from 'Icons/checked-icon-black.svg';
import OrderSummary from '../placeOrderPage/orderSummary';
import translatorHoc from 'Hoc/translatorHoc';

class SelectPaymentPage extends Component {

  componentDidMount() {
    const {
      selectPaymentMethodAction,
      showSuccessFlashMessage,
      translate
    } = this.props;
    const paymentMethodObject = {
      payment: {
        method: 'cashondelivery'
      }
    };

    selectPaymentMethodAction(paymentMethodObject).then(({ payload })=> {
      if(payload.code == 200 || payload.code == 201) {
        showSuccessFlashMessage(translate('select_payment.cod_selected'));
      }
    })
  }

  placeOrder = () => {
    const {
      navigateTo,
      showSuccessFlashMessage,
      checkoutBagAction,
      translate,
    } = this.props;

    checkoutBagAction().then(({payload}) => {
      if(payload.code ==200 || payload.code == 201) {
       navigateTo('');
       showSuccessFlashMessage(translate('select_payment.order_placed'));
      }
    });
  }

  render() {
    const { translate } = this.props;

    return (
      <FullWidthContainer>
        <DivRow fillParent className={styles.checkout_container}>

          <DivColumn className={styles.cart_list_container}>
            <DivRow className={styles.header_container}>
              <div className={styles.header_title}>{translate('select_payment.choose_payment_method')}</div>
            </DivRow>

            <DivColumn fillParent className={styles.payment_method_container}>

              <DivRow verticalCenter className={styles.payment_method_item_container}>
                <DivColumn style={{flex:1}}>
                  <div className={styles.title}>{translate('select_payment.cod_title')}</div>
                  <div className={styles.description}>{translate('select_payment.cod_description')}</div>
                </DivColumn>
                <img src={checkedIconBlack} className={styles.icon}/>
              </DivRow>

            </DivColumn>            
          </DivColumn>

          <DivColumn>
            <OrderSummary 
              onSubmitButtonClick={this.placeOrder}
              submitButtonText={translate('select_payment.place_order_button')}
            />
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
    checkoutBagAction:  bindActionCreators(checkoutBagAction, dispatch),
    selectPaymentMethodAction: bindActionCreators(selectPaymentMethodAction, dispatch),
  };
};

export default connect(
  null,
  mapDispathToProps
)(navigatorHoc(translatorHoc(SelectPaymentPage)));
