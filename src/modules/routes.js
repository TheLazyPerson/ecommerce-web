import React from 'react';
import { Switch, Route, Redirect, HashRouter } from 'react-router-dom';
import HomePage from './homePage';
import ProductDetailsPage from './productDetailsPage';
import PageNotFound from 'CommonComponents/pageNotFound';

const App = () => {
  return (
    <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route exact path="/product-details/:slug?/:productId?" component={ProductDetailsPage} />
        <Route component={PageNotFound} />
    </Switch>
  );
}

export default App;