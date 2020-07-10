import React, { Component } from "react";
import DivColumn from "CommonComponents/divColumn";
import DivRow from "CommonComponents/divRow";
import styles from "./add_address_form.module.scss";
import { Form, Field } from "react-final-form";
import CapsuleButton from "CommonComponents/capsuleButton";
import SecondaryCapsuleButton from "CommonComponents/secondaryCapsuleButton";
import InputTextComponent from "CommonComponents/InputTextComponent";
import InputCheckbox from "CommonComponents/InputCheckbox";
import HorizontalBorder from "CommonComponents/horizontalBorder";
import {
  isPhoneNumber,
  nameValidator,
  isEmptyValidator,
} from "Utils/validators";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { showSuccessFlashMessage } from "Redux/actions/flashMessageActions";
import {
  createAddressAction,
  editAddressAction,
} from "Core/modules/address/addressActions";
import find from "lodash/find";
import Select from "react-select";
import map from "lodash/map";
import translatorHoc from "Hoc/translatorHoc";
class AddAddressForm extends Component {
  validate = (values) => {
    const errors = {};
    const validators = {
      firstName: nameValidator(values.firstName),
      lastName: nameValidator(values.lastName),
      mobileNumber: isPhoneNumber(values.mobileNumber),
      area: isEmptyValidator(values.area),
      blockNumber: isEmptyValidator(values.blockNumber),
      houseNumber: isEmptyValidator(values.houseNumber),
      streetNumber: isEmptyValidator(values.streetNumber),
      // country_code: isEmptyValidator(values.country_code),
      landmark: isEmptyValidator(values.landmark),
      city: isEmptyValidator(values.city),
    };

    Object.keys(validators).forEach((key) => {
      if (!validators[key].result) errors[key] = validators[key].error;
    });
    return errors;
  };

  onSubmit = (form) => {
    const {
      createAddressAction,
      showSuccessFlashMessage,
      onSubmitComplete,
      addressId,
      editAddressAction,
    } = this.props;

    const formData = {
      first_name: form.firstName,
      last_name: form.lastName,
      phone_number: form.mobileNumber,
      area: form.area,
      block_number: form.blockNumber,
      house_number: form.houseNumber,
      street_number: form.streetNumber,
      avenue: form.avenue,
      landmark: form.landmark,
      address_type: form.addressType,
      city: form.city,
      default_address: 1,
      name: form.name,
    };

    if (addressId) {
      editAddressAction(addressId, formData).then(({ payload }) => {
        if (payload.code === 200 || payload.code === 201) {
          onSubmitComplete();
          showSuccessFlashMessage("Address Edited");
        }
      });
    } else {
      createAddressAction(formData).then(({ payload }) => {
        if (payload.code === 200 || payload.code === 201) {
          onSubmitComplete();
          showSuccessFlashMessage("Address Added");
        }
      });
    }
  };

  getInitialValuesFromAddress = (address) => {
    return {
      firstName: address.first_name ? address.first_name : "",
      lastName: address.last_name ? address.last_name : "",
      mobileNumber: address.phone_number ? address.phone_number : "",
      area: address.area ? address.area : "",
      blockNumber: address.block_number ? address.block_number : "",
      houseNumber: address.house_number ? address.house_number : "",
      streetNumber: address.street_number ? address.street_number : "",
      avenue: address.avenue ? address.avenue : "",
      landmark: address.landmark ? address.landmark : "",
      addressType: address.address_type ? address.address_type : "",
      city: address.city ? address.city : "",
    };
  };

  formatSelectorData = (list) => {
    return map(list, (item) => ({ value: item.name, label: item.name }));
  };

