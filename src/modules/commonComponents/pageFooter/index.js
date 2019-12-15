import React, { Component } from 'react';
import DivColumn from 'CommonComponents/divColumn';
import DivRow from 'CommonComponents/divRow';
import styles from './page_footer.module.scss';
import playStoreImage from 'Images/google-play-badge.png';
import appStoreImage from 'Images/app-store-badge.svg';

export default class PageFooter extends Component {
  render() {
    return (
      <DivColumn fillSelfHorizontal className={styles.footer_container}>
       <DivRow className={styles.footer_content}>
        <DivColumn className={styles.footer_link_container}>
          <b className={styles.link_header}>APP</b>
          <a className={styles.link} href="/">Home</a>
          <a className={styles.link} href="/profile">Profile</a>
          <a className={styles.link} href="/wishlist">Wishlist</a>
          <a className={styles.link} href="/profile/heplcenter">HelpCenter</a>
          <a className={styles.link} href="/profile/settings">Settings</a>
        </DivColumn>
        <DivColumn className={styles.footer_link_container}>
          <b className={styles.link_header}>USEFUL LINKS</b>
          <a className={styles.link} href="/faq">Faq</a>
          <a className={styles.link} href="/privacy-policy">Privacy Policy</a>
          <a className={styles.link} href="/terms-and-condition">Terms and Condition</a>
          <a className={styles.link} href="/shipping-and-returns">Shipping and Returns</a>
        </DivColumn>
        <DivColumn className={styles.footer_link_container}>
          <b className={styles.link_header}>EXPERIENCE MA3RATH APP ON MOBILE</b>
          <DivRow verticalCenter>
           <img className={styles.badge_icon} src={playStoreImage} />
           <img className={styles.apple_badge} src={appStoreImage} />
          </DivRow>

          <b className={styles.link_header} style={{marginTop: 16}}>KEEP IN TOUCH</b>
          <DivRow>
            <a className={styles.facebook}></a>
            <a className={styles.twitter}></a>
            <a className={styles.youtube}></a>
            <a className={styles.insta}></a>
          </DivRow>
        </DivColumn>
       </DivRow>
      </DivColumn>
    );
  }
}
