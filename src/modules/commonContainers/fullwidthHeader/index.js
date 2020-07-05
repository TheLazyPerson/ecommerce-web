import React, { Component } from "react";
import SectionedHeader from "CommonContainers/sectionedHeader";
import DivRow from "CommonComponents/divRow";
import DivColumn from "CommonComponents/divColumn";
import styles from "./fullwidth_header.module.scss";
import LanguageSelect from "CommonComponents/languageSelect";
import appIcon from "Icons/app-icon-black.svg";
import appIconWhite from "Icons/app-icon-white.svg";
import navigatorHoc from "Hoc/navigatorHoc";
import SearchBar from "CommonContainers/searchBar";
import { connect } from "react-redux";

class FullwidthHeader extends Component {
  onClickAppIcon = () => {
    const { navigateTo } = this.props;
    navigateTo("");
  };

  render() {
    const { children, whiteColor, className, isRTL } = this.props;

    return (
      <div
        fillSelfHorizontal
        className={`${styles.top_header} ${className}  ${
          isRTL ? styles.rtl : ""
        }`}
      >
        <DivRow className={`${styles.header_container}`}>
          <DivRow className={styles.header_icon_container}>
            <div
              style={whiteColor ? { color: "white" } : null}
              className={styles.app_name}
              onClick={this.onClickAppIcon}
            >
              <img
                src={whiteColor ? appIconWhite : appIcon}
                className={styles.app_icon}
                onClick={this.onClickAppIcon}
              />
            </div>
            <LanguageSelect blackColor={!whiteColor} />
          </DivRow>
          <SectionedHeader whiteColor={whiteColor} />
        </DivRow>
        <SearchBar
          className={styles.search_bar_container}
          whiteColor={whiteColor}
        />
      </div>
    );
  }
}

FullwidthHeader.defaultProps = {
  whiteColor: false,
};

const mapStateToProps = (state) => {
  return {
    isRTL: state.languageReducer.isRTL,
  };
};

export default connect(mapStateToProps, null)(navigatorHoc(FullwidthHeader));
