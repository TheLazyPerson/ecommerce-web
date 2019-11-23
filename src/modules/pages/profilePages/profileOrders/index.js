import React, { Component } from 'react';
import SectionedContainer from 'CommonContainers/sectionedContainer';
import DivColumn from 'CommonComponents/divColumn';
import DivRow from 'CommonComponents/divRow';
import SideNav from '../sideNav';
import styles from './profile_orders.module.scss';

export default class ProfileOrders extends Component {
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
            <img className={styles.order_image}/>
            <DivColumn className={styles.order_detail_container}>
              <div className={styles.order_exhibition}>Handcrafted Watches, Products</div>             
              <div className={styles.order_name}>Perfumes</div>
              <div className={styles.order_price}>KD 3.99</div>
              <div className={styles.order_state}>DELIVERED</div>
                <div className={styles.view_order_button}>View details</div>
            </DivColumn>
          </DivRow>
        </DivColumn>
      </SectionedContainer>
     )
  }
}