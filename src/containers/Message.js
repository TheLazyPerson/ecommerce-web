import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { showMessage } from "../ecommerce-core/actions";
import App from "../components/App";

const mapStateToProps = state => {
  let message = state.message;
  return {
    message
  };
};

// function mapStateToProps({ message }) {
//   return {
//     message
//   };
// }

export default connect(mapStateToProps)(App);
