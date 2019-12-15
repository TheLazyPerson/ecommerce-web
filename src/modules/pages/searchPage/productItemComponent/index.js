import React, { Component } from "react";
import DivRow from "CommonComponents/divRow";
import DivColumn from "CommonComponents/divColumn";
import styles from "./product_item_component.module.scss";
import exhibitionImage1 from "Images/exhibition-item-1.jpg";
import heartFilledIcon from "Icons/heart-filled-icon.svg";
import navigatorHoc from 'Hoc/navigatorHoc';
class ProductItemComponent extends Component {

  onClickExhibition = () => {
    const { navigateTo, product } = this.props;
    navigateTo('plp', {
      id: product.exhibition.id,
    });
  }

  onClickProduct = () => {
    const { navigateTo, product } = this.props;
    navigateTo('pdp', {
      exhibitionId: product.exhibition.id,
      productId: product.id,
    });
  }

  render() {
    const {
      product
    } = this.props;

    return (
      <DivColumn className={styles.product_container}>
        <DivColumn className={styles.product_details_container}>
          <div className={styles.product_name}>{product.name}</div>
          <div className={styles.product_description}>
            {product.short_description}
          </div>
          <img src={exhibitionImage1} className={styles.product_image} />
        </DivColumn>

        {product.exhibition && (
          <DivColumn
            verticalCenter
            horizontalCenter
            className={styles.exhibition_details_container}
          >
            <div className={styles.exhibition_title}>EXHIBITION</div>
            <DivRow verticalCenter>
              <img src={exhibitionImage1} className={styles.exhibition_image} />
              <div className={styles.exhibition_name}>{product.exhibition.title}</div>
            </DivRow>
          </DivColumn>
        )}

        <DivRow className={styles.action_container}>
          <img src={heartFilledIcon} className={styles.wishlist_icon} />
          <DivRow className={styles.action_buttons}>
            <DivRow
              verticalCenter
              horizontalCenter
              className={styles.action_button}
              onClick={this.onClickProduct}
            >
              View Product
            </DivRow>
            {product.exhibition && (
              <DivRow
                verticalCenter
                horizontalCenter
                className={`${styles.action_button} ${styles.primary}`}
                onClick={this.onClickExhibition}
              >
                View Exhibition
              </DivRow>
            )}
          </DivRow>
        </DivRow>
      </DivColumn>
    );
  }
}


export default navigatorHoc(ProductItemComponent);
