import React, { Component } from 'react';
import SectionedContainer from "CommonContainers/sectionedContainer";
import DivColumn from 'CommonComponents/divColumn';
import StaticPageHeader from 'CommonComponents/staticPageHeader';
import styles from './terms_and_condition.module.scss';
import map from 'lodash/map';

export default class TermsAndConditionPage extends Component {
  constructor(props) {
    super(props);
  }

  renderDescription = (description) => {
    return map(description, descriptionItem => {
      if (descriptionItem.type == 'normal') {
        return (
          <div>{description.value}</div>
        )
      } else if (descriptionItem.type == 'points') {
        return map(descriptionItem.value, (descriptionPoint, index) => {
          return <div>{`${index+1}. ${descriptionPoint}`}</div>
        })
      }
    })
  }

  render() {
     return (
       <SectionedContainer 
        sideBarContainer={<StaticPageHeader subTitle="TERMS OF USE" title="Terms and Conditions"/>}
       >
        <DivColumn fillParent className={styles.page_container}>
          {
            map([], item => {

              switch(item.type) {
                case 'last-updated':
                  return (
                    <div>{item.value}</div>
                  )
                case 'q-n-a':
                  return (
                    <DivColumn fillSelfHorizontal>
                      <div>{item.value.title}</div>

                      <div>{this.renderDescription(item.value.description)}</div>
                    </DivColumn>
                  )
              }

            })
          }
        </DivColumn>
       </SectionedContainer>
     )
  }
}