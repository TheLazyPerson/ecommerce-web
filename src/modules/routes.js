import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/homePage";
import NewHomePage from "./pages/newHomePage";
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
import TermsAndConditionPage from "./pages/termsAndConditionPage";
import ChangePassword from "./pages/profilePages/profileDetails/changePassword";
import EditProfile from "./pages/profilePages/profileDetails/editProfile";

import topContainerHoc from "Hoc/topContainerHoc";
import ProtectedRoute from "CommonContainers/protectedRoute";
import { connect } from "react-redux";
import ShippingAndReturnsPage from "./pages/shippingAndReturnsPage";
import PrivacyPolicyPage from "./pages/privacyPolicyPage";
import FAQPage from "./pages/FAQPage";
import AddAddress from "./pages/profilePages/profileAddress/addAddress";
import EditAddress from "./pages/profilePages/profileAddress/editAddress";
import orderDetails from "./pages/profilePages/profileOrders/orderDetails";
import PlaceOrderPage from "./pages/placeOrderPage";
import SelectPaymentPage from "./pages/selectPaymentPage";
import TrendingExhibitionsPage from "./pages/trendingExhibitionsPage";
import PaymentSuccessPage from "./pages/paymentSuccessPage";
import PaymentFailurePage from "./pages/paymentFailurePage";
import RestPassword from "./pages/resetPassword";
import RestPasswordSuccess from "./pages/resetPassword/resetPasswordSucess";
import MarketplaceDetail from "./pages/marketplaceDetails";
import BankDetails from "./pages/bankDetailsPage";
import LocationDetails from "./pages/locationDetailsPage";

const App = ({ isUserSignedIn }) => {
  return (
    <Switch>
      <Route exact path="/" component={NewHomePage} />
      <Route exact path="/new-home-page" component={HomePage} />
      <Route exact path="/product-details" component={ProductDetailsPage} />
      <ProtectedRoute
        exact
        path="/signin"
        component={SignInPage}
        validator={() => !isUserSignedIn}
      />
      <ProtectedRoute
        exact
        path="/reset-password/:token?"
        component={RestPassword}
        validator={() => !isUserSignedIn}
      />
      <ProtectedRoute
        exact
        path="/signup"
        component={SignUpPage}
        validator={() => !isUserSignedIn}
      />
      <ProtectedRoute
        exact
        path="/marketplace-detail"
        component={MarketplaceDetail}
        validator={() => !isUserSignedIn}
      />
      <ProtectedRoute
        exact
        path="/bank-details"
        component={BankDetails}
        validator={() => !isUserSignedIn}
      />
      <ProtectedRoute
        exact
        path="/location-details"
        component={LocationDetails}
        validator={() => !isUserSignedIn}
      />
      <ProtectedRoute
        exact
        path="/reset-password-sucess"
        component={RestPasswordSuccess}
        validator={() => !isUserSignedIn}
      />
      <ProtectedRoute
        exact
        path="/forgot-password"
        component={ForgotPasswordPage}
        validator={() => !isUserSignedIn}
      />
      <Route exact path="/product-listing" component={ProductListingPage} />
      <ProtectedRoute
        exact
        path="/profile"
        component={ProfileOverview}
        redirectTo="signin"
        validator={() => isUserSignedIn}
      />
      <ProtectedRoute
        exact
        path="/profile/orders"
        component={ProfileOrders}
        redirectTo="signin"
        validator={() => isUserSignedIn}
      />
      <ProtectedRoute
        exact
        path="/profile/orders/details/:orderId?"
        component={orderDetails}
        redirectTo="signin"
        validator={() => isUserSignedIn}
      />
      <ProtectedRoute
        exact
        path="/profile/address"
        component={ProfileAddress}
        redirectTo="signin"
        validator={() => isUserSignedIn}
      />
      <ProtectedRoute
        exact
        path="/profile/address/add"
        component={AddAddress}
        redirectTo="signin"
        validator={() => isUserSignedIn}
      />
      <ProtectedRoute
        exact
        path="/profile/address/edit"
        component={EditAddress}
        redirectTo="signin"
        validator={() => isUserSignedIn}
      />
      <ProtectedRoute
        exact
        path="/profile/settings"
        component={ProfileSettings}
        redirectTo="signin"
        validator={() => isUserSignedIn}
      />
      <ProtectedRoute
        exact
        path="/profile/details"
        component={ProfileDetails}
        redirectTo="signin"
        validator={() => isUserSignedIn}
      />
      <ProtectedRoute
        exact
        path="/profile/details/change-password"
        component={ChangePassword}
        redirectTo="signin"
        validator={() => isUserSignedIn}
      />
      <ProtectedRoute
        exact
        path="/profile/details/edit-profile"
        component={EditProfile}
        redirectTo="signin"
        validator={() => isUserSignedIn}
      />

      <ProtectedRoute
        exact
        path="/profile/helpcenter"
        component={ProfileHelpCenter}
        redirectTo="signin"
        validator={() => isUserSignedIn}
      />
      <ProtectedRoute
        exact
        path="/wishlist"
        component={WishlistPage}
        redirectTo="signin"
        validator={() => isUserSignedIn}
      />
      <Route exact path="/search/:searchType?" component={SearchPage} />
      <ProtectedRoute
        exact
        path="/checkout"
        component={CheckoutPage}
        redirectTo="signin"
        validator={() => isUserSignedIn}
      />
      <ProtectedRoute
        exact
        path="/place-order"
        component={PlaceOrderPage}
        redirectTo="signin"
        validator={() => isUserSignedIn}
      />
      <ProtectedRoute
        exact
        path="/select-payment"
        component={SelectPaymentPage}
        redirectTo="signin"
        validator={() => isUserSignedIn}
      />
      <ProtectedRoute
        exact
        path="/payment/success"
        component={PaymentSuccessPage}
        redirectTo="signin"
        validator={() => isUserSignedIn}
      />
      <ProtectedRoute
        exact
        path="/payment/failure"
        component={PaymentFailurePage}
        redirectTo="signin"
        validator={() => isUserSignedIn}
      />
      <Route
        exact
        path="/terms-and-condition"
        component={TermsAndConditionPage}
      />
      <Route
        exact
        path="/shipping-and-returns"
        component={ShippingAndReturnsPage}
      />
      <Route
        exact
        path="/trending-exhibitions"
        component={TrendingExhibitionsPage}
      />

      <Route exact path="/privacy-policy" component={PrivacyPolicyPage} />
      <Route exact path="/faq" component={FAQPage} />

      <Route component={PageNotFound} />
    </Switch>
  );
};

const mapStateToProps = (state) => {
  return {
    isUserSignedIn: state.signInReducer.isUserSignedIn,
  };
};

export default connect(mapStateToProps, null)(topContainerHoc(App));
