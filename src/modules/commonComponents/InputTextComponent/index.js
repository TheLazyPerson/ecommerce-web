import React, { Component } from 'react';
import styles from './input_text_component.module.scss';

export default class InputTextComponent extends Component {
  constructor(props) {
        super(props);
  }
  render() {
    const { placeholder, className } = this.props;
    return (
     <input
      type="text"
      className={`${styles.input_text} ${className ? className : ''}`}
      placeholder={placeholder}
     />
    )
  }
}