import React, { Component } from "react";
import { withTranslation, Trans } from 'react-i18next';
import { connect } from "react-redux";

const translatorHoc = WrappedComponent => {
  class translator extends Component {
    translate = (key, variableObject = null) => {
      const { t } = this.props;

      return t(key, variableObject);
    }

    render() {
      const {
        languageReducer: {
          languageCode,
        }
      } = this.props;

      return (
        <WrappedComponent
          {...this.props}
          translate={this.translate}
          isRTL={languageCode == 'ar'}
        />
      );
    }
  }

  const mapStateToProps = (state) => {
    return {
      languageReducer: state.languageReducer,
    }
  }

  return connect(mapStateToProps, null)(withTranslation('common')(translator));
};

export default translatorHoc;
