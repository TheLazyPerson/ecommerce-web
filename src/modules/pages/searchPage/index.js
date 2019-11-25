import React, { Component } from 'react';
import FullWidthContainer from 'CommonContainers/fullwidthContainer';
import DivRow from 'CommonComponents/divRow';
import DivColumn from 'CommonComponents/divColumn';
import styles from './search_page.module.scss';
import CapsuleButton from 'CommonComponents/capsuleButton';
import CapsuleText from 'CommonComponents/capsuleText';
import exhibitionImage1 from 'Images/exhibition-item-1.jpg';

export default class SearchPage extends Component {
  render() {
    return (
      <FullWidthContainer>
        <DivColumn fillParent className={styles.search_container}>
         <div className={styles.page_header}>Search: the craft show</div>
         <DivRow fillParent className={styles.search_list_container}>
          <DivColumn fillParent className={styles.section}>
            <div className={styles.section_header}>
              EXHIBITIONS
            </div>
            
            <DivRow>

              <DivRow className={styles.exhibition_item_container}>
                <img src={exhibitionImage1} className={styles.exhibition_image}/>
                
                <DivColumn className={styles.exhibition_details_container}>
                  <div className={styles.exhibition_name}>
                    The Craft Show
                  </div>
                  <div className={styles.exhibition_details}>
                    The Craft Show will display products like Handcrafted Watches, Products, Farsis, Palazzos,  Culottes and Products.With love, and much more.
                  </div>

                  <DivRow className={styles.capsule_container}>
                    <CapsuleText text="watches" className={styles.capsule}/>
                    <CapsuleText text="craft" className={styles.capsule}/>
                    <CapsuleText text="crafted" className={styles.capsule}/>
                  </DivRow>

                  <CapsuleButton className={styles.view_exhibition_button}>View Exhibition</CapsuleButton>
                </DivColumn>
              </DivRow>

            </DivRow>
          </DivColumn>
          
         </DivRow>
        </DivColumn>
      </FullWidthContainer>
    );
  }
}
