import React, { Component } from "react";
import SectionedContainer from "CommonContainers/sectionedContainer";
import DivColumn from "CommonComponents/divColumn";
import DivRow from "CommonComponents/divRow";
import SideNav from "../components/sideNav";
import styles from "./profile_help_center.module.scss";
import NavHeader from "../components/navHeader";
import CapsuleButton from "CommonComponents/capsuleButton";
import cartIcon from "Icons/cart-bag-icon-black.svg";
import faqIcon from "Icons/faq-icon-black.svg";
import { isEmptyValidator } from "Utils/validators";
import { Form, Field } from "react-final-form";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { sendFeedbackAction } from "Core/modules/support/supportActions";
import { showSuccessFlashMessage } from "Redux/actions/flashMessageActions";

class ProfileHelpCenter extends Component {
  validate = values => {
    const errors = {};
    const validators = {
      feedback: isEmptyValidator(values.oldPassword)
    };

    Object.keys(validators).forEach(key => {
      if (!validators[key].result) errors[key] = validators[key].error;
    });

    return errors;
  };

  onSubmit = form => {
    const { sendFeedbackAction, showSuccessFlashMessage } = this.props;

    sendFeedbackAction({
      feedback: form.feedback
    }).then(({ payload }) => {
      if (payload.code === 200 || payload.code === 201) {
        showSuccessFlashMessage("Feedback sent successfuly");
      }
    });
  };

  onBackPress = () => {
    const { pop } = this.props;
    pop();
  };

  render() {
    return (
      <SectionedContainer sideBarContainer={<SideNav />}>
        <NavHeader title="Help Center" />

        <DivColumn fillParent className={styles.help_center_container}>
          <DivRow className={styles.list_container}>
            <DivColumn
              verticalCenter
              horizontalCenter
              className={styles.item_container}
            >
              <img src={cartIcon} className={styles.item_icon} />
              <div className={styles.item_title}>
                TRACK, CANCEL, RETURN/EXCHANGE
              </div>
              <div className={styles.item_description}>
                Check your order status
              </div>
            </DivColumn>

            <DivColumn
              verticalCenter
              horizontalCenter
              className={styles.item_container}
            >
              <img src={faqIcon} className={styles.item_icon} />
              <div className={styles.item_title}>
                FREQUENTLY ASKED QUESTIONS
              </div>
              <div className={styles.item_description}>
                More queries related to your experience
              </div>
            </DivColumn>
          </DivRow>
          <div className={styles.form_header}>NEED MORE HELP FROM US</div>

          <DivColumn className={styles.form_container}>
            <Form
              onSubmit={this.onSubmit}
              validate={this.validate}
              render={({
                handleSubmit,
                form,
                submitting,
                pristine,
                values
              }) => (
                <form onSubmit={handleSubmit}>
                  <Field name="feedback">
                    {({ input, meta }) => (
                      <textarea
                        meta={meta}
                        {...input}
                        placeholder="Brief about your concern?"
                        className={styles.text_area}
                      />
                    )}
                  </Field>
                  <DivRow>
                    <CapsuleButton type="submit" disabled={submitting}>
                      Get Callback
                    </CapsuleButton>
                  </DivRow>
                </form>
              )}
            />
          </DivColumn>
        </DivColumn>
      </SectionedContainer>
    );
  }
}

const mapStateToProps = state => {
  return {
    supportReducer: state.supportReducer
  };
};

const mapDispathToProps = dispatch => {
  return {
    sendFeedbackAction: bindActionCreators(sendFeedbackAction, dispatch),
    showSuccessFlashMessage: bindActionCreators(
      showSuccessFlashMessage,
      dispatch
    )
  };
};

export default connect(mapStateToProps, mapDispathToProps)(ProfileHelpCenter);
