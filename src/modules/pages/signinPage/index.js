import React, { Component } from 'react';
import FullWidthContainer from 'CommonContainers/fullwidthContainer';
import DivColumn from 'CommonComponents/divColumn';
import styles from './signin_page.module.scss';
import InputTextComponent from 'CommonComponents/InputTextComponent';
import InputCheckbox from 'CommonComponents/InputCheckbox';

export default class SignInPage extends Component {
  constructor(props) {
    super(props);
  }

  onSubmit = (form) => {
    form.preventDefault();
    console.log('values', form);
  }

  render() {
     return (
       <FullWidthContainer>
        <DivColumn verticalCenter horizontalCenter className={styles.page_container}>
          <div className={styles.signin_title_text}>SignIn</div>
          <form className={styles.form_container} onSubmit={this.onSubmit}>
           <InputTextComponent placeholder="Username" className={styles.input_text} />
           <InputTextComponent placeholder="Password" className={styles.input_text} />
           <InputCheckbox text="Remember me"/>
           <input type='submit' value="Sign in" className={styles.input_submit}/>
          </form>
          <a className={styles.hyper_link}>Forgot password</a>
          <div className={styles.create_account_container}>
            <span className={styles.new_description_text}>New to Maerid?&nbsp;</span>
            <a className={styles.hyper_link}>Create an account</a>
          </div>
        </DivColumn>
       </FullWidthContainer>
     )
  }
}