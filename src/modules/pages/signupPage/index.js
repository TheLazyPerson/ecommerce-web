import React, { Component } from 'react';
import FullWidthContainer from 'CommonContainers/fullwidthContainer';
import DivColumn from 'CommonComponents/divColumn';
import DivRow from 'CommonComponents/divRow';
import styles from './signup_page.module.scss';
import InputTextComponent from 'CommonComponents/InputTextComponent';
import InputCheckbox from 'CommonComponents/InputCheckbox';

export default class SignUpPage extends Component {
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
           <DivRow></DivRow>
           <InputTextComponent placeholder="Firstname" className={styles.input_text} />
           <InputTextComponent placeholder="LastName" className={styles.input_text} />
           <InputTextComponent placeholder="Email" className={styles.input_text} />
           <InputTextComponent placeholder="Password" className={styles.input_text} />
           <InputTextComponent placeholder="Confirm Password" className={styles.input_text} />

           <input type='submit' value="Sign in" className={styles.input_submit}/>
          </form>
          <div className={styles.create_account_container}>
            <span className={styles.new_description_text}>New to Maerid?&nbsp;</span>
            <a className={styles.hyper_link}>Create an account</a>
          </div>
        </DivColumn>
       </FullWidthContainer>
     )
  }
}