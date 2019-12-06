import React, { Component } from 'react';
import SectionedContainer from 'CommonContainers/sectionedContainer';
import DivColumn from 'CommonComponents/divColumn';
import DivRow from 'CommonComponents/divRow';
import styles from './product_listing_page.module.scss';
import FilterCapsule from './filterCapsule';
import DropdownCapsule from './dropdownCapsule';
import ProductGridItem from './productGridItem';
import SideBarFilter from './sideBarFilter';

export default class ProductListingPage extends Component {
  constructor(props) {
    super(props);
  }
  render() {
     return (
      <SectionedContainer
       sideBarContainer={<SideBarFilter/>}
      >
       <DivColumn className={styles.product_listing_container}>

        <DivRow className={styles.filter_view_container}>
          <FilterCapsule />
          <DropdownCapsule />
        </DivRow>

        <DivRow className={styles.product_list_container}>
          <ProductGridItem />
          <ProductGridItem />
          <ProductGridItem />
          <ProductGridItem />
          <ProductGridItem />
        </DivRow>

       </DivColumn>
      </SectionedContainer>
     )
  }
}