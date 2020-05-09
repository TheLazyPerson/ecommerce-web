import React, { Component } from "react";
import FullWidthContainer from "CommonContainers/fullwidthContainer";
import DivRow from "CommonComponents/divRow";
import DivColumn from "CommonComponents/divColumn";
import styles from "./product_details_page.module.scss";
import ExhibitionDetailComponent from "CommonComponents/exhibitionDetailComponent";
import QuantityComponent from "CommonComponents/quantityComponent";
import heartFilledIcon from "Icons/heart-filled-icon.svg";
import heartEmptyIcon from "Icons/heart-empty-icon.svg";
import navigatorHoc from "Hoc/navigatorHoc";
import queryString from "query-string";
import InitialPageLoader from "CommonContainers/initialPageLoader";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getProductDetailAction } from "Core/modules/productdetail/productDetailActions";
import {
  addToWishlistAction,
  removeFromWishlistAction,
} from "Core/modules/wishlist/wishlistActions";
import { showSuccessFlashMessage } from "Redux/actions/flashMessageActions";
import { addToBagAction } from "Core/modules/bag/bagActions";
import map from "lodash/map";
import "swiper/css/swiper.css";
import bagWhiteIcon from "Icons/cart-bag-icon-white.svg";
import translatorHoc from "Hoc/translatorHoc";

class ProductDetailsPage extends Component {
  state = {
    selectedImage: 0,
    isWishlistLoading: false,
    quantity: 1,
  };

  onClickWishlist = () => {
    const { isWishlistLoading } = this.state;
    const {
      removeFromWishlistAction,
      addToWishlistAction,
      productDetailReducer: { productDetail },
    } = this.props;

    if (!isWishlistLoading) {
      if (productDetail.is_wishlisted)
        this.wishlistAction(
          removeFromWishlistAction,
          "Product removed from Wishlist"
        );
      else
        this.wishlistAction(addToWishlistAction, "Product added to wishlist");
    }
  };

