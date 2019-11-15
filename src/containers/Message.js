import React from "react";
import { connect } from "react-redux";
import { showMessage } from "../ecommerce-core/actions/index";
import { Button } from "react-bootstrap";

let Message = ({ message, stateObject, displayMessage }) => (
  <div>
    <Button onClick={displayMessage}>PRESS TO DISPATCH FIRST ACTION</Button>
    <h2 style={{ margin: "30px" }}>{message}</h2>
  </div>
);

const mapStateToProps = state => ({
  message: state.message.say,
  stateObject: state
});

const mapDispatchToProps = dispatch => ({
  displayMessage: () => {
    dispatch(showMessage());
  }
});

Message = connect(
  mapStateToProps,
  mapDispatchToProps
)(Message);

export default Message;
