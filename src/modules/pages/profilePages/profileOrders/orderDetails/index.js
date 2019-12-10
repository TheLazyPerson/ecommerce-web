import React, { Component } from 'react';
import SectionedContainer from 'CommonContainers/sectionedContainer';
import DivColumn from 'CommonComponents/divColumn';
import DivRow from 'CommonComponents/divRow';
import SideNav from '../../components/sideNav';
import styles from './order_details.module.scss';
import NavHeader from '../../components/navHeader';
import map from 'lodash/map';
import navigatorHoc from 'Hoc/navigatorHoc';
import HorizontalBorder from 'CommonComponents/horizontalBorder';

class OrderDetails extends Component {

  onBackPress= () =>{
    const { pop } = this.props;
    pop();
  }

  render() {
     return (
      <SectionedContainer
       sideBarContainer={<SideNav />}
      >
        <NavHeader title="Order Details" onBackClick={this.onBackPress} />
          <DivColumn fillParent className={styles.page_container}>

          </DivColumn>
      </SectionedContainer>
     )
  }
}

export default navigatorHoc(OrderDetails);
