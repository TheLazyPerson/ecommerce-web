import { combineReducers } from 'redux';
import showApiErrorMessageReducer from '../../ecommerce-core/reducers/showApiErrorMessageReducer';
import message from '../../ecommerce-core/reducers/message';
import { connectRouter } from 'connected-react-router'

const appReducer = (history) => combineReducers({
message,
router: connectRouter(history),
showApiErrorMessageReducer,
})

/* const rootReducer = ( state, action ) => {
  if ( action.type === "LOGOUT_SUCCESS" ) {
    state = undefined;
  }

  return appReducer(state, action)
 } */
 
export default appReducer