import React, { Component } from "react";
import SectionedContainer from "CommonContainers/sectionedContainer";
import DivRow from "CommonComponents/divRow";
import SideNav from "../../components/sideNav";
import styles from "./change_password.module.scss";
import NavHeader from "../../components/navHeader";
import CapsuleButton from "CommonComponents/capsuleButton";
import SecondaryCapsuleButton from "CommonComponents/secondaryCapsuleButton";
import InputTextComponent from "CommonComponents/InputTextComponent";
import navigatorHoc from "Hoc/navigatorHoc";
import { passwordValidator, isEmptyValidator } from "Utils/validators";
import { Form, Field } from "react-final-form";

class ChangePassword extends Component {
  validate = values => {
    const errors = {};
    const validators = {
      oldPassword: isEmptyValidator(values.oldPassword),
      newPassword: isEmptyValidator(values.newPassword),
      confirmPassword: passwordValidator(
        values.newPassword,
        values.confirmPassword
      )
    };

    Object.keys(validators).forEach(key => {
      if (!validators[key].result) errors[key] = validators[key].error;
    });

    return errors;
  };

  onSubmit = form => {
    // TODO make Api call here
  };

  onBackPress = () => {
    const { pop } = this.props;
    pop();
  };

  onClickCancel = () => {
    this.onBackPress();
  };

  render() {
    return (
      <SectionedContainer sideBarContainer={<SideNav />}>
        <NavHeader title="Change password" onBackClick={this.onBackPress} />
        <Form
          onSubmit={this.onSubmit}
          validate={this.validate}
          render={({ handleSubmit, form, submitting, pristine, values }) => (
            <form className={styles.form_container} onSubmit={handleSubmit}>
              <Field name="oldPassword">
                {({ input, meta }) => (
                  <InputTextComponent
                    meta={meta}
                    {...input}
                    placeholder="Old Password"
                    className={styles.input_text}
                  />
                )}
              </Field>
              <Field name="newPassword">
                {({ input, meta }) => (
                  <InputTextComponent
                    meta={meta}
                    {...input}
                    placeholder="New Password"
                    className={styles.input_text}
                  />
                )}
              </Field>
              <Field name="confirmPassword">
                {({ input, meta }) => (
                  <InputTextComponent
                    meta={meta}
                    {...input}
                    placeholder="Confirm Password"
                    className={styles.input_text}
                  />
                )}
              </Field>

              <DivRow className={styles.form_button_container}>
                <SecondaryCapsuleButton onClick={this.onClickCancel}>
                  Cancel
                </SecondaryCapsuleButton>
                <CapsuleButton type="submit" disabled={submitting}>
                  Confirm
                </CapsuleButton>
              </DivRow>
            </form>
          )}
        />
      </SectionedContainer>
    );
  }
}

export default navigatorHoc(ChangePassword);
