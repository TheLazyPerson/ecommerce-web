import React, { Component } from 'react';
import SectionedContainer from 'CommonContainers/sectionedContainer';
import DivColumn from 'CommonComponents/divColumn';
import DivRow from 'CommonComponents/divRow';
import SideNav from '../sideNav';
import styles from './profile_details.module.scss';
import NavHeader from '../navHeader';
import CapsuleButton from 'CommonComponents/capsuleButton';
import SecondaryCapsuleButton from 'CommonComponents/secondaryCapsuleButton';

export default class ProfileDetails extends Component {
  render() {
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
        </DivColumn>
      </SectionedContainer>
     )
  }
}
