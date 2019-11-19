import React from 'react';
import { Switch, Route, Redirect, HashRouter } from 'react-router-dom';
import HomePage from './pages/homePage';
import ProductDetailsPage from './pages/productDetailsPage';
import SignInPage from './pages/signinPage';
import SignUpPage from './pages/signupPage';
import PageNotFound from 'CommonComponents/pageNotFound';

const App = () => {
  return (
    <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route exact path="/product-details/:slug?/:productId?" component={ProductDetailsPage} />
        <Route exact path="/signin" component={SignInPage}/>
        <Route exact path="/signup" component={SignUpPage} />
        <Route component={PageNotFound} />
    </Switch>
  );
}

export default App;