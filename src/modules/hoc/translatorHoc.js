import React, { Component } from "react";
import { withTranslation, Trans } from 'react-i18next';

const translatorHoc = WrappedComponent => {
  class translator extends Component {
    // const { i18n } = this.props;
    // i18n.changeLanguage('en-US');
    translate = (key, variableObject = null) => {
      const { t } = this.props;

      return t(key, variableObject);
    }

    render() {
      return (
        <WrappedComponent
          {...this.props}
          translate={this.translate}
        />
      );
    }
  }

  return withTranslation('common')(translator);
};

export default translatorHoc;
