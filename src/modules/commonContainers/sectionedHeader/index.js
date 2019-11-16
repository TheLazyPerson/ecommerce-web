import React, { Component } from 'react';
import styles from './sectioned_header.module.scss';
import DivRow from 'CommonComponents/divRow';

export default class SectionedHeader extends Component {
  
  render() {
     return (
       <DivRow className={styles.header_container}>
         <div className={styles.search_container}>
           <DivRow>
           <form>
             <input type="text" name="firstname" placeholder="search"/>
           </form>
            <div>
              Icon
            </div>
           </DivRow>
         </div>

         <DivRow>
           <div className={styles.item_container}>Bag</div>
           <div className={styles.item_container}>Profile pic</div>
           <div className={styles.item_container}>hamburger menu</div>
         </DivRow>
       </DivRow>
     );
  }
}