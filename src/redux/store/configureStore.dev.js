import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { createBrowserHistory } from 'history';
import { createLogger } from 'redux-logger';
import rootReducer from '../shared/reducers';
import {apiMiddleware} from 'redux-api-middleware';

//TODO create alias for ecommerce
import apiAuthInjector from '../../ecommerce-core/middleware/authInjector';
import apiErrorHandler from '../../ecommerce-core/middleware/apiError';

const history = createBrowserHistory();
const configureStore = (initialState) => {
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
  const store = createStore(rootReducer, initialState, enhancer);

  if (module.hot) {
    module.hot.accept('../shared/reducers', () =>
      store.replaceReducer(require('../shared/reducers'))); // eslint-disable-line global-requires
  }

  return store;
};

export default { configureStore, history };
