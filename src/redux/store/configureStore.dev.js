import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { createBrowserHistory } from 'history';
import { createLogger } from 'redux-logger';
import rootReducer from '../reducer';
import {apiMiddleware} from 'redux-api-middleware';

//TODO create alias for ecommerce
import apiAuthInjector from 'Core/middleware/authInjector';
import apiErrorHandler from 'Core/middleware/apiError';

export const history = createBrowserHistory();
export const configureStore = (initialState) => {
  // Redux Configurations
  const enhancers = [];

  // TODO If Redux DevTools Extension is installed use it, otherwise use Redux compose
  const composeEnhancers = compose;

  // Apply Middleware & Compose Enhancers
  enhancers.push(compose(applyMiddleware(
    thunk,
    apiAuthInjector,
    apiMiddleware,
    apiErrorHandler,
    createLogger(),
    )));
  const enhancer = composeEnhancers(...enhancers);

  // Create Store
  const store = createStore(rootReducer(history), initialState, enhancer);

  if (module.hot) {
    module.hot.accept('../reducer', () =>
      store.replaceReducer(require('../reducer')));
  }

  return store;
};
