import isNil from 'lodash/isNil';
import { SHOW_LOADER, HIDE_LOADER } from 'Constants/loaderConstants';
// import { isTypeRequest, isTypeFaliure, isTypeSuccess } from '../utils/validationhelper';

export default store => next => action => {
  // Check if this action is a redux-api-middleware action.
  
  const {dispatch} = store;

  if(action.meta && !isNil(action.meta.showOverlayLoader)){
    dispatch({type: action.meta.showOverlayLoader ? SHOW_LOADER : HIDE_LOADER})
  }

  return next(action)  
}