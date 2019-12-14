import React, { Component } from 'react';
import DivColumn from 'CommonComponents/divColumn';
import DivRow from 'CommonComponents/divRow';
import styles from './page_footer.module.scss';

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
       </DivRow>
      </DivColumn>
    );
  }
}
