import React, { Component } from "react";
import PropTypes from "prop-types";
import { css, StyleSheet } from "aphrodite";

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
            style={{ background: `url(${exhibitionImage})` }}
          ></div>
          <div
            className={styles.type1}
            style={{ background: `url(${exhibitionImage})` }}
          ></div>
          <div
            className={styles.type2}
            style={{ background: `url(${exhibitionImage})` }}
          ></div>
          <div
            className={styles.type1}
            style={{ background: `url(${exhibitionImage})` }}
          ></div>
          <div
            className={styles.type2}
            style={{ background: `url(${exhibitionImage})` }}
          ></div>
          <div
            className={styles.type2}
            style={{ background: `url(${exhibitionImage})` }}
          ></div>
          <div
            className={styles.type1}
            style={{ background: `url(${exhibitionImage})` }}
          ></div>
        </Masonry>
      </DivColumn>
    );
  }
}

const styles = StyleSheet.create({});

MasonryGridContainer.propTypes = {};

export default MasonryGridContainer;
