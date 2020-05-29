import React, { Component } from "react";
import styles from "./capsule_text.module.scss";

export default class CapsuleText extends Component {
  render() {
    const { text, noMargin, className } = this.props;
    const capsuleStyle = noMargin ? { margin: 0 } : {};

    return (
      <div
        className={`${styles.capsule_items} ${className}`}
        style={capsuleStyle}
      >{`${text}`}</div>
    );
  }
}
