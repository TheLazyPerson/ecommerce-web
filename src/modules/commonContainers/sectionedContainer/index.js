import React, { Component, Fragment } from 'react';
import SectionedHeader from 'CommonContainers/sectionedHeader';
import DivRow from 'CommonComponents/divRow';
import DivColumn from 'CommonComponents/divColumn';
import styles from './sectioned_container.module.scss';
import appIcon from 'Icons/app-icon-white.svg';
import LanguageSelect from 'CommonComponents/languageSelect';
import navigatorHoc from 'Hoc/navigatorHoc';

class SectionedContainer extends Component {

  onClickAppIcon = () => {
    const { navigateTo } = this.props;
    navigateTo('');
  }

  render() {
    const { 
      isAbsoluteContent,
      sideBarContainer,
      children
    } = this.props;

     return (
       <DivRow className={styles.page_container}>
         <DivColumn className={styles.left_container}>
            <DivRow className={styles.header_container}>
              <img src={appIcon} className={styles.app_icon} onClick={this.onClickAppIcon}/>
            </DivRow>
            
            { !isAbsoluteContent && (
               <Fragment>
                <DivColumn className={styles.side_content_container}>
                  {sideBarContainer}
                </DivColumn>
                <DivRow
                 verticalCenter
                 horizontalCenter
                 className={styles.side_footer_container}
                >
                  <LanguageSelect />
                </DivRow>
               </Fragment>
              )
            }

         </DivColumn>

          <DivColumn className={styles.right_container}>
            <DivRow className={styles.header_container}>
              <SectionedHeader />
            </DivRow>
            {/* children/content */}
            { !isAbsoluteContent && children }
          </DivColumn>
          
          { isAbsoluteContent && children }
       </DivRow>
     )
  }
}

export default navigatorHoc(SectionedContainer);
