import React, { Component, Fragment } from "react";
import DivColumn from "CommonComponents/divColumn";
import styles from "./quantity_component.module.scss";
import BareQuantityComponent from "CommonComponents/bareQuantityComponent";
import translatorHoc from 'Hoc/translatorHoc';

class QuantityComponent extends Component {
  render() {
    const {
      quantity,
      incrementItem,
      decreaseItem,
      translate
    } = this.props;
    
    return (
      <Fragment>
        <DivColumn>
          <div className={styles.quantity_title}>{translate('quantity_container.quantity')}</div>
          <BareQuantityComponent
            quantity={quantity}
            incrementItem={incrementItem}
            decreaseItem={decreaseItem}
          />
        </DivColumn>
        <div className={styles.sub_info}>{translate('quantity_container.delivery_time')}</div>
      </Fragment>
    );
  }
}

export default translatorHoc(QuantityComponent);
