import React, { Component } from 'react';
import PropTypes from 'prop-types';
import infiniteLoader from "Icons/circular-loader.gif";
import DivColumn from 'CommonComponents/divColumn';
import DivRow from 'CommonComponents/divRow';
import { isTypeSuccess } from 'Core/utils/validationHelper';
import styles from './initial_page_loader.module.scss';

class InitialPageLoader extends Component {
  state = {
    loading: false,
    isError: false,
    isComponentReady: false,
  }

  componentDidMount() {
    const { callApiOnMount } = this.props;
    if (callApiOnMount)
      this.makePageApiCall()

    this.setState({ isComponentReady: true }) //Had to do it for now
  }

  reload = () => {
    this.makePageApiCall();
  }

  makePageApiCall = () => {
    const { initialPageApi } = this.props
    this.setState({ loading: true, isError: false })

    initialPageApi().then(data => {
      console.log('initialPageLoader success', data);

      if (isTypeSuccess(data.type))
        this.setState({ loading: false })
      else
        this.setState({ loading: false, isError: true })

    }).catch(error => {
      console.log('initialPageLoader Error:', error)
      this.setState({ loading: false, isError: true })
    })
  }


  render() {
    const {
      children,
      className,
      errorMessage,
      customLoader,
      headingErrorMessage
    } = this.props;

    const { loading, isError, isComponentReady } = this.state;

    return (
      <DivColumn fillParent verticalCenter horizontalCenter className={`${className}`}>
        {
          isComponentReady &&
          (
            isError ?
              <DivColumn fillParent>
                <div>Error Title</div>
                <div>Error Message</div>
                <div>Retry Button</div>
              </DivColumn>
              : (
                loading ?
                  customLoader ? customLoader : (
                    <img src={infiniteLoader} className={styles.loader} />
                  )
                  : children
              )
          )
        }
      </DivColumn>
    )
  }
}

InitialPageLoader.defaultProps = {
  showEmptyScreen: false,
  headingErrorMessage: 'Can’t Load BIJLI',
  errorMessage: 'Something went wrong from our end. Please try again.',
  emptyMessage: 'Looks like its empty',
  callApiOnMount: true
}

InitialPageLoader.propTypes = {
  children: PropTypes.any.isRequired, //(Mandetory) the children to show after the api call
  initialPageApi: PropTypes.func.isRequired, //(Mandetory) the promise in which the api call is being made
  childrenItems: PropTypes.any, //(Optional) ... To handle empty screens if there are no items
  errorMessage: PropTypes.string, //(Optional) Error message in case required differntly on different screens
  emptyMessage: PropTypes.string, //(Optional) Empty message in case required differntly on different screens
  customLoader: PropTypes.any, //(Optional) Component to show instead of the default laoder
  callApiOnMount: PropTypes.bool, //(Optional) Don't automatically want to call the api on mount, instead 
  //handle it manually using ref and calling the reload method

  customEmptyScreen: PropTypes.any,
  //customErrorScreen: PropTypes.any,

  //Style
  className: PropTypes.any
}

export default InitialPageLoader;
