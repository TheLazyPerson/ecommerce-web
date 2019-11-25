import React, { Component } from 'react';
import SectionedContainer from 'CommonContainers/sectionedContainer';
import DivColumn from 'CommonComponents/divColumn';
import DivRow from 'CommonComponents/divRow';
import SideNav from '../components/sideNav';
import styles from './profile_details.module.scss';
import NavHeader from '../components/navHeader';
import map from 'lodash/map';
import CapsuleButton from 'CommonComponents/capsuleButton';
import SecondaryCapsuleButton from 'CommonComponents/secondaryCapsuleButton';

export default class ProfileDetails extends Component {
  state = {
    userInfo: [
      {
        title: 'First Name',
        value: 'Omar'  
      },
      {
        title: 'Last Name',
        value: 'Lastname'  
      },
      {
        title: 'Email Address',
        value: 'omarlastname@mail.com'
      },
      {
        title: 'Phone Number',
        value: '+965-955-5836-852'
      },
      {
        title: 'Gender',
        value: 'NOTSET'
      },
      {
        title: 'Birthday',
        value: 'NOTSET'
      }
    ]
  }
  render() {
    const {userInfo} = this.state;

     return (
      <SectionedContainer
        sideBarContainer={<SideNav />}
      >
        <DivColumn className={styles.details_container}>
        <NavHeader title="profile details">
          <DivRow>
          <SecondaryCapsuleButton className={styles.reset_password_button}>
            Change Password
          </SecondaryCapsuleButton>

          <CapsuleButton>
            Edit Profile
          </CapsuleButton>
          </DivRow>
        </NavHeader>
        
        <DivColumn fillParent>
         {
           map(userInfo, user => (
             <DivColumn className={styles.field_container}>
              <div className={styles.title}>{user.title}</div>
              <div className={styles.value}>{user.value}</div>
             </DivColumn>
           ))
         }
        </DivColumn>

        </DivColumn>
      </SectionedContainer>
     )
  }
}
