import React, { Component } from 'react';
import FullWidthContainer from 'CommonContainers/fullwidthContainer';
import DivColumn from 'CommonComponents/divColumn';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import DivRow from 'CommonComponents/divRow';
import styles from './signup_page.module.scss';
import InputTextComponent from 'CommonComponents/InputTextComponent';
import InputCheckbox from 'CommonComponents/InputCheckbox';
import { postSignupAction } from 'Core/modules/signup/actions';

class SignUpPage extends Component {
  constructor(props) {
    super(props);
  }

  onSubmit = (form) => {
    form.preventDefault();
    console.log('values', form);
    
    const { postSignupAction } = this.props;

    postSignupAction({
      "first_name": "Sample",
      "last_name": "Lastname",
      "email": "sample2456123456123@mail.com",
      "password": "omkomawar123",
      "password_confirmation": "omkomawar123"
    }).then(value=>{
      console.log('fError:', value);
    }).catch(error=> {
      console.log('fError: ',error)
    });
  }

  render() {
     return (
       <FullWidthContainer>
        <DivColumn verticalCenter horizontalCenter className={styles.page_container}>
          <div className={styles.signin_title_text}>Sign Up</div>
          <form className={styles.form_container} onSubmit={this.onSubmit}>
           <DivRow className={styles.name_container}>
             <InputTextComponent placeholder="Firstname" className={styles.input_text} />
             <InputTextComponent placeholder="LastName" className={styles.input_text} />
           </DivRow>
           <InputTextComponent placeholder="Email" className={styles.input_text} />
           <InputTextComponent placeholder="Password" className={styles.input_text} />
           <InputTextComponent placeholder="Confirm Password" className={styles.input_text} />

           <input type='submit' value="Create" className={styles.input_submit}/>
          </form>
          <div className={styles.create_account_container}>
            <span className={styles.new_description_text}>Already have an account?&nbsp;</span>
            <a className={styles.hyper_link}>Sign in</a>
          </div>
        </DivColumn>
       </FullWidthContainer>
     )
  }
}

const mapStateToProps = state => {
  return {
    signupReducer: state.signupReducer
  }
}

const mapDispathToProps = dispatch => {
  return {
    postSignupAction: bindActionCreators(postSignupAction, dispatch)
  }
}

export default connect(mapStateToProps, mapDispathToProps)(SignUpPage);