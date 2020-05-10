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
  isEmptyValidator,
} from "Utils/validators";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { showSuccessFlashMessage } from "Redux/actions/flashMessageActions";
import { createAddressAction } from "Core/modules/address/addressActions";
import AddAddressForm from "CommonContainers/addAddressForm";
import translatorHoc from "Hoc/translatorHoc";
class AddAddress extends Component {
  onSubmitComplete = () => {
    this.onBackPress();
  };

  onBackPress = () => {
    const { pop } = this.props;
    pop();
  };

  onClickCancel = () => {
    this.onBackPress();
  };

  render() {
    const { translate } = this.props;
    return (
      <SectionedContainer sideBarContainer={<SideNav />}>
        <DivColumn fillParent className={styles.page_container}>
          <NavHeader
            title={translate("place_order_page.title_add_address")}
            onBackClick={this.onBackPress}
          />
          <AddAddressForm
            onSubmitComplete={this.onSubmitComplete}
            onClickCancel={this.onClickCancel}
          />
        </DivColumn>
      </SectionedContainer>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    addressReducer: state.addressReducer,
  };
};

const mapDispathToProps = (dispatch) => {
  return {
    createAddressAction: bindActionCreators(createAddressAction, dispatch),
    showSuccessFlashMessage: bindActionCreators(
      showSuccessFlashMessage,
      dispatch
    ),
  };
};

export default connect(
  mapStateToProps,
  mapDispathToProps
)(translatorHoc(navigatorHoc(AddAddress)));
