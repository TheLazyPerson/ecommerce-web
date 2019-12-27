import React, { Component, Fragment } from "react";
import DivColumn from "CommonComponents/divColumn";
import DivRow from "CommonComponents/divRow";
import HorizontalBorder from "CommonComponents/horizontalBorder";
import styles from "./order_summary.module.scss";
import CapsuleButton from "CommonComponents/capsuleButton";
import map from "lodash/map";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { selectShippingMethod } from "Core/modules/checkout/checkoutActions";
import { getBagListAction } from "Core/modules/bag/bagActions";
import isEmpty from 'lodash/isEmpty';
import translatorHoc from 'Hoc/translatorHoc';

class OrderSummary extends Component {

  componentDidMount() {
    const {
      getBagDetailsWhenEmpty,
      getBagListAction,
      bagReducer: { bagData },
     } = this.props;

    if(getBagDetailsWhenEmpty && isEmpty(bagData)) {
      getBagListAction();
    }
  }

  render() {
    const deliveryTypes = [
      {
        type: "standard",
        name: "Standard Delivery",
        priceType: "Free Delivery",
        deliveryDate: "22 Dec"
      },
      {
        type: "express",
        name: "Express Delivery",
        priceType: "Paid Delivery",
        deliveryDate: "18 Dec"
      }
    ];
    const {
      checkoutReducer: { shippingMethod },
      bagReducer: { bagData },
      selectShippingMethod,
      onSubmitButtonClick,
      showChooseDelivery,
      submitButtonText,
      translate,
    } = this.props;

    return (
      <DivColumn>
        <DivColumn className={styles.order_summary_container}>
          <div className={styles.order_summary_title}>{translate('checkout_page.order_summary')}</div>
          {/* <HorizontalBorder />
              <DivRow verticalCenter className={styles.coupon_input}>
                <img src={couponIcon} className={styles.icon} />
                <input
                  type="text"
                  placeholder="Apply Coupon"
                  className={styles.input}
                />
                <div className={styles.apply_button}>APPLY</div>
              </DivRow>
              <HorizontalBorder />

              <div className={styles.coupon_header_text}>Coupons</div>
              <DivColumn className={styles.coupon_description_container}>
                <DivColumn className={styles.coupon_content_container}>
                  <div className={styles.coupon_title}>40% OFF up to KD 29</div>
                  <div className={styles.coupon_description}>
                    On order of KD 400 and above. Valid once per user.
                  </div>
                </DivColumn>
                <HorizontalBorder />
                <DivRow className={styles.coupon_container}>
                  <div className={styles.coupon}>FREEITEM29</div>
                  <div className={styles.coupon_apply}>APPLY</div>
                </DivRow>
              </DivColumn> */}

          {showChooseDelivery && (
            <Fragment>
              <HorizontalBorder />
              <div className={styles.coupon_header_text}>
                {translate('checkout_page.delivery_speed')}
              </div>
              {map(deliveryTypes, (delivery, index) => {
                return (
                  <DivColumn
                    className={`${styles.coupon_description_container} ${
                      shippingMethod === delivery.type
                        ? styles.selected_delivery
                        : ""
                    }`}
                    onClick={() => selectShippingMethod(delivery.type)}
                  >
                    <DivColumn className={styles.coupon_content_container}>
                      <div className={styles.coupon_title}>{delivery.name}</div>
                      <div className={styles.coupon_description}>
                       {`${translate('checkout_page.get_by')} ${delivery.deliveryDate} | ${delivery.priceType}`}
                      </div>
                    </DivColumn>
                  </DivColumn>
                );
              })}
            </Fragment>
          )}

          <HorizontalBorder />

          <DivColumn>
            <div className={styles.coupon_header_text}>{translate('checkout_page.price_details')}</div>
            <DivRow className={styles.price_details_container}>
              <div className={styles.title}>{translate('checkout_page.bag_total')}</div>
              <div className={styles.value}>{bagData.formated_grand_total}</div>
            </DivRow>
            <DivRow className={styles.price_details_container}>
              <div className={styles.title}>{translate('checkout_page.coupon_discount')}</div>
              <div className={styles.value}>{translate('checkout_page.apply_discount')}</div>
            </DivRow>
            <DivRow className={styles.price_details_container}>
              <div className={styles.title}>{translate('checkout_page.order_total')}</div>
              <div className={styles.value}>{bagData.formated_sub_total}</div>
            </DivRow>
            {/* <DivRow className={styles.price_details_container}>
              <div className={styles.title}>Delivery Charges</div>
              <div className={styles.value}>FREE</div>
            </DivRow> */}

            <HorizontalBorder className={styles.price_divider} />

            <DivRow className={styles.price_details_container}>
              <div className={styles.title}>{translate('checkout_page.total')}</div>
              <div className={styles.value}>{bagData.formated_sub_total}</div>
            </DivRow>
          </DivColumn>

          <CapsuleButton
            className={styles.capsule_button}
            onClick={onSubmitButtonClick}
          >
            {submitButtonText}
          </CapsuleButton>
        </DivColumn>
      </DivColumn>
    );
  }
}

OrderSummary.defaultProps = {
  getBagDetailsWhenEmpty: true,
};

const mapStateToProps = state => {
  return {
    checkoutReducer: state.checkoutReducer,
    bagReducer: state.bagReducer,
  };
};

const mapDispathToProps = dispatch => {
  return {
    selectShippingMethod: bindActionCreators(selectShippingMethod, dispatch),
    getBagListAction: bindActionCreators(getBagListAction, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispathToProps
)(translatorHoc(OrderSummary));
