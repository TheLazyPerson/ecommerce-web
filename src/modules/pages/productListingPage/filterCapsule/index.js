import React, { Component } from "react";
import styles from "./filter_capsule.module.scss";
import DivRow from "CommonComponents/divRow";
import { connect } from "react-redux";
import map from "lodash/map";

class FilterCapsule extends Component {
  render() {
    const {
      productListReducer: { productList },
      languageReducer: { languageCode },
    } = this.props;
    const displayFilters = productList.filters;
    return (
      <DivRow
        verticalCenter
        horizontalCenter
        className={`${styles.capsule_container} ${this.props.className}`}
      >
        {map(displayFilters, (displayFilter) => {
          return (
            <div>
              {displayFilter.type === "category-filter" &&
                map(displayFilter.facets, (facet) => (
                  <div>
                    <div className={styles.capsule_text}>
                      {facet.translations[languageCode].name}
                      <span
                        className={styles.close_icon}
                        onClick={() => this.props.onRemoveCapsule(facet.id)}
                      >
                        X
                      </span>
                    </div>
                  </div>
                ))}
            </div>
          );
        })}
      </DivRow>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    productListReducer: state.productListReducer,
    languageReducer: state.languageReducer,
  };
};

export default connect(mapStateToProps)(FilterCapsule);
