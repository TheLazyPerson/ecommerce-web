import React, { Component } from "react";
import styles from "./dropdown_capsule.module.scss";
import DivRow from "CommonComponents/divRow";
// import arrowDownIcon from 'Icons/arrow-down-icon-black.svg';
import Select from "react-select";
import translatorHoc from "Hoc/translatorHoc";

class DropdownCapsule extends Component {
  render() {
    const { onChange, translate } = this.props;
    const dropdownValues = [
      {
        value: "price_low_to_high",
        label: translate("sort.price_low_to_high"),
      },
      {
        value: "price_high_to_low",
        label: translate("sort.price_high_to_low"),
      },
    ];
    return (
      <DivRow className={styles.capsule_container}>
        <Select
          className="dropdown-container"
          classNamePrefix="dropdown"
          name="sort"
          placeholder={translate("sort.sort_title")}
          onChange={onChange}
          options={dropdownValues}
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

export default translatorHoc(DropdownCapsule);
