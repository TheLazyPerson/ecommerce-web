import React, { Component } from 'react';
import styles from './sectioned_header.module.scss';
import DivRow from 'CommonComponents/divRow';
import searchIcon from 'Icons/search-icon-black.svg';
import hamburgerMenuIcon from 'Icons/hamburger-menu-icon-black.svg';

export default class SectionedHeader extends Component {
  
  render() {
     return (
       <DivRow className={styles.header_container}>
         <div className={styles.search_container}>
           <DivRow className={styles.search_wrapper}>
            <form style={{flex:1}}>
              <input type="text" name="firstname" placeholder="search" className={styles.search_input}/>
            </form>
            <img src={searchIcon} className={styles.search_icon}/>
           </DivRow>
         </div>

         <DivRow>
           <div className={styles.item_container}>Bag</div>
           <div className={styles.item_container}>Profile pic</div>
           <img src={hamburgerMenuIcon} className={styles.item_container} />
         </DivRow>
       </DivRow>
     );
  }
}