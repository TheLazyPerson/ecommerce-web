import React, { Component } from "react";
import DivRow from "CommonComponents/divRow";
import DivColumn from "CommonComponents/divColumn";
import styles from "./checkout_item_component.module.scss";
import BareQuantityComponent from "CommonComponents/bareQuantityComponent";
import exhibitionImage1 from "Images/exhibition-item-1.jpg";
import closeIcon from "Icons/close-icon-black.svg";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { removeFromBagAction } from "Core/modules/bag/bagActions";
import { showSuccessFlashMessage } from "Redux/actions/flashMessageActions";

class CheckoutItemComponent extends Component {
  handleRemove = id => {
    const { removeFromBagAction, showSuccessFlashMessage } = this.props;
    removeFromBagAction(id).then(({ payload }) => {
      if (payload.code === 200 || payload.code === 201) {
        showSuccessFlashMessage("Item Removed");
      }
    });
  };
  render() {
    const { checkoutItem } = this.props;
    return (
      <DivRow className={styles.table_item}>
        <DivRow className={`${styles.product_column} ${styles.flex_2}`}>
          <img src={exhibitionImage1} className={styles.product_image} />
          <DivColumn>
            <div className={styles.title}>Product 1</div>
            <div className={styles.description}>Light gray</div>
          </DivColumn>
        </DivRow>

        <DivColumn className={`${styles.exhibition_column} ${styles.flex_1}`}>
          <div className={styles.title}>{checkoutItem.name}</div>
          <div className={styles.description}>Expires in: 2 days</div>
        </DivColumn>

        <DivRow className={`${styles.flex_1}`}>
          <BareQuantityComponent
            className={styles.quantity_container}
            quantity={checkoutItem.quantity}
          />
        </DivRow>

        <DivRow
          verticalCenter
          className={`${styles.price_column} ${styles.flex_1}`}
        >
          <div className={styles.product_price}>{checkoutItem.total}</div>
          <img
            src={closeIcon}
            onClick={() => this.handleRemove(checkoutItem.id)}
          />
        </DivRow>
      </DivRow>
    );
  }
}

const mapStateToProps = state => {
  return {
    bagReducer: state.bagReducer
  };
};

const mapDispathToProps = dispatch => {
  return {
    removeFromBagAction: bindActionCreators(removeFromBagAction, dispatch),
    showSuccessFlashMessage: bindActionCreators(
      showSuccessFlashMessage,
      dispatch
    )
  };
};

export default connect(
  mapStateToProps,
  mapDispathToProps
)(CheckoutItemComponent);
