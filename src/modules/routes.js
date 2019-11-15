import React from 'react';
import { Switch, Route, Redirect, HashRouter } from 'react-router-dom';
import HomePage from './homePage';
import ProductDetailsPage from './productDetailsPage';

const App = () => {
  return (
    <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route exact path="/product-details/:slug?/:productId?" component={ProductDetailsPage} />
    </Switch>
  );
}

export default App;