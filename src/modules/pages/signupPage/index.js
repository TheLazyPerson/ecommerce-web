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
import {
  nameValidator,
  emailValidator,
  passwordValidator,
  isEmptyValidator
} from 'Utils/validators';

class SignUpPage extends Component {

  componentWillReceiveProps(nextProps) {
    const { signInReducer: { userDetails }, navigateTo } = nextProps;
    if (userDetails) {
      navigateTo('');
    }
  }

  onSubmit = (form) => {
    const { postSignupAction } = this.props;

    postSignupAction({
      "first_name": form.firstName,
      "last_name": form.lastName,
      "email": form.email,
      "password": form.password,
      "password_confirmation": form.confirmPassword
    });
  }

  validate = (values) => {
    const errors = {};
    const validators = {
      firstName: nameValidator(values.firstName),
      lastName:  nameValidator(values.lastName),
      email:  emailValidator(values.email),
      password: isEmptyValidator(values.password),
      confirmPassword: passwordValidator(values.password, values.confirmPassword)
    }

    Object.keys(validators).forEach(key=>{
      if (!validators[key].result)
        errors[key] = validators[key].error;
   });

    return errors;
  }

  render() {
    return (
      <FullWidthContainer>
        <DivColumn verticalCenter horizontalCenter className={styles.page_container}>
          <div className={styles.signin_title_text}>Sign Up</div>
          <Form
            onSubmit={this.onSubmit}
            validate={this.validate}
            render={({ handleSubmit, form, submitting, pristine, values }) => (
              <form className={styles.form_container} onSubmit={handleSubmit}>
                <DivRow className={styles.name_container}>
                  <Field name="firstName">
                    {
                      ({ input, meta }) => (
                        <InputTextComponent 
                          meta={meta} 
                          {...input}
                          placeholder="Firstname"
                          className={styles.input_text}
                        />
                      )
                    }
                  </Field>
                  <Field name="lastName">
                    {
                      ({ input, meta }) => (
                        <InputTextComponent
                         meta={meta}
                         {...input}
                         placeholder="Lastname"
                         className={styles.input_text}
                        />
                      )
                    }
                  </Field>
                </DivRow>
                <Field name="email">
                    {
                      ({ input, meta }) => (
                        <InputTextComponent
                         meta={meta}
                         {...input}
                         placeholder="Email"
                         className={styles.input_text}
                        />
                      )
                    }
                </Field>

                
                <Field name="password">
                    {
                      ({ input, meta }) => (
                        <InputTextComponent
                         meta={meta}
                         type="password"
                         {...input}
                         placeholder="Password"
                         className={styles.input_text}
                        />
                      )
                    }
                </Field>

                <Field name="confirmPassword">
                    {
                      ({ input, meta }) => (
                        <InputTextComponent
                         meta={meta}
                         type="password"
                         {...input}
                         placeholder="Confirm Password"
                         className={styles.input_text}
                        />
                      )
                    }
                </Field>
                <input type='submit' value="Create" className={styles.input_submit} />
              </form>
            )}
          />

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
