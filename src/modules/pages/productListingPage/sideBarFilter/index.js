import _ from "lodash";
import "rc-slider/assets/index.css";
import "rc-tooltip/assets/bootstrap.css";
import { connect } from "react-redux";
import DivColumn from "CommonComponents/divColumn";
import DivRow from "CommonComponents/divRow";
import InputCheckbox from "../../../commonComponents/InputCheckbox";
import map from "lodash/map";
import React, { Component, Fragment } from "react";
import Slider from "rc-slider";
import styles from "./side_bar_filter.module.scss";
import translatorHoc from "Hoc/translatorHoc";

const createSliderWithTooltip = Slider.createSliderWithTooltip;
const Range = createSliderWithTooltip(Slider.Range);

class SideBarFilter extends Component {
  onChangeCheckboxFilterItem = (facet) => {
    const localFilters = this.props.filters;
    const { key, id } = facet;

    if (
      _(localFilters)
        .map((l) => l.id)
        .includes(localFilters.filterType)
    ) {
      const newFilterType = _.cloneDeep(localFilters[key]);
      if (_.includes(newFilterType, id)) {
        const arr = newFilterType.filter((item) => item !== id);
        const lf = { ...localFilters, [key]: arr };
        this.props.onChangeFilter(lf);
      } else {
        const lf = { ...localFilters, [key]: [...newFilterType, id] };
        this.props.onChangeFilter(lf);
      }
    } else {
      const lf = { ...localFilters, [key]: [id] };
      this.props.onChangeFilter(lf);
    }
  };

  getChecked = (filterKey, facetId) => {
    const localFilters = this.props.filters;
    const newFilterArray = _.cloneDeep(localFilters[filterKey]);
    return _(newFilterArray).includes(facetId);
  };

  onChangeRange = (low, high, facet) => {
    const localFilters = this.props.filters;
    const { key } = facet;

    const updatedFilter = {
      ...localFilters,
      [key]: {
        min_price: low,
        max_price: high,
      },
    };
    this.props.onChangeFilter(updatedFilter);
  };

  render() {
    const {
      translate,
      productListReducer: { productList },
      languageReducer: { languageCode },
    } = this.props;
    const displayFilters = productList.filters;

    return (
      <DivColumn>
        <DivRow className={styles.filter_top_heading_container}>
          <div className={styles.filter_text}>
            {translate("filters.filters")}
          </div>
          <div className={styles.clear_text} onClick={this.props.onClearFilter}>
            {translate("filters.clear_all")}
          </div>
        </DivRow>
        {map(displayFilters, (displayFilter) => {
          return (
            <DivColumn className={styles.filters_container}>
              <div className={styles.filter_sub_header}>
                {displayFilter.title}
              </div>
              <DivColumn className={styles.filters_list_container}>
                {displayFilter.type === "category-filter" &&
                  map(displayFilter.facets, (facet) => (
                    <InputCheckbox
                      text={facet.translations[languageCode].name}
                      isChecked={this.getChecked(displayFilter.key, facet.id)}
                      textStyle={styles.checkbox_text}
                      onChange={() =>
                        this.onChangeCheckboxFilterItem({
                          ...facet,
                          key: displayFilter.key,
                        })
                      }
                    />
                  ))}
                {displayFilter.type === "multi-select" && displayFilter.facets && (
                  <Fragment>
                    <Range
                      onAfterChange={(event) =>
                        this.onChangeRange(event[0], event[1], {
                          ...displayFilter.facets,
                          key: displayFilter.key,
                        })
                      }
                      min={Math.floor(displayFilter.facets.min_price)}
                      max={Math.floor(displayFilter.facets.max_price)}
                      tipFormatter={(value) => `${value}`}
                      defaultValue={[
                        displayFilter.facets.min_price,
                        displayFilter.facets.max_price,
                      ]}
                    />
                    <DivRow className={styles.filter_range_container}>
                      <div className={styles.range_text}>
                        {_.isEmpty(this.props.filters.price_range_filter)
                          ? Math.floor(displayFilter.facets.min_price)
                          : this.props.filters.price_range_filter.min_price}
                      </div>
                      <div className={styles.range_text}>
                        {_.isEmpty(this.props.filters.price_range_filter)
                          ? Math.floor(displayFilter.facets.max_price)
                          : this.props.filters.price_range_filter.max_price}
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

const mapStateToProps = (state) => {
  return {
    productListReducer: state.productListReducer,
  };
};

export default connect(mapStateToProps)(translatorHoc(SideBarFilter));
