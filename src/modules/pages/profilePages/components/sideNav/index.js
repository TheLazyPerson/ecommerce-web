import React, { Component } from 'react';
import {profileListItem} from './../../profileConstants';
import DivColumn from 'CommonComponents/divColumn';
import DivRow from 'CommonComponents/divRow';
import styles from './side_nav.module.scss';
import map from 'lodash/map';

export default class SideNav extends Component {
  render() {
     return (
       <DivColumn verticalCenter className={styles.side_nav_container}>
        {
          map(profileListItem, listItem => {
            if(listItem.title !== 'Logout') {
              return (
                <DivRow className={styles.nav_item}>
                  <img className={styles.nav_image} src={listItem.whiteImage} />
                  <DivColumn>
                    <div className={styles.nav_title}>{listItem.title}</div>
                    <div className={styles.nav_description}>{listItem.description}</div>
                  </DivColumn>
                  <div className={styles.nav_indicator}>></div>
                </DivRow>
              )
            }            
            return null;
          })
        }
       </DivColumn>
     )
  }
}
