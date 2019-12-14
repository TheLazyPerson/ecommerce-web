import React, { Component, Fragment } from "react";
import DivRow from "CommonComponents/divRow";
import DivColumn from "CommonComponents/divColumn";
import styles from "./quantity_component.module.scss";
import minusIcon from "Icons/minus-icon.svg";
import plusIcon from "Icons/plus-icon.svg";
import BareQuantityComponent from "CommonComponents/bareQuantityComponent";

export default class QuantityComponent extends Component {
  render() {
    const { quantity, updateQuantity } = this.props;
    return (
      <Fragment>
        <DivColumn>
          <div className={styles.quantity_title}>Quantity</div>
          <BareQuantityComponent
            quantity={quantity}
            updateQuantity={updateQuantity}
          />
        </DivColumn>
        <div className={styles.sub_info}>Standerd delivery in 2-4 day’s</div>
      </Fragment>
    );
  }
}
