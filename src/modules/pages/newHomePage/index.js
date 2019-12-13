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
import appIcon from 'Icons/app-icon-black.svg';
import navigatorHoc from 'Hoc/navigatorHoc';
import exhibitionImage from 'Images/exhibition-item-3.png';
import PageFooter from 'CommonComponents/pageFooter';

class NewHomePage extends Component {
  state = {
    currentSlide: 0
  };

  onClickAppIcon = () => {
    const { navigateTo } = this.props;
    navigateTo('');
  }

  render() {
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
          <DivRow className={styles.hero_main_content}>

          </DivRow>

          <DivRow className={styles.hero_bottom_content}>

          </DivRow>
        </DivColumn>
        <PageFooter />
          


        {/* Absolute position */}
        <DivRow className={styles.header_container}>
          <DivRow className={styles.header_icon_container}>
            <img src={appIcon}  className={styles.app_icon} onClick={this.onClickAppIcon} />
            <LanguageSelect blackColor/>
          </DivRow>
          <SectionedHeader />
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
