import React, { Component } from "react";
import FullWidthContainer from "CommonContainers/fullwidthContainer";
import DivRow from "CommonComponents/divRow";
import DivColumn from "CommonComponents/divColumn";
import styles from "./search_page.module.scss";
import ExhibitionItemComponent from "./exhibitionItemComponent";
import ProductItemComponent from "./productItemComponent";
import InitialPageLoader from "CommonContainers/initialPageLoader";
import { searchAction } from "Core/modules/search/searchActions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import map from "lodash/map";
import isEmpty from 'lodash/isEmpty';
import queryString from "query-string";
class SearchPage extends Component {

  constructor(props) {
    super(props);
    this.initialLoaderRef = React.createRef()
  }


  getSlugBasedOntype = (searchType) => {
    switch(searchType) {
      case 'products':
        return 'p';
      case 'exhibitions':
        return 'e';
      default:
        return 'all'
    }
  }

   componentWillReceiveProps(nextProps) {
     if (this.props.location !== nextProps.location) {
      setTimeout(()=>{
        this.initialLoaderRef.current.reload();
      }, 200)
     }
   }

  render() {
    const {
      searchReducer: { productList, exhibitionList },
      searchAction,
      match,
      location,
    } = this.props;
    const { searchType } = match.params;
    const { query } = queryString.parse(location.search);

    return (
      <FullWidthContainer>
        <DivColumn fillParent className={styles.search_container}>
          <div className={styles.page_header}>Search: the craft show</div>
          <InitialPageLoader 
            ref={this.initialLoaderRef}
            initialPageApi={() => searchAction(this.getSlugBasedOntype(searchType), query)}
            isEmpty={(isEmpty(productList) && isEmpty(exhibitionList))}
            emptyScreenMessage="Can't find any exhibition or product"
          >
            
            <DivColumn fillParent className={styles.search_list_container}>

              {!isEmpty(exhibitionList) && (
                <DivColumn className={styles.section}>
                  <div className={styles.section_header}>EXHIBITIONS</div>
                  <DivRow className={styles.section_list}>
                    {map(exhibitionList, exhibition => (
                      <ExhibitionItemComponent 
                        exhibition={exhibition}
                      />
                    ))}
                  </DivRow>
                </DivColumn>
              )}

              {!isEmpty(productList) && (
                <DivColumn className={styles.section}>
                  <div className={styles.section_header}>PRODUCTS</div>
                  <DivRow className={styles.section_list}>
                    {map(productList, product => (
                      <ProductItemComponent />
                    ))}
                  </DivRow>
                </DivColumn>
              )}
            </DivColumn>
          </InitialPageLoader>
        </DivColumn>
      </FullWidthContainer>
    );
  }
}

const mapStateToProps = state => {
  return {
    searchReducer: state.searchReducer
  };
};

const mapDispathToProps = dispatch => {
  return {
    searchAction: bindActionCreators(searchAction, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispathToProps
)(SearchPage);
