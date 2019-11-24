import React, { Component } from 'react';
import SectionedContainer from 'CommonContainers/sectionedContainer';
import DivColumn from 'CommonComponents/divColumn';
import DivRow from 'CommonComponents/divRow';
import map from 'lodash/map';
import styles from './profile_overview.module.scss';
import {profileListItem} from './profileConstants';
import SideNav from './sideNav';


export default class ProfileOverview extends Component {
  render() {
    return (
      <SectionedContainer
       sideBarContainer={<SideNav />}
      >
        <DivColumn className={styles.profile_overview_container}>
          <DivColumn verticalCenter horizontalCenter className={styles.header_container}>
            <div className={styles.header_title}>MY ACCOUNT</div>
            <div className={styles.header_message}>Welcome, Omar.</div>
          </DivColumn>

          <DivRow className={styles.items_container}>
            {
              map(profileListItem, listItem => {
                if (listItem.title != 'Overview') {
                  return (
                    <DivColumn verticalCenter horizontalCenter className={styles.grid_item}>
                      <img className={styles.item_image} src={listItem.blackImage}/>
                      <div className={styles.item_title}>{listItem.title}</div>
                      <div className={styles.item_description}>{listItem.description}</div>
                    </DivColumn>      
                  )
                }
                return null;
              })
            }
          </DivRow>
        </DivColumn>
      </SectionedContainer>
    );
  }
}