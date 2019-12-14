import React, { Component, Fragment } from "react";
import DivColumn from "CommonComponents/divColumn";
import styles from "./quantity_component.module.scss";
import BareQuantityComponent from "CommonComponents/bareQuantityComponent";

export default class QuantityComponent extends Component {
  render() {
    const { quantity, incrementItem, decreaseItem } = this.props;
    return (
      <Fragment>
        <DivColumn>
          <div className={styles.quantity_title}>Quantity</div>
          <BareQuantityComponent
            quantity={quantity}
            incrementItem={incrementItem}
            decreaseItem={decreaseItem}
          />
        </DivColumn>
        <div className={styles.sub_info}>Standerd delivery in 2-4 day’s</div>
      </Fragment>
    );
  }
}
