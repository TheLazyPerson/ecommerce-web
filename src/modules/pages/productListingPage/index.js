import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { getProductListAction } from "Core/modules/productlist/productListActions";
import DivColumn from "CommonComponents/divColumn";
import DivRow from "CommonComponents/divRow";
import DropdownCapsule from "./dropdownCapsule";
import InitialPageLoader from "CommonContainers/initialPageLoader";
import map from "lodash/map";
import ProductGridItem from "./productGridItem";
import queryString from "query-string";
import React, { Component } from "react";
import SectionedContainer from "CommonContainers/sectionedContainer";
import SideBarFilter from "./sideBarFilter";
import styles from "./product_listing_page.module.scss";
import FilterCapsule from "./filterCapsule";

class ProductListingPage extends Component {
  constructor(props) {
    super(props);
    this.productListRef = React.createRef();

    this.state = {
      sort: "",
      filters: {},
    };
  }

  onChangeFilter = (data) => {
    this.setState(
      {
        filters: data,
      },
      () => {
        this.makeApiCall();
      }
    );
  };

  onChangeSort = (data) => {
    this.setState(
      {
        sort: data.value,
      },
      () => {
        this.makeApiCall();
      }
    );
  };

  makeApiCall = () => {
    this.productListRef.current.makePageApiCall();
  };

  onRemoveCapsule = (id) => {
    const arr = this.state.filters.category_filter.filter(
      (item) => item !== id
    );
    this.setState({
      filters: { category_filter: arr },
    });
  };

  render() {
    const parsed = queryString.parse(this.props.location.search);
    const { sort, filters } = this.state;
    const {
      productListReducer: { products },
      getProductListAction,
      isRTL,
    } = this.props;

    const parsedBody = {
      filters,
      sort,
    };

    const { category_filter } = this.state.filters;

    return (
      <SectionedContainer
        sideBarContainer={
          <SideBarFilter
            filters={this.state.filters}
            onChangeFilter={this.onChangeFilter}
          />
        }
      >
        <DivColumn
          className={`${styles.product_listing_container}  ${
            isRTL ? styles.rtl : ""
          }`}
        >
          <DivRow className={styles.filter_view_container}>
            {category_filter && (
              <DivRow className={styles.filter_container}>
                {map(category_filter, (filters, index) => {
                  return (
                    <FilterCapsule
                      className={styles.filter_item}
                      onRemoveCapsule={this.onRemoveCapsule}
                    />
                  );
                })}
              </DivRow>
            )}

            <div></div>
            <DropdownCapsule onChange={this.onChangeSort} />
          </DivRow>
          <DivRow fillParent className={styles.product_list_container}>
            <InitialPageLoader
              ref={this.productListRef}
              initialPageApi={() => getProductListAction(parsed.id, parsedBody)}
            >
              <DivRow fillParent className={styles.product_list}>
                {map(products, (product, index) => {
                  return (
                    <ProductGridItem
                      exhibitionId={parsed.id}
                      product={product}
                      key={index}
                    />
                  );
                })}
              </DivRow>
            </InitialPageLoader>
          </DivRow>
        </DivColumn>
      </SectionedContainer>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    productListReducer: state.productListReducer,
    isRTL: state.languageReducer.isRTL,
  };
};

const mapDispathToProps = (dispatch) => {
  return {
    getProductListAction: bindActionCreators(getProductListAction, dispatch),
  };
};

export default connect(mapStateToProps, mapDispathToProps)(ProductListingPage);
