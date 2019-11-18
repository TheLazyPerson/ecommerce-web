import React, { Component } from 'react';
import styles from './language_select.module.scss';

export default class LanguageSelect extends Component {
  constructor(props) {
        super(props);
  }
  render() {
    const { blackColor } = this.props;

     return(
      <div className={`${blackColor ? styles.black : styles.white}`}>
        <span className={styles.language_item_text}>En</span>&nbsp;&nbsp;
        <span className={`${styles.language_item_text} ${styles.not_selected}`}>/</span>&nbsp;&nbsp;
        <span className={`${styles.language_item_text} ${styles.not_selected}`}>Urdu</span>
      </div>
     )
  }
}