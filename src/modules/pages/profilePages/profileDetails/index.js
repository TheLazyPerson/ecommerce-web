import React, { Component } from "react";
import SectionedContainer from "CommonContainers/sectionedContainer";
import DivColumn from "CommonComponents/divColumn";
import DivRow from "CommonComponents/divRow";
import SideNav from "../components/sideNav";
import styles from "./profile_details.module.scss";
import NavHeader from "../components/navHeader";
import map from "lodash/map";
import CapsuleButton from "CommonComponents/capsuleButton";
import SecondaryCapsuleButton from "CommonComponents/secondaryCapsuleButton";
import { getProfileDetailsAction } from "Core/modules/profiledetails/profileDetailsActions";
import InitialPageLoader from "CommonContainers/initialPageLoader";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import navigatorHoc from "Hoc/navigatorHoc";
import translatorHoc from "Hoc/translatorHoc";

class ProfileDetails extends Component {
  navigateToChangePass = () => {
    const { navigateTo } = this.props;
    navigateTo("change-password");
  };

  navigateToEditProfile = () => {
    const { navigateTo } = this.props;
    navigateTo("edit-profile");
  };

  render() {
    const {
      profileDetailsReducer: { userDetails },
      getProfileDetailsAction,
      isRTL,
      translate,
    } = this.props;

    return (
      <SectionedContainer sideBarContainer={<SideNav />}>
        <DivColumn
          className={`${styles.details_container} ${isRTL ? styles.rtl : ""}`}
        >
          <NavHeader title={translate("profile_details_list.header_title")}>
            <DivRow className={styles.header_button_container}>
              <SecondaryCapsuleButton
                className={styles.reset_password_button}
                onClick={this.navigateToChangePass}
              >
                {translate("profile_details_list.change_password")}
              </SecondaryCapsuleButton>
              <CapsuleButton onClick={this.navigateToEditProfile}>
                {translate("profile_details_list.edit_details")}
              </CapsuleButton>
            </DivRow>
          </NavHeader>

          <InitialPageLoader initialPageApi={getProfileDetailsAction}>
            <DivColumn fillParent>
              <DivColumn className={styles.field_container}>
                <div className={styles.title}>
                  {translate("profile_details_list.first_name")}
                </div>
                <div className={styles.value}>
                  {userDetails.first_name
                    ? userDetails.first_name
                    : "Not Available"}
                </div>
              </DivColumn>
              <DivColumn className={styles.field_container}>
                <div className={styles.title}>
                  {translate("profile_details_list.last_name")}
                </div>
                <div className={styles.value}>
                  {userDetails.last_name
                    ? userDetails.last_name
                    : "Not Available"}
                </div>
              </DivColumn>
              <DivColumn className={styles.field_container}>
                <div className={styles.title}>
                  {translate("profile_details_list.email")}
                </div>
                <div className={styles.value}>
                  {userDetails.email ? userDetails.email : "Not Available"}
                </div>
              </DivColumn>
              <DivColumn className={styles.field_container}>
                <div className={styles.title}>
                  {translate("profile_details_list.phone_number")}
                </div>
                <div className={styles.value}>
                  {userDetails.phone ? userDetails.phone : "Not Available"}
                </div>
              </DivColumn>
              <DivColumn className={styles.field_container}>
                <div className={styles.title}>
                  {translate("profile_details_list.gender")}
                </div>
                <div className={styles.value}>
                  {userDetails.gender ? userDetails.gender : "Not Available"}
                </div>
              </DivColumn>
              <DivColumn className={styles.field_container}>
                <div className={styles.title}>
                  {translate("profile_details_list.birthday")}
                </div>
                <div className={styles.value}>
                  {userDetails.birthday
                    ? userDetails.birthday
                    : "Not Available"}
                </div>
              </DivColumn>
            </DivColumn>
          </InitialPageLoader>
        </DivColumn>
      </SectionedContainer>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    profileDetailsReducer: state.profileDetailsReducer,
  };
};

const mapDispathToProps = (dispatch) => {
  return {
    getProfileDetailsAction: bindActionCreators(
      getProfileDetailsAction,
      dispatch
    ),
  };
};

export default connect(
  mapStateToProps,
  mapDispathToProps
)(navigatorHoc(translatorHoc(ProfileDetails)));
