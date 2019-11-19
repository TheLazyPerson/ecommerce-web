import React, { Component } from 'react';
import SectionedHeader from 'CommonContainers/sectionedHeader';
import DivRow from 'CommonComponents/divRow';
import DivColumn from 'CommonComponents/divColumn';
import styles from './full_width_container.module.scss';
import LanguageSelect from 'CommonComponents/languageSelect';
import appIcon from 'Icons/app-icon-black.svg'

export default class FullWidthContainer extends Component {

  render() {
    const { children } = this.props;

     return (
       <DivColumn className={styles.page_container}>
         <DivColumn className={styles.content_container}>
          <DivRow className={styles.header_container}>
            <DivRow className={styles.header_icon_container}>
              <img src={appIcon}  className={styles.app_icon}/>
              <LanguageSelect blackColor/>
            </DivRow>
            <SectionedHeader />
          </DivRow>

          { children }
         </DivColumn>
       </DivColumn>
     )
  }

}