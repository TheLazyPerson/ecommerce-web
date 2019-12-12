import React, { Component } from "react";
import FullWidthContainer from "CommonContainers/fullwidthContainer";
import DivRow from "CommonComponents/divRow";
import DivColumn from "CommonComponents/divColumn";
import styles from "./product_details_page.module.scss";
import exhibitionImage1 from "Images/exhibition-item-1.jpg";
import exhibitionImage2 from "Images/exhibition-item-2.jpg";
import exhibitionImage3 from "Images/exhibition-item-3.png";
import ExhibitionDetailComponent from "CommonComponents/exhibitionDetailComponent";
import QuantityComponent from "CommonComponents/quantityComponent";
import heartFilledIcon from "Icons/heart-filled-icon.svg";
import navigatorHoc from "Hoc/navigatorHoc";
import queryString from "query-string";
import InitialPageLoader from "CommonContainers/initialPageLoader";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getProductDetailAction } from "Core/modules/productdetail/productDetailActions";
import { addToWishlistAction } from 'Core/modules/wishlist/wishlistActions';
import { showSuccessFlashMessage } from 'Redux/actions/flashMessageActions';
import Swiper from "react-id-swiper";
import map from 'lodash/map';
import "swiper/css/swiper.css";

class ProductDetailsPage extends Component {
  state = {
    imageList: [
      exhibitionImage1,
      exhibitionImage2,
      exhibitionImage3
    ],
    selectedImage: 2,
    isWishlistLoading: false,
  }

  onClickAddToWishList = () => {
    const {
      addToWishlistAction,
      showSuccessFlashMessage,
      productDetailReducer: { productDetail } 
    } = this.props;

    this.setState({isWishlistLoading: true});
    addToWishlistAction({
      product_id: productDetail.id,
      exhibition_id: 1
    }).then(({payload}) => {
      if (payload.code == 200 || payload.code == 201) {
        showSuccessFlashMessage('Product added to wishlist')
      }
      this.setState({isWishlistLoading: false});
    }).catch(error => {
      this.setState({isWishlistLoading: false});
    });
  }

  onClickAddToBag = () => {
    const { navigateTo } = this.props;
    navigateTo("checkout");
  };

  onClickImageItem = (index) => {
    this.setState({
      selectedImage: index
    });
  }

  render() {
    const parsed = queryString.parse(this.props.location.search);
    const { imageList, selectedImage, isWishlistLoading } = this.state;
    const {
      productDetailReducer: { productDetail },
      getProductDetailAction
    } = this.props;

    const params = {
      slidesPerView: 5,
      freeMode: true,
      containerClass: "custom_container",
      on: {
        slideChange: () => { }
      }
    };

    return (
      <FullWidthContainer>
        <InitialPageLoader
          initialPageApi={() =>
            getProductDetailAction(parsed.exhibitionid, parsed.productid)
          }
        >
          <DivColumn className={styles.product_details_container}>
            <DivRow className={styles.product_content_container}>
              <DivColumn className={styles.left_content_container}>
                {/* 
                  <DivRow verticalCenter>
                    <div className={styles.back_button}>{`< Home`}</div>
                  </DivRow>
                */}

                <img src={imageList[selectedImage]} className={styles.product_image} />
                <DivRow className={styles.product_image_list}>
                  <Swiper
                    {...params}
                    getSwiper={swiper => {
                      this.swiper = swiper;
                    }}
                  >
                    {
                      map(imageList, (image, index) => (
                        <div>
                          <img
                            src={image}
                            className={`${styles.small_product_image} ${index == selectedImage? styles.is_image_selected: ''}`}
                            onClick={()=>this.onClickImageItem(index)}
                          />
                        </div>
                      ))
                    }
                  </Swiper>
                </DivRow>

              </DivColumn>

              <DivColumn
                verticalCenter
                className={styles.right_content_container}
              >
                <ExhibitionDetailComponent
                  title="Exibition 1"
                  name={productDetail.name}
                  tags={["watches", "craft", "crafted"]}
                  price={productDetail.formatted_price}
                  description={productDetail.short_description}
                >
                  <QuantityComponent />

                  <DivRow className={styles.action_button_container}>
                    <DivRow
                      verticalCenter
                      horizontalCenter
                      className={styles.add_to_bag_button}
                      onClick={this.onClickAddToBag}
                    >
                      <img />
                      <div className={styles.button_text}>Add to Bag</div>
                    </DivRow>
                    <DivRow
                      verticalCenter
                      horizontalCenter
                      className={`${styles.wishlist_button} ${isWishlistLoading ? styles.is_disabled : ''}`}
                      onClick={!isWishlistLoading ? this.onClickAddToWishList : null}
                    >
                      <img
                        src={heartFilledIcon}
                        className={styles.button_icon}
                      />
                      <div className={styles.button_text}>Wishlist</div>
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

const mapStateToProps = state => {
  return {
    productDetailReducer: state.productDetailReducer
  };
};

const mapDispathToProps = dispatch => {
  return {
    getProductDetailAction: bindActionCreators(getProductDetailAction, dispatch),
    showSuccessFlashMessage: bindActionCreators(showSuccessFlashMessage, dispatch),
    addToWishlistAction: bindActionCreators(addToWishlistAction, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispathToProps
)(navigatorHoc(ProductDetailsPage));
