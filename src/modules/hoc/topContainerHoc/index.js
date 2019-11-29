import React, { Component } from 'react';
import DivColumn from 'CommonComponents/divColumn';
import styles from './top_container_hoc.module.scss';
import circularLoader from 'Icons/circular-loader.gif';
import DivRow from 'CommonComponents/divRow';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { hideFlashMessage } from 'Redux/actions/flashMessageActions';

const topContainerHoc  = (WrappedComponent) => {
  class topContainer extends Component {

    componentWillReceiveProps(props) {
      const { flashMessageReducer: {showMessage} } = this.props;
       
      if (showMessage) {
        // setTimeout(()=>{

        // })
      }

    }

    render() {
      const { showLoader, flashMessageReducer } = this.props;
      const { message, showMessage, messageType } = flashMessageReducer;

      return (
        <DivColumn className={styles.top_container}>
          <WrappedComponent
            {...this.props}
          />
          {
            showLoader && (
              <DivColumn className={styles.loader_container} verticalCenter horizontalCenter>
                <img src={circularLoader} className={styles.loader} />
              </DivColumn>  
            )
          }
          {/* <DivRow>
            Flash message component
          </DivRow> */}
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
    };
  };
  
  return connect(mapStateToProps, mapDispathToProps)(topContainer);
};

export default topContainerHoc;
