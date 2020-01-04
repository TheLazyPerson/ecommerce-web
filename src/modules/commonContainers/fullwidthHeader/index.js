
import React, { Component } from 'react';
import SectionedHeader from 'CommonContainers/sectionedHeader';
import DivRow from 'CommonComponents/divRow';
import DivColumn from 'CommonComponents/divColumn';
import styles from './fullwidth_header.module.scss';
import LanguageSelect from 'CommonComponents/languageSelect';
import appIcon from 'Images/logo-image.png';
import navigatorHoc from 'Hoc/navigatorHoc';
import PageFooter from 'CommonComponents/pageFooter';

class FullwidthHeader extends Component {

  onClickAppIcon = () => {
    const { navigateTo } = this.props;
    navigateTo('');
  }

  render() {
    const { children, whiteColor, className } = this.props;

     return (
      <DivRow className={`${styles.header_container} ${className}`}>
        <DivRow className={styles.header_icon_container}>
          <img src={appIcon}  className={styles.app_icon} onClick={this.onClickAppIcon} />
          <div
           style={whiteColor? {color: 'white'} : null}
           className={styles.app_name}
           onClick={this.onClickAppIcon}
          >
            MA3RATH
          </div>
          <LanguageSelect blackColor={!whiteColor}/>
        </DivRow>
        <SectionedHeader whiteColor={whiteColor}/>
      </DivRow>
     )
  }
}

FullwidthHeader.defaultProps = {
  whiteColor: false
};

export default navigatorHoc(FullwidthHeader);
