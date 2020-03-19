import React, { Component } from "react";
import SectionedContainer from "CommonContainers/sectionedContainer";
import DivColumn from "CommonComponents/divColumn";
import DivRow from "CommonComponents/divRow";
import SideNav from "../components/sideNav";
import styles from "./profile_orders.module.scss";
import exhibitionImage1 from "Images/exhibition-item-1.jpg";
import navigatorHoc from "Hoc/navigatorHoc";
import { getOrderListAction } from "Core/modules/order/orderActions";
import isEmpty from "lodash/isEmpty";
import map from "lodash/map";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import InitialPageLoader from "CommonContainers/initialPageLoader";
import { formatTimeStamp, timeFormats } from "Utils/formatHelper";
import translatorHoc from 'Hoc/translatorHoc';

class ProfileOrders extends Component {
  onClickProductViewDetails = (orderId) => {
    const { navigateTo } = this.props;
    navigateTo("order-details", { orderId });
  };

  render() {
    const {
      orderReducer: { orderList },
      getOrderListAction,
      isRTL,
    } = this.props;

    return (
      <SectionedContainer sideBarContainer={<SideNav />}>
        <InitialPageLoader
          initialPageApi={getOrderListAction}
          isEmpty={isEmpty(orderList)}
        >
          <div fillParent className={styles.page_container}>

            {map(orderList, order => (
              <DivColumn className={`${styles.orders_container} ${isRTL ? styles.rtl : ''}`}>
                <DivRow className={styles.list_header}>
                  <div className={styles.header_text}>
                    ORDER DATE:{" "}
                    <b>{formatTimeStamp(order.created_at, timeFormats.dayMonthComaYear)}</b>
                  </div>
                  <div className={styles.header_text}>
                    ORDER ID: <b>{order.id}</b>
                  </div>
                </DivRow>

                {map(order.items, (item, index) => (
                  <DivRow className={styles.order_item_container} style={index == 0 ? { marginTop: 0 } : null}>
                    <img
                      className={styles.order_image}
                      src={exhibitionImage1}
                    />
                    <DivColumn className={styles.order_detail_container}>
                      <div className={styles.order_exhibition}>
                        {item.type}
                      </div>
                      <div className={styles.order_name}>Exhibition Name</div>
                      <div className={styles.order_price}>{item.formated_price}</div>
                      <div className={styles.order_state}>{order.status}</div>
                      <div
                        className={styles.view_order_button}
                        onClick={() => this.onClickProductViewDetails(order.id)}
                      >
                        View details
                      </div>
                    </DivColumn>
                  </DivRow>
                ))}

              </DivColumn>
            ))}

          </div>
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
    getOrderListAction: bindActionCreators(getOrderListAction, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispathToProps
)(navigatorHoc(translatorHoc(ProfileOrders)));
