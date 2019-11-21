import React, { Component } from 'react';
import SectionedContainer from 'CommonContainers/sectionedContainer';
import DivColumn from 'CommonComponents/divColumn';
import DivRow from 'CommonComponents/divRow';
import styles from './product_listing_page.module.scss';
import FilterCapsule from './filterCapsule';
import DropdownCapsule from './dropdownCapsule';

export default class ProductListingPage extends Component {
  constructor(props) {
    super(props);
  }
  render() {
     return (
      <SectionedContainer>
       <DivColumn className={styles.product_listing_container}>

        <DivRow className={styles.filter_view_container}>
          <FilterCapsule />
          <DropdownCapsule />
        </DivRow>

        <DivRow className={styles.product_list_container}>
          <div className={styles.product}>Product 1</div>
          <div className={styles.product}>Product 2</div>
          <div className={styles.product}>Product 3</div>
          <div className={styles.product}>Product 4</div>
          <div className={styles.product}>Product 5</div>
          <div className={styles.product}>Product 6</div>
          <div className={styles.product}>Product 7</div>
        </DivRow>

       </DivColumn>
      </SectionedContainer>
     )
  }
}