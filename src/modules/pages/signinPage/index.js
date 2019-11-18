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
           <input type='text' placeholder="Username" />
           <input type='text' placeholder="password" />
           <div>
             <input type='checkbox'/>
             Remember me
           </div>
           <input type='submit' value="Sign in" />
          </form>
          <a>Forgot password</a>
          <div> New to Maerid? <a>Create an account</a></div>
        </DivColumn>
       </FullWidthContainer>
     )
  }
}