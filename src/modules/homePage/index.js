import React, { Component } from 'react';
import styles from './homepage.module.scss';
import SectionedContainer from 'CommonContainers/sectionedContainer';
import DivColumn from 'CommonComponents/divColumn';

export default class HomePage extends Component {
  render() {
     return (
       <SectionedContainer isAbsoluteContent>
         <DivColumn className={styles.home_container}>
           <div className={styles.content_container}>
           </div>
           
           <div className={styles.footer_container}>
           </div>
          </DivColumn>
       </SectionedContainer>
     )
  }
}