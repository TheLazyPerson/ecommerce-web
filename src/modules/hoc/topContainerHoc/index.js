import React, { Component } from 'react';
import DivColumn from 'CommonComponents/divColumn';
import styles from './top_container_hoc.module.scss';
import circularLoader from 'Icons/circular-loader.gif';
import DivRow from 'CommonComponents/divRow';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { hideFlashMessage } from 'Redux/actions/flashMessageActions';
import { setUserDataAction } from 'Core/modules/signin/actions/signinActions';
import { CookieService } from 'Utils/cookieService';
import { USER_DATA_COOKIE } from 'Constants/cookieConstants';

const topContainerHoc  = (WrappedComponent) => {
  class topContainer extends Component {

    state = {
      isChildReady: false,
    }

    componentDidMount() {
      //Sets user data from cookie to reducer
      const { setUserDataAction } = this.props;
      const userData = CookieService.getJSON(USER_DATA_COOKIE);

      if (userData) {        
        setUserDataAction(userData);
        this.setState({
          isChildReady: true
        });
      }
    }

    componentWillReceiveProps(nextProps) {
      const { flashMessageReducer: {showMessage}, hideFlashMessage } = nextProps;

      if (showMessage) {      
        setTimeout(()=> {
          hideFlashMessage();
        }, 2000);
      }
    }

    render() {
      const { showLoader, flashMessageReducer } = this.props;
      const { isChildReady } = this.state;
      const { message, showMessage, messageType } = flashMessageReducer;

      return (
        <DivColumn className={styles.top_container}>
          {
            isChildReady && (
              <WrappedComponent
                {...this.props}
              />  
            )
          }
          {
            showLoader && (
              <DivColumn className={styles.loader_container} verticalCenter horizontalCenter>
                <img src={circularLoader} className={styles.loader} />
              </DivColumn>  
            )
          } 

          {
            showMessage && (
              <DivRow className={styles.flash_message_container}>
                {message}
              </DivRow>  
            )
          }
        </DivColumn>
      );
    }
  }
  const mapStateToProps = state => {
    return {
      showLoader: state.loaderReducer.showLoader,
      flashMessageReducer: state.flashMessageReducer,
    }
  }

  const mapDispathToProps = dispatch => {
    return {
      hideFlashMessage: bindActionCreators (hideFlashMessage, dispatch),
      setUserDataAction: bindActionCreators(setUserDataAction, dispatch),
    };
  };
  
  return connect(mapStateToProps, mapDispathToProps)(topContainer);
};

export default topContainerHoc;
