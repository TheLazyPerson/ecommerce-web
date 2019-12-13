import React, { Component } from 'react';
import { shippingAndReturns } from 'Constants/shippingAndReturnsConstants';
import StaticDataPageContainer from 'CommonContainers/staticDataPageContanier';

export default class ShippingAndReturnsPage extends Component {
  render() {
     return (
       <StaticDataPageContainer 
        subTitle="SHIPPING"
        title="Shipping and Returns"
        staticDataArray={shippingAndReturns}
       />
     )
  }
}