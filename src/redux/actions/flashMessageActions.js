import { reducerStates } from 'Constants/flashMessageConstants';

export function hideFlashMessage() {
  return dispatch => {
    dispatch({type: reducerStates.HIDE_FLASH_MESSAGE});
  }
}