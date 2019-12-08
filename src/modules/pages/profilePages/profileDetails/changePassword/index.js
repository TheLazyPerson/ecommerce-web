import React, { Component } from 'react';
import SectionedContainer from 'CommonContainers/sectionedContainer';
import DivColumn from 'CommonComponents/divColumn';
import DivRow from 'CommonComponents/divRow';
import SideNav from '../../components/sideNav';
import styles from './change_password.module.scss';
import NavHeader from '../../components/navHeader';
import map from 'lodash/map';
import CapsuleButton from 'CommonComponents/capsuleButton';
import SecondaryCapsuleButton from 'CommonComponents/secondaryCapsuleButton';
import InputTextComponent from 'CommonComponents/InputTextComponent';
import navigatorHoc from 'Hoc/navigatorHoc';
class ChangePassword extends Component {

  onSubmit = (form) => {
    form.preventDefault();
    this.handleSubmitAction();
  }

  handleSubmitAction = () => {
    console.log('onSubmitCalled');
  }

  onBackPress= () =>{
    const { pop } = this.props;

    pop();
  }

  render() {

     return (
      <SectionedContainer
       sideBarContainer={<SideNav />}
      >
        <NavHeader title="Change password" onBackClick={this.onBackPress} />
          <form className={styles.form_container} onSubmit={this.onSubmit}>
            <DivColumn>
            <InputTextComponent placeholder="Old Password" className={styles.input_text} />
            <InputTextComponent placeholder="New Password" className={styles.input_text} />
            <InputTextComponent placeholder="Confirm Password" className={styles.input_text} />

            <CapsuleButton onClick={this.handleSubmitAction}>Confirm</CapsuleButton>
            </DivColumn>
          </form>
      </SectionedContainer>
     )
  }
}

export default navigatorHoc(ChangePassword);
