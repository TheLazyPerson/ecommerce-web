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
export default class ChangePassword extends Component {

  onSubmit = (form) => {
    form.preventDefault();
    this.handleSubmitAction();
  }

  handleSubmitAction = () => {
    console.log('onSubmitCalled');
  }

  render() {

     return (
      <SectionedContainer
       sideBarContainer={<SideNav />}
      >
          <form className={styles.form_container} onSubmit={this.onSubmit}>
          <DivColumn>
            <InputTextComponent placeholder="Firstname" className={styles.input_text} />
           <InputTextComponent placeholder="LastName" className={styles.input_text} />
           <InputTextComponent placeholder="Email" className={styles.input_text} />
           <InputTextComponent placeholder="Password" className={styles.input_text} />
           <InputTextComponent placeholder="Confirm Password" className={styles.input_text} />

           <CapsuleButton onClick={this.handleSubmitAction}>Confirm</CapsuleButton>
          </DivColumn>
          </form>
      </SectionedContainer>
     )
  }
}
