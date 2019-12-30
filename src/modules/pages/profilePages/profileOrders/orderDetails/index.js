import React, { Component } from "react";
import SectionedContainer from "CommonContainers/sectionedContainer";
import DivColumn from "CommonComponents/divColumn";
import DivRow from "CommonComponents/divRow";
import SideNav from "../../components/sideNav";
import styles from "./order_details.module.scss";
import NavHeader from "../../components/navHeader";
import map from "lodash/map";
import navigatorHoc from "Hoc/navigatorHoc";
import HorizontalBorder from "CommonComponents/horizontalBorder";
import InitialPageLoader from "CommonContainers/initialPageLoader";
import { getOrderDetailsAction } from 'Core/modules/order/orderActions';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import isEmpty from 'lodash/isEmpty';
import { formatTimeStamp, timeFormats } from "Utils/formatHelper";

class OrderDetails extends Component {
  onBackPress = () => {
    const { pop } = this.props;
    pop();
  };

  render() {
    const { getOrderDetailsAction, orderReducer: {orderDetails}, match } = this.props;
    const {
      shipping_address: shippingAddress,
      items: productItems,
    } = orderDetails;
    const { orderId } = match.params;

    return (
      <SectionedContainer sideBarContainer={<SideNav />}>
        <NavHeader title="Order Details" onBackClick={this.onBackPress} />
        <InitialPageLoader
          initialPageApi={()=>getOrderDetailsAction(orderId)}
          isEmpty={isEmpty(orderDetails)}
        >
          <DivColumn fillParent className={styles.page_container}>
            <DivColumn
              verticalCenter
              horizontalCenter
              className={styles.order_details_container}
            >
              <div className={styles.order_id_text}>
                ORDER ID: <b>{orderDetails.id}</b>
              </div>
              <div className={styles.order_status_text}>{orderDetails.status}</div>
              <div className={styles.order_placed_text}>
                {`Placed On: ${formatTimeStamp(orderDetails.created_at, timeFormats.dayMonthComaYear)}`}
              </div>
            </DivColumn>

            <DivRow className={styles.content_container}>
              <DivColumn className={styles.left_container}>
                {" "}
                {/*left container*/}
                <div className={styles.top_header_text}>UPDATES SENT TO</div>
                <DivColumn className={styles.value_container}>
                  <div
                    className={styles.contact_text}
                  >{`Phone: +91 9584758695`}</div>
                  <div
                    className={styles.contact_text}
                  >{`Email: ${orderDetails.customer_email}`}</div>
                </DivColumn>
                <div className={styles.header_text}>SHIPPING ADDRESS</div>
                <DivColumn className={styles.value_container}>
                  <div className={styles.name_text}>{`${shippingAddress.first_name} ${shippingAddress.last_name}`}</div>
                  <div className={styles.address_text}>
                    {shippingAddress.address1}
                  </div>
                </DivColumn>
                <div className={styles.header_text}>PRICING SUMMARY</div>
                <DivColumn className={styles.value_container}>
                  <DivRow>
                    <div className={styles.price_title}>MRP:</div>
                    <div className={styles.value}>{orderDetails.formated_sub_total}</div>
                  </DivRow>
                  <DivRow>
                    <div className={styles.price_title}>Discount:</div>
                    <div className={styles.value}>{orderDetails.formated_discount_amount}</div>
                  </DivRow>
                  {/* <DivRow>
                    <div className={styles.price_title}>Item Discount:</div>
                    <div className={styles.value}></div>
                  </DivRow> */}
                  <DivRow>
                    <div className={styles.price_title}>Total:</div>
                    <div className={styles.value}>{orderDetails.formated_grand_total}</div>
                  </DivRow>
                </DivColumn>
              </DivColumn>

              <DivColumn className={styles.right_container}>
                {/*right container*/}
                <div className={styles.top_header_text}>
                  ITEMS IN THIS ORDER
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

                {
                  map(productItems, (productItem, index) => (
                    <DivRow className={styles.product_item_container}>
                      <img
                        className={styles.product_image}
                        style={{
                          backgroundImage: `url(https://source.unsplash.com/200x20${index}/?product)`,
                        }}
                      />
                      <DivColumn className={styles.product_content_container}>
                        <div className={styles.product_name}>
                          {productItem.name}
                        </div>
                        <div className={styles.product_type}>{productItem.type}</div>
                        <div className={styles.product_price}>
                        {productItem.formated_price}
                        </div>
                      </DivColumn>
                    </DivRow>  
                  ))
                }

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

const mapStateToProps = state => {
  return {
    orderReducer: state.orderReducer
  };
};

const mapDispathToProps = dispatch => {
  return {
    getOrderDetailsAction: bindActionCreators(getOrderDetailsAction, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispathToProps
)(navigatorHoc(OrderDetails));
