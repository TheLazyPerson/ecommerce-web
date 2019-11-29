import { reducerStates, flashMessageTypes } from 'Constants/flashMessageConstants';

const initialState = {
  showMessage: false,
  messageType: '',
  message: '',
}

export default function loaderReducer(state = initialState, {type, payload}) {
switch (type) {
  case reducerStates.SHOW_FLASH_MESSAGE:
    return {
      showMessage: true,
      messageType: payload.messageType ? payload.messageType : flashMessageTypes.INFO,
      message: payload.message,
    }
  
  case reducerStates.HIDE_FLASH_MESSAGE:
    return {
      showMessage: false,
      messageType: '',
      message: ''
    }

  default:      
    return state;
  }
}
