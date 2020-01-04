import React, { Component, Fragment } from 'react';
import SectionedHeader from 'CommonContainers/sectionedHeader';
import DivRow from 'CommonComponents/divRow';
import DivColumn from 'CommonComponents/divColumn';
import styles from './sectioned_container.module.scss';
import appIcon from 'Images/logo-image.png';
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
              <div style={{
                fontWeight: 'bold',
                marginLeft: 6,
                color: 'white',
                cursor: 'pointer'
              }} onClick={this.onClickAppIcon}>MA3RATH</div>
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
            <DivColumn fillParent className={styles.content_container}>
              { !isAbsoluteContent && children }
            </DivColumn>
          </DivColumn>
          
          { isAbsoluteContent && children }
       </DivRow>
     )
  }
}

export default navigatorHoc(SectionedContainer);
