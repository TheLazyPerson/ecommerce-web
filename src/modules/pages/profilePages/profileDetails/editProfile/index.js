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
import { showSuccessFlashMessage } from "Redux/actions/flashMessageActions";
import {
  getProfileDetailsAction,
  editProfileDetailsAction
} from "Core/modules/profiledetails/profileDetailsActions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
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
    const {
      editProfileDetailsAction,
      navigateTo,
      showSuccessFlashMessage
    } = this.props;

    editProfileDetailsAction({
      first_name: form.firstName,
      last_name: form.lastName,
      gender: form.gender,
      phone: form.phone,
      email: form.email,
      birthday: form.birthday
    }).then(({ payload }) => {
      if (payload.code === 200 || payload.code === 201) {
        navigateTo("profile");
        showSuccessFlashMessage("Profile Updated");
      }
    });
  };

  componentDidMount() {
    // TODO: To add to check if reducer data is not available.
    // this.props.getProfileDetailsAction().then(({ payload }) => {
    //   if (payload.code === 200 || payload.code === 201) {
    //     // code here
    //   }
    // });
  }

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
    const {
      profileDetailsReducer: { userDetails }
    } = this.props;

    return (
      <SectionedContainer sideBarContainer={<SideNav />}>
        <NavHeader title="Profile details" onBackClick={this.onBackPress} />
        <Form
          onSubmit={this.onSubmit}
          validate={this.validate}
          initialValues={{
            firstName: userDetails.first_name ? userDetails.first_name : "",
            lastName: userDetails.last_name ? userDetails.last_name : "",
            gender: userDetails.gender ? userDetails.gender : "",
            mobileNumber: userDetails.phone ? userDetails.phone : "",
            email: userDetails.email ? userDetails.email : "",
            birthday: userDetails.birthday ? userDetails.birthday : ""
          }}
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

const mapStateToProps = state => {
  return {
    profileDetailsReducer: state.profileDetailsReducer
  };
};

const mapDispathToProps = dispatch => {
  return {
    getProfileDetailsAction: bindActionCreators(
      getProfileDetailsAction,
      dispatch
    ),
    editProfileDetailsAction: bindActionCreators(
      editProfileDetailsAction,
      dispatch
    ),
    showSuccessFlashMessage: bindActionCreators(
      showSuccessFlashMessage,
      dispatch
    )
  };
};

export default connect(
  mapStateToProps,
  mapDispathToProps
)(navigatorHoc(EditProfile));
