import React, { Component } from 'react';
import styles from './exhibition_item_container.module.scss';
import DivColumn from 'CommonComponents/divColumn';
import exhibitionItem1 from 'Images/exhibition-item-1.jpg';
import DivRow from 'CommonComponents/divRow';
import CapsuleText from 'CommonComponents/capsuleText';
import ExhibitionDetailComponent from 'CommonComponents/exhibitionDetailComponent';
import navigatorHoc from 'Hoc/navigatorHoc';

class ExhibitionItemContainer extends Component {
  
  onClickViewExhibition = () => {
    const {navigateTo} = this.props;

    navigateTo('plp');
  }

  render() {
     return(
      <DivRow className={styles.exhibition_item_container}>
        <img src={exhibitionItem1} className={styles.exhibition_image}/>
        <ExhibitionDetailComponent 
          title="Exibition 1"
          name="The Craft Show"
          tags={["watches","craft","crafted"]}
          description="The Craft Show will display products like Handcrafted Watches, Products, Farsis, Palazzos,  Culottes and Products.With love, and much more."
          className={styles.details_container}
        >
          <div className={styles.view_exhibition_button} onClick={this.onClickViewExhibition}>View Exibition</div>
        </ExhibitionDetailComponent>
      </DivRow>
     )
  }
}


export default navigatorHoc(ExhibitionItemContainer);