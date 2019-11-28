import React, { Component } from 'react';
import SectionedContainer from 'CommonContainers/sectionedContainer';
import DivColumn from 'CommonComponents/divColumn';
import DivRow from 'CommonComponents/divRow';
import SideNav from '../components/sideNav';
import styles from './profile_address.module.scss';

export default class ProfileAddress extends Component {
  render() {
     return (
      <SectionedContainer
        sideBarContainer={<SideNav />}
      >
        <DivColumn fillParent className={styles.address_container}>

          <DivColumn className={styles.section_container}>
            <DivRow className={styles.header_container}>
              <div className={styles.header_title}>Default Address</div>
              <div className={styles.header_button}>+ ADD NEW ADDRESS</div>
            </DivRow>

            <DivColumn className={styles.address_item}>
              <DivColumn fillParent className={styles.item_content_container}>
                <div className={styles.item_name}>Omar Lastname</div>
                <div className={styles.item_address}>
                  Building 43B 4th Floor, Suite 402, <br/>
                  Street Number 3 P.O. Box 593,
                  Kuwait Safat 13006
                </div>
                <div className={styles.item_phonenumber}>Phone Number: +965-955-5836-852</div>
              </DivColumn>
              <DivRow className={styles.action_container}>
                <div className={styles.action_button}>Edit</div>
                <div className={styles.action_button}>Remove</div>
              </DivRow>
            </DivColumn>
          </DivColumn>



          <DivColumn className={styles.section_container}>
            <DivRow className={styles.header_container}>
              <div className={styles.header_title}>OTHER ADDRESSES</div>
            </DivRow>

            <DivColumn className={styles.address_item}>
              <DivColumn fillParent className={styles.item_content_container}>
                <div className={styles.item_name}>Omar Lastname</div>
                <div className={styles.item_address}>
                  Building 43B 4th Floor, Suite 402, <br/>
                  Street Number 3 P.O. Box 593,
                  Kuwait Safat 13006
                </div>
                <div className={styles.item_phonenumber}>Phone Number: +965-955-5836-852</div>
              </DivColumn>
              <DivRow className={styles.action_container}>
                <div className={styles.action_button}>Edit</div>
                <div className={styles.action_button}>Remove</div>
              </DivRow>
            </DivColumn>
          </DivColumn>


        </DivColumn>
      </SectionedContainer>
     )
  }
}