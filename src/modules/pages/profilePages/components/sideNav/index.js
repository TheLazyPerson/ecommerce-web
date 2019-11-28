import React, { Component } from 'react';
import {profileListItem} from './../../profileConstants';
import DivColumn from 'CommonComponents/divColumn';
import DivRow from 'CommonComponents/divRow';
import styles from './side_nav.module.scss';
import map from 'lodash/map';
import navigatorHoc from 'Hoc/navigatorHoc';

class SideNav extends Component {
  onClickNavItemClick = (slug) => {
    const { navigateTo } = this.props;

    if(slug == 'overview') {
      navigateTo('profile');
    } else if (slug == 'profile') {
      navigateTo('profile-details');
    } else {
      navigateTo(slug);
    }

  }

  render() {
     return (
       <DivColumn verticalCenter className={styles.side_nav_container}>
        {
          map(profileListItem, listItem => {
            if(listItem.title !== 'Logout') {
              return (
                <DivRow className={styles.nav_item} onClick={() => this.onClickNavItemClick(listItem.slug)}>
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

export default navigatorHoc(SideNav);