  wishlistAction = (action, successMessage) => {
    const {
      showSuccessFlashMessage,
      productDetailReducer: { productDetail },
      isUserSignedIn,
      navigateTo,
    } = this.props;
    const parsed = queryString.parse(this.props.location.search);

    if (isUserSignedIn) {
      this.setState({ isWishlistLoading: true });
      action({
        product_id: productDetail.id,
        exhibition_id: parsed.exhibitionid,
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

  onClickAddToBag = (exhibitionId, productId, quantity, is_configurable) => {
    const {
      addToBagAction,
      showSuccessFlashMessage,
      isUserSignedIn,
      navigateTo,
      translate,
    } = this.props;

    if (isUserSignedIn) {
      addToBagAction({
        exhibition_id: exhibitionId,
        product_id: productId,
        quantity: quantity,
        is_configurable: is_configurable,
      }).then(({ payload }) => {
        if (payload.code === 200 || payload.code === 201) {
          showSuccessFlashMessage(translate("common.added_to_bag"));
        }
      });
    } else {
      navigateTo("signin");
    }
  };

  onClickImageItem = (index) => {
    this.setState({
      selectedImage: index,
    });
  };

  incrementItem = () => {
    this.setState((prevState) => {
      if (prevState.quantity < 9) {
        return {
          quantity: prevState.quantity + 1,
        };
      } else {
        return null;
      }
    });
  };
  decreaseItem = () => {
    this.setState((prevState) => {
      if (prevState.quantity > 1) {
        return {
          quantity: prevState.quantity - 1,
        };
      } else {
        return null;
      }
    });
  };

  render() {
    const parsed = queryString.parse(this.props.location.search);
    const { imageList, selectedImage, isWishlistLoading } = this.state;
    const {
      productDetailReducer: { productDetail },
      getProductDetailAction,
      translate,
      isRTL,
    } = this.props;

    const params = {
      slidesPerView: 5,
      freeMode: true,
      containerClass: "custom_container",
      on: {
        slideChange: () => {},
      },
    };

    return (
      <FullWidthContainer>
        <InitialPageLoader
          initialPageApi={() =>
            getProductDetailAction(parsed.exhibitionid, parsed.productid)
          }
        >
          <DivColumn
            className={`${isRTL ? styles.rtl : ""} ${
              styles.product_details_container
            }`}
          >
            <DivRow className={styles.product_content_container}>
              <DivColumn className={styles.left_content_container}>
                {/* 
                  <DivRow verticalCenter>
                    <div className={styles.back_button}>{`< Home`}</div>
                  </DivRow>
                */}

                <img
                  src={
                    productDetail.images
                      ? productDetail.images[selectedImage].path
                      : null
                  }
                  className={styles.product_image}
                />
                <DivRow className={styles.product_image_list}>
                  {/* <Swiper
                   {...params}
                   getSwiper={swiper => {
                    this.swiper = swiper;
                   }}
                  >
                    
                  </Swiper> */}
                  {map(productDetail.images, (image, index) => (
                    <div className={styles.image_container}>
                      <img
                        src={image.path}
                        className={`${styles.small_product_image} ${
                          index == selectedImage ? styles.is_image_selected : ""
                        }`}
                        onClick={() => this.onClickImageItem(index)}
                      />
                    </div>
                  ))}
                </DivRow>
              </DivColumn>

              <DivColumn className={styles.right_content_container}>
                <ExhibitionDetailComponent
                  name={productDetail.name}
                  tags={["watches", "craft", "crafted"]}
                  price={productDetail.formatted_price}
                  description={productDetail.short_description}
                  className={styles.exhibition_detail_component}
                >
                  <QuantityComponent
                    quantity={this.state.quantity}
                    incrementItem={this.incrementItem}
                    decreaseItem={this.decreaseItem}
                  />

                  <DivRow className={styles.action_button_container}>
                    <DivRow
                      verticalCenter
                      horizontalCenter
                      className={styles.add_to_bag_button}
                      onClick={() =>
                        this.onClickAddToBag(
                          parsed.exhibitionid,
                          parsed.productid,
                          this.state.quantity,
                          false
                        )
                      }
                    >
                      <img src={bagWhiteIcon} className={styles.button_icon} />
                      <div className={styles.button_text}>
                        {translate("common.add_to_bag")}
                      </div>
                    </DivRow>
                    <DivRow
                      verticalCenter
                      horizontalCenter
                      className={`${styles.wishlist_button} ${
                        isWishlistLoading ? styles.is_disabled : ""
                      }`}
                      onClick={this.onClickWishlist}
                    >
                      <img
                        src={
                          productDetail.is_wishlisted
                            ? heartFilledIcon
                            : heartEmptyIcon
                        }
                        className={styles.button_icon}
                      />
                      <div className={styles.button_text}>
                        {translate("common.wishlist")}
                      </div>
                    </DivRow>
                  </DivRow>
                </ExhibitionDetailComponent>
              </DivColumn>
            </DivRow>
          </DivColumn>
        </InitialPageLoader>
      </FullWidthContainer>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    productDetailReducer: state.productDetailReducer,
    bagReducer: state.bagReducer,
    isUserSignedIn: state.signInReducer.isUserSignedIn,
  };
};

const mapDispathToProps = (dispatch) => {
  return {
    getProductDetailAction: bindActionCreators(
      getProductDetailAction,
      dispatch
    ),
    showSuccessFlashMessage: bindActionCreators(
      showSuccessFlashMessage,
      dispatch
    ),
    addToWishlistAction: bindActionCreators(addToWishlistAction, dispatch),
    removeFromWishlistAction: bindActionCreators(
      removeFromWishlistAction,
      dispatch
    ),
    addToBagAction: bindActionCreators(addToBagAction, dispatch),
  };
};

export default connect(
  mapStateToProps,
  mapDispathToProps
)(translatorHoc(navigatorHoc(ProductDetailsPage)));
