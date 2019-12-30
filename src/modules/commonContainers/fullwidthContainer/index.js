import React, { Component } from 'react';
import SectionedHeader from 'CommonContainers/sectionedHeader';
import DivRow from 'CommonComponents/divRow';
import DivColumn from 'CommonComponents/divColumn';
import styles from './full_width_container.module.scss';
import LanguageSelect from 'CommonComponents/languageSelect';
import appIcon from 'Images/logo-image.png';
import navigatorHoc from 'Hoc/navigatorHoc';
import PageFooter from 'CommonComponents/pageFooter';

class FullWidthContainer extends Component {

  onClickAppIcon = () => {
    const { navigateTo } = this.props;
    navigateTo('');
  }

  render() {
    const { children } = this.props;

     return (
       <DivColumn fillParent className={styles.page_container}>
         <DivColumn fillParent className={styles.content_container}>

          <DivRow className={styles.header_container}>
            <DivRow className={styles.header_icon_container}>
              <img src={appIcon}  className={styles.app_icon} onClick={this.onClickAppIcon} />
              <div className={styles.app_name} onClick={this.onClickAppIcon}>MA3RATH</div>
              <LanguageSelect blackColor/>
            </DivRow>
            <SectionedHeader />
          </DivRow>

          <DivColumn fillParent className={styles.inner_content_container}>
            <DivColumn fillParent className={styles.content}>
              { children }
            </DivColumn>
            <PageFooter />
          </DivColumn>

         </DivColumn>
       </DivColumn>
     )
  }
}

export default navigatorHoc(FullWidthContainer);