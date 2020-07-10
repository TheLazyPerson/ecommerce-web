import React, { Component } from "react";
import DivColumn from "CommonComponents/divColumn";
import styles from "./wishlist_item_component.module.scss";
import closeIcon from "Icons/close-icon-black.svg";
import {
  removeFromWishlistAction,
  moveToBagAction,
} from "Core/modules/wishlist/wishlistActions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { showSuccessFlashMessage } from "Redux/actions/flashMessageActions";
import navigatorHoc from "Hoc/navigatorHoc";
import translatorHoc from "Hoc/translatorHoc";
class WishlistItemComponent extends Component {
  state = {
    isRemoving: false,
  };

  onClickRemove = () => {
    const {
      wishlistItem,
      removeFromWishlistAction,
      showSuccessFlashMessage,
      translate,
    } = this.props;

    this.setState({ isRemoving: true });
    removeFromWishlistAction({
      product_id: wishlistItem.product.id,
      exhibition_id: wishlistItem.exhibition.id,
    })
      .then(({ payload }) => {
        if (payload.code === 200 || payload.code === 201) {
          showSuccessFlashMessage(translate("common.removed_from_wishlist"));
        }
        this.setState({ isRemoving: false });
      })
      .catch((error) => {
        this.setState({ isRemoving: false });
      });
  };

  handleMoveToBag = (id) => {
    const { showSuccessFlashMessage, moveToBagAction, translate } = this.props;

    moveToBagAction(id).then(({ payload }) => {
      if (payload.code === 200 || payload.code === 201) {
        showSuccessFlashMessage(translate("common.added_to_bag"));
      }
    });
  };

  render() {
    const {
      wishlistItem,
      wishlistItem: { product, exhibition },
      translate,
    } = this.props;
    const { isRemoving } = this.state;

    return (
      <DivColumn
        className={`${styles.wishlist_item_container} ${
          isRemoving ? styles.is_disabled : null
        }`}
      >
        <DivColumn className={styles.wishlist_details_container}>
          <img
            alt="Remove"
            src={closeIcon}
            className={styles.close_icon}
            onClick={!isRemoving ? this.onClickRemove : null}
          />
          <div className={styles.name}>{product.name}</div>
          <div className={styles.description}>{product.short_description}</div>
          <img
            alt={product.name}
            src={product.base_image.path}
            className={styles.image}
          />
        </DivColumn>

        <DivColumn className={styles.additional_details_container}>
          <div className={styles.title}>
            {translate("wishlist_page.exhibition")}
          </div>
          <div className={styles.name}>{exhibition.title}</div>
          <div className={styles.time}>Expires in: 40 Mins</div>
        </DivColumn>

        <div
          className={styles.bag_button}
          onClick={(e) => {
            e.stopPropagation();
            this.handleMoveToBag(wishlistItem.id);
          }}
        >
          {translate("wishlist_page.move_bag")}
        </div>
      </DivColumn>
    );
  }
}

const mapDispathToProps = (dispatch) => {
  return {
    moveToBagAction: bindActionCreators(moveToBagAction, dispatch),
    removeFromWishlistAction: bindActionCreators(
      removeFromWishlistAction,
      dispatch
    ),
    showSuccessFlashMessage: bindActionCreators(
      showSuccessFlashMessage,
      dispatch
    ),
  };
};

export default connect(
  null,
  mapDispathToProps
)(translatorHoc(navigatorHoc(WishlistItemComponent)));
