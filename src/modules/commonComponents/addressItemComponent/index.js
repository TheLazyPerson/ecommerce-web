import React, { Component } from "react";
import DivColumn from "CommonComponents/divColumn";
import DivRow from "CommonComponents/divRow";
import styles from "./address_item_component.module.scss";
import translatorHoc from "Hoc/translatorHoc";
import { connect } from "react-redux";
import navigatorHoc from "Hoc/navigatorHoc";

class AddressItemComponent extends Component {
  render() {
    const {
      address,
      onClickEdit,
      onClickRemove,
      isSelected,
      onClickItem,
      translate,
      isRTL,
    } = this.props;
    const phoneNumber = isRTL
      ? `${address.phone_number} ${translate(
          "address_item_component.phone_number"
        )}`
      : `${translate("address_item_component.phone_number")} ${
          address.phone_number
        }`;

    return (
      <DivColumn
        className={`${styles.address_item} ${isRTL ? styles.rtl : ""} ${
          isSelected ? styles.selected_address : ""
        }`}
        onClick={onClickItem ? () => onClickItem(address) : null}
      >
        <DivColumn fillParent className={styles.item_content_container}>
          <div className={styles.item_name}>{address.name}</div>
          <div className={styles.item_address}>
            {address.area}, <br />
            {address.block_number}, {address.house_number}
            <br />
            {address.street_number}, {address.avenue}, <br />
            {address.landmark} - {address.city}
          </div>
          <div className={styles.item_phonenumber}>{phoneNumber}</div>
        </DivColumn>
        <DivRow className={styles.action_container}>
          <div
            className={styles.action_button}
            onClick={(event) => {
              event.stopPropagation();
              onClickEdit(address.id);
            }}
          >
            {translate("address_item_component.edit")}
          </div>
          <div
            className={styles.action_button}
            onClick={(event) => {
              event.stopPropagation();
              onClickRemove(address.id);
            }}
          >
            {translate("address_item_component.remove")}
          </div>
        </DivRow>
      </DivColumn>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isRTL: state.languageReducer.isRTL,
  };
};

export default connect(
  mapStateToProps,
  null
)(navigatorHoc(translatorHoc(AddressItemComponent)));
