import React, { Component } from "react";
import DivColumn from "CommonComponents/divColumn";
import DivRow from "CommonComponents/divRow";
import styles from "./upcoming_exhibition_component.module.scss";
import arrowRight from "Icons/arrow-right-point-icon-black.svg";

class UpcomingExhibitionComponent extends Component {
  state = {
    currentSlide: 0
  };

  onClickLeft = () => {
    const { currentSlide } = this.state;
    this.setState({
      currentSlide: currentSlide - 1
    });
  }

  onClickRight = () => {
    const { currentSlide } = this.state;
    this.setState({
      currentSlide: currentSlide + 1
    });
  }

  render() {
    const { exhibitionList } = this.props;
    const { currentSlide } = this.state;
    const totalSlide = exhibitionList.length;

    const exhibition = exhibitionList[currentSlide];
    const isLeftButtonClickable = currentSlide !== 0;
    const isRightButtonClickable = currentSlide + 1 !== totalSlide;

    return (
      <DivRow fillSelfHorizontal className={styles.component_container}>
        <img
          className={styles.image}
          src={`https://source.unsplash.com/500x50${currentSlide}/?product`}
        />
        
        <DivColumn fillSelfHorizontal className={styles.content_container}>
          <DivColumn fillParent className={styles.contents}>
            <div className={styles.title}>{exhibition.title}</div>
            <div className={styles.divider}></div>
            <div className={styles.description}>{exhibition.description}</div>
            <div className={styles.time_text}>STARTING IN TWO DAYS</div>
          </DivColumn>
          <DivRow className={styles.arrow_container}>
            <img
              src={arrowRight}
              className={`${styles.arrow_left} ${!isLeftButtonClickable ? styles.disabled : ''}`}
              onClick={isLeftButtonClickable ? this.onClickLeft : null}
            />
            <img 
              src={arrowRight}
              className={`${styles.arrow_right} ${!isRightButtonClickable ? styles.disabled : ''}`}
              onClick={isRightButtonClickable ? this.onClickRight : null}
            />
          </DivRow>

        </DivColumn>

      </DivRow>
    );
  }
}
// https://source.unsplash.com/500x500/?product
export default UpcomingExhibitionComponent;
