import React, { Component } from "react";
import PropTypes from "prop-types";
import Masonry from "react-masonry-component";
import DivColumn from "CommonComponents/divColumn";
import DivRow from "CommonComponents/divRow";
import exhibitionImage from "Images/exhibition-item-3.png";
import styles from "./upcoming_exhibition_component.module.scss";
import map from "lodash/map";
import arrowRight from 'Icons/arrow-right-point-icon-black.svg';

class UpcomingExhibitionComponent extends Component {
  render() {
    const { exhibitionList } = this.props;

    return (
      <DivRow fillSelfHorizontal className={styles.component_container}>
        <DivRow className={styles.content_container}>
          <DivColumn className={styles.contents}>
            <div className={styles.title}>HOME DECORATION EXHIBITION</div>
            <div className={styles.divider}></div>
            <div className={styles.description}>
              The Craft Show will display products like Handcrafted Watches,
              Products, Farsis, Palazzos, Culottes and Products.With love, and
              much more.
            </div>
            <div className={styles.time_text}>STARTING IN TWO DAYS</div>
          </DivColumn>
        </DivRow>
        <img
          className={styles.image}
          src="https://source.unsplash.com/500x500/?product"
        />
        <DivRow className={styles.arrow_container}>
          <img src={arrowRight} className={styles.arrow_left} />
          <img src={arrowRight} className={styles.arrow_right} />
        </DivRow>
      </DivRow>
    );
  }
}
// https://source.unsplash.com/500x500/?product
export default UpcomingExhibitionComponent;
