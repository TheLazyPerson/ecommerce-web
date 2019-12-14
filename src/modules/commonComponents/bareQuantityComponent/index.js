import React, { Component, Fragment } from "react";
import DivRow from "CommonComponents/divRow";
import DivColumn from "CommonComponents/divColumn";
import styles from "./bare_quantity_component.module.scss";
import minusIcon from "Icons/minus-icon.svg";
import plusIcon from "Icons/plus-icon.svg";

export default class QuantityComponent extends Component {
  render() {
    const { className } = this.props;
    return (
      <DivRow
        verticalCenter
        className={`${styles.quantity_container} ${className}`}
      >
        <img
          alt={"remove"}
          className={styles.quantity_button}
          src={minusIcon}
          onClick={this.props.decreaseItem}
        />
        <div className={styles.quantity_text}>{this.props.quantity}</div>
        <img
          alt={"add"}
          className={styles.quantity_button}
          src={plusIcon}
          onClick={this.props.incrementItem}
        />
      </DivRow>
    );
  }
}
