import React from 'react';
import { Switch, Route, Redirect, HashRouter } from 'react-router-dom';
import HomePage from './pages/homePage';
import SignInPage from './pages/signinPage';
import SignUpPage from './pages/signupPage';
import PageNotFound from 'CommonComponents/pageNotFound';
import ProductListingPage from './pages/productListingPage';
import ProductDetailsPage from './pages/productDetailsPage';
import ProfileOverview from './pages/profilePages';

const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={HomePage}/>
      <Route exact path="/product-details/:slug?/:productId?" component={ProductDetailsPage} />
      <Route exact path="/signin" component={SignInPage}/>
      <Route exact path="/signup" component={SignUpPage} />
      <Route exact path="/product-listing" component={ProductListingPage} />
      <Route exact path="/profile" component={ProfileOverview} />
      <Route component={PageNotFound} />
    </Switch>
  );
}

export default App;