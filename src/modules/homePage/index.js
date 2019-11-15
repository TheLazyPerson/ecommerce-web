import React, { Component } from 'react';
import styles from './homepage.module.scss';

export default class HomePage extends Component {
  constructor(props) {
        super(props);
  }
  render() {
     return(
       <div className={styles.somediv}>
         homePage
       </div>
     )
  }
}