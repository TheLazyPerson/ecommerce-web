import React, { Component } from 'react';
import styles from './sectioned_header.module.scss';
import DivRow from 'CommonComponents/divRow';
import DivColumn from 'CommonComponents/divColumn';
import searchIcon from 'Icons/search-icon-black.svg';
import hamburgerMenuIcon from 'Icons/hamburger-menu-icon-black.svg';
import bagIcon from 'Icons/cart-bag-icon-black.svg';
import bookmarkIcon from 'Icons/bookmark-icon-black.svg';
import arrowDownIcon from 'Icons/arrow-down-icon-black.svg';
import navigatorHoc from 'Hoc/navigatorHoc';
import profileIconBlack from 'Icons/profile-icon-black.svg';
import HorizontalBorder from 'CommonComponents/horizontalBorder';
import { searchTypes } from 'Constants/searchConstants';
import { connect } from 'react-redux';

class SectionedHeader extends Component {

  clickedOnSearchItem = false;

  state = {
    searchText: '',
    showSearchResult: false,
  };

  onClickProfile = () => {
    const { navigateTo } = this.props;
    navigateTo('profile');
  }

  onClickWishlist = () => {
    const { navigateTo } = this.props;
    navigateTo('wishlist');
  }

  onClickBag = () => {
    const { navigateTo } = this.props;
    navigateTo('checkout');
  }

  /* --------------------------------------------------Search Input events------------------------------------------- */

  onSearchItemSelected = (type) => {
    this.clickedOnSearchItem = true;
    this.navigateToSearchPage(type);
  }

  onSubmitSearch = () => {
    this.navigateToSearchPage(searchTypes.ALL);
  }

  navigateToSearchPage = (searchType) => {
    const { navigateTo } = this.props;
    const { searchText } = this.state;

    this.setState({
      showSearchResult: false
    });

    navigateTo('search', {
      searchType,
      searchText,
    });
  }

  onChangeSearchText = (event) => {
    const text = event.target.value;

    this.setState({
      searchText: text,
    });
  }

  showSearchBar = () => {
    const { showSearchResult } = this.state;

    if(!showSearchResult) {
      this.setState({showSearchResult: true});
    }
  }

  hideSearchBar = () => {
    const { showSearchResult } = this.state;
    setTimeout(()=>{
      if (showSearchResult && !this.clickedOnSearchItem ) {
        this.setState({
          showSearchResult: false,
        });
      }
    }, 300);
  }

  render() {
    const { searchText, showSearchResult } = this.state;
    const { isUserSignedIn } = this.props;
    
     return (
       <DivRow className={styles.header_container}>
         <div className={styles.search_container}>
         <DivRow className={`${styles.search_wrapper} ${(searchText && showSearchResult) ? styles.search_wrapper_expanded : ''}`}>
            <form className={styles.search_form} onSubmit={this.onSubmitSearch}>
              <input
                type="text"
                name="firstname"
                placeholder="Search"
                className={styles.search_input}
                onChange={this.onChangeSearchText}
                onFocus={this.showSearchBar}
                onBlur={this.hideSearchBar}
                autoComplete="off"
              />
            </form>
            <img src={searchIcon} className={styles.search_icon}/>
           </DivRow>

           <DivColumn className={`${styles.search_result_container} ${(searchText && showSearchResult) ? '' : styles.hide_search_bar }`}>
              <div className={styles.filling_gap}></div>
              <DivRow className={styles.search_item} onClick={()=>this.onSearchItemSelected(searchTypes.EXHIBITIONS)}>
                <DivColumn>
                  <div className={styles.title}>Search Exhibitions</div>
                  <div className={styles.description}>{searchText}</div>
                </DivColumn>
                <img /> {/*Icon*/}
              </DivRow>
              
              <HorizontalBorder className={styles.divider} />

              <DivRow className={styles.search_item} onClick={()=>this.onSearchItemSelected(searchTypes.PRODUCTS)}>
                <DivColumn>
                  <div className={styles.title}>Search Products</div>
                  <div className={styles.description}>{searchText}</div>
                </DivColumn>
                <img /> {/*Icon*/}
              </DivRow>

           </DivColumn>

         </div>

         <DivRow verticalCenter>
           <DivRow className={styles.header_item_container} verticalCenter onClick={this.onClickBag}>
             <img src={bagIcon} className={styles.header_icon} />
             <DivRow verticalCenter horizontalCenter className={styles.bag_count}>0</DivRow>
           </DivRow>
           <img className={`${styles.header_icon} ${styles.header_item_container}`} src={bookmarkIcon} onClick={this.onClickWishlist}/>
           {
             isUserSignedIn ? (
              <div
                style={{height:'unset'}}
                className={`${styles.header_icon} ${styles.header_item_container}`}
                onClick={this.onClickProfile}
              >
                <img className={styles.profile_pic} src={profileIconBlack} />
                <img src={arrowDownIcon} className={styles.arrow_down_icon} />
              </div>
             ): (
              <a className={`${styles.sigin_link} ${styles.header_item_container}`} href='/signin'>Signin</a>
             )
           }
           <img src={hamburgerMenuIcon} className={`${styles.hamburger_icon} ${styles.header_item_container}`} />
         </DivRow>
       </DivRow>
    );
  }
}

const mapStateToProps = state => {

  return {
    isUserSignedIn: state.signInReducer.isUserSignedIn
  }
}

export default connect(mapStateToProps, null)(navigatorHoc(SectionedHeader));