import React, { Component } from "react";
import DivRow from "CommonComponents/divRow";
import DivColumn from "CommonComponents/divColumn";
import translatorHoc from "Hoc/translatorHoc";
import MasonryGridContainer from "CommonContainers/masonryGridContainer";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import PageFooter from "CommonComponents/pageFooter";
import FullWidthContainer from "CommonContainers/fullwidthContainer";
import styles from "./trending_exhibitions_page.module.scss";
import InitialPageLoader from "CommonContainers/initialPageLoader";
import { getTrendingExhibitionListAction } from "Core/modules/homepage/homePageActions";

class TrendingExhibitionsPage extends Component {
  render() {
    const {
      translate,
      homePageReducer: {
        exhibitionList,
        trendingExhibitionList,
        upcomingExhibitionList
      },
      getTrendingExhibitionListAction
    } = this.props;

    return (
      <FullWidthContainer>
        <DivColumn fillParent>
          <DivRow
            horizontalCenter
            fillSelfHorizontal
            className={styles.header_title}
          >
            {translate("home_page.trending_now_title")}
          </DivRow>

          <InitialPageLoader initialPageApi={getTrendingExhibitionListAction}>
            <MasonryGridContainer
              exhibitionList={trendingExhibitionList}
            />
          </InitialPageLoader>
        </DivColumn>
      </FullWidthContainer>
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
    getTrendingExhibitionListAction: bindActionCreators(
      getTrendingExhibitionListAction,
      dispatch
    )
  };
};

export default connect(
  mapStateToProps,
  mapDispathToProps
)(translatorHoc(TrendingExhibitionsPage));
