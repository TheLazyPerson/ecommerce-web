import React, { Component } from 'react';
import FullWidthContainer from 'CommonContainers/fullwidthContainer';
import DivRow from 'CommonComponents/divRow';
import DivColumn from 'CommonComponents/divColumn';
import styles from './search_page.module.scss';
import ExhibitionItemComponent from './exhibitionItemComponent';

export default class SearchPage extends Component {
  render() {
    return (
      <FullWidthContainer>
        <DivColumn fillParent className={styles.search_container}>
         <div className={styles.page_header}>Search: the craft show</div>
         <DivRow fillParent className={styles.search_list_container}>
          <DivColumn fillParent className={styles.section}>
            <div className={styles.section_header}>
              EXHIBITIONS
            </div>
            
            <DivRow>

              <ExhibitionItemComponent />

            </DivRow>
          </DivColumn>
          
         </DivRow>
        </DivColumn>
      </FullWidthContainer>
    );
  }
}
