import React, { Component } from 'react';
import styles from './homepage.module.scss';
import SectionedContainer from 'CommonContainers/sectionedContainer';
import DivColumn from 'CommonComponents/divColumn';
import DivRow from 'CommonComponents/divRow';
import ExhibitionItemContainer from './exhibitionItemContainer';
import socialFacebookIcon from 'Icons/social-facebook-icon-white.svg';
import socialInstagramIcon from 'Icons/social-instagram-icon-white.svg';
import socialTwitterIcon from 'Icons/social-twitter-icon-white.svg';
import arrowLeftIcon from 'Icons/arrow-left-icon-black.svg';
import arrowRightIcon from 'Icons/arrow-right-icon-black.svg';
import shareIcon from 'Icons/share-icon-black.svg';
import scrollDownIcon from 'Icons/scroll-down-icon-white.svg';

export default class HomePage extends Component {
  render() {
     return (
       <SectionedContainer isAbsoluteContent>
         <DivColumn className={styles.home_container}>
           <DivRow className={styles.content_container}>
             <DivColumn className={styles.social_container}>
                <div className={styles.social_item_container}><img src={socialFacebookIcon} className={styles.social_image}/></div>
                <div className={styles.social_item_container}><img src={socialTwitterIcon} className={styles.social_image}/></div>
                <div className={styles.social_item_container}><img src={socialInstagramIcon} className={styles.social_image}/></div>
             </DivColumn>
             <ExhibitionItemContainer />
           </DivRow>
           
           <DivRow className={styles.footer_container}>
             <DivRow className={styles.left_container}>
               <span className={styles.language_item_text}>En</span>&nbsp;&nbsp;
               <span className={`${styles.language_item_text} ${styles.not_selected}`}>/</span>&nbsp;&nbsp;
               <span className={`${styles.language_item_text} ${styles.not_selected}`}>Urdu</span>
             </DivRow>

             <DivRow className={styles.right_container}>
              <DivRow>
                <div className={styles.arrow_text}> <img src={arrowLeftIcon} className={styles.arrow_left}/> Prev </div>
                <div className={styles.arrow_text}> Next <img src={arrowRightIcon} className={styles.arrow_right}/></div>
              </DivRow>
              <div className={styles.pagination_count_container}>
                <span className={styles.pagination_current_count}>01</span>
                <span className={styles.pagination_total_count}>/05</span>
              </div>
              <img src={scrollDownIcon} className={styles.scroll_down_icon} />
              <img src={shareIcon} className={styles.share_icon} />
             </DivRow>
           </DivRow>

          </DivColumn>
       </SectionedContainer>
     )
  }
}