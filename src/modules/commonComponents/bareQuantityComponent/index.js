import React, { Component, Fragment } from "react";
import DivRow from "CommonComponents/divRow";
import DivColumn from "CommonComponents/divColumn";
import styles from "./bare_quantity_component.module.scss";
import minusIcon from "Icons/minus-icon.svg";
import plusIcon from "Icons/plus-icon.svg";

export default class QuantityComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 1
    };
  }
  IncrementItem = () => {
    this.setState(prevState => {
      if (prevState.quantity < 9) {
        return {
          quantity: prevState.quantity + 1
        };
      } else {
        return null;
      }
    });
    this.props.updateQuantity(this.state.quantity);
  };
  DecreaseItem = () => {
    this.setState(prevState => {
      if (prevState.quantity > 1) {
        return {
          quantity: prevState.quantity - 1
        };
      } else {
        return null;
      }
    });

    this.props.updateQuantity(this.state.quantity);
  };

  render() {
    const { className, quantity } = this.props;

    return (
      <DivRow
        verticalCenter
        className={`${styles.quantity_container} ${className}`}
      >
        <img
          alt={"remove"}
          className={styles.quantity_button}
          src={minusIcon}
          onClick={this.DecreaseItem}
        />
        <div className={styles.quantity_text}>
          {quantity ? quantity : this.state.quantity}
        </div>
        <img
          alt={"add"}
          className={styles.quantity_button}
          src={plusIcon}
          onClick={this.IncrementItem}
        />
      </DivRow>
    );
  }
}
