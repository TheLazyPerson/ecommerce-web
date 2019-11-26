import React, { Component } from 'react';
import FullWidthContainer from 'CommonContainers/fullwidthContainer';
import DivColumn from 'CommonComponents/divColumn';
import styles from './forgot_password_page.module.scss';
import InputTextComponent from 'CommonComponents/InputTextComponent';
import InputCheckbox from 'CommonComponents/InputCheckbox';

export default class ForgotPasswordPage extends Component {
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
          <div className={styles.title_text}>Reset Password</div>
          <div className={styles.description_text}>We will send you an email to reset your password.</div>
          <form className={styles.form_container} onSubmit={this.onSubmit}>
           <InputTextComponent placeholder="Email Address" className={styles.input_text} />
           <input type='submit' value="Reset Password" className={styles.input_submit}/>
          </form>
          <div className={styles.create_account_container}>
            <span className={styles.new_description_text}>Already have an Account?&nbsp;</span>
            <a className={styles.hyper_link}>Sign in</a>
          </div>
        </DivColumn>
       </FullWidthContainer>
     )
  }
}