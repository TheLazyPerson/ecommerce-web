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

  state = {
    userName: '',
    password: '',
  }
  
  constructor(props) {
    super(props);
  }

  onSubmit = (form) => {
    form.preventDefault();
    const { postSigninAction } = this.props;
    const { userName, password } = this.state;

    if (userName && password) {
      postSigninAction({
        email: userName, // "buisness@gmail.com",
        password,
      }).then((response) => {
        // save to local storage.
      });        
    }
  }

  render() {
    const { userName, password } = this.state;

     return (
       <FullWidthContainer>
        <DivColumn verticalCenter horizontalCenter className={styles.page_container}>
          <div className={styles.signin_title_text}>SignIn</div>
          <form className={styles.form_container} onSubmit={this.onSubmit}>

           <InputTextComponent
             placeholder="Username"
             className={styles.input_text}
             value={userName}
             onChange={event=>this.setState({userName: event.target.value})}
            />

           <InputTextComponent
            placeholder="Password"
            className={styles.input_text}
            type='password'
            value={password}
            onChange={event=>this.setState({password: event.target.value})}
            />
           
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
