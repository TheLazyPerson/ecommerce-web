import React, { Component } from "react";
import PropTypes from "prop-types";
import Masonry from 'react-masonry-component';
import DivColumn from 'CommonComponents/divColumn';
import exhibitionImage from "Images/exhibition-item-3.png";
import styles from './masonry_grid_container.module.scss';

class MasonryGridContainer extends Component {
  render() {
    return (
      <DivColumn className={styles.masonary_container}>
        <Masonry
          options={{
            columnWidth: 39
          }}
          className={styles.masonary} // default ''
        >
          <div
            className={styles.type2}
            style={{ backgroundImage: `url(${exhibitionImage})` }}
          ></div>
          <div
            className={styles.type1}
            style={{ backgroundImage: `url(${exhibitionImage})` }}
          ></div>
          <div
            className={styles.type2}
            style={{ backgroundImage: `url(${exhibitionImage})` }}
          ></div>
          <div
            className={styles.type1}
            style={{ backgroundImage: `url(${exhibitionImage})` }}
          ></div>
          <div
            className={styles.type2}
            style={{ backgroundImage: `url(${exhibitionImage})` }}
          ></div>
          <div
            className={styles.type2}
            style={{ backgroundImage: `url(${exhibitionImage})` }}
          ></div>
          <div
            className={styles.type1}
            style={{ backgroundImage: `url(${exhibitionImage})` }}
          ></div>
        </Masonry>
      </DivColumn>
    );
  }
}

MasonryGridContainer.propTypes = {};

export default MasonryGridContainer;
