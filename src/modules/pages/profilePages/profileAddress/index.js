import React, { Component } from "react";
import SectionedContainer from "CommonContainers/sectionedContainer";
import DivColumn from "CommonComponents/divColumn";
import DivRow from "CommonComponents/divRow";
import SideNav from "../components/sideNav";
import styles from "./profile_address.module.scss";
import {
  getAddressListAction,
  removeAddressAction
} from "Core/modules/address/addressActions";
import InitialPageLoader from "CommonContainers/initialPageLoader";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import map from "lodash/map";
import CapsuleButton from "CommonComponents/capsuleButton";
import navigatorHoc from "Hoc/navigatorHoc";
import { showSuccessFlashMessage } from "Redux/actions/flashMessageActions";

class ProfileAddress extends Component {
  onClickNewAddress = () => {
    const { navigateTo } = this.props;
    navigateTo("add-address");
  };

  handleEdit = id => {
    const { navigateTo } = this.props;
    navigateTo("edit-address", {
      id
    });
  };

  handleRemove = id => {
    const { removeAddressAction, showSuccessFlashMessage } = this.props;
    removeAddressAction(id).then(({ payload }) => {
      if (payload.code === 200 || payload.code === 201) {
        showSuccessFlashMessage("Address Deleted");
        window.location.reload(false);
      }
    });
  };
  render() {
    const {
      addressReducer: { addressList },
      getAddressListAction
    } = this.props;

    const default_address = addressList.filter(
      address => address.default_address === 1
    );

    const other_address = addressList.filter(
      address => address.default_address === 0
    );

    return (
      <SectionedContainer sideBarContainer={<SideNav />}>
        <InitialPageLoader initialPageApi={getAddressListAction}>
          <DivColumn fillParent className={styles.address_container}>
            <DivColumn className={styles.section_container}>
              <DivRow className={styles.header_container}>
                <div className={styles.header_title}>DEFAULT ADDRESS</div>
                <CapsuleButton
                  className={styles.capsule_button}
                  onClick={() => this.onClickNewAddress()}
                >
                  + ADD NEW ADDRESS
                </CapsuleButton>
              </DivRow>
              {map(default_address, (address, index) => {
                return (
                  <DivColumn className={styles.address_item}>
                    <DivColumn
                      fillParent
                      className={styles.item_content_container}
                    >
                      <div className={styles.item_name}>{address.name}</div>
                      <div className={styles.item_address}>
                        {address.address1}, <br />
                        {address.address2}, <br />
                        {address.city}, {address.state}, <br />
                        {address.country} - {address.postcode}
                      </div>
                      <div className={styles.item_phonenumber}>
                        Phone Number: {address.country_code}-
                        {address.phone_number}
                      </div>
                    </DivColumn>
                    <DivRow className={styles.action_container}>
                      <div
                        className={styles.action_button}
                        onClick={() => this.handleEdit(address.id)}
                      >
                        Edit
                      </div>
                      <div
                        className={styles.action_button}
                        onClick={() => this.handleRemove(address.id)}
                      >
                        Remove
                      </div>
                    </DivRow>
                  </DivColumn>
                );
              })}
            </DivColumn>

            {other_address.length > 0 && (
              <DivColumn className={styles.section_container}>
                <DivRow className={styles.header_container}>
                  <div className={styles.header_title}>OTHER ADDRESSES</div>
                </DivRow>
                {map(other_address, (address, index) => {
                  return (
                    <DivColumn className={styles.address_item}>
                      <DivColumn
                        fillParent
                        className={styles.item_content_container}
                      >
                        <div className={styles.item_name}>{address.name}</div>
                        <div className={styles.item_address}>
                          {address.address1}, <br />
                          {address.address2}, <br />
                          {address.city}, {address.state}, <br />
                          {address.country} - {address.postcode}
                        </div>
                        <div className={styles.item_phonenumber}>
                          Phone Number: {address.country_code}-
                          {address.phone_number}
                        </div>
                      </DivColumn>
                      <DivRow className={styles.action_container}>
                        <div
                          className={styles.action_button}
                          onClick={() => this.handleEdit(address.id)}
                        >
                          Edit
                        </div>
                        <div
                          className={styles.action_button}
                          onClick={() => this.handleRemove(address.id)}
                        >
                          Remove
                        </div>
                      </DivRow>
                    </DivColumn>
                  );
                })}
              </DivColumn>
            )}
          </DivColumn>
        </InitialPageLoader>
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
    getAddressListAction: bindActionCreators(getAddressListAction, dispatch),
    removeAddressAction: bindActionCreators(removeAddressAction, dispatch),
    showSuccessFlashMessage: bindActionCreators(
      showSuccessFlashMessage,
      dispatch
    )
  };
};

export default connect(
  mapStateToProps,
  mapDispathToProps
)(navigatorHoc(ProfileAddress));
