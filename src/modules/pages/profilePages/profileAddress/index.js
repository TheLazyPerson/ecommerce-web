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
import AddressItemComponent from 'CommonComponents/addressItemComponent';
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
                  <AddressItemComponent
                    address={address}
                    onClickEdit={this.handleEdit}
                    onClickRemove={this.handleRemove}
                  />
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
                    <AddressItemComponent
                      address={address}
                      onClickEdit={this.handleEdit}
                      onClickRemove={this.handleRemove}
                    />
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
