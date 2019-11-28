import React, { Component } from 'react';
import DivColumn from 'CommonComponents/divColumn';
import DivRow from 'CommonComponents/divRow';
import styles from './product_grid_item.module.scss';

export default class ProductGridItem extends Component {

  render() {
     return (
       <DivColumn className={styles.product_container}>
        <div className={styles.product_title}>Adidas Red Shoes</div>
        <div className={styles.product_description}>Elegant. Timeless. The quitessensial symbol of love</div>
        <img />
        <DivRow className={styles.product_action_container}>
          <DivRow 
           verticalCenter
           horizontalCenter
           className={styles.heart_icon_container}>
            <img /> {/* heart icon */}
          </DivRow>

          <DivRow
           verticalCenter
           horizontalCenter
           className={styles.view_product_container}>
            <img />
            <div className={styles.action_text}>
             View Product
            </div>
          </DivRow>

          <DivRow
           verticalCenter
           horizontalCenter
           className={styles.bag_container}>
            <div
              className={styles.action_text}
              style={{
                color: 'white'
              }}
            >
              Add to Bag | KD  29
            </div>
            <img />
          </DivRow>

        </DivRow>
       </DivColumn>
     )
  }
}
