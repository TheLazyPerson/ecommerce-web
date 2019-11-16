import React, { Component } from 'react';
import SectionedHeader from 'CommonContainers/sectionedHeader';
import DivRow from 'CommonComponents/divRow';
import DivColumn from 'CommonComponents/divColumn';
import styles from './sectioned_container.module.scss';

export default class SectionedContainer extends Component {

  render() {
     return(
       <DivRow className={styles.page_container}>
         <div className={styles.left_container}>
            <div className={styles.header_container}>
              
            </div>
         </div>

          <DivColumn className={styles.right_container}>
            <SectionedHeader />
            {/* children/content */}
            
          </DivColumn>
       </DivRow>
     )
  }

}