import React, { Component } from 'react';
import DivColumn from 'CommonComponents/divColumn';
import styles from './top_container_hoc.module.scss';
import circularLoader from 'Icons/circular-loader.gif';
import DivRow from 'CommonComponents/divRow';

const topContainerHoc  = (WrappedComponent) => {
  class topContainer extends Component {

    render() {

      return (
        <DivColumn className={styles.top_container}>
          <WrappedComponent
            {...this.props}
          />
          <DivColumn className={styles.loader_container} verticalCenter horizontalCenter>
            <img src={circularLoader} className={styles.loader} />
          </DivColumn>
          {
            /*<DivRow>
            Flash message component
          </DivRow> */
          }
        </DivColumn>
      );
    }
  }

  return topContainer;
};

export default topContainerHoc;
