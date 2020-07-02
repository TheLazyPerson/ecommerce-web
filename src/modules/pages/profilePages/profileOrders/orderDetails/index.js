import React, { Component } from "react";
import SectionedContainer from "CommonContainers/sectionedContainer";
import DivColumn from "CommonComponents/divColumn";
import DivRow from "CommonComponents/divRow";
import SideNav from "../../components/sideNav";
import styles from "./order_details.module.scss";
import NavHeader from "../../components/navHeader";
import map from "lodash/map";
import navigatorHoc from "Hoc/navigatorHoc";
import InitialPageLoader from "CommonContainers/initialPageLoader";
import { getOrderDetailsAction } from "Core/modules/order/orderActions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import isEmpty from "lodash/isEmpty";
import { formatTimeStamp, timeFormats } from "Utils/formatHelper";
import translatorHoc from "Hoc/translatorHoc";

class OrderDetails extends Component {
  onBackPress = () => {
    const { pop } = this.props;
    pop();
  };

  render() {
    const {
      translate,
      getOrderDetailsAction,
      orderReducer: { orderDetails },
      match,
      isRTL,
      languageReducer: { languageCode },
    } = this.props;
    const {
      shipping_address: shippingAddress,
      items: productItems,
    } = orderDetails;
    const { orderId } = match.params;

    return (
      <SectionedContainer sideBarContainer={<SideNav />}>
        <NavHeader
          title={translate("order_details_page.header_title")}
          onBackClick={this.onBackPress}
        />
        <InitialPageLoader
          initialPageApi={() => getOrderDetailsAction(orderId)}
          isEmpty={isEmpty(orderDetails)}
        >
          <DivColumn
            fillParent
            className={`${styles.page_container} ${isRTL ? styles.rtl : ""}`}
          >
            <DivColumn
              verticalCenter
              horizontalCenter
              className={styles.order_details_container}
            >
              <div className={styles.order_id_text}>
                {translate("order_details_page.order_id")}{" "}
                <b>{orderDetails.id}</b>
              </div>
              <div className={styles.order_status_text}>
                {orderDetails.status_label}
              </div>
              <div className={styles.order_placed_text}>
                {`Placed On: ${formatTimeStamp(
                  orderDetails.created_at,
                  timeFormats.dayMonthComaYear
                )}`}
              </div>
            </DivColumn>

            <DivRow className={styles.content_container}>
              <DivColumn className={styles.left_container}>
                {/*left container*/}
                <div className={styles.top_header_text}>
                  {translate("order_details_page.update_sent_to")}
                </div>
                <DivColumn className={styles.value_container}>
                  <div
                    className={styles.contact_text}
                  >{`Phone: ${shippingAddress.phone}`}</div>
                  <div
                    className={styles.contact_text}
                  >{`Email: ${orderDetails.customer_email}`}</div>
                </DivColumn>
                <div className={styles.header_text}>
                  {translate("order_details_page.shipping_address")}
                </div>
                <DivColumn className={styles.value_container}>
                  <div
                    className={styles.name_text}
                  >{`${shippingAddress.first_name} ${shippingAddress.last_name}`}</div>
                  <div className={styles.address_text}>
                    {shippingAddress.area}, {shippingAddress.block_number},{" "}
                    {shippingAddress.house_number},{" "}
                    {shippingAddress.street_number}, {shippingAddress.avenue} ,{" "}
                    {shippingAddress.landmark}- {shippingAddress.city}
                  </div>
                </DivColumn>
                <div className={styles.header_text}>
                  {translate("order_details_page.pricing_summery")}
                </div>
                <DivColumn className={styles.value_container}>
                  <DivRow>
                    <div className={styles.price_title}>
                      {translate("order_details_page.mrp")}
                    </div>
                    <div className={styles.value}>
                      {orderDetails.formated_sub_total}
                    </div>
                  </DivRow>
                  <DivRow>
                    <div className={styles.price_title}>
                      {translate("order_details_page.discount")}
                    </div>
                    <div className={styles.value}>
                      {orderDetails.formated_discount_amount}
                    </div>
                  </DivRow>
                  {/* <DivRow>
                    <div className={styles.price_title}>Item Discount:</div>
                    <div className={styles.value}></div>
                  </DivRow> */}
                  <DivRow>
                    <div className={styles.price_title}>
                      {translate("order_details_page.total")}:
                    </div>
                    <div className={styles.value}>
                      {orderDetails.formated_grand_total}
                    </div>
                  </DivRow>
                </DivColumn>
              </DivColumn>

              <DivColumn className={styles.right_container}>
                {/*right container*/}
                <div className={styles.top_header_text}>
                  {translate("order_details_page.item_in_order")}
                </div>

                {/* <DivRow className={styles.product_item_container}>
                  <img
                    className={styles.product_image}       
                  />
                  <DivColumn className={styles.product_content_container}>
                    <div className={styles.product_name}>
                      Handcrafted Watches, Products
                    </div>
                    <div className={styles.product_type}>Category</div>
                    <div className={styles.product_price}>
                      {productItem.formated_price}
                    </div>
                  </DivColumn>
                </DivRow> */}

                {map(productItems, (productItem, index) => (
                  <DivRow className={styles.product_item_container}>
                    <img
                      alt={productItem.product.translations[languageCode].name}
                      className={styles.product_image}
                      src={
                        productItem.product.base_image
                          ? productItem.product.base_image.path
                          : null
                      }
                      // style={{
                      //   backgroundImage: `${
                      //     productItem.product.base_image
                      //       ? productItem.product.base_image.path
                      //       : null
                      //   }`,
                      // }}
                    />
                    <DivColumn className={styles.product_content_container}>
                      <div className={styles.product_name}>
                        {productItem.product.translations[languageCode].name}
                      </div>
                      {/* <div className={styles.product_type}>
                        {productItem.type}
                      </div> */}
                      <div className={styles.product_price}>
                        {productItem.formated_price}
                      </div>
                    </DivColumn>
                  </DivRow>
                ))}

                {/* <DivColumn className={styles.exhibition_container}>
                  <div className={styles.exhibition_title}>EXHIBITION</div>
                  <DivRow verticalCenter>
                    <img className={styles.exhibition_image} />
                    <div className={styles.exhibition_name}>The Craft Show</div>
                  </DivRow>
                </DivColumn> */}
              </DivColumn>
            </DivRow>
          </DivColumn>
        </InitialPageLoader>
      </SectionedContainer>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    orderReducer: state.orderReducer,
    languageReducer: state.languageReducer,
  };
};

const mapDispathToProps = (dispatch) => {
  return {
    getOrderDetailsAction: bindActionCreators(getOrderDetailsAction, dispatch),
  };
};

export default connect(
  mapStateToProps,
  mapDispathToProps
)(navigatorHoc(translatorHoc(OrderDetails)));
