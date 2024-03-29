import React, { Component } from "react";
import DivColumn from "CommonComponents/divColumn";
import DivRow from "CommonComponents/divRow";
import styles from "./upcoming_exhibition_component.module.scss";
import arrowRight from "Icons/arrow-right-point-icon-black.svg";
import transltorHoc from "Hoc/translatorHoc";
import { connect } from "react-redux";

class UpcomingExhibitionComponent extends Component {
  state = {
    currentSlide: 0,
  };

  onClickLeft = () => {
    const { currentSlide } = this.state;
    this.setState({
      currentSlide: currentSlide - 1,
    });
  };

  onClickRight = () => {
    const { currentSlide } = this.state;
    this.setState({
      currentSlide: currentSlide + 1,
    });
  };

  render() {
    const {
      exhibitionList,
      isRTL,
      languageReducer: { languageCode },
    } = this.props;
    const { currentSlide } = this.state;
    const totalSlide = exhibitionList.length;

    const exhibition = exhibitionList[currentSlide];
    const isLeftButtonClickable = currentSlide !== 0;
    const isRightButtonClickable = currentSlide + 1 !== totalSlide;

    return (
      <DivRow
        fillSelfHorizontal
        className={` ${styles.component_container} ${isRTL ? styles.rtl : ""} `}
      >
        <img
          alt={exhibition.translations[languageCode].title}
          className={styles.image}
          src={`${exhibition.base_image}`}
        />

        <DivColumn fillSelfHorizontal className={styles.content_container}>
          <DivColumn fillParent className={styles.contents}>
            <div className={styles.title}>
              {exhibition.translations[languageCode].title}
            </div>
            <div className={styles.divider}></div>
            <div className={styles.description}>
              {exhibition.translations[languageCode].description}
            </div>
            <div className={styles.time_text}>STARTING IN TWO DAYS</div>
          </DivColumn>
          <DivRow className={styles.arrow_container}>
            <img
              alt="Arrow Left"
              src={arrowRight}
              className={`${styles.arrow_left} ${
                !isLeftButtonClickable ? styles.disabled : ""
              }`}
              onClick={isLeftButtonClickable ? this.onClickLeft : null}
            />
            <img
              alt="Arrow Right"
              src={arrowRight}
              className={`${styles.arrow_right} ${
                !isRightButtonClickable ? styles.disabled : ""
              }`}
              onClick={isRightButtonClickable ? this.onClickRight : null}
            />
          </DivRow>
        </DivColumn>
      </DivRow>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isRTL: state.languageReducer.isRTL,
  };
};

export default connect(
  mapStateToProps,
  null
)(transltorHoc(UpcomingExhibitionComponent));
