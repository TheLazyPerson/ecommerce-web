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

export default class ChangePassword extends Component {

  render() {

     return (
      <SectionedContainer
       sideBarContainer={<SideNav />}
      >
      
      </SectionedContainer>
     )
  }
}
