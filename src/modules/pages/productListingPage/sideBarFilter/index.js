import React, { Component } from 'react';
import DivColumn from 'CommonComponents/divColumn';
import DivRow from 'CommonComponents/divRow';
import InputCheckbox from '../../../commonComponents/InputCheckbox';
import styles from './side_bar_filter.module.scss';
import translatorHoc from 'Hoc/translatorHoc';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import map from 'lodash/map';
import {
  getProductListAction,
  addFilters,
  setFilters,
  clearFilters
} from "Core/modules/productlist/productListActions";

class SideBarFilter extends Component {

  render() {
    const { translate, productListReducer: { productList }, filters } = this.props;
    const displayFilters = productList.filters;

    return (
      <DivColumn>
        <DivRow className={styles.filter_top_heading_container}>
          <div className={styles.filter_text}>
            {translate('filters.filters')}
          </div>
          <div className={styles.clear_text}>
            {translate('filters.clear_all')}
          </div>
        </DivRow>
        {
          map(displayFilters, displayFilter => {
            return (
              <DivColumn className={styles.filters_container}>
                <div className={styles.filter_sub_header}>
                  {displayFilter.title}{/* {translate('filters.categories')} */}
                </div>
                <DivColumn className={styles.filters_list_container}>
                  <InputCheckbox text="Shirt" textStyle={styles.checkbox_text} />
                  <InputCheckbox text="T-Shirt" textStyle={styles.checkbox_text} />
                  <InputCheckbox text="Trousers" textStyle={styles.checkbox_text} />
                </DivColumn>
              </DivColumn>
            );
          })
        }
      </DivColumn>
    )
  }
}


const mapStateToProps = state => {
  return {
    productListReducer: state.productListReducer
  };
};

const mapDispathToProps = dispatch => {
  return {
    getProductListAction: bindActionCreators(getProductListAction, dispatch)
  };
};

export default connect(mapStateToProps, mapDispathToProps)(translatorHoc(SideBarFilter));
