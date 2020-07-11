import React, { Component } from "react";
import SectionedContainer from "CommonContainers/sectionedContainer";
import DivColumn from "CommonComponents/divColumn";
import SideNav from "../../components/sideNav";
import styles from "./edit_address.module.scss";
import NavHeader from "../../components/navHeader";
import navigatorHoc from "Hoc/navigatorHoc";
import queryString from "query-string";
import DivRow from "CommonComponents/divRow";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { showSuccessFlashMessage } from "Redux/actions/flashMessageActions";
import {
  editAddressAction,
  getAddressListAction,
} from "Core/modules/address/addressActions";
import InitialPageLoader from "CommonContainers/initialPageLoader";
import AddAddressForm from "CommonContainers/addAddressForm";
import isEmpty from "lodash/isEmpty";

class EditAddress extends Component {
  constructor(props) {
    super(props);
    this.initialLoaderRef = React.createRef();
  }

  componentDidMount() {
    const {
      addressReducer: { addressList },
    } = this.props;
    if (isEmpty(addressList)) this.initialLoaderRef.current.reload();
  }

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
    const { id } = queryString.parse(this.props.location.search);
    const { getAddressListAction, isRTL } = this.props;

    return (
      <SectionedContainer sideBarContainer={<SideNav />}>
        <InitialPageLoader
          ref={this.initialLoaderRef}
          initialPageApi={getAddressListAction}
          callApiOnMount={false}
        >
          <DivColumn fillParent className={styles.page_container}>
            <NavHeader title="Edit Address" onBackClick={this.onBackPress} />
            <DivRow className={` ${isRTL ? styles.rtl : ""}`}>
              <AddAddressForm
                addressId={id}
                onSubmitComplete={this.onSubmitComplete}
                onClickCancel={this.onClickCancel}
              />
            </DivRow>
          </DivColumn>
        </InitialPageLoader>
      </SectionedContainer>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    addressReducer: state.addressReducer,
    isRTL: state.languageReducer.isRTL,
  };
};

const mapDispathToProps = (dispatch) => {
  return {
    editAddressAction: bindActionCreators(editAddressAction, dispatch),
    getAddressListAction: bindActionCreators(getAddressListAction, dispatch),
    showSuccessFlashMessage: bindActionCreators(
      showSuccessFlashMessage,
      dispatch
    ),
  };
};

export default connect(
  mapStateToProps,
  mapDispathToProps
)(navigatorHoc(EditAddress));
