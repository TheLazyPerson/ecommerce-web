import React, { Component } from "react";
import DivColumn from "CommonComponents/divColumn";
import DivRow from "CommonComponents/divRow";
import styles from "./product_grid_item.module.scss";
import exhibitionImage1 from "Images/exhibition-item-1.jpg";
import heartFilledIcon from "Icons/heart-filled-icon.svg";
import navigatorHoc from "Hoc/navigatorHoc";

class ProductGridItem extends Component {
  onClickViewProduct = (exhibitionId, productId) => {
    const { navigateTo } = this.props;
    navigateTo("pdp", {
      exhibitionId,
      productId
    });
  };

  render() {
    const { exhibitionId, product } = this.props;
    return (
      <DivColumn className={styles.product_container}>
        <div className={styles.product_title}>{product.name}</div>
        <div className={styles.product_description}>
          {product.short_description}
        </div>
        <img className={styles.product_image} src={product.base_image.path} />
        <DivRow className={styles.product_action_container}>
          <DivRow
            verticalCenter
            horizontalCenter
            className={styles.heart_icon_container}
          >
            <img src={heartFilledIcon} />
          </DivRow>

          <DivRow
            verticalCenter
            horizontalCenter
            className={styles.view_product_container}
            onClick={() => this.onClickViewProduct(exhibitionId, product.id)}
          >
            <div className={styles.action_text}>View Product</div>
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
            >
              Add to Bag | {product.formatted_price}
            </div>
            <img />
          </DivRow>
        </DivRow>
      </DivColumn>
    );
  }
}

export default navigatorHoc(ProductGridItem);
