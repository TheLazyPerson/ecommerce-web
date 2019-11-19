import React, { Component } from 'react';
import styles from './input_checkbox.module.scss';
import DivRow from 'CommonComponents/divRow';

export default class InputCheckbox extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { text } = this.props;
     return (
       <DivRow verticalCenter>
         <input type="checkbox" className={styles.input_checkbox}/>
         <div className={styles.checkbox_text}>{text}</div>
       </DivRow>
     )
  }
}