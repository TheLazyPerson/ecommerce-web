import React, { Component } from 'react';
import styles from './homepage.module.scss';
import SectionedContainer from 'CommonContainers/sectionedContainer';
import DivColumn from 'CommonComponents/divColumn';
import DivRow from 'CommonComponents/divRow';
import ExhibitionItemContainer from './exhibitionItemContainer';
import socialFacebookIcon from 'Icons/social-facebook-icon-white.svg';
import socialInstagramIcon from 'Icons/social-instagram-icon-white.svg';
import socialTwitterIcon from 'Icons/social-twitter-icon-white.svg';

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
           
           <div className={styles.footer_container}>
           </div>
          </DivColumn>
       </SectionedContainer>
     )
  }
}