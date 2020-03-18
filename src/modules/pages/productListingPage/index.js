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
import InitialPageLoader from "CommonContainers/initialPageLoader";
import map from "lodash/map";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getProductListAction } from "Core/modules/productlist/productListActions";

class ProductListingPage extends Component {
  constructor(props) {
    super(props);
    this.productListRef = React.createRef();

    this.state = {
      sort: '',
    }
  }

  onChange = (data) => {
    this.setState({
      sort: data.value
    });
    this.productListRef.current.makePageApiCall();
  }

  render() {
    const parsed = queryString.parse(this.props.location.search);
    const { sort } = this.state;
    const {
      productListReducer: { productList },
      getProductListAction
    } = this.props;

    const parsedBody = {
      sort,
    };

    return (
      <SectionedContainer sideBarContainer={<SideBarFilter />}>
        <DivColumn className={styles.product_listing_container}>
          <DivRow className={styles.filter_view_container}>
            <FilterCapsule />
            <DropdownCapsule
              onChange={this.onChange}
            />
          </DivRow>
          <DivRow fillParent className={styles.product_list_container}>
            <InitialPageLoader
              ref={this.productListRef}
              initialPageApi={() => getProductListAction(parsed.id, parsedBody)}
            >
              <DivRow fillParent className={styles.product_list}>
                {map(productList.products, (product, index) => {
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
