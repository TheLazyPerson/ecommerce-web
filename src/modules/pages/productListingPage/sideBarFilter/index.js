import React, { Component, Fragment } from "react";
import DivColumn from "CommonComponents/divColumn";
import DivRow from "CommonComponents/divRow";
import InputCheckbox from "../../../commonComponents/InputCheckbox";
import styles from "./side_bar_filter.module.scss";
import translatorHoc from "Hoc/translatorHoc";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import map from "lodash/map";
import filter from 'lodash/filter';
import {
  setFilters,
} from "Core/modules/productlist/productListActions";
import "rc-slider/assets/index.css";
import "rc-tooltip/assets/bootstrap.css";
import Slider from "rc-slider";

const createSliderWithTooltip = Slider.createSliderWithTooltip;
const Range = createSliderWithTooltip(Slider.Range);

class SideBarFilter extends Component {
  onChangeCheckboxFilterItem = (event, facet) => {
    const { makeApiCall, productListReducer, setFilters } = this.props;
    const checkBoxValue = event.target.checked;
    const reducerFilter = productListReducer.filters;

    const filters = checkBoxValue ? new Set(reducerFilter[facet.key] ? [...reducerFilter[facet.key], facet.id] : [facet.id])
      : filter(reducerFilter[facet.key], facetId => facetId != facet.id)

    let updatedFilter = {
      ...reducerFilter,
      [facet.key]: [...filters] // converting set to array    
    };

    setFilters(updatedFilter);
    setTimeout(() => makeApiCall(), 100);
  };

  onChangeRange = (event, facet) => {
    const { makeApiCall, productListReducer, setFilters } = this.props;
    const reducerFilter = productListReducer.filters;
    const updatedFilter = {
      ...reducerFilter,
      [facet.key]: {
        min_price: event[0],
        max_price: event[1],
      }
    };

    setFilters(updatedFilter);
    setTimeout(() => makeApiCall(), 100);
  };

  render() {
    const {
      translate,
      productListReducer: { productList },
      filters
    } = this.props;
    const displayFilters = productList.filters;

    return (
      <DivColumn>
        <DivRow className={styles.filter_top_heading_container}>
          <div className={styles.filter_text}>
            {translate("filters.filters")}
          </div>
          <div className={styles.clear_text}>
            {translate("filters.clear_all")}
          </div>
        </DivRow>
        {map(displayFilters, displayFilter => {
          return (
            <DivColumn className={styles.filters_container}>
              <div className={styles.filter_sub_header}>
                {displayFilter.title}
                {/* {translate('filters.categories')} */}
              </div>
              <DivColumn className={styles.filters_list_container}>
                {displayFilter.type == "category-filter" &&
                  map(displayFilter.facets, facet => (
                    <InputCheckbox
                      text={facet.name}
                      textStyle={styles.checkbox_text}
                      onChange={event =>
                        this.onChangeCheckboxFilterItem(event, { ...facet, key: displayFilter.key })
                      }
                    />
                  ))}
                {displayFilter.type == "multi-select" && displayFilter.facets && (
                  <Fragment>
                    <Range
                      onAfterChange={event =>
                        this.onChangeRange(event, { ...displayFilter.facets, key: displayFilter.key })
                      }
                      min={displayFilter.facets.min_price}
                      max={displayFilter.facets.max_price}
                      tipFormatter={value => `${value}`}
                      defaultValue={[
                        displayFilter.facets.min_price,
                        displayFilter.facets.max_price
                      ]}
                    />
                    <DivRow className={styles.filter_range_container}>
                      <div className={styles.range_text}>
                        {Math.floor(displayFilter.facets.min_price)}
                      </div>
                      <div className={styles.range_text}>
                        {Math.floor(displayFilter.facets.max_price)}
                      </div>
                    </DivRow>
                  </Fragment>
                )}
              </DivColumn>
            </DivColumn>
          );
        })}
      </DivColumn>
    );
  }
}

const mapStateToProps = state => {
  return {
    productListReducer: state.productListReducer
  };
};

const mapDispathToProps = dispatch => {
  return {
    setFilters: bindActionCreators(setFilters, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispathToProps
)(translatorHoc(SideBarFilter));
