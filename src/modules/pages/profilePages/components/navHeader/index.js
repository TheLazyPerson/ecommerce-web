import React, { Component } from "react";
import DivColumn from "CommonComponents/divColumn";
import DivRow from "CommonComponents/divRow";
import styles from "./nav_header.module.scss";
import arrowLeftIcon from "Icons/arrow-right-icon-black.svg";
import { connect } from "react-redux";
import navigatorHoc from "Hoc/navigatorHoc";

class NavHeader extends Component {
  render() {
    const { title, children, onBackClick, isRTL } = this.props;

    return (
      <DivRow
        className={`${styles.header_container}  ${isRTL ? styles.rtl : ""}`}
      >
        <DivRow
          onClick={onBackClick ? onBackClick : null}
          horizontalCenter
          verticalCenter
          className={styles.header_title}
        >
          {onBackClick ? (
            <img src={arrowLeftIcon} className={styles.back_icon} />
          ) : null}

          {title}
        </DivRow>
        {children ? children : null}
      </DivRow>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isRTL: state.languageReducer.isRTL,
  };
};

const mapDispathToProps = (dispatch) => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispathToProps
)(navigatorHoc(NavHeader));
