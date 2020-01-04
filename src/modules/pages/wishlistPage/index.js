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
import translatorHoc from 'Hoc/translatorHoc';

class WishlistPage extends Component {
  navigateToHome = () => {
    const { navigateTo } = this.props;
    navigateTo("");
  };

  render() {
    const {
      getWishlistAction,
      wishlistReducer: { wishlist },
      translate
    } = this.props;

    return (
      <FullWidthContainer>
        <DivColumn fillParent className={styles.wishlist_container}>
          <div className={styles.page_header}>{translate('wishlist_page.my_wishlist')}</div>
          <InitialPageLoader
            isEmpty={!size(wishlist)}
            initialPageApi={getWishlistAction}
            customEmptyScreen={
              <EmptyScreenComponent
                description={translate('wishlist_page.empty_message')}
                buttonTitle={translate('wishlist_page.start_shopping')}
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
)(navigatorHoc(translatorHoc(WishlistPage)));
