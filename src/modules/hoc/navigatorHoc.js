
import React, { Component } from 'react';
import { withRouter } from "react-router";

const navigatorHoc  = (WrappedComponent) => {
  class navigator extends Component {

    navigateTo = (pageName, data=null) => {
      const {push} = this.props.history;


      switch(pageName) {
        case 'plp':
          push('/product-listing');
          return;
        case 'pdp':
          push('/product-details/adidas-shoes/2314');
          return;
        case 'checkout':
          push('/checkout');
          return;
        case 'signin':
          push('/signin');
          return;
        case 'profile':
          push('/profile');
          return;

        case 'orders':
          return push('/profile/orders');
          
        case 'help-center':
          return push('/profile/helpcenter');

        case 'wishlist':
          return push('/wishlist');
        
        case 'address':
          return push('/profile/address');

        case 'profile-details':
          return push('/profile/details');

        case 'settings':
          return push('/profile/settings');
          
        default:
          push('/');
      }

      // if (pageName == 'plp') {
      //   push('/product-listing');
      // } else if (pageName == 'pdp') {
      //   push('/product-details/adidas-shoes/2314');
      // } else if (pageName == 'checkout') {
      //   push('/checkout');
      // } else if(pageName == 'signin') {
      //   push('/signin');
      // } else if(pageName == 'profile') {
      //   push('/profile');
      // } else {
      //   push('/');
      // }
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