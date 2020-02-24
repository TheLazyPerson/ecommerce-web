import React, { Component } from "react";
import FullWidthContainer from "CommonContainers/fullwidthContainer";
import DivColumn from "CommonComponents/divColumn";
import styles from "./payment_success.module.scss";
import InputTextComponent from "CommonComponents/InputTextComponent";
import InputCheckbox from "CommonComponents/InputCheckbox";
import CapsuleButton from "CommonComponents/capsuleButton";
import navigatorHoc from "Hoc/navigatorHoc";
import queryString from "query-string";

class PaymentSuccessPage extends Component {
  render() {
    const parsed = queryString.parse(this.props.location.search);

    return (
      <FullWidthContainer>
        <DivColumn
          verticalCenter
          horizontalCenter
          className={styles.page_container}
        >
          <div className={styles.title}>Order Confirmed</div>
          <div className={styles.description}>
            Thank you for ordering with us.
          </div>
          <CapsuleButton>Continue Shopping</CapsuleButton>
        </DivColumn>
      </FullWidthContainer>
    );
  }
}

export default navigatorHoc(PaymentSuccessPage);
