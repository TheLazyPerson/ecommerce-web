import React, { Component } from "react";
import SectionedContainer from "CommonContainers/sectionedContainer";
import DivRow from "CommonComponents/divRow";
import SideNav from "../../components/sideNav";
import styles from "./edit_profile.module.scss";
import NavHeader from "../../components/navHeader";
import { Form, Field } from "react-final-form";
import CapsuleButton from "CommonComponents/capsuleButton";
import SecondaryCapsuleButton from "CommonComponents/secondaryCapsuleButton";
import InputTextComponent from "CommonComponents/InputTextComponent";
import navigatorHoc from "Hoc/navigatorHoc";
import {
  isPhoneNumber,
  nameValidator,
  isEmptyValidator,
  emailValidator
} from "Utils/validators";

class EditProfile extends Component {
  onBackPress = () => {
    const { pop } = this.props;
    pop();
  };

  onSubmit = form => {
    // TODO make Api call here
  };

  validate = values => {
    const errors = {};
    const validators = {
      firstName: nameValidator(values.firstName),
      lastName: nameValidator(values.lastName),
      gender: isEmptyValidator(values.gender),
      mobileNumber: isPhoneNumber(values.mobileNumber),
      email: emailValidator(values.email),
      birthday: isEmptyValidator(values.birthday)
    };

    Object.keys(validators).forEach(key => {
      if (!validators[key].result) errors[key] = validators[key].error;
    });

    return errors;
  };

  onClickCancel = () => {
    this.onBackPress();
  };

  render() {
    return (
      <SectionedContainer sideBarContainer={<SideNav />}>
        <NavHeader title="Profile details" onBackClick={this.onBackPress} />
        <Form
          onSubmit={this.onSubmit}
          validate={this.validate}
          render={({ handleSubmit, form, submitting, pristine, values }) => (
            <form className={styles.form_container} onSubmit={handleSubmit}>
              <Field name="firstName">
                {({ input, meta }) => (
                  <InputTextComponent
                    meta={meta}
                    {...input}
                    placeholder="First Name"
                    className={styles.input_text}
                  />
                )}
              </Field>
              <Field name="lastName">
                {({ input, meta }) => (
                  <InputTextComponent
                    meta={meta}
                    {...input}
                    placeholder="Last Name"
                    className={styles.input_text}
                  />
                )}
              </Field>
              <Field name="gender">
                {({ input, meta }) => (
                  <InputTextComponent
                    meta={meta}
                    {...input}
                    placeholder="Gender"
                    className={styles.input_text}
                  />
                )}
              </Field>
              <Field name="mobileNumber">
                {({ input, meta }) => (
                  <InputTextComponent
                    meta={meta}
                    {...input}
                    placeholder="Mobile Number"
                    className={styles.input_text}
                  />
                )}
              </Field>
              <Field name="email">
                {({ input, meta }) => (
                  <InputTextComponent
                    meta={meta}
                    {...input}
                    placeholder="Email Address"
                    className={styles.input_text}
                  />
                )}
              </Field>
              <Field name="birthday">
                {({ input, meta }) => (
                  <InputTextComponent
                    meta={meta}
                    {...input}
                    placeholder="Birthday"
                    className={styles.input_text}
                  />
                )}
              </Field>

              <DivRow className={styles.form_button_container}>
                <SecondaryCapsuleButton onClick={this.onClickCancel}>
                  Cancel
                </SecondaryCapsuleButton>
                <CapsuleButton type="submit" disabled={submitting}>
                  Save Details
                </CapsuleButton>
              </DivRow>
            </form>
          )}
        />
      </SectionedContainer>
    );
  }
}

export default navigatorHoc(EditProfile);
