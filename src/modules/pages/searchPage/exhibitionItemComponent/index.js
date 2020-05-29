import React, { Component } from "react";
import DivRow from "CommonComponents/divRow";
import DivColumn from "CommonComponents/divColumn";
import CapsuleButton from "CommonComponents/capsuleButton";
import CapsuleText from "CommonComponents/capsuleText";
import exhibitionImage1 from "Images/exhibition-item-1.jpg";
import styles from "./exhibition_item_component.module.scss";
import navigatorHoc from "Hoc/navigatorHoc";
import translatorHoc from "Hoc/translatorHoc";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

class ExhibitionItemComponent extends Component {
  onClickViewExhibition = () => {
    const { navigateTo, exhibition } = this.props;

    navigateTo("plp", {
      id: exhibition.id,
    });
  };

  render() {
    const { exhibition, isRTL, translate } = this.props;

    return (
      <DivRow
        className={`${styles.exhibition_item_container} ${
          isRTL ? styles.rtl : ""
        }`}
      >
        <img src={exhibition.base_image} className={styles.exhibition_image} />

        <DivColumn className={styles.exhibition_details_container}>
          <div className={styles.exhibition_name}>{exhibition.title}</div>
          <div className={styles.exhibition_details}>
            {exhibition.description}
          </div>

          <DivRow className={styles.capsule_container}>
            <CapsuleText text="watches" className={styles.capsule} />
            <CapsuleText text="craft" className={styles.capsule} />
            <CapsuleText text="crafted" className={styles.capsule} />
          </DivRow>

          <CapsuleButton
            className={styles.view_exhibition_button}
            onClick={this.onClickViewExhibition}
          >
            {translate("search_page.explore_exhibition")}
          </CapsuleButton>
        </DivColumn>
      </DivRow>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isUserSignedIn: state.signInReducer.isUserSignedIn,
    languageReducer: state.languageReducer,
  };
};

export default connect(
  mapStateToProps,
  null
)(navigatorHoc(translatorHoc(ExhibitionItemComponent)));