  render() {
    const {
      onClickCancel,
      addressReducer: { addressList },
      addressId,
      translate,
    } = this.props;
    const editAddress = find(addressList, (address) => {
      return address.id === addressId;
    });
    const addressTypes = [
      {
        value: "home",
        label: "Home",
      },
      {
        value: "office",
        label: "Office",
      },
    ];
    // const countries = this.formatSelectorData(basicData.countries);
    // const states = this.formatSelectorData(basicData.states);
    // // const defaultCountry = find(countries, (country) => {
    //   return editAddress && country.value === editAddress.country;
    // });
    // const defaultState = find(states, (state) => {
    //   return editAddress && state.value === editAddress.state;
    // });

    let defaultAddressType = null;

    if (editAddress && editAddress.name) {
      if (editAddress.name === "home") {
        defaultAddressType = addressTypes[0];
      } else {
        defaultAddressType = addressTypes[1];
      }
    }

    return (
      <DivColumn fillParent className={styles.page_container}>
        <Form
          onSubmit={this.onSubmit}
          validate={this.validate}
          initialValues={
            editAddress ? this.getInitialValuesFromAddress(editAddress) : null
          }
          render={({ handleSubmit, submitting, values }) => (
            <form className={styles.form_container} onSubmit={handleSubmit}>
              <DivColumn className={styles.text_input_container}>
                <Field name="firstName">
                  {({ input, meta }) => (
                    <InputTextComponent
                      meta={meta}
                      {...input}
                      placeholder={translate("address_form_page.first_name")}
                      className={styles.input_text}
                    />
                  )}
                </Field>
                <Field name="lastName">
                  {({ input, meta }) => (
                    <InputTextComponent
                      meta={meta}
                      {...input}
                      placeholder={translate("address_form_page.last_name")}
                      className={styles.input_text}
                    />
                  )}
                </Field>
                <Field name="mobileNumber">
                  {({ input, meta }) => (
                    <InputTextComponent
                      meta={meta}
                      {...input}
                      placeholder={translate("address_form_page.mobile_number")}
                      className={styles.input_text}
                    />
                  )}
                </Field>
              </DivColumn>

              <HorizontalBorder className={styles.address_divider} />

              <DivColumn className={styles.text_input_container}>
                <Field name="area">
                  {({ input, meta }) => (
                    <InputTextComponent
                      meta={meta}
                      {...input}
                      placeholder={translate("address_form_page.area")}
                      className={styles.input_text}
                    />
                  )}
                </Field>
                <Field name="blockNumber">
                  {({ input, meta }) => (
                    <InputTextComponent
                      meta={meta}
                      {...input}
                      placeholder={translate("address_form_page.block_number")}
                      className={styles.input_text}
                    />
                  )}
                </Field>

                <Field name="houseNumber">
                  {({ input, meta }) => (
                    <InputTextComponent
                      meta={meta}
                      {...input}
                      placeholder={translate("address_form_page.house_number")}
                      className={styles.input_text}
                    />
                  )}
                </Field>

                <Field name="streetNumber">
                  {({ input, meta }) => (
                    <InputTextComponent
                      meta={meta}
                      {...input}
                      placeholder={translate("address_form_page.street_number")}
                      className={styles.input_text}
                    />
                  )}
                </Field>
                <Field name="avenue">
                  {({ input, meta }) => (
                    <InputTextComponent
                      meta={meta}
                      {...input}
                      placeholder={translate("address_form_page.avenue")}
                      className={styles.input_text}
                    />
                  )}
                </Field>

                <Field name="landmark">
                  {({ input, meta }) => (
                    <InputTextComponent
                      meta={meta}
                      {...input}
                      placeholder={translate("address_form_page.landmark")}
                      className={styles.input_text}
                    />
                  )}
                </Field>

                <Field name="city">
                  {({ input, meta }) => (
                    <InputTextComponent
                      meta={meta}
                      {...input}
                      placeholder={translate("address_form_page.city")}
                      className={styles.input_text}
                    />
                  )}
                </Field>
                <Field name="name">
                  {({ input, meta }) => (
                    <DivColumn className="input_select_container">
                      <Select
                        options={addressTypes}
                        onChange={(value) => {
                          input.onChange(value.value);
                        }}
                        className="react-select-container"
                        classNamePrefix="react-select"
                        placeholder={translate("address_form_page.home_office")}
                        defaultValue={defaultAddressType}
                      />
                      {meta.error && meta.touched && (
                        <span className="error_text">{meta.error}</span>
                      )}
                    </DivColumn>
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
                  text={translate(
                    "address_form_page.make_this_default_address"
                  )}
                  textStyle={styles.checkbox_text}
                />
              </DivColumn>
              <DivRow className={styles.form_button_container}>
                <SecondaryCapsuleButton onClick={onClickCancel}>
                  {translate("address_form_page.cancel")}
                </SecondaryCapsuleButton>
                <CapsuleButton type="submit">
                  {translate("address_form_page.save_details")}
                </CapsuleButton>
              </DivRow>
            </form>
          )}
        />
      </DivColumn>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    addressReducer: state.addressReducer,
    basicReducer: state.basicReducer,
  };
};

const mapDispathToProps = (dispatch) => {
  return {
    createAddressAction: bindActionCreators(createAddressAction, dispatch),
    editAddressAction: bindActionCreators(editAddressAction, dispatch),
    showSuccessFlashMessage: bindActionCreators(
      showSuccessFlashMessage,
      dispatch
    ),
  };
};

export default connect(
  mapStateToProps,
  mapDispathToProps
)(translatorHoc(AddAddressForm));
