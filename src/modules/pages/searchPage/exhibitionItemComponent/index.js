import React, { Component } from "react";
import DivRow from "CommonComponents/divRow";
import DivColumn from "CommonComponents/divColumn";
import CapsuleButton from "CommonComponents/capsuleButton";
import CapsuleText from "CommonComponents/capsuleText";
import exhibitionImage1 from "Images/exhibition-item-1.jpg";
import styles from "./exhibition_item_component.module.scss";
import navigatorHoc from "Hoc/navigatorHoc";

class ExhibitionItemComponent extends Component {
  onClickViewExhibition = () => {
    const { navigateTo, exhibition } = this.props;

    navigateTo("plp", {
      id: exhibition.id
    });
  };

  render() {
    const { exhibition } = this.props;

    return (
      <DivRow className={styles.exhibition_item_container}>
        <img src={`https://source.unsplash.com/100x10${exhibition.id}/?product`} className={styles.exhibition_image} />

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
            View Exhibition
          </CapsuleButton>
        </DivColumn>
      </DivRow>
    );
  }
}

export default navigatorHoc(ExhibitionItemComponent);
