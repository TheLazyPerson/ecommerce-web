import React, { Component } from 'react';
import styles from './sectioned_header.module.scss';
import DivRow from 'CommonComponents/divRow';
import searchIcon from 'Icons/search-icon-black.svg';
import hamburgerMenuIcon from 'Icons/hamburger-menu-icon-black.svg';
import bagIcon from 'Icons/cart-bag-icon-black.svg';
import bookmarkIcon from 'Icons/bookmark-icon-black.svg';
import arrowDownIcon from 'Icons/arrow-down-icon-black.svg';

export default class SectionedHeader extends Component {
  render() {
     return (
       <DivRow className={styles.header_container}>
         <div className={styles.search_container}>
           <DivRow className={styles.search_wrapper}>
            <form style={{flex:1}}>
              <input type="text" name="firstname" placeholder="Search" className={styles.search_input}/>
            </form>
            <img src={searchIcon} className={styles.search_icon}/>
           </DivRow>
         </div>

         <DivRow verticalCenter>
           <DivRow className={styles.header_item_container} verticalCenter>
             <img src={bagIcon} className={styles.header_icon} />
             <DivRow verticalCenter horizontalCenter className={styles.bag_count}>0</DivRow>
           </DivRow>
           <img className={`${styles.header_icon} ${styles.header_item_container}`} src={bookmarkIcon} />
           <div className={`${styles.header_icon} ${styles.header_item_container}`}>
             <img className={styles.profile_pic} />
             <img src={arrowDownIcon} className={styles.arrow_down_icon} />
           </div>
           <img src={hamburgerMenuIcon} className={`${styles.hamburger_icon} ${styles.header_item_container}`} />
         </DivRow>
       </DivRow>
    );
  }
}