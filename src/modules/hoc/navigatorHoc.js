
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
        
        case 'search':
          return push(`/search/${data.searchType.toLowerCase()}?query=${data.searchText}`);

        default:
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