import React, { Component } from 'react';
import styles from './dropdown_capsule.module.scss';
import DivRow from 'CommonComponents/divRow';
// import arrowDownIcon from 'Icons/arrow-down-icon-black.svg';
import Select from 'react-select';

export default class DropdownCapsule extends Component {

  getDropdownValue = () => ([
    {
      value: 'Name',
      label: 'Name'
    },
    {
      value: 'Price',
      label: 'Price'
    },
    {
      value: 'Discount',
      label: 'Discount'
    }
  ])

  render() {
    return (
      <DivRow
        className={styles.capsule_container}
      >

        <Select
          className="dropdown-container"
          classNamePrefix="dropdown"
          name="sort"
          placeholder="Sort"
          options={this.getDropdownValue()}
        />
        {/* <div className={styles.capsule_text}>Sort by</div>
        <img
          src={arrowDownIcon}
          className={styles.close_icon}
        /> */}
      </DivRow>
    );
  }
}
