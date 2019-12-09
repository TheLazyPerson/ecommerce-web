import React, { Component } from 'react';
import SectionedContainer from "CommonContainers/sectionedContainer";
import DivColumn from 'CommonComponents/divColumn';
import StaticPageHeader from 'CommonComponents/staticPageHeader';
import styles from './terms_and_condition.module.scss';
import map from 'lodash/map';
import { termsAndCondition } from 'Constants/termsAndConditionConstants';

export default class TermsAndConditionPage extends Component {
  constructor(props) {
    super(props);
  }

  renderDescription = (description) => {
    return map(description, descriptionItem => {
      if (descriptionItem.type == 'text') {
        return (
          <div className={styles.description_text}>{descriptionItem.value}</div>
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
            map(termsAndCondition, item => {

              switch(item.type) {
                case 'last-updated':
                  return (
                    <div>{item.value}</div>
                  );
                case 'q-n-a':
                  return (
                    <DivColumn fillSelfHorizontal className={styles.qna_container}>
                      <div className={styles.title}>{item.value.title}</div>

                      {this.renderDescription(item.value.description)}
                    </DivColumn>
                  );
              }

            })
          }
        </DivColumn>
       </SectionedContainer>
     )
  }
}