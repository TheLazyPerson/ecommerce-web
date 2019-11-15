// @flow
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createBrowserHistory } from 'history';
import rootReducer from '../shared/reducers';
import {apiMiddleware} from 'redux-api-middleware';
import apiAuthInjector from '../middleware/authInjector';
import apiErrorHandler from '../middleware/apiError';

const history = createBrowserHistory();
const enhancer = applyMiddleware(
  thunk,
  apiAuthInjector, 
  apiMiddleware,
  apiErrorHandler,
  );

function configureStore(initialState) {
  return createStore(rootReducer, initialState, enhancer);
}

export default { configureStore, history };
