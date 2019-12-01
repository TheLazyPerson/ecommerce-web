import React, { Component } from 'react';
import styles from './homepage.module.scss';
import SectionedContainer from 'CommonContainers/sectionedContainer';
import DivColumn from 'CommonComponents/divColumn';
import DivRow from 'CommonComponents/divRow';
import ExhibitionItemContainer from './exhibitionItemContainer';
import socialFacebookIcon from 'Icons/social-facebook-icon-white.svg';
import socialInstagramIcon from 'Icons/social-instagram-icon-white.svg';
import socialTwitterIcon from 'Icons/social-twitter-icon-white.svg';
import arrowRightIcon from 'Icons/arrow-right-icon-black.svg';
import shareIcon from 'Icons/share-icon-black.svg';
import LanguageSelect from 'CommonComponents/languageSelect';
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.css';

export default class HomePage extends Component {

  state = {
    currentSlide: 0,
    totalSlide: 2,
  }

  render() {
    const params = {
      containerClass: 'custom_container',
      on: {
        'slideChange': () => this.setState({currentSlide: this.swiper.realIndex})
     }
    }    
    const { currentSlide, totalSlide } = this.state;
    const isLeftButtonClickable = currentSlide != 0;
    const isRightButtonClickable = currentSlide != totalSlide;

    return (
       <SectionedContainer isAbsoluteContent>
         <DivColumn className={styles.home_container}>
           <DivRow className={styles.content_container}>
             <DivColumn className={styles.social_container}>
                <div className={styles.social_item_container}><img src={socialFacebookIcon} className={styles.social_image}/></div>
                <div className={styles.social_item_container}><img src={socialTwitterIcon} className={styles.social_image}/></div>
                <div className={styles.social_item_container}><img src={socialInstagramIcon} className={styles.social_image}/></div>
             </DivColumn>
             <div style={{
                flex: 1,
                alignSelf: 'stretch',
                overflow: 'hidden'
              }}>
                <Swiper {...params} getSwiper={swiper=> { this.swiper=swiper}}>
                  <div className={styles.swiper_item}>
                    <ExhibitionItemContainer />
                  </div>
                  <div className={styles.swiper_item}>
                    <ExhibitionItemContainer />
                  </div>
                  <div className={styles.swiper_item}>
                    <ExhibitionItemContainer />
                  </div>
                </Swiper>
             </div>
             
           </DivRow>
           
           <DivRow className={styles.footer_container}>
             <DivRow className={styles.left_container}>
               <LanguageSelect />
             </DivRow>

             <DivRow className={styles.right_container}>
              <DivRow>
                <div
                 className={`${!isLeftButtonClickable? styles.non_clickable : ''} ${styles.arrow_text}`}
                 onClick={()=>this.swiper.slidePrev()}>
                  <img src={arrowRightIcon} className={styles.arrow_left}/>
                  Prev
                </div>

                <div
                 className={`${!isRightButtonClickable? styles.non_clickable : ''} ${styles.arrow_text}`}
                 onClick={()=>this.swiper.slideNext()}>
                    Next <img src={arrowRightIcon} className={styles.arrow_right}/>
                </div>
              </DivRow>
              <div className={styles.pagination_count_container}>
                <span className={styles.pagination_current_count}>{currentSlide+1}</span>
                <span className={styles.pagination_total_count}>/05</span>
              </div>
              <img src={shareIcon} className={styles.share_icon} />
             </DivRow>
           </DivRow>

          </DivColumn>
       </SectionedContainer>
     )
  }
}