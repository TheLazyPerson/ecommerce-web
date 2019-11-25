import React, { Component } from 'react';
import DivColumn from 'CommonComponents/divColumn';
import DivRow from 'CommonComponents/divRow';
import styles from './nav_header.module.scss';

export default class NavHeader extends Component {
  render() {
    const { title, children } = this.props;

     return (
      <DivRow className={styles.header_container}>
        <div className={styles.header_title}>
          {title}
        </div>
        {
          children ? children : null
        }
      </DivRow>
     )
  }
}
