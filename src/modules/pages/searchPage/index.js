import React, { Component } from 'react';
import FullWidthContainer from 'CommonContainers/fullwidthContainer';
import DivRow from 'CommonComponents/divRow';
import DivColumn from 'CommonComponents/divColumn';
import styles from './search_page.module.scss';

export default class SearchPage extends Component {
  render() {
    return (
      <FullWidthContainer>
        <DivColumn fillParent className={styles.search_container}>
         <div className={styles.page_header}>Search: the craft show</div>
         <DivRow className={styles.search_list_container}>
          
         </DivRow>
        </DivColumn>
      </FullWidthContainer>
    );
  }
}
