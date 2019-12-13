import React, { Component } from 'react';
import DivRow from 'CommonComponents/divRow';
import DivColumn from 'CommonComponents/divColumn';
import styles from './wishlist_item_component.module.scss';
import closeIcon from 'Icons/close-icon-black.svg';
import { removeFromWishlistAction } from 'Core/modules/wishlist/wishlistActions';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { showSuccessFlashMessage } from 'Redux/actions/flashMessageActions';

class WishlistItemComponent extends Component {

  state = {
    isRemoving: false
  }

  onClickRemove = () => {
    const { wishlistItem, removeFromWishlistAction, showSuccessFlashMessage } = this.props;
    
    this.setState({ isRemoving: true });
    removeFromWishlistAction({
      product_id: wishlistItem.product.id,
      exhibition_id: wishlistItem.exhibition.id
    }).then(({payload}) => {
      if(payload.code == 200 || payload.code == 201) {
        showSuccessFlashMessage('Product removed from wishlist')
      }
      this.setState({ isRemoving: false });
    }).catch(error => {
      this.setState({ isRemoving: false });
    });
  }

  render() {
    const { wishlistItem: { product } } = this.props;
    const { isRemoving } = this.state;

    return (
      <DivColumn className={`${styles.wishlist_item_container} ${isRemoving ? styles.is_disabled: null}`}>
        <DivColumn className={styles.wishlist_details_container}>
          <img
            src={closeIcon}
            className={styles.close_icon}
            onClick={!isRemoving ? this.onClickRemove: null}
          />
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


const mapDispathToProps = dispatch => {
  return {
    removeFromWishlistAction: bindActionCreators(removeFromWishlistAction, dispatch),
    showSuccessFlashMessage: bindActionCreators(showSuccessFlashMessage, dispatch),
  };
};

export default connect(null, mapDispathToProps)(WishlistItemComponent);
