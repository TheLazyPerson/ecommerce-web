
import React, { Component } from 'react';
import { withRouter } from "react-router";

const navigatorHoc  = (WrappedComponent) => {
  class navigator extends Component {

    navigateTo = (pageName, data=null) => {
      const {push} = this.props.history;

      if (pageName == 'plp') {
        push('/product-listing');
      } else if (pageName == 'pdp') {
        push('/product-details/adidas-shoes/2314');
      } else if (pageName == 'checkout') {
        push('/checkout');
      } else {
        push('/');
      }
    }

    render() {      
      return (
        <WrappedComponent 
          navigateTo={this.navigateTo}
          {...this.props}
        />
      )
    }
  }
    
  return withRouter(navigator);
};

export default navigatorHoc