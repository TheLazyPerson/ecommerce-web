import React, { Component } from 'react';
import FullWidthContainer from 'CommonContainers/fullwidthContainer';
import DivRow from 'CommonComponents/divRow';
import DivColumn from 'CommonComponents/divColumn';
import styles from './product_details_page.module.scss';
import exhibitionImage1 from 'Images/exhibition-item-1.jpg';
import exhibitionImage2 from 'Images/exhibition-item-2.jpg';
import exhibitionImage3 from 'Images/exhibition-item-3.png';
import ExhibitionDetailComponent from 'CommonComponents/exhibitionDetailComponent';
import QuantityComponent from 'CommonComponents/quantityComponent';
import heartFilledIcon from 'Icons/heart-filled-icon.svg';

export default class ProductDetailsPage extends Component {
  render() {
    return (
      <FullWidthContainer>
        <DivColumn className={styles.product_details_container}>

         <DivRow className={styles.product_content_container}>

           <DivColumn className={styles.left_content_container}>
           <DivRow verticalCenter>
            <div className={styles.back_button}>{`< Home`}</div>
          </DivRow>
            <img src={exhibitionImage3} className={styles.product_image} />
            <DivRow className={styles.product_image_list}>
              <img src={exhibitionImage1} className={styles.small_product_image} />
              <img src={exhibitionImage2} className={styles.small_product_image} />
            </DivRow>
           </DivColumn>

           <DivColumn verticalCenter className={styles.right_content_container}>
            <ExhibitionDetailComponent
              title="Exibition 1"
              name="The Craft Show"
              tags={["watches","craft","crafted"]}
              price="599.99"
              description="The Craft Show will display products like Handcrafted Watches, Products, Farsis, Palazzos,  Culottes and Products.With love, and much more."
            >
              <QuantityComponent />

              <DivRow className={styles.action_button_container}>
                <DivRow verticalCenter horizontalCenter className={styles.add_to_bag_button}>
                  <img />
                  <div className={styles.button_text}>Add to Bag</div>
                </DivRow>
                <DivRow verticalCenter horizontalCenter className={styles.wishlist_button}>
                  <img src={heartFilledIcon} className={styles.button_icon} />
                  <div className={styles.button_text}>Wishlist</div>
                </DivRow>
              </DivRow>

            </ExhibitionDetailComponent>
           </DivColumn>

         </DivRow>
        </DivColumn>
      </FullWidthContainer>
    );
  }
}
