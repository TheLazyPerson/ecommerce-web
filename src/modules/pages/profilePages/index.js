import React, { Component } from 'react';
import SectionedContainer from 'CommonContainers/sectionedContainer';
import DivColumn from 'CommonComponents/divColumn';
import DivRow from 'CommonComponents/divRow';
import styles from './profile_overview.module.scss';

export default class ProfileOverview extends Component {
  //TODO move the array value to a constant

  state = {
    profileValues: [

    ]
  }

  render() {
    return (
      <SectionedContainer>
        <DivColumn className={styles.profile_overview_container}>
          <DivColumn verticalCenter horizontalCenter className={styles.header_container}>
            <div className={styles.header_title}>MY ACCOUNT</div>
            <div className={styles.header_message}>Welcome, Omar.</div>
          </DivColumn>

          <DivRow className={styles.items_container}>
            
            <DivColumn verticalCenter horizontalCenter className={styles.grid_item}>
              <img className={styles.item_image}/>
              <div className={styles.item_title}>Orders</div>
              <div className={styles.item_description}>Check your order status</div>
            </DivColumn>

          </DivRow>
        </DivColumn>
      </SectionedContainer>
    );
  }
}