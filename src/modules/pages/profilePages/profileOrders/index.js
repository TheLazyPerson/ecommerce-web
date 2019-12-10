import React, { Component } from 'react';
import SectionedContainer from 'CommonContainers/sectionedContainer';
import DivColumn from 'CommonComponents/divColumn';
import DivRow from 'CommonComponents/divRow';
import SideNav from '../components/sideNav';
import styles from './profile_orders.module.scss';
import exhibitionImage1 from 'Images/exhibition-item-1.jpg';
import navigatorHoc from 'Hoc/navigatorHoc';

class ProfileOrders extends Component {
  onClickProductViewDetails = () => {
    const { navigateTo } = this.props;
    navigateTo('order-details');
  }

  render() {
     return (
      <SectionedContainer
        sideBarContainer={<SideNav />}
      >
        <DivColumn className={styles.orders_container}>
          <DivRow className={styles.list_header}>
            
            <div className={styles.header_text}>ORDER DATE: <b>3 sep, 2019</b></div>
            <div className={styles.header_text}>ORDER ID: <b>4564545</b></div>

          </DivRow>
          <DivRow className={styles.order_item_container}>
            <img className={styles.order_image} src={exhibitionImage1}/>
            <DivColumn className={styles.order_detail_container}>
              <div className={styles.order_exhibition}>Handcrafted Watches, Products</div>             
              <div className={styles.order_name}>Perfumes</div>
              <div className={styles.order_price}>KD 3.99</div>
              <div className={styles.order_state}>DELIVERED</div>
              <div className={styles.view_order_button} onClick={this.onClickProductViewDetails}>View details</div>
            </DivColumn>
          </DivRow>
        </DivColumn>
      </SectionedContainer>
     )
  }
}

export default navigatorHoc(ProfileOrders);
