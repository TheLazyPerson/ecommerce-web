import React, { Component } from "react";
import styles from "./new_home_page.module.scss";
import SectionedContainer from "CommonContainers/sectionedContainer";
import DivColumn from "CommonComponents/divColumn";
import DivRow from "CommonComponents/divRow";
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
import SectionedHeader from 'CommonContainers/sectionedHeader';
import appIcon from 'Icons/app-icon-white.svg';
import navigatorHoc from 'Hoc/navigatorHoc';
import exhibitionImage from 'Images/exhibition-item-3.png';
import PageFooter from 'CommonComponents/pageFooter';
import ExhibitionDetailComponent from 'CommonComponents/exhibitionDetailComponent';

class NewHomePage extends Component {
  state = {
    currentSlide: 0
  };

  onClickAppIcon = () => {
    const { navigateTo } = this.props;
    navigateTo('');
  }

  render() {
    const currentSlide = 0;
    const totalSlide = 0; // exhibitionList ? exhibitionList.length : 0;

    const isLeftButtonClickable = currentSlide !== 0;
    const isRightButtonClickable = (currentSlide + 1) !== totalSlide;

    return (
      <DivColumn fillParent className={styles.page_container}>
        <DivColumn
         style={{
           backgroundImage: `url("${exhibitionImage}")`,
           backgroundPosition: 'center'
         }}
         fillSelfHorizontal
         className={styles.hero_section_container}
        >
          <DivRow fillParent verticalCenter className={styles.hero_main_content}>
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

            <ExhibitionDetailComponent
              title="Exibition 1"
              name="The Craft Show"
              tags={["watches", "craft", "crafted"]}
              description="The Craft Show will display products like Handcrafted Watches, Products, Farsis, Palazzos,  Culottes and Products.With love, and much more."
              className={styles.details_container}
              setCenter
            >
            <DivRow verticalCenter horizontalCenter className={styles.view_exhibition_button}>
              Explore
            </DivRow>
            </ExhibitionDetailComponent>
          </DivRow>

          <DivRow verticalCenter horizontalCenter className={styles.hero_bottom_content}>

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

        </DivColumn>
        <PageFooter />
          


        {/* Absolute position */}
        <DivRow className={styles.header_container}>
          <DivRow className={styles.header_icon_container}>
            <img src={appIcon}  className={styles.app_icon} onClick={this.onClickAppIcon} />
            <LanguageSelect whiteColor/>
          </DivRow>
          <SectionedHeader whiteColor />
        </DivRow>

      </DivColumn>
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

export default connect(mapStateToProps, mapDispathToProps)(navigatorHoc(NewHomePage));
