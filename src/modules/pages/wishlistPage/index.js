import React, { Component } from "react";
import FullWidthContainer from "CommonContainers/fullwidthContainer";
import DivRow from "CommonComponents/divRow";
import DivColumn from "CommonComponents/divColumn";
import styles from "./wishlist_page.module.scss";
import WishlistItemComponent from "./wishlistItemComponent";
import InitialPageLoader from "CommonContainers/initialPageLoader";
import { getWishlistAction } from "Core/modules/wishlist/wishlistActions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import map from "lodash/map";
import size from "lodash/size";
import EmptyScreenComponent from "CommonComponents/emptyScreenComponent";
import navigatorHoc from "Hoc/navigatorHoc";

class WishlistPage extends Component {
  navigateToHome = () => {
    const { navigateTo } = this.props;
    navigateTo("");
  };

  render() {
    const {
      getWishlistAction,
      wishlistReducer: { wishlist }
    } = this.props;

    return (
      <FullWidthContainer>
        <DivColumn fillParent className={styles.wishlist_container}>
          <div className={styles.page_header}>My Wishlist</div>
          <InitialPageLoader
            isEmpty={!size(wishlist)}
            initialPageApi={getWishlistAction}
            customEmptyScreen={
              <EmptyScreenComponent
                description="Oh Snap! You have no product in your wishlist."
                buttonTitle="START SHOPPING"
                buttonOnClick={this.navigateToHome}
                className={styles.empty_screen_container}
              />
            }
          >
            <DivRow className={styles.wishlist_list_container}>
              {map(wishlist, wishlistItem => (
                <WishlistItemComponent wishlistItem={wishlistItem} />
              ))}
            </DivRow>
          </InitialPageLoader>
        </DivColumn>
      </FullWidthContainer>
    );
  }
}

const mapStateToProps = state => {
  return {
    wishlistReducer: state.wishlistReducer
  };
};

const mapDispathToProps = dispatch => {
  return {
    getWishlistAction: bindActionCreators(getWishlistAction, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispathToProps
)(navigatorHoc(WishlistPage));
