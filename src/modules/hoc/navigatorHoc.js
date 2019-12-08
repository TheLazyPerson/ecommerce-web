
import React, { Component } from 'react';
import { withRouter } from "react-router";

const navigatorHoc  = (WrappedComponent) => {
  class navigator extends Component {

    navigateTo = (pageName, data=null) => {
      const { push } = this.props.history;
      this.navigateScreen(push, pageName, data);
    }

    replaceTo = (pageName, data=null) => {
      const { replace } = this.props.history;
      this.navigateScreen(replace, pageName, data);      
    }

    pop = () => {
      const { goBack } = this.props.history;

      goBack();
    }

    navigateScreen = (navigationFunction, pageName, data) => {

      switch(pageName) {
        case 'plp':
          return navigationFunction('/product-listing');

        case 'pdp':
          return navigationFunction('/product-details/adidas-shoes/2314');
          
        case 'checkout':
          return navigationFunction('/checkout');        

        case 'signin':
          return navigationFunction('/signin');
          
        case 'profile':
          return navigationFunction('/profile');          

        case 'orders':
          return navigationFunction('/profile/orders');
          
        case 'help-center':
          return navigationFunction('/profile/helpcenter');

        case 'wishlist':
          return navigationFunction('/wishlist');
        
        case 'address':
          return navigationFunction('/profile/address');

        case 'profile-details':
          return navigationFunction('/profile/details');

        case 'change-password':
          return navigationFunction('/profile/details/change-password');

        case 'settings':
          return navigationFunction('/profile/settings');
        
        case 'search':
          return navigationFunction(`/search/${data.searchType.toLowerCase()}?query=${data.searchText}`);

        default:
          return navigationFunction('/');
      }
    }

    render() {      
      return (
        <WrappedComponent 
          navigateTo={this.navigateTo}
          replaceTo={this.replaceTo}
          pop={this.pop}
          {...this.props}
        />
      )
    }
  }
    
  return withRouter(navigator);
};

export default navigatorHoc