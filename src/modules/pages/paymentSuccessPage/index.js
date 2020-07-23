import React, { Component } from "react";
import FullWidthContainer from "CommonContainers/fullwidthContainer";
import DivColumn from "CommonComponents/divColumn";
import styles from "./payment_success.module.scss";
import CapsuleButton from "CommonComponents/capsuleButton";
import navigatorHoc from "Hoc/navigatorHoc";
import translatorHoc from "Hoc/translatorHoc";
import Checked from "Icons/checked.svg";

// import queryString from "query-string";

class PaymentSuccessPage extends Component {
  onClickActionButton = () => {
    const { navigateTo } = this.props;
    navigateTo("");
  };
  render() {
    //IN Case want to take id from payment success page
    // const parsed = queryString.parse(this.props.location.search);
    const { translate } = this.props;
    return (
      <FullWidthContainer>
        <DivColumn
          verticalCenter
          horizontalCenter
          className={styles.page_container}
        >
          <div className={styles.inner_content_container}>
            <div className={styles.circle}>
              <img alt="Success" className={styles.image} src={Checked} />
            </div>
            <div className={styles.title}>
              {translate("payment_success_page.title")}
            </div>
            <div className={styles.description}>
              {translate("payment_success_page.description")}
            </div>
            <CapsuleButton onClick={this.onClickActionButton}>
              {translate("payment_success_page.action_text")}
            </CapsuleButton>
          </div>
        </DivColumn>
      </FullWidthContainer>
    );
  }
}

export default navigatorHoc(translatorHoc(PaymentSuccessPage));
