import React, { Component } from "react";
import SectionedContainer from "CommonContainers/sectionedContainer";
import DivColumn from "CommonComponents/divColumn";
import DivRow from "CommonComponents/divRow";
import map from "lodash/map";
import styles from "./profile_overview.module.scss";
import { profileListItem } from "./profileConstants";
import SideNav from "./components/sideNav";
import navigatorHoc from "Hoc/navigatorHoc";
import { logoutAction } from "Core/modules/signin/actions/signinActions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { CookieService } from "Utils/cookieService";
import { USER_DATA_COOKIE } from "Constants/cookieConstants";
import { setBagCount } from "Core/modules/bag/bagActions";
import isEmpty from "lodash/isEmpty";

class ProfileOverview extends Component {
  onClickNavItemClick = slug => {
    const { navigateTo, logoutAction, setBagCount } = this.props;

    if (slug === "overview") {
      navigateTo("profile");
    } else if (slug === "profile") {
      navigateTo("profile-details");
    } else if (slug === "logout") {
      logoutAction().then(() => {
        CookieService.delete(USER_DATA_COOKIE);
        CookieService.delete("BAG_COUNT");
        setBagCount(0);
        navigateTo(""); // ToHomePage
      });
    } else {
      navigateTo(slug);
    }
  };

  render() {
    const {
      signInReducer: { userDetails }
    } = this.props;
    return (
      <SectionedContainer sideBarContainer={<SideNav />}>
        <DivColumn className={styles.profile_overview_container}>
          <DivColumn
            verticalCenter
            horizontalCenter
            className={styles.header_container}
          >
            <div className={styles.header_title}>MY ACCOUNT</div>
            <div className={styles.header_message}>
              Welcome, {!isEmpty(userDetails) && userDetails.first_name}.
            </div>
          </DivColumn>

          <DivRow className={styles.items_container}>
            {map(profileListItem, listItem => {
              if (listItem.title !== "Overview") {
                return (
                  <DivColumn
                    verticalCenter
                    horizontalCenter
                    className={styles.grid_item}
                    onClick={() => this.onClickNavItemClick(listItem.slug)}
                  >
                    <img
                      className={styles.item_image}
                      src={listItem.blackImage}
                      alt="item"
                    />
                    <div className={styles.item_title}>{listItem.title}</div>
                    <div className={styles.item_description}>
                      {listItem.description}
                    </div>
                  </DivColumn>
                );
              }
              return null;
            })}
          </DivRow>
        </DivColumn>
      </SectionedContainer>
    );
  }
}

const mapStateToProps = state => {
  return {
    signInReducer: state.signInReducer
  };
};

const mapDispathToProps = dispatch => {
  return {
    logoutAction: bindActionCreators(logoutAction, dispatch),
    setBagCount: bindActionCreators(setBagCount, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispathToProps
)(navigatorHoc(ProfileOverview));
