import React, { Component } from 'react';
import SectionedHeader from 'CommonContainers/sectionedHeader';
import DivRow from 'CommonComponents/divRow';
import DivColumn from 'CommonComponents/divColumn';
import styles from './full_width_container.module.scss';

export default class FullWidthContainer extends Component {

  render() {
    const { children } = this.props;

     return(
       <DivColumn className={styles.page_container}>
         <SectionedHeader />
         { children }
       </DivColumn>
     )
  }

}