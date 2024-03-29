import React, { Component } from "react";
import styles from "./homepage.module.scss";
import SectionedContainer from "CommonContainers/sectionedContainer";
import DivColumn from "CommonComponents/divColumn";
import DivRow from "CommonComponents/divRow";
import ExhibitionItemContainer from "./exhibitionItemContainer";
import socialFacebookIcon from "Icons/social-facebook-icon-white.svg";
import socialInstagramIcon from "Icons/social-instagram-icon-white.svg";
import socialTwitterIcon from "Icons/social-twitter-icon-white.svg";
import arrowRightIcon from "Icons/arrow-right-icon-black.svg";
import shareIcon from "Icons/share-icon-black.svg";
import LanguageSelect from "CommonComponents/languageSelect";
import Swiper from "react-id-swiper";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import "swiper/css/swiper.css";
import { getExhibitionListAction } from "Core/modules/homepage/homePageActions";
import InitialPageLoader from "CommonContainers/initialPageLoader";
import map from "lodash/map";

class HomePage extends Component {
  state = {
    currentSlide: 0
  };

  render() {
    const params = {
      containerClass: "custom_container",
      on: {
        slideChange: () =>
          this.setState({ currentSlide: this.swiper.realIndex })
      }
    };
    const { currentSlide } = this.state;
    const {
      homePageReducer: { exhibitionList },
      getExhibitionListAction
    } = this.props;
    const totalSlide = exhibitionList ? exhibitionList.length : 0;

    const isLeftButtonClickable = currentSlide !== 0;
    const isRightButtonClickable = (currentSlide + 1) !== totalSlide;

    return (
      <SectionedContainer isAbsoluteContent>
        <DivColumn className={styles.home_container}>
          <DivRow className={styles.content_container}>
            <DivColumn className={styles.social_container}>
              <div className={styles.social_item_container}>
                <img
                  src={socialFacebookIcon}
                  className={styles.social_image}
                  alt="Facebook"
                />
              </div>
              <div className={styles.social_item_container}>
                <img
                  src={socialTwitterIcon}
                  className={styles.social_image}
                  alt="Twitter"
                />
              </div>
              <div className={styles.social_item_container}>
                <img
                  src={socialInstagramIcon}
                  className={styles.social_image}
                  alt="Instagram"
                />
              </div>
            </DivColumn>
            <div
              style={{
                flex: 1,
                alignSelf: "stretch",
                overflow: "hidden",
                display: "flex"
              }}
            >
              <InitialPageLoader initialPageApi={getExhibitionListAction}>
                <Swiper
                  {...params}
                  getSwiper={swiper => {
                    this.swiper = swiper;
                  }}
                >
                  {map(exhibitionList, (exhibition, index) => {
                    return (
                      <div className={styles.swiper_item} key={index}>
                        <ExhibitionItemContainer exhibition={exhibition} />
                      </div>
                    );
                  })}
                </Swiper>
              </InitialPageLoader>
            </div>
          </DivRow>

          <DivRow className={styles.footer_container}>
            <DivRow className={styles.left_container}>
              <LanguageSelect />
            </DivRow>

            <DivRow className={styles.right_container}>
              <DivRow>
                <div
                  className={`${
                    !isLeftButtonClickable ? styles.non_clickable : ""
                  } ${styles.arrow_text}`}
                  onClick={() => this.swiper.slidePrev()}
                >
                  <img
                    src={arrowRightIcon}
                    className={styles.arrow_left}
                    alt="Arrow"
                  />
                  Prev
                </div>

                <div
                  className={`${
                    !isRightButtonClickable ? styles.non_clickable : ""
                  } ${styles.arrow_text}`}
                  onClick={() => this.swiper.slideNext()}
                >
                  Next{" "}
                  <img
                    src={arrowRightIcon}
                    className={styles.arrow_right}
                    alt="Arrow"
                  />
                </div>
              </DivRow>
              <div className={styles.pagination_count_container}>
                <span className={styles.pagination_current_count}>
                  {currentSlide + 1}
                </span>
                <span className={styles.pagination_total_count}>
                  /{totalSlide}
                </span>
              </div>
              <img src={shareIcon} className={styles.share_icon} alt="Share" />
            </DivRow>
          </DivRow>
        </DivColumn>
      </SectionedContainer>
    );
  }
}

const mapStateToProps = state => {
  return {
    homePageReducer: state.homePageReducer
  };
};

const mapDispathToProps = dispatch => {
  return {
    getExhibitionListAction: bindActionCreators(
      getExhibitionListAction,
      dispatch
    )
  };
};

export default connect(mapStateToProps, mapDispathToProps)(HomePage);
