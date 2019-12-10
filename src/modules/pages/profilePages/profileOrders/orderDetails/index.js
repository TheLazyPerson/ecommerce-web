import React, { Component } from 'react';
import SectionedContainer from 'CommonContainers/sectionedContainer';
import DivColumn from 'CommonComponents/divColumn';
import DivRow from 'CommonComponents/divRow';
import SideNav from '../../components/sideNav';
import styles from './order_details.module.scss';
import NavHeader from '../../components/navHeader';
import map from 'lodash/map';
import navigatorHoc from 'Hoc/navigatorHoc';
import HorizontalBorder from 'CommonComponents/horizontalBorder';

class OrderDetails extends Component {

  onBackPress= () =>{
    const { pop } = this.props;
    pop();
  }

  render() {
     return (
      <SectionedContainer
       sideBarContainer={<SideNav />}
      >
        <NavHeader title="Order Details" onBackClick={this.onBackPress} />
          <DivColumn fillParent className={styles.page_container}>
            <DivColumn verticalCenter horizontalCenter className={styles.order_details_container}>
              <div className={styles.order_id_text}>ORDER ID: <b>4656009</b></div>
              <div className={styles.order_status_text}>DELIVERED</div>
              <div className={styles.order_placed_text}>Placed On: 16 OCT 2019</div>
            </DivColumn>

            <DivRow className={styles.content_container}>
              <DivColumn className={styles.left_container}> {/*left container*/}
                <div className={styles.top_header_text}>UPDATES SENT TO</div>

                <DivColumn className={styles.value_container}>
                  <div className={styles.contact_text}>{`Phone: +965-955-5836-852`}</div>
                  <div className={styles.contact_text}>{`Email: omarlastname@mail.com`}</div>
                </DivColumn>

                <div className={styles.header_text}>SHIPPING ADDRESS</div>
                
                <DivColumn className={styles.value_container}>
                  <div className={styles.name_text}>Omar Lastname</div>
                  <div className={styles.address_text}>Building 43B 4th Floor, Suite 402 Street Number 3 P.O. Box 593 Kuwait Safat 13006</div>
                </DivColumn>
                  
                <div className={styles.header_text}>PRICING SUMMARY</div>

                <DivColumn className={styles.value_container}>
                  <DivRow>
                    <div className={styles.price_title}>MRP:</div>
                    <div className={styles.value}>KD 273</div>
                  </DivRow>
                  <DivRow>
                    <div className={styles.price_title}>Discount:</div>
                    <div className={styles.value}>KD 30</div>
                  </DivRow>
                  <DivRow>
                    <div className={styles.price_title}>Item Discount:</div>
                    <div className={styles.value}>KD 30</div>
                  </DivRow>
                  <DivRow>
                    <div className={styles.price_title}>Total:</div>
                    <div className={styles.value}>KD 333</div>
                  </DivRow>
                </DivColumn>

              </DivColumn>

              <DivColumn className={styles.right_container}> {/*right container*/}
              </DivColumn>
            </DivRow>
          </DivColumn>
      </SectionedContainer>
     )
  }
}

export default navigatorHoc(OrderDetails);
