import React, { Component } from 'react';
import styles from './homepage.module.scss';
import SectionedContainer from 'CommonContainers/sectionedContainer';
import DivColumn from 'CommonComponents/divColumn';
import DivRow from 'CommonComponents/divRow';
import ExhibitionItemContainer from './exhibitionItemContainer';

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
             <ExhibitionItemContainer />
           </DivRow>
           
           <div className={styles.footer_container}>
           </div>
          </DivColumn>
       </SectionedContainer>
     )
  }
}