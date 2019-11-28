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

export default class WishlistPage extends Component {
  render() {
    return (
      <FullWidthContainer>
        <DivColumn fillParent className={styles.wishlist_container}>
         <div className={styles.page_header}>My Wishlist</div>
         <DivRow className={styles.wishlist_list_container}>

          <WishlistItemComponent />
          <WishlistItemComponent />
          <WishlistItemComponent />

         </DivRow>
        </DivColumn>
      </FullWidthContainer>
    );
  }
}
