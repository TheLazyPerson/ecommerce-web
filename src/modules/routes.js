import React from 'react';
import { Switch, Route, Redirect, HashRouter } from 'react-router-dom';
import HomePage from './pages/homePage';
import SignInPage from './pages/signinPage';
import SignUpPage from './pages/signupPage';
import PageNotFound from 'CommonComponents/pageNotFound';
import ProductListingPage from './pages/productListingPage';
import ProductDetailsPage from './pages/productDetailsPage';
import ProfileOverview from './pages/profilePages';
import ProfileOrders from './pages/profilePages/profileOrders';
import ProfileAddress from './pages/profilePages/profileAddress';
import ProfileSettings from './pages/profilePages/profileSettings';
import ProfileDetails from './pages/profilePages/profileDetails';
import ProfileHelpCenter from './pages/profilePages/profileHelpCenter';
import WishlistPage from './pages/wishlistPage';
import SearchPage from './pages/searchPage';
import CheckoutPage from './pages/checkoutPage';


const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={HomePage}/>
      <Route exact path="/product-details/:slug?/:productId?" component={ProductDetailsPage} />
      <Route exact path="/signin" component={SignInPage}/>
      <Route exact path="/signup" component={SignUpPage} />
      <Route exact path="/product-listing" component={ProductListingPage} />
      <Route exact path="/profile" component={ProfileOverview} />
      <Route exact path="/profile/orders" component={ProfileOrders} />
      <Route exact path="/profile/address" component={ProfileAddress} />
      <Route exact path="/profile/settings" component={ProfileSettings} />
      <Route exact path="/profile/details" component={ProfileDetails} />
      <Route exact path="/profile/helpcenter" component={ProfileHelpCenter} />
      <Route exact path="/wishlist" component={WishlistPage} />
      <Route exact path="/search" component={SearchPage} />
      <Route exact path="/checkout" component={CheckoutPage} />
      <Route component={PageNotFound} />
    </Switch>
  );
}

export default App;