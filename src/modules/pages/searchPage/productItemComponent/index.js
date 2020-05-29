import React, { Component } from "react";
import DivRow from "CommonComponents/divRow";
import DivColumn from "CommonComponents/divColumn";
import styles from "./product_item_component.module.scss";
import exhibitionImage1 from "Images/exhibition-item-1.jpg";
import heartFilledIcon from "Icons/heart-filled-icon.svg";
import heartEmptyIcon from "Icons/heart-empty-icon.svg";
import navigatorHoc from "Hoc/navigatorHoc";
import {
  addToWishlistAction,
  removeFromWishlistAction,
} from "Core/modules/wishlist/wishlistActions";
import { showSuccessFlashMessage } from "Redux/actions/flashMessageActions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import translatorHoc from "Hoc/translatorHoc";

class ProductItemComponent extends Component {
  state = {
    isWishlistLoading: false,
  };

  onClickExhibition = () => {
    const { navigateTo, product } = this.props;
    navigateTo("plp", {
      id: product.exhibition.id,
    });
  };

  onClickProduct = () => {
    const { navigateTo, product } = this.props;
    navigateTo("pdp", {
      exhibitionId: product.exhibition.id,
      productId: product.id,
    });
  };

  onClickWishlist = () => {
    const {
      product,
      addToWishlistAction,
      removeFromWishlistAction,
    } = this.props;
    const { isWishlistLoading } = this.state;

    if (!isWishlistLoading) {
      if (product.is_wishlisted)
        this.wishlistAction(
          removeFromWishlistAction,
          "Product removed from Wishlist"
        );
      else
        this.wishlistAction(addToWishlistAction, "Product added to Wishlist");
    }
  };

  wishlistAction = (action, successMessage) => {
    const {
      product,
      showSuccessFlashMessage,
      isUserSignedIn,
      navigateTo,
    } = this.props;

    if (isUserSignedIn) {
      this.setState({ isWishlistLoading: true });
      action({
        product_id: product.id,
        exhibition_id: product.exhibition.id,
      })
        .then(({ payload }) => {
          if (payload.code == 200 || payload.code == 201) {
            showSuccessFlashMessage(successMessage);
          }
          this.setState({ isWishlistLoading: false });
        })
        .catch((error) => {
          this.setState({ isWishlistLoading: false });
        });
    } else {
      navigateTo("signin");
    }
  };

  render() {
    const {
      product,
      languageReducer: { languageCode },
      translate,
    } = this.props;
    const { isWishlistLoading } = this.state;

    return (
      <DivColumn className={styles.product_container}>
        <DivColumn className={styles.product_details_container}>
          <div className={styles.product_name}>
            {product.translations[languageCode].name}
          </div>
          <div className={styles.product_description}>
            {product.translations[languageCode].short_description}
          </div>
          <img
            src={product.base_image ? product.base_image.path : ""}
            className={styles.product_image}
          />
        </DivColumn>

        {product.exhibition && (
          <DivColumn
            verticalCenter
            horizontalCenter
            className={styles.exhibition_details_container}
          >
            <div className={styles.exhibition_title}>
              {translate("search_page.product_item_exhibition")}
            </div>
            <DivRow verticalCenter>
              <img src={exhibitionImage1} className={styles.exhibition_image} />
              <div className={styles.exhibition_name}>
                {product.exhibition.title}
              </div>
            </DivRow>
          </DivColumn>
        )}

        <DivRow className={styles.action_container}>
          <img
            src={product.is_wishlisted ? heartFilledIcon : heartEmptyIcon}
            className={`${styles.wishlist_icon} ${
              isWishlistLoading ? styles.disabled : ""
            }`}
            onClick={this.onClickWishlist}
          />
          <DivRow className={styles.action_buttons}>
            <DivRow
              verticalCenter
              horizontalCenter
              className={styles.action_button}
              onClick={this.onClickProduct}
            >
              {translate("search_page.view_product")}
            </DivRow>
            {product.exhibition && (
              <DivRow
                verticalCenter
                horizontalCenter
                className={`${styles.action_button} ${styles.primary}`}
                onClick={this.onClickExhibition}
              >
                {translate("search_page.explore_exhibition")}
              </DivRow>
            )}
          </DivRow>
        </DivRow>
      </DivColumn>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isUserSignedIn: state.signInReducer.isUserSignedIn,
    languageReducer: state.languageReducer,
  };
};

const mapDispathToProps = (dispatch) => {
  return {
    addToWishlistAction: bindActionCreators(addToWishlistAction, dispatch),
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
  mapStateToProps,
  mapDispathToProps
)(navigatorHoc(translatorHoc(ProductItemComponent)));
