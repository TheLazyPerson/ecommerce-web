import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router'

const appReducer = (history) => combineReducers({
router: connectRouter(history),
})

/* const rootReducer = ( state, action ) => {
  if ( action.type === "LOGOUT_SUCCESS" ) {
    state = undefined;
  }

  return appReducer(state, action)
 } */
 
export default appReducer