import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router'
import loaderReducer from './loaderReducer';
import flashMessageReducer from './flashMessageReducer';
import signInReducer from 'Core/modules/signin/reducer/signinReducer';
import homePageReducer from 'Core/modules/homepage/homePageReducer';

const appReducer = (history) => combineReducers({
router: connectRouter(history),
loaderReducer,
flashMessageReducer,
signInReducer,
homePageReducer,
})

/* const rootReducer = ( state, action ) => {
  if ( action.type === "LOGOUT_SUCCESS" ) {
    state = undefined;
  }

  return appReducer(state, action)
 } */
 
export default appReducer