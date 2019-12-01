import React, { Component } from 'react';
import styles from './input_text_component.module.scss';

export default class InputTextComponent extends Component {
  constructor(props) {
        super(props);
  }
  render() {
    const { className, type } = this.props;
    
    return (
     <input
      {...this.props}
      type={type ? type: 'text'}
      className={`${styles.input_text} ${className ? className : ''}`}
     />
    )
  }
}