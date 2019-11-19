import React, { Component } from 'react';
import SectionedHeader from 'CommonContainers/sectionedHeader';
import DivRow from 'CommonComponents/divRow';
import DivColumn from 'CommonComponents/divColumn';
import styles from './sectioned_container.module.scss';
import appIcon from 'Icons/app-icon-white.svg'

export default class SectionedContainer extends Component {

  render() {
    const { isAbsoluteContent, children } = this.props;

     return (
       <DivRow className={styles.page_container}>
         <DivColumn className={styles.left_container}>
            <DivRow className={styles.header_container}>
              <img src={appIcon} className={styles.app_icon}/>
            </DivRow>
         </DivColumn>

          <DivColumn className={styles.right_container}>
            <DivRow className={styles.header_container}>
              <SectionedHeader />
            </DivRow>
            {/* children/content */}
            { !isAbsoluteContent ? children : null }

          </DivColumn>
          { isAbsoluteContent ? children : null }
       </DivRow>
     )
  }

}