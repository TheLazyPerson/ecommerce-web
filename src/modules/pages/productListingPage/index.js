import React, { Component } from "react";
import SectionedContainer from "CommonContainers/sectionedContainer";
import DivColumn from "CommonComponents/divColumn";
import DivRow from "CommonComponents/divRow";
import styles from "./product_listing_page.module.scss";
import FilterCapsule from "./filterCapsule";
import DropdownCapsule from "./dropdownCapsule";
import ProductGridItem from "./productGridItem";
import SideBarFilter from "./sideBarFilter";
import queryString from "query-string";
import { getExhibitionListAction } from "Core/modules/homepage/homePageActions";
import InitialPageLoader from "CommonContainers/initialPageLoader";
import map from "lodash/map";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getProductListAction } from "Core/modules/productlist/productListActions";
class ProductListingPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const parsed = queryString.parse(this.props.location.search);
    const {
      productListReducer: { productList },
      getProductListAction
    } = this.props;
    return (
      <SectionedContainer sideBarContainer={<SideBarFilter />}>
        <DivColumn className={styles.product_listing_container}>
          <DivRow className={styles.filter_view_container}>
            <FilterCapsule />
            <DropdownCapsule />
          </DivRow>
          <InitialPageLoader
            initialPageApi={() => getProductListAction(parsed.id)}
          >
            <DivRow className={styles.product_list_container}>

              {map(productList, (product, index) => {
                return <ProductGridItem product={product} key={index} />;
              })}
            </DivRow>

          </InitialPageLoader>
        </DivColumn>
      </SectionedContainer>
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
    getProductListAction: bindActionCreators(getProductListAction, dispatch)
  };
};

export default connect(mapStateToProps, mapDispathToProps)(ProductListingPage);
