import React, { Component } from 'react';
import FullWidthContainer from 'CommonContainers/fullwidthContainer';
import DivColumn from 'CommonComponents/divColumn';
import styles from './signin_page.module.scss';
import InputTextComponent from 'CommonComponents/InputTextComponent';
import InputCheckbox from 'CommonComponents/InputCheckbox';
import navigatorHoc from 'Hoc/navigatorHoc';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { postSigninAction } from 'Core/modules/signin/actions/signinActions';

class SignInPage extends Component {
  constructor(props) {
    super(props);
  }

  onSubmit = (form) => {
    form.preventDefault();
    const { postSigninAction } = this.props;

    postSigninAction({
      email: "buisness@gmail.com",
      password: "123",
    }).then((response) => {
      console.log('something :', response);
    });
  }

  render() {
     return (
       <FullWidthContainer>
        <DivColumn verticalCenter horizontalCenter className={styles.page_container}>
          <div className={styles.signin_title_text}>SignIn</div>
          <form className={styles.form_container} onSubmit={this.onSubmit}>
           <InputTextComponent placeholder="Username" className={styles.input_text} />
           <InputTextComponent placeholder="Password" className={styles.input_text} type='password' />
           <InputCheckbox text="Remember me"/>
           <input type='submit' value="Sign in" className={styles.input_submit}/>
          </form>
          <a className={styles.hyper_link}  href="/forgot-password">Forgot password</a>
          <div className={styles.create_account_container}>
            <span className={styles.new_description_text}>New to Maerid?&nbsp;</span>
            <a className={styles.hyper_link} href="/signup">Create an account</a>
          </div>
        </DivColumn>
       </FullWidthContainer>
     )
  }
}


const mapStateToProps = state => {
  return {}
}

const mapDispathToProps = dispatch => {
  return {
    postSigninAction: bindActionCreators (postSigninAction, dispatch),
  };
};

export default connect(mapStateToProps, mapDispathToProps)(navigatorHoc(SignInPage));
