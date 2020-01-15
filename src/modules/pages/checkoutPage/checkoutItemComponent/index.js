import React, { Component } from "react";
import DivRow from "CommonComponents/divRow";
import DivColumn from "CommonComponents/divColumn";
import styles from "./checkout_item_component.module.scss";
import BareQuantityComponent from "CommonComponents/bareQuantityComponent";
import closeIcon from "Icons/close-icon-black.svg";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  removeFromBagAction,
  editQuantityAction
} from "Core/modules/bag/bagActions";
import { showSuccessFlashMessage } from "Redux/actions/flashMessageActions";
import navigatorHoc from "Hoc/navigatorHoc";
import minusIcon from "Icons/minus-icon.svg";
import plusIcon from "Icons/plus-icon.svg";
import translatorHoc from 'Hoc/translatorHoc';

class CheckoutItemComponent extends Component {
  state = {
    quantity: this.props.checkoutItem.quantity
  };

  handleRemove = id => {
    const { removeFromBagAction, showSuccessFlashMessage, translate } = this.props;
    removeFromBagAction(id).then(({ payload }) => {
      if (payload.code === 200 || payload.code === 201) {
        showSuccessFlashMessage(translate('common.removed_from_bag'));
      }
    });
  };

  onClickViewProduct = (exhibitionId, productId) => {
    const { navigateTo } = this.props;
    navigateTo("pdp", {
      exhibitionId,
      productId
    });
  };

  incrementItem = async () => {
    await this.setState(prevState => {
      return {
        quantity: prevState.quantity + 1
      };
    });
    this.onEditQuanity();
  };

  decreaseItem = async () => {
    await this.setState(prevState => {
      if (prevState.quantity > 1) {
        return {
          quantity: prevState.quantity - 1
        };
      } else {
        return null;
      }
    });
    this.onEditQuanity();
  };

  onEditQuanity = () => {
    const { editQuantityAction, checkoutItem } = this.props;
    const id = checkoutItem.id;
    editQuantityAction({
      quantity: {
        [id]: this.state.quantity
      }
    }).then(({ payload }) => {
      if (payload.code === 200 || payload.code === 201) {
      }
    });
  };

  render() {
    const { checkoutItem } = this.props;
    return (
      <DivRow className={styles.table_item}>
        <DivRow
          className={`${styles.product_column} ${styles.flex_2}`}
          onClick={() =>
            this.onClickViewProduct(
              checkoutItem.exhibition.id,
              checkoutItem.product.id
            )
          }
        >
          <img
            src={checkoutItem.product.base_image.path}
            className={styles.product_image}
          />
          <DivColumn>
            <div className={styles.title}>{checkoutItem.product.name}</div>
            <div className={styles.description}>
              {checkoutItem.product.short_description}
            </div>
          </DivColumn>
        </DivRow>

        <DivColumn className={`${styles.exhibition_column} ${styles.flex_1} ${styles.exhibition_title}`}>
          <div className={styles.title}>{checkoutItem.exhibition.title}</div>
          {/* <div className={styles.description}>Expires in: 2 days</div> */}
        </DivColumn>

        <DivRow
          verticalCenter
          className={`${styles.price_column} ${styles.flex_1}`}
        >
          <div className={styles.product_price}>
            {checkoutItem.formated_price}
          </div>
        </DivRow>

        <DivRow className={`${styles.flex_1}`}>
          <DivRow verticalCenter className={`${styles.quantity_container}`}>
            <img
              alt={"remove"}
              className={styles.quantity_button}
              src={minusIcon}
              onClick={this.decreaseItem}
            />
            <div className={styles.quantity_text}>{this.state.quantity}</div>
            <img
              alt={"add"}
              className={styles.quantity_button}
              src={plusIcon}
              onClick={this.incrementItem}
            />
          </DivRow>
        </DivRow>

        <DivRow
          verticalCenter
          className={`${styles.price_column} ${styles.flex_1} ${styles.total_price_header_container}`}
        >
          <div className={`${styles.product_price} ${styles.total_price_header}`}>
            {checkoutItem.formated_total}
          </div>
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
    ),
    editQuantityAction: bindActionCreators(editQuantityAction, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispathToProps
)(translatorHoc(navigatorHoc(CheckoutItemComponent)));
