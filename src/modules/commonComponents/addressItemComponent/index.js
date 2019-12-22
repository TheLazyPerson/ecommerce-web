import React, { Component } from "react";
import DivColumn from "CommonComponents/divColumn";
import DivRow from "CommonComponents/divRow";
import styles from './address_item_component.module.scss';

class AddressItemComponent extends Component {
  render() {
    const {
      address,
      onClickEdit,
      onClickRemove,
      isSelected,
      onClickItem
    } = this.props;
    
    return (
      <DivColumn 
        className={`${styles.address_item} ${isSelected ? styles.selected_address: ''}`}
        onClick={onClickItem ? () => onClickItem(address) : null}
      >
        <DivColumn fillParent className={styles.item_content_container}>
          <div className={styles.item_name}>{address.name}</div>
          <div className={styles.item_address}>
            {address.address1}, <br />
            {address.address2}, <br />
            {address.city}, {address.state}, <br />
            {address.country} - {address.postcode}
          </div>
          <div className={styles.item_phonenumber}>
            Phone Number: {address.country_code}-{address.phone_number}
          </div>
        </DivColumn>
        <DivRow className={styles.action_container}>
          <div
            className={styles.action_button}
            onClick={(event) => {
              event.stopPropagation();
              onClickEdit(address.id)
            }}
          >
            Edit
          </div>
          <div
            className={styles.action_button}
            onClick={(event) => {
              event.stopPropagation();
              onClickRemove(address.id)
            }}
          >
            Remove
          </div>
        </DivRow>
      </DivColumn>
    );
  }
}

export default AddressItemComponent;
