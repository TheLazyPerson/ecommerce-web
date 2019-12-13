import React, { Component } from "react";
import SectionedContainer from "CommonContainers/sectionedContainer";
import DivColumn from "CommonComponents/divColumn";
import DivRow from "CommonComponents/divRow";
import SideNav from "../../components/sideNav";
import styles from "./add_address.module.scss";
import NavHeader from "../../components/navHeader";
import { Form, Field } from "react-final-form";
import CapsuleButton from "CommonComponents/capsuleButton";
import SecondaryCapsuleButton from "CommonComponents/secondaryCapsuleButton";
import InputTextComponent from "CommonComponents/InputTextComponent";
import InputCheckbox from "CommonComponents/InputCheckbox";
import navigatorHoc from "Hoc/navigatorHoc";
import HorizontalBorder from "CommonComponents/horizontalBorder";
import {
  isPhoneNumber,
  nameValidator,
  isEmptyValidator
} from "Utils/validators";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { showSuccessFlashMessage } from "Redux/actions/flashMessageActions";
import { createAddressAction } from "Core/modules/address/addressActions";

class AddAddress extends Component {
  validate = values => {
    const errors = {};
    const validators = {
      firstName: nameValidator(values.firstName),
      lastName: nameValidator(values.lastName),
      mobileNumber: isPhoneNumber(values.mobileNumber),
      street: isEmptyValidator(values.street),
      address: isEmptyValidator(values.address),
      city: isEmptyValidator(values.city),
      pincode: isEmptyValidator(values.pincode)
    };

    Object.keys(validators).forEach(key => {
      if (!validators[key].result) errors[key] = validators[key].error;
    });

    return errors;
  };

  onSubmit = form => {
    const {
      createAddressAction,
      navigateTo,
      showSuccessFlashMessage
    } = this.props;

    createAddressAction({
      address1: form.street,
      address2: form.address,
      postcode: form.pincode,
      city: form.city,
      state: "Pune",
      country: " India",
      phone_number: form.mobileNumber,
      country_code: "+965",
      default_address: 1,
      name: form.firstName
    }).then(({ payload }) => {
      if (payload.code === 200 || payload.code === 201) {
        navigateTo("address");
        showSuccessFlashMessage("Create New Address");
      }
    });
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
        <NavHeader title="Add Address" onBackClick={this.onBackPress} />
        <DivColumn fillParent className={styles.page_container}>
          <Form
            onSubmit={this.onSubmit}
            validate={this.validate}
            render={({ handleSubmit, form, submitting, pristine, values }) => (
              <form className={styles.form_container} onSubmit={handleSubmit}>
                <DivColumn className={styles.text_input_container}>
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
                </DivColumn>

                <HorizontalBorder className={styles.address_divider} />

                <DivColumn className={styles.text_input_container}>
                  <Field name="street">
                    {({ input, meta }) => (
                      <InputTextComponent
                        meta={meta}
                        {...input}
                        placeholder="Street"
                        className={styles.input_text}
                      />
                    )}
                  </Field>
                  <Field name="address">
                    {({ input, meta }) => (
                      <InputTextComponent
                        meta={meta}
                        {...input}
                        placeholder="Address(House no, Building, Street area)"
                        className={styles.input_text}
                      />
                    )}
                  </Field>
                  <Field name="city">
                    {({ input, meta }) => (
                      <InputTextComponent
                        meta={meta}
                        {...input}
                        placeholder="City"
                        className={styles.input_text}
                      />
                    )}
                  </Field>
                  <Field name="pincode">
                    {({ input, meta }) => (
                      <InputTextComponent
                        meta={meta}
                        {...input}
                        placeholder="Pincode"
                        className={styles.input_text}
                      />
                    )}
                  </Field>
                </DivColumn>

                <HorizontalBorder className={styles.button_divider} />
                <DivColumn
                  verticalCenter
                  horizontalCenter
                  className={styles.checkbox_container}
                >
                  <InputCheckbox
                    text="Make this my default address."
                    textStyle={styles.checkbox_text}
                  />
                </DivColumn>
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
        </DivColumn>
      </SectionedContainer>
    );
  }
}

const mapStateToProps = state => {
  return {
    addressReducer: state.addressReducer
  };
};

const mapDispathToProps = dispatch => {
  return {
    createAddressAction: bindActionCreators(createAddressAction, dispatch),
    showSuccessFlashMessage: bindActionCreators(
      showSuccessFlashMessage,
      dispatch
    )
  };
};

export default connect(
  mapStateToProps,
  mapDispathToProps
)(navigatorHoc(AddAddress));
