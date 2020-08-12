import React, { Component } from "react";
import FullWidthContainer from "CommonContainers/fullwidthContainer";
import DivColumn from "CommonComponents/divColumn";
import styles from "./payment_failure.module.scss";
import CapsuleButton from "CommonComponents/capsuleButton";
import navigatorHoc from "Hoc/navigatorHoc";
// import queryString from "query-string";
import translatorHoc from "Hoc/translatorHoc";
import CloseIcon from "Icons/close-icon.svg";

class PaymentFailurePage extends Component {
  onClickActionButton = () => {
    const { navigateTo } = this.props;
    navigateTo("select-payment");
  };
  render() {
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
              <img alt="Failed" className={styles.image} src={CloseIcon} />
            </div>
            <div className={styles.title}>
              {translate("payment_failure_page.title")}
            </div>
            <div className={styles.description}>
              {translate("payment_failure_page.description")}
            </div>
            <CapsuleButton onClick={this.onClickActionButton}>
              {translate("payment_failure_page.action_text")}
            </CapsuleButton>
          </div>
        </DivColumn>
      </FullWidthContainer>
    );
  }
}

export default navigatorHoc(translatorHoc(PaymentFailurePage));
