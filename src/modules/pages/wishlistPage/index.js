import React, { Component } from 'react';
import FullWidthContainer from 'CommonContainers/fullwidthContainer';
import DivRow from 'CommonComponents/divRow';
import DivColumn from 'CommonComponents/divColumn';
import styles from './wishlist_page.module.scss';
import closeIcon from 'Icons/close-icon-black.svg';
import exhibitionImage1 from 'Images/exhibition-item-1.jpg';
import exhibitionImage2 from 'Images/exhibition-item-2.jpg';
import exhibitionImage3 from 'Images/exhibition-item-3.png';
import WishlistItemComponent from './wishlistItemComponent';
import InitialPageLoader from 'CommonContainers/initialPageLoader';
import { getWishlistAction } from 'Core/modules/wishlist/wishlistActions';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import map from 'lodash/map';

class WishlistPage extends Component {
  render() {
    const { getWishlistAction, wishlistReducer: { wishlist } } = this.props;

    return (
      <FullWidthContainer>
        <DivColumn fillParent className={styles.wishlist_container}>
         <div className={styles.page_header}>My Wishlist</div>
         <InitialPageLoader initialPageApi={getWishlistAction}>
           <DivRow className={styles.wishlist_list_container}>
            {
              map(wishlist, wishlistItem => (
                <WishlistItemComponent
                  wishlistItem={wishlistItem}
                />
              ))
            }
            
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

export default connect(mapStateToProps, mapDispathToProps)(WishlistPage);
