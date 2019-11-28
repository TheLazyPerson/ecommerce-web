import React, { Component } from 'react';
import DivColumn from 'CommonComponents/divColumn';
import DivRow from 'CommonComponents/divRow';
import InputCheckbox from '../../../commonComponents/InputCheckbox';
import styles from './side_bar_filter.module.scss';

export default class SideBarFilter extends Component {
  render() {
     return (
      <DivColumn>
        <DivRow className={styles.filter_top_heading_container}>
          <div className={styles.filter_text}>
            FILTERS
          </div>
          <div className={styles.clear_text}>
            CLEAR ALL
          </div>
        </DivRow>

        <DivColumn className={styles.filters_container}>
          <div className={styles.filter_sub_header}>
            CATEGORIES
          </div>
          <DivColumn className={styles.filters_list_container}>
            <InputCheckbox text="Shirt" textStyle={styles.checkbox_text} />
            <InputCheckbox text="T-Shirt" textStyle={styles.checkbox_text} />
            <InputCheckbox text="Trousers" textStyle={styles.checkbox_text} />
          </DivColumn>
        </DivColumn>


        <DivColumn className={styles.filters_container}>
          <div className={styles.filter_sub_header}>
           PRICES
          </div>

          <DivColumn className={styles.filters_list_container}>
           <InputCheckbox text="Rs. 172 to Rs. 1192" textStyle={styles.checkbox_text} />
           <InputCheckbox text="Rs. 1192 to Rs. 2212" textStyle={styles.checkbox_text} />
           <InputCheckbox text="Rs. 2212 to Rs. 3232" textStyle={styles.checkbox_text} />
          </DivColumn>
        </DivColumn>
        
      </DivColumn>
     )
  }
}
