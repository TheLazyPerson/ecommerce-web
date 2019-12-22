import React, { Component, Fragment } from "react";
import styles from "./new_home_page.module.scss";
import SectionedContainer from "CommonContainers/sectionedContainer";
import DivColumn from "CommonComponents/divColumn";
import DivRow from "CommonComponents/divRow";
import socialFacebookIcon from "Icons/social-facebook-icon-white.svg";
import socialInstagramIcon from "Icons/social-instagram-icon-white.svg";
import socialTwitterIcon from "Icons/social-twitter-icon-white.svg";
import arrowRightIcon from "Icons/arrow-right-icon-white.svg";
import shareIcon from "Icons/share-icon-black.svg";
import LanguageSelect from "CommonComponents/languageSelect";
import Swiper from "react-id-swiper";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import "swiper/css/swiper.css";
import {
  getExhibitionListAction,
  getUpcomingExhibitionListAction,
  getTrendingExhibitionListAction,
} from "Core/modules/homepage/homePageActions";
import InitialPageLoader from "CommonContainers/initialPageLoader";
import map from "lodash/map";
import SectionedHeader from "CommonContainers/sectionedHeader";
import appIcon from "Images/logo-image.png";
import navigatorHoc from "Hoc/navigatorHoc";
import exhibitionImage from "Images/exhibition-item-3.png";
import PageFooter from "CommonComponents/pageFooter";
import ExhibitionDetailComponent from "CommonComponents/exhibitionDetailComponent";
import MasonryGridContainer from 'CommonContainers/masonryGridContainer';
import UpcomingExhibitionComponent from "./upcomingExhibitionComponent";

class NewHomePage extends Component {
  state = {
    currentSlide: 0,
    showHeaderShadow: false,
  };

  componentDidMount() {
    window.addEventListener('scroll', this.hideNavBar);
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.hideNavBar);
  }

  hideNavBar = () =>{
    const scrollThreshold = 150;
    const { showHeaderShadow } = this.state;

    window.scrollY > scrollThreshold?
    !showHeaderShadow && this.setState({showHeaderShadow: true})
    :
    showHeaderShadow && this.setState({showHeaderShadow: false})
 }


  onClickAppIcon = () => {
    const { navigateTo } = this.props;
    navigateTo("");
  };

  onClickExhibitionItem = id => {
    const { navigateTo } = this.props;
    navigateTo("plp", {
      id
    });
  };

  render() {
    const params = {
      containerClass: "custom_container",
      on: {
        slideChange: () =>
          this.setState({ currentSlide: this.swiper.realIndex })
      }
    };

    const { currentSlide, showHeaderShadow } = this.state;
    const {
      homePageReducer: { exhibitionList, trendingExhibitionList, upcomingExhibitionList },
      getExhibitionListAction,
      getTrendingExhibitionListAction,
      getUpcomingExhibitionListAction
    } = this.props;
    const totalSlide = exhibitionList ? exhibitionList.length : 0;

    const isLeftButtonClickable = currentSlide !== 0;
    const isRightButtonClickable = currentSlide + 1 !== totalSlide;

    return (
      <DivColumn fillParent className={styles.page_container}>
        <DivColumn
          style={{
            backgroundImage: `url(https://source.unsplash.com/1024x102${currentSlide}/?product)`,

          }}
          fillSelfHorizontal
          className={styles.hero_section_container}
        >
          <InitialPageLoader initialPageApi={getExhibitionListAction}>
            <Fragment>
              <div className={styles.top_gradient}></div>
              <div className={styles.overlay_gradient}></div>
              <div className={styles.bottom_gradient}></div>

              <DivRow
                fillParent
                verticalCenter
                className={styles.hero_main_content}
              >
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
                <div className={styles.swiper_container}>
                  <Swiper
                    {...params}
                    getSwiper={swiper => {
                      this.swiper = swiper;
                    }}
                  >
                    {map(exhibitionList, (exhibition, index) => {
                      return (
                        <div className={styles.swiper_item} key={index}>
                          <ExhibitionDetailComponent
                            name={exhibition.title}
                            tags={["watches", "craft", "crafted"]}
                            description={exhibition.description}
                            className={styles.details_container}
                            setCenter
                          >
                            <DivRow
                              verticalCenter
                              horizontalCenter
                              className={styles.view_exhibition_button}
                              onClick={() =>
                                this.onClickExhibitionItem(exhibition.id)
                              }
                            >
                              Explore
                            </DivRow>
                          </ExhibitionDetailComponent>
                        </div>
                      );
                    })}
                  </Swiper>
                </div>
              </DivRow>

              <DivRow
                verticalCenter
                horizontalCenter
                className={styles.hero_bottom_content}
              >
                <DivRow fillParent verticalCenter horizontalCenter>
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
                  <div className={styles.pagination_count_container}>
                    <span className={styles.pagination_current_count}>
                      {currentSlide + 1}
                    </span>
                    <span className={styles.pagination_total_count}>
                      /{totalSlide}
                    </span>
                  </div>
                </DivRow>

                <img
                  src={shareIcon}
                  className={styles.share_icon}
                  alt="Share"
                />
              </DivRow>
            </Fragment>
          </InitialPageLoader>
        </DivColumn>

        <DivRow horizontalCenter fillSelfHorizontal className={styles.header_title}>
          TRENDING NOW
        </DivRow>

        <InitialPageLoader initialPageApi={getTrendingExhibitionListAction}>
          <MasonryGridContainer
            exhibitionList={trendingExhibitionList}
            showMoreTitle
          />
        </InitialPageLoader>

        <DivRow horizontalCenter fillSelfHorizontal className={styles.header_title}>
          KEEP AN EYE ON THESE EXHIBITIONS
        </DivRow>

        <InitialPageLoader initialPageApi={getUpcomingExhibitionListAction}>
          <UpcomingExhibitionComponent exhibitionList={upcomingExhibitionList} />
        </InitialPageLoader>

        <PageFooter />


        {/* Absolute position */}
        <DivRow className={`${styles.header_container} ${showHeaderShadow ? styles.header_background : ''}`}>
          <DivRow className={styles.header_icon_container}>
            <img
              src={appIcon}
              className={styles.app_icon}
              onClick={this.onClickAppIcon}
            />
            <div style={{
                fontWeight: 'bold',
                marginLeft: 6,
                marginRight: 32,
                color: 'white',
                cursor: 'pointer'
              }} onClick={this.onClickAppIcon}>MA3RATH</div>
            <LanguageSelect whiteColor />
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
    ),
    getTrendingExhibitionListAction: bindActionCreators(
      getTrendingExhibitionListAction,
      dispatch
    ),
    getUpcomingExhibitionListAction: bindActionCreators(
      getUpcomingExhibitionListAction,
      dispatch
    )
  };
};

export default connect(
  mapStateToProps,
  mapDispathToProps
)(navigatorHoc(NewHomePage));
