import React, { Component } from "react";
import styles from "./sectioned_header.module.scss";
import DivRow from "CommonComponents/divRow";
import DivColumn from "CommonComponents/divColumn";
import bagIcon from "Icons/cart-bag-icon-black.svg";
import bagIconWhite from "Icons/cart-bag-icon-white.svg";
import bookmarkIcon from "Icons/bookmark-icon-black.svg";
import bookmarkIconWhite from "Icons/bookmark-icon-white.svg";
import { logoutAction } from "Core/modules/signin/actions/signinActions";
import navigatorHoc from "Hoc/navigatorHoc";
import profileIconBlack from "Icons/profile-icon-black.svg";
import profileIconWhite from "Icons/profile-icon-white.svg";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { CookieService } from "Utils/cookieService";
import { USER_DATA_COOKIE } from "Constants/cookieConstants";
import translatorHoc from "Hoc/translatorHoc";
import { setBagCount } from "Core/modules/bag/bagActions";
import SearchBar from "../searchBar";
import { SELLER_LINK } from "Constants/applicationLinksConstansts";

class SectionedHeader extends Component {
  clickedOnSearchItem = false;

  state = {
    searchText: "",
    showSearchResult: false,
  };

  onClickProfile = () => {
    const { navigateTo } = this.props;
    navigateTo("profile");
  };

  onClickWishlist = () => {
    const { navigateTo } = this.props;
    navigateTo("wishlist");
  };

  onClickBag = () => {
    const { navigateTo } = this.props;
    navigateTo("checkout");
  };

  onClickLoginOrLogoutHandler = () => {
    const {
      logoutAction,
      isUserSignedIn,
      navigateTo,
      setBagCount,
    } = this.props;

    if (isUserSignedIn) {
      logoutAction().then(() => {
        CookieService.delete(USER_DATA_COOKIE);
        CookieService.delete("BAG_COUNT");
        setBagCount(0);
        navigateTo(""); // ToHomePage
      });
    } else {
      navigateTo("signin");
    }
  };

  render() {
    const {
      isUserSignedIn,
      bagCount,
      whiteColor,
      translate,
      isRTL,
    } = this.props;

    return (
      <DivRow
        className={`${styles.header_container}  ${isRTL ? styles.rtl : ""}`}
      >
        <SearchBar
          className={styles.search_bar_container}
          whiteColor={whiteColor}
        />

        <DivRow verticalCenter>
          {!isUserSignedIn && (
            <a
              className={`${styles.sigin_link} ${
                styles.header_item_container
              } ${whiteColor ? styles.is_white : ""}`}
              href={SELLER_LINK}
            >
              {translate("common.seller")}
            </a>
          )}
          <DivRow
            className={styles.header_item_container}
            verticalCenter
            onClick={this.onClickBag}
          >
            <img
              alt="Bag Icon"
              src={whiteColor ? bagIconWhite : bagIcon}
              className={styles.header_icon}
            />
            <DivRow
              verticalCenter
              horizontalCenter
              className={styles.bag_count}
            >
              {bagCount != null ? bagCount : 0}
            </DivRow>
          </DivRow>
          <img
            alt="Wishlist Icon"
            className={`${styles.header_icon} ${styles.header_item_container}`}
            src={whiteColor ? bookmarkIconWhite : bookmarkIcon}
            onClick={this.onClickWishlist}
          />

          <div
            style={{ height: "unset" }}
            className={`${styles.header_icon} ${styles.header_item_container} ${styles.profile_header_item}`}
          >
            <img
              alt="Profile Pic"
              className={styles.profile_pic}
              src={whiteColor ? profileIconWhite : profileIconBlack}
            />
            {/* <img src={arrowDownIcon} className={styles.arrow_down_icon} /> */}
          </div>

          {/* {isUserSignedIn ? (
            <div
              style={{ height: "unset" }}
              className={`${styles.header_icon} ${styles.header_item_container} ${styles.profile_header_item}`}
              onClick={this.onClickProfile}
            >
              <img
                className={styles.profile_pic}
                src={whiteColor ? profileIconWhite : profileIconBlack}
              />
            </div>
          ) : (
              <a
                className={`${styles.sigin_link} ${
                  styles.header_item_container
                  } ${whiteColor ? styles.is_white : ""}`}
                href="/signin"
              >
                {translate('header.login')}
              </a>
            )} */}
          {/* {!isUserSignedIn && (
            <a
              className={`${styles.sigin_link} ${
                styles.header_item_container
                } ${whiteColor ? styles.is_white : ""}`}
              href="/signup"
            >
              {translate('header.register')}
            </a>
          )} */}
          {/* <img src={hamburgerMenuIcon} className={`${styles.hamburger_icon} ${styles.header_item_container}`} /> */}
          <DivColumn className={styles.header_overlay}>
            <div className={styles.header_item} onClick={this.onClickProfile}>
              <div className={styles.text}>
                {translate("common.my_profile")}
              </div>
            </div>
            <DivRow
              style={{ justifyContent: "space-between" }}
              className={styles.header_item}
              onClick={this.onClickBag}
            >
              <div className={styles.text}>{translate("common.bag")}</div>

              <DivRow
                verticalCenter
                horizontalCenter
                className={styles.bag_count}
              >
                {bagCount != null ? bagCount : 0}
              </DivRow>
            </DivRow>
            <div className={styles.header_item} onClick={this.onClickWishlist}>
              <div className={styles.text}>{translate("common.wishlist")}</div>
            </div>
            <div
              className={styles.header_item}
              onClick={this.onClickLoginOrLogoutHandler}
            >
              <div className={styles.text}>
                {isUserSignedIn
                  ? translate("header.logout")
                  : translate("header.login")}
              </div>
            </div>
          </DivColumn>
        </DivRow>
      </DivRow>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isUserSignedIn: state.signInReducer.isUserSignedIn,
    bagCount: state.bagReducer.bagCount,
    isRTL: state.languageReducer.isRTL,
  };
};

const mapDispathToProps = (dispatch) => {
  return {
    logoutAction: bindActionCreators(logoutAction, dispatch),
    setBagCount: bindActionCreators(setBagCount, dispatch),
  };
};

export default connect(
  mapStateToProps,
  mapDispathToProps
)(translatorHoc(navigatorHoc(SectionedHeader)));
