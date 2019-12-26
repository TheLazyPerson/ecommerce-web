import React, { Component } from "react";
import styles from "./language_select.module.scss";
import { withTranslation } from "react-i18next";
import { LANG } from "Constants/cookieConstants";
import { CookieService } from "Utils/cookieService";

class LanguageSelect extends Component {
  state = {
    languageCode: "en"
  };

  componentDidMount() {
    const languageCode = CookieService.getJSON(LANG) || "en";
    this.setState({ languageCode });
  }

  changeLanguage = languageCode => {
    const { i18n } = this.props;
    i18n.changeLanguage(languageCode);
    this.setState({ languageCode });
  };

  render() {
    const { blackColor } = this.props;
    const { languageCode } = this.state;
    const arSelected = languageCode == "ar";
    const enSelected = languageCode == "en";

    return (
      <div className={`${blackColor ? styles.black : styles.white}`}>
        <span
          className={`${styles.language_item_text} ${
            !enSelected ? styles.not_selected : ""
          }`}
          onClick={() => this.changeLanguage("en")}
        >
          En
        </span>
        &nbsp;&nbsp;
        <span className={styles.divider}>/</span>&nbsp;&nbsp;
        <span
          className={`${styles.language_item_text} ${
            !arSelected ? styles.not_selected : ""
          }`}
          onClick={() => this.changeLanguage("ar")}
        >
          العربي
        </span>
      </div>
    );
  }
}

export default withTranslation()(LanguageSelect);
