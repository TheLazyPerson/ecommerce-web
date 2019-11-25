import React, { Component } from 'react';
import SectionedContainer from 'CommonContainers/sectionedContainer';
import DivColumn from 'CommonComponents/divColumn';
import DivRow from 'CommonComponents/divRow';
import SideNav from '../components/sideNav';
import styles from './profile_help_center.module.scss';
import NavHeader from '../components/navHeader';
import map from 'lodash/map';
import CapsuleButton from 'CommonComponents/capsuleButton';
import cartIcon from 'Icons/cart-bag-icon-black.svg';
import faqIcon from 'Icons/faq-icon-black.svg';

export default class ProfileHelpCenter extends Component {

  render() {
     return (
      <SectionedContainer
        sideBarContainer={<SideNav />}
      >
        <NavHeader title="Help Center" />      

        <DivColumn fillParent className={styles.help_center_container}>
          
          <DivRow>

            <DivColumn verticalCenter horizontalCenter className={styles.item_container}>
              <img src={cartIcon} className={styles.item_icon} />
              <div className={styles.item_title}>TRACK, CANCEL, RETURN/EXCHANGE</div>
              <div className={styles.item_description}>Check your order status</div>
            </DivColumn>

            <DivColumn verticalCenter horizontalCenter className={styles.item_container}>
              <img src={faqIcon} className={styles.item_icon} />
              <div className={styles.item_title}>FREQUENTLY ASKED QUESTIONS</div>
              <div className={styles.item_description}>More queries related to your experience</div>
            </DivColumn>

          </DivRow>
          <div className={styles.form_header}>
            NEED MORE HELP FROM US
          </div>

          <form>
            <textarea>
              
            </textarea>
            <DivRow>
            <CapsuleButton>Get Callback</CapsuleButton>
            </DivRow>
          </form>

        </DivColumn>

      </SectionedContainer>
     )
  }
}
