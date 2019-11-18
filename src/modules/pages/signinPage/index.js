import React, { Component } from 'react';
import FullWidthContainer from 'CommonContainers/fullwidthContainer';
import DivColumn from 'CommonComponents/divColumn';
import styles from './signin_page.module.scss';

export default class SignInPage extends Component {
  constructor(props) {
        super(props);
  }
  render() {
     return (
       <FullWidthContainer>
        <DivColumn verticalCenter horizontalCenter className={styles.page_container}>
          SignIn
          <form>

          </form>
        </DivColumn>
       </FullWidthContainer>
     )
  }
}