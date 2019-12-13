import React, { Component } from "react";
import DivRow from "CommonComponents/divRow";
import DivColumn from "CommonComponents/divColumn";
import CapsuleText from "CommonComponents/capsuleText";
import map from "lodash/map";
import styles from "./exhibition_detail_component.module.scss";

export default class ExhibitionDetailComponent extends Component {
  render() {
    const {
      name,
      tags,
      price,
      description,
      children,
      className
    } = this.props;

    return (
      <DivColumn
        className={`${styles.exhibition_details_container} ${className}`}
      >
        <div className={styles.exhibition_name_text}>{name}</div>
        <div className={styles.small_divider}></div>
        <DivRow>
          {map(tags, (tag, index) =>
            index === 0 ? (
              <CapsuleText noMargin text={tag} />
            ) : (
              <CapsuleText text={tag} />
            )
          )}
        </DivRow>
        {price ? <div className={styles.price_text}>{`${price}`}</div> : null}
        <div className={styles.exhibition_description_text}>{description}</div>
        {children ? children : null}
      </DivColumn>
    );
  }
}
