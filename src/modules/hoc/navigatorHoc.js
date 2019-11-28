
import React, { Component } from 'react';
import { withRouter } from "react-router";

const navigatorHoc  = (WrappedComponent) => {
  class navigator extends Component {

    navigateTo = (pageName, data=null) => {
      const {push} = this.props.history;

      if (pageName == 'plp') {
        push('/product-listing');
      }
    }

    render() {
      return (
        <WrappedComponent 
          navigateTo={this.navigateTo}
        />
      )
    }
  }
    
  return withRouter(navigator);
};

export default navigatorHoc