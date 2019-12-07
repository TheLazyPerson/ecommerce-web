import React, { Component } from 'react';
import SectionedContainer from "CommonContainers/sectionedContainer";
import DivColumn from 'CommonComponents/divColumn';
import StaticPageHeader from 'CommonComponents/staticPageHeader';
import styles from './terms_and_condition.module.scss';

export default class TermsAndConditionPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
     return (
       <SectionedContainer 
        sideBarContainer={<StaticPageHeader subTitle="TERMS OF USE" title="Terms and Conditions"/>}
       >

       </SectionedContainer>
     )
  }
}