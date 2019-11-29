import React, { Component } from 'react';
import DivColumn from 'CommonComponents/divColumn';
import styles from './top_container_hoc.module.scss';
import circularLoader from 'Icons/circular-loader.gif';
import DivRow from 'CommonComponents/divRow';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

const topContainerHoc  = (WrappedComponent) => {
  class topContainer extends Component {

    render() {
      const { showLoader } = this.props;

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
          {
            /*<DivRow>
            Flash message component
          </DivRow> */
          }
        </DivColumn>
      );
    }
  }
  const mapStateToProps = state => {
    return {
      showLoader: state.loaderReducer.showLoader,
    }
  }

  const mapDispathToProps = dispatch => {
    return {
      // hideApiErrorMessageAction: bindActionCreators (hideApiErrorMessageAction, dispatch),
    };
  };
  
  return connect(mapStateToProps, mapDispathToProps)(topContainer);
};

export default topContainerHoc;
