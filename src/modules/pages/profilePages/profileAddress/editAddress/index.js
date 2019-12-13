import React, { Component } from "react";
import SectionedContainer from "CommonContainers/sectionedContainer";
import DivColumn from "CommonComponents/divColumn";
import DivRow from "CommonComponents/divRow";
import SideNav from "../../components/sideNav";
import styles from "./edit_address.module.scss";
import NavHeader from "../../components/navHeader";
import { Form, Field } from "react-final-form";
import CapsuleButton from "CommonComponents/capsuleButton";
import SecondaryCapsuleButton from "CommonComponents/secondaryCapsuleButton";
import InputTextComponent from "CommonComponents/InputTextComponent";
import InputCheckbox from "CommonComponents/InputCheckbox";
import navigatorHoc from "Hoc/navigatorHoc";
import HorizontalBorder from "CommonComponents/horizontalBorder";
import queryString from "query-string";
import find from "lodash/find";
import {
  isPhoneNumber,
  nameValidator,
  isEmptyValidator
} from "Utils/validators";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { showSuccessFlashMessage } from "Redux/actions/flashMessageActions";
import { editAddressAction } from "Core/modules/address/addressActions";

class EditAddress extends Component {
  validate = values => {
    const errors = {};
    const validators = {
      firstName: nameValidator(values.firstName),
      lastName: nameValidator(values.lastName),
      mobileNumber: isPhoneNumber(values.mobileNumber),
      address1: isEmptyValidator(values.address1),
      address2: isEmptyValidator(values.address2),
      city: isEmptyValidator(values.city),
      state: isEmptyValidator(values.state),
      country: isEmptyValidator(values.country),
      country_code: isEmptyValidator(values.country_code),
      pincode: isEmptyValidator(values.pincode)
    };

    Object.keys(validators).forEach(key => {
      if (!validators[key].result) errors[key] = validators[key].error;
    });

    return errors;
  };

  onSubmit = form => {
    const {
      editAddressAction,
      navigateTo,
      showSuccessFlashMessage
    } = this.props;

    editAddressAction({
      first_name: form.firstName,
      last_name: form.firstName,
      phone_number: form.mobileNumber,
      address1: form.street,
      address2: form.address,
      postcode: form.pincode,
      city: form.city,
      state: form.city,
      country: form.country,
      country_code: form.country_code,
      default_address: 1
    }).then(({ payload }) => {
      if (payload.code === 200 || payload.code === 201) {
        navigateTo("address");
        showSuccessFlashMessage("Address Updated");
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
    const parsed = queryString.parse(this.props.location.search);
    const {
      addressReducer: { addressList }
    } = this.props;

    const address = find(addressList, o => {
      return o.id == parsed.id;
    });

    return (
      <SectionedContainer sideBarContainer={<SideNav />}>
        <NavHeader title="Add Address" onBackClick={this.onBackPress} />
        <DivColumn fillParent className={styles.page_container}>
          <Form
            onSubmit={this.onSubmit}
            validate={this.validate}
            initialValues={{
              firstName: address.first_name ? address.first_name : "",
              lastName: address.last_name ? address.last_name : "",
              mobileNumber: address.phone ? address.phone : "",
              address1: address.address1 ? address.address1 : "",
              address2: address.address2 ? address.address2 : "",
              city: address.city ? address.city : "",
              state: address.state ? address.state : "",
              country: address.country ? address.country : "",
              country_code: address.country_code ? address.country_code : "",
              pincode: address.postcode ? address.postcode : ""
            }}
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
                  <Field name="address1">
                    {({ input, meta }) => (
                      <InputTextComponent
                        meta={meta}
                        {...input}
                        placeholder="Address Line 1"
                        className={styles.input_text}
                      />
                    )}
                  </Field>
                  <Field name="address2">
                    {({ input, meta }) => (
                      <InputTextComponent
                        meta={meta}
                        {...input}
                        placeholder="Address Line 2"
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
                  <Field name="state">
                    {({ input, meta }) => (
                      <InputTextComponent
                        meta={meta}
                        {...input}
                        placeholder="State"
                        className={styles.input_text}
                      />
                    )}
                  </Field>
                  <Field name="country">
                    {({ input, meta }) => (
                      <InputTextComponent
                        meta={meta}
                        {...input}
                        placeholder="Country"
                        className={styles.input_text}
                      />
                    )}
                  </Field>
                  <Field name="country_code">
                    {({ input, meta }) => (
                      <InputTextComponent
                        meta={meta}
                        {...input}
                        placeholder="Country Code"
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
    editAddressAction: bindActionCreators(editAddressAction, dispatch),
    showSuccessFlashMessage: bindActionCreators(
      showSuccessFlashMessage,
      dispatch
    )
  };
};

export default connect(
  mapStateToProps,
  mapDispathToProps
)(navigatorHoc(EditAddress));
