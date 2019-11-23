import React, { Component } from 'react';
import SectionedContainer from 'CommonContainers/sectionedContainer';
import SideNav from '../sideNav';

export default class ProfileOrders extends Component {
  render() {
     return (
      <SectionedContainer
        sideBarContainer={<SideNav />}
      >
      </SectionedContainer>
     )
  }
}