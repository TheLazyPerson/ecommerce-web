import React, { Component } from 'react';
import styles from './sectioned_header.module.scss';
import DivRow from 'CommonComponents/divRow';
import DivColumn from 'CommonComponents/divColumn';
import searchIcon from 'Icons/search-icon-black.svg';
import hamburgerMenuIcon from 'Icons/hamburger-menu-icon-black.svg';
import bagIcon from 'Icons/cart-bag-icon-black.svg';
import bookmarkIcon from 'Icons/bookmark-icon-black.svg';
import arrowDownIcon from 'Icons/arrow-down-icon-black.svg';
import navigatorHoc from 'Hoc/navigatorHoc';
import profileIconBlack from 'Icons/profile-icon-black.svg';
import HorizontalBorder from 'CommonComponents/horizontalBorder';

class SectionedHeader extends Component {
  onClickProfile = () => {
    const { navigateTo } = this.props;
    navigateTo('signin');
  }

  onClickWishlist = () => {
    const { navigateTo } = this.props;
    navigateTo('wishlist');
  }

  onClickBag = () => {
    const { navigateTo } = this.props;
    navigateTo('checkout');
  }

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
           <DivColumn className={styles.search_result_container}>

              <DivRow className={styles.search_item}>
                <DivColumn>
                  <div className={styles.title}>Search Exhibitions</div>
                  <div className={styles.description}>sadkjasdjkfh</div>
                </DivColumn>
                <img /> {/*Icon*/}
              </DivRow>
              
              <HorizontalBorder />

              <DivRow className={styles.search_item}>
                <DivColumn>
                  <div className={styles.title}>Search Products</div>
                  <div className={styles.description}>sadkjasdjkfh</div>
                </DivColumn>
                <img /> {/*Icon*/}
              </DivRow>

           </DivColumn>
         </div>

         <DivRow verticalCenter>
           <DivRow className={styles.header_item_container} verticalCenter onClick={this.onClickBag}>
             <img src={bagIcon} className={styles.header_icon} />
             <DivRow verticalCenter horizontalCenter className={styles.bag_count}>0</DivRow>
           </DivRow>
           <img className={`${styles.header_icon} ${styles.header_item_container}`} src={bookmarkIcon} onClick={this.onClickWishlist}/>
           <div className={`${styles.header_icon} ${styles.header_item_container}`} onClick={this.onClickProfile}>
             <img className={styles.profile_pic} src={profileIconBlack} />
             <img src={arrowDownIcon} className={styles.arrow_down_icon} />
           </div>
           <img src={hamburgerMenuIcon} className={`${styles.hamburger_icon} ${styles.header_item_container}`} />
         </DivRow>
       </DivRow>
    );
  }
}

export default navigatorHoc(SectionedHeader);