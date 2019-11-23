import React, { Component } from 'react';
import styles from './capsule_text.module.scss';

export default class CapsuleText extends Component {
  render() {
    const { text, noMargin } = this.props;
    const capsuleStyle = noMargin ? {margin: 0} : {} ;

     return (
  <div className={styles.capsule_items} style={capsuleStyle}>{`#${text}`}</div>
     )
  }
}