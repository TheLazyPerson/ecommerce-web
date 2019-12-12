import React, { Component } from 'react';
import DivRow from 'CommonComponents/divRow';
import DivColumn from 'CommonComponents/divColumn';
import styles from './wishlist_item_component.module.scss';
import closeIcon from 'Icons/close-icon-black.svg';
// import exhibitionImage1 from 'Images/exhibition-item-1.jpg';

export default class WishlistItemComponent extends Component {
  render() {
    const { wishlistItem: { product } } = this.props;

    return (
      <DivColumn className={styles.wishlist_item_container}>
        <DivColumn className={styles.wishlist_details_container}>
          <img src={closeIcon} className={styles.close_icon} />
          <div className={styles.name}>{product.name}</div>
          <div className={styles.description}>{product.short_description}</div>
          <img src={product.base_image.path} className={styles.image} />
        </DivColumn>

        <DivColumn className={styles.additional_details_container}>
          <div className={styles.title}>EXHIBITION</div>
          <div className={styles.name}>The Craft Show</div>
          <div className={styles.time}>Expires in:  40 Mins</div>
        </DivColumn>

        <div className={styles.bag_button}>
          MOVE TO BAG
        </div>

      </DivColumn>
    );
  }
}
