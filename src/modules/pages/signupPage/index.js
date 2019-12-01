import React, { Component } from 'react';
import FullWidthContainer from 'CommonContainers/fullwidthContainer';
import DivColumn from 'CommonComponents/divColumn';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import DivRow from 'CommonComponents/divRow';
import styles from './signup_page.module.scss';
import InputTextComponent from 'CommonComponents/InputTextComponent';
import InputCheckbox from 'CommonComponents/InputCheckbox';
import { Form, Field } from 'react-final-form';
import { postSignupAction } from 'Core/modules/signup/actions';
import navigatorHoc from 'Hoc/navigatorHoc';

class SignUpPage extends Component {

  componentWillReceiveProps(nextProps) {
    const { signInReducer: { userDetails }, navigateTo } = nextProps;
    if (userDetails) {
      navigateTo('');
    }
  }

  onSubmit = (form) => {
    form.preventDefault();    
    const { postSignupAction } = this.props;

    postSignupAction({
      "first_name": "Sample",
      "last_name": "Lastname",
      "email": "sample24561234561273@gmail.com",
      "password": "omkomawar123",
      "password_confirmation": "omkomawar123"
    }).then(value=>{
      console.log('fError:', value);
    }).catch(error=> {
      console.log('fError: ',error)
    });
  }
  

  /* 
  const MyForm = () => (
  <Form
    onSubmit={onSubmit}
    validate={validate}
    render={({ handleSubmit }) => (
      <form onSubmit={handleSubmit}>
        <h2>Simple Default Input</h2>
        <div>
          <label>First Name</label>
          <Field name="firstName" component="input" placeholder="First Name" />
        </div>

        <h2>An Arbitrary Reusable Input Component</h2>
        <div>
          <label>Interests</label>
          <Field name="interests" component={InterestPicker} />
        </div>

        <h2>Render Function</h2>
        <Field
          name="bio"
          render={({ input, meta }) => (
            <div>
              <label>Bio</label>
              <textarea {...input} />
              {meta.touched && meta.error && <span>{meta.error}</span>}
            </div>
          )}
        />

        <h2>Render Function as Children</h2>
        <Field name="phone">
          {({ input, meta }) => (
            <div>
              <label>Phone</label>
              <input type="text" {...input} placeholder="Phone" />
              {meta.touched && meta.error && <span>{meta.error}</span>}
            </div>
          )}
        </Field>

        <button type="submit">Submit</button>
      </form>
    )}
  />
)
  */

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
            <a className={styles.hyper_link} href="/signin">Sign in</a>
          </div>
        </DivColumn>
       </FullWidthContainer>
     );
  }
}

const mapStateToProps = state => {
  return {
    signupReducer: state.signupReducer,
    signInReducer: state.signInReducer,
  }
}

const mapDispathToProps = dispatch => {
  return {
    postSignupAction: bindActionCreators(postSignupAction, dispatch)
  }
}

export default connect(mapStateToProps, mapDispathToProps)(navigatorHoc(SignUpPage));