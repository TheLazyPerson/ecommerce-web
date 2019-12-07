import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/homePage";
import SignInPage from "./pages/signinPage";
import SignUpPage from "./pages/signupPage";
import PageNotFound from "CommonComponents/pageNotFound";
import ProductListingPage from "./pages/productListingPage";
import ProductDetailsPage from "./pages/productDetailsPage";
import ProfileOverview from "./pages/profilePages";
import ProfileOrders from "./pages/profilePages/profileOrders";
import ProfileAddress from "./pages/profilePages/profileAddress";
import ProfileSettings from "./pages/profilePages/profileSettings";
import ProfileDetails from "./pages/profilePages/profileDetails";
import ProfileHelpCenter from "./pages/profilePages/profileHelpCenter";
import WishlistPage from "./pages/wishlistPage";
import SearchPage from "./pages/searchPage";
import CheckoutPage from "./pages/checkoutPage";
import ForgotPasswordPage from "./pages/forgotPasswordPage";
import topContainerHoc from "Hoc/topContainerHoc";
import ProtectedRoute from 'CommonContainers/protectedRoute';
import { connect } from "react-redux";

const App = ({ isUserSignedIn }) => {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route
        exact
        path="/product-details/:slug?/:productId?"
        component={ProductDetailsPage}
      />
      <ProtectedRoute exact path="/signin" component={SignInPage} validator={()=>!isUserSignedIn} />
      <ProtectedRoute exact path="/signup" component={SignUpPage} validator={()=>!isUserSignedIn} />
      <ProtectedRoute exact path="/forgot-password" component={ForgotPasswordPage} validator={()=>!isUserSignedIn} />
      <Route exact path="/product-listing" component={ProductListingPage} />
      <ProtectedRoute exact path="/profile" component={ProfileOverview} redirectTo='signin' validator={()=>isUserSignedIn} />
      <ProtectedRoute exact path="/profile/orders" component={ProfileOrders} redirectTo='signin' validator={()=>isUserSignedIn} />
      <ProtectedRoute exact path="/profile/address" component={ProfileAddress} redirectTo='signin' validator={()=>isUserSignedIn}/>
      <ProtectedRoute exact path="/profile/settings" component={ProfileSettings} redirectTo='signin' validator={()=>isUserSignedIn}/>
      <ProtectedRoute exact path="/profile/details" component={ProfileDetails} redirectTo='signin' validator={()=>isUserSignedIn}/>
      <ProtectedRoute exact path="/profile/helpcenter" component={ProfileHelpCenter} redirectTo='signin' validator={()=>isUserSignedIn}/>
      <ProtectedRoute exact path="/wishlist" component={WishlistPage} />
      <Route exact path="/search/:searchType?" component={SearchPage} />
      <ProtectedRoute exact path="/checkout" component={CheckoutPage} />
      <Route component={PageNotFound} />
    </Switch>
  );
};

const mapStateToProps = state => {
  return {
    isUserSignedIn: state.signInReducer.isUserSignedIn,
  };
};

export default connect(mapStateToProps, null)(topContainerHoc(App));
