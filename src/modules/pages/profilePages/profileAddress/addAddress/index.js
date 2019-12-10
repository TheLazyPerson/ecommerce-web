import React, { Component } from 'react';
import SectionedContainer from 'CommonContainers/sectionedContainer';
import DivColumn from 'CommonComponents/divColumn';
import DivRow from 'CommonComponents/divRow';
import SideNav from '../../components/sideNav';
import styles from './add_address.module.scss';
import NavHeader from '../../components/navHeader';
import map from 'lodash/map';
import CapsuleButton from 'CommonComponents/capsuleButton';
import SecondaryCapsuleButton from 'CommonComponents/secondaryCapsuleButton';
import InputTextComponent from 'CommonComponents/InputTextComponent';
import InputCheckbox from 'CommonComponents/InputCheckbox';
import navigatorHoc from 'Hoc/navigatorHoc';
import HorizontalBorder from 'CommonComponents/horizontalBorder';

class AddAddress extends Component {
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

  onClickCancel= () => {
  }

  render() {
     return (
      <SectionedContainer
       sideBarContainer={<SideNav />}
      >
        <NavHeader title="Add Address" onBackClick={this.onBackPress} />
          <DivColumn fillParent className={styles.page_container}>
            <form className={styles.form_container} onSubmit={this.onSubmit}>
              <DivColumn className={styles.text_input_container}>
                <InputTextComponent placeholder="First Name" className={styles.input_text} />
                <InputTextComponent placeholder="Last Name" className={styles.input_text} />
                <InputTextComponent placeholder="Mobile Number" className={styles.input_text} />
              </DivColumn>

              <HorizontalBorder className={styles.address_divider} />

              <DivColumn className={styles.text_input_container}>
                <InputTextComponent placeholder="Street" className={styles.input_text} />
                <InputTextComponent placeholder="Address(House no, Building, Street area)" className={styles.input_text} />
                <InputTextComponent placeholder="City" className={styles.input_text} />
                <InputTextComponent placeholder="Pincode" className={styles.input_text} />
              </DivColumn>

              <HorizontalBorder className={styles.button_divider} />
              <DivColumn verticalCenter horizontalCenter className={styles.checkbox_container}>
                <InputCheckbox text="Make this my default address." textStyle={styles.checkbox_text}/>
              </DivColumn>
              <DivRow className={styles.form_button_container}>
                <SecondaryCapsuleButton onClick={this.onClickCancel}>Cancel</SecondaryCapsuleButton>
                <CapsuleButton onClick={this.handleSubmitAction}>Save Details</CapsuleButton>
              </DivRow>
            </form>
          </DivColumn>
      </SectionedContainer>
     )
  }
}

export default navigatorHoc(AddAddress);
