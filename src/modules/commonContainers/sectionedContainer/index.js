/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component, Fragment } from "react";
import SectionedHeader from "CommonContainers/sectionedHeader";
import DivRow from "CommonComponents/divRow";
import DivColumn from "CommonComponents/divColumn";
import styles from "./sectioned_container.module.scss";
import appIcon from "Icons/app-icon-white.svg";
import LanguageSelect from "CommonComponents/languageSelect";
import navigatorHoc from "Hoc/navigatorHoc";
import Drawer from "@material/react-drawer";
import "@material/react-drawer/dist/drawer.css";
import hamburgerIconBlack from "Icons/hamburger-menu-icon-black.svg";
import SearchBar from "CommonContainers/searchBar";
import PageFooter from "CommonComponents/pageFooter";
import { connect } from "react-redux";

class SectionedContainer extends Component {
  state = {
    openDrawer: false,
  };

  onClickAppIcon = () => {
    const { navigateTo } = this.props;
    navigateTo("");
  };

  onClickHamburgerMenu = () => {
    this.setState({ openDrawer: true });
  };

  render() {
    const { isAbsoluteContent, sideBarContainer, children, isRTL } = this.props;
    const { openDrawer } = this.state;

    const sideContainer = (
      <Fragment>
        <DivRow className={styles.header_container}>
          <div
            style={{
              fontWeight: "bold",
              marginLeft: 6,
              color: "white",
              cursor: "pointer",
            }}
            onClick={this.onClickAppIcon}
          >
            <img
              alt="Home Expo"
              src={appIcon}
              className={styles.app_icon}
              onClick={this.onClickAppIcon}
            />
          </div>
        </DivRow>

        <DivColumn className={styles.side_content_container}>
          {sideBarContainer}
        </DivColumn>
        <DivRow
          verticalCenter
          horizontalCenter
          className={styles.side_footer_container}
        >
          <LanguageSelect />
        </DivRow>
      </Fragment>
    );

    return (
      <Fragment>
        <DivRow
          className={`${styles.page_container} ${isRTL ? styles.rtl : ""}`}
        >
          <Drawer
            modal
            open={openDrawer}
            onClose={() => {
              this.setState({ openDrawer: false });
            }}
          >
            <DivColumn fillParent className={styles.drawer_container}>
              {sideContainer}
            </DivColumn>
            {/* Required other wise app crashes .. one focusable item required */}
            <a href="#"></a>
          </Drawer>

          <DivColumn className={styles.left_container}>
            {sideContainer}
          </DivColumn>

          <DivColumn className={styles.right_container}>
            <DivColumn
              fillSelfHorizontal
              className={styles.top_header_container}
            >
              <DivRow verticalCenter className={styles.header_container}>
                {/* only Visible on responive */}
                <img
                  alt="Hamburger Icon"
                  src={hamburgerIconBlack}
                  className={styles.hamburger_menu_icon}
                  onClick={this.onClickHamburgerMenu}
                />

                <SectionedHeader />
              </DivRow>
              <SearchBar
                className={styles.search_bar_container}
                // whiteColor={whiteColor}
              />
            </DivColumn>
            {/* children/content */}
            <DivColumn fillParent className={styles.content_container}>
              {!isAbsoluteContent && children}
            </DivColumn>
          </DivColumn>

          {isAbsoluteContent && children}
        </DivRow>
        <PageFooter className={styles.page_footer} />
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isRTL: state.languageReducer.isRTL,
  };
};

export default connect(mapStateToProps, null)(navigatorHoc(SectionedContainer));
