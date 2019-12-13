import React, { Component } from "react";
import DivColumn from "CommonComponents/divColumn";
import DivRow from "CommonComponents/divRow";
import styles from "./product_grid_item.module.scss";
import heartFilledIcon from "Icons/heart-filled-icon.svg";
import heartEmptyIcon from 'Icons/heart-empty-icon.svg';
import navigatorHoc from "Hoc/navigatorHoc";
import { addToWishlistAction, removeFromWishlistAction} from "Core/modules/wishlist/wishlistActions";
import { showSuccessFlashMessage } from "Redux/actions/flashMessageActions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { addToBagAction } from "Core/modules/bag/bagActions";
import longRightArrow from 'Icons/long-right-arrow-white.svg';

class ProductGridItem extends Component {
  state = {
    isWishlistLoading: false
  };

  onClickViewProduct = (exhibitionId, productId) => {
    const { navigateTo } = this.props;
    navigateTo("pdp", {
      exhibitionId,
      productId
    });
  };

  onClickWishlist = (e) => {
    e.stopPropagation();

    const { isWishlistLoading } = this.state;
    const { 
      product,
      addToWishlistAction,
      removeFromWishlistAction
    } = this.props;

    if(!isWishlistLoading) {

      if (product.is_wishlisted)
        this.wishlistAction(removeFromWishlistAction, "Product removed from Wishlist");
      else 
        this.wishlistAction(addToWishlistAction, "Product added to Wishlist");
    }
  };

  wishlistAction = (action, successMessage) => {
    const {
      product,      
      showSuccessFlashMessage,
      exhibitionId
    } = this.props;

    this.setState({ isWishlistLoading: true });
    action({
      product_id: product.id,
      exhibition_id: exhibitionId,
    })
      .then(({ payload }) => {
        if (payload.code == 200 || payload.code == 201) {
          showSuccessFlashMessage(successMessage);
        }
        this.setState({ isWishlistLoading: false });
      })
      .catch(error => {
        this.setState({ isWishlistLoading: false });
      });
  }

  onClickAddToBag = (exhibitionId, productId, quantity, is_configurable) => {
    const { addToBagAction, showSuccessFlashMessage } = this.props;

    addToBagAction({
      exhibition_id: exhibitionId,
      product_id: productId,
      quantity: quantity,
      is_configurable: is_configurable
    }).then(({ payload }) => {
      if (payload.code === 200 || payload.code === 201) {
        showSuccessFlashMessage("Added to Bag");
      }
    });
  };

  render() {
    const { exhibitionId, product } = this.props;
    const { isWishlistLoading } = this.state;

    return (
      <DivColumn className={styles.product_container} onClick={() => this.onClickViewProduct(exhibitionId, product.id)}>
        <div className={styles.product_title}>{product.name}</div>
        <div className={styles.product_description}>
          {product.short_description}
        </div>
        <img className={styles.product_image} src={product.base_image.path} />
        <DivRow className={styles.product_action_container}>
          <DivRow
            verticalCenter
            horizontalCenter
            className={`${styles.heart_icon_container} ${
              isWishlistLoading ? styles.is_disabled : ""
            }`}
            onClick={this.onClickWishlist}
          >
            <img 
              src={product.is_wishlisted ? heartFilledIcon : heartEmptyIcon} 
              className={styles.wishlist_icon}
            />
          </DivRow>

          <DivRow
            verticalCenter
            horizontalCenter
            className={styles.bag_container}
          >
            <div
              className={styles.action_text}
              style={{
                color: "white"
              }}
              onClick={(e) =>{
                e.stopPropagation()
                this.onClickAddToBag(exhibitionId, product.id, 1, false)
              }}
            >
              Add to Bag | {product.formatted_price}
            </div>
            <img src={longRightArrow}/>
          </DivRow>
        </DivRow>
      </DivColumn>
    );
  }
}

const mapDispathToProps = dispatch => {
  return {
    addToWishlistAction: bindActionCreators(addToWishlistAction, dispatch),
    removeFromWishlistAction: bindActionCreators(removeFromWishlistAction, dispatch),
    showSuccessFlashMessage: bindActionCreators(
      showSuccessFlashMessage,
      dispatch
    ),
    addToBagAction: bindActionCreators(addToBagAction, dispatch)
  };
};

export default connect(null, mapDispathToProps)(navigatorHoc(ProductGridItem));
