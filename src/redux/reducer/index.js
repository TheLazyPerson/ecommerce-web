import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import loaderReducer from "./loaderReducer";
import flashMessageReducer from "./flashMessageReducer";
import signInReducer from "Core/modules/signin/reducer/signinReducer";
import homePageReducer from "Core/modules/homepage/homePageReducer";
import addressReducer from "Core/modules/address/addressReducer";
import profileDetailsReducer from "Core/modules/profiledetails/profileDetailsReducer";
import productListReducer from "Core/modules/productlist/productListReducer";
import productDetailReducer from "Core/modules/productdetail/productDetailReducer";
import changePasswordReducer from "Core/modules/changepassword/changePasswordReducer";
import wishlistReducer from "Core/modules/wishlist/wishlistReducer";
import bagReducer from "Core/modules/bag/bagReducer";
import searchReducer from 'Core/modules/search/searchReducer';
import orderReducer from 'Core/modules/order/orderReducer';
import checkoutReducer from 'Core/modules/checkout/checkoutReducer';
import languageReducer from 'Core/modules/language/languageReducer';
import basicReducer from 'Core/modules/basic/basicReducer';

const appReducer = history =>
  combineReducers({
    router: connectRouter(history),
    wishlistReducer,
    loaderReducer,
    flashMessageReducer,
    signInReducer,
    homePageReducer,
    addressReducer,
    profileDetailsReducer,
    productListReducer,
    productDetailReducer,
    changePasswordReducer,
    bagReducer,
    searchReducer,
    orderReducer,
    checkoutReducer,
    languageReducer,
    basicReducer,
  });

/* const rootReducer = ( state, action ) => {
  if ( action.type === "LOGOUT_SUCCESS" ) {
    state = undefined;
  }

  return appReducer(state, action)
 } */

export default appReducer;
