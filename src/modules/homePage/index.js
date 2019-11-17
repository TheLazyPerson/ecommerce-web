import React, { Component } from 'react';
import styles from './homepage.module.scss';
import SectionedContainer from 'CommonContainers/sectionedContainer';
import DivColumn from 'CommonComponents/divColumn';
import DivRow from 'CommonComponents/divRow';
import exhibitionItem1 from 'Images/exhibition-item-1.jpg';

export default class HomePage extends Component {
  render() {
     return (
       <SectionedContainer isAbsoluteContent>
         <DivColumn className={styles.home_container}>
           <DivRow className={styles.content_container}>
             <DivColumn className={styles.social_container}>
                <div>facebook</div>
                <div>twitter</div>
                <div>instagram</div>
             </DivColumn>
             <DivRow className={styles.exhibition_item_container}>
                <img src={exhibitionItem1} className={styles.exhibition_image}/>
                <DivColumn>
                  <div>exhibition number</div>
                  <div>exhibition name</div>
                  <div>----</div>
                  <DivRow>
                    <div>capsule1</div>
                    <div>capsule2</div>
                    <div>capsule2</div>
                  </DivRow>
                  <div>exibition description</div>
                  <div>view exibition button</div>
                </DivColumn>
             </DivRow>
           </DivRow>
           
           <div className={styles.footer_container}>
           </div>
          </DivColumn>
       </SectionedContainer>
     )
  }
}