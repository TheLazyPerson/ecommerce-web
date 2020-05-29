import React, { Component } from "react";
import PropTypes from "prop-types";
import Masonry from "react-masonry-component";
import DivColumn from "CommonComponents/divColumn";
import DivRow from "CommonComponents/divRow";
import exhibitionImage from "Images/exhibition-item-3.png";
import styles from "./masonry_grid_container.module.scss";
import map from "lodash/map";
import size from "lodash/size";
import navigatorHoc from "Hoc/navigatorHoc";
import translatorHoc from "Hoc/translatorHoc";
import isEmpty from "lodash/isEmpty";
import CapsuleText from "CommonComponents/capsuleText";

class MasonryGridContainer extends Component {
  imageStates = [2, 1, 2, 1, 2, 1, 2];

  onClickExhibitionItem = (id) => {
    const { navigateTo } = this.props;
    navigateTo("plp", {
      id,
    });
  };

  onClickShowMore = () => {
    const { navigateTo } = this.props;
    navigateTo("trending-exhibitions");
  };

  render() {
    const {
      exhibitionList,
      showMoreTitle,
      translate,
      isRTL,
      languageReducer: { languageCode },
    } = this.props;

    return (
      <DivColumn className={styles.masonary_container}>
        <Masonry
          options={{
            columnWidth: 39,
          }}
          className={styles.masonary} // default ''
          enableResizableChildren={true}
        >
          {map(exhibitionList, (exhibition, index) => {
            let typeIndex = index;

            if (index > 6) {
              typeIndex = index % 7;
            }

            if (showMoreTitle && index > 6) {
              return null;
            } else if (showMoreTitle && index == 6) {
              return (
                <DivColumn
                  className={`${styles.grid_load_more_container} ${
                    styles[`type${this.imageStates[typeIndex]}`]
                  }`}
                  onClick={() => this.onClickShowMore()}
                >
                  <DivColumn
                    verticalCenter
                    horizontalCenter
                    fillParent
                    className={styles.content_container}
                  >
                    <div className={styles.title}>
                      {translate("masonry_grid.show_more")}
                    </div>
                  </DivColumn>
                </DivColumn>
              );
            }

            return (
              <DivColumn
                className={`${isRTL ? styles.rtl : ""} ${
                  styles.grid_image_container
                } ${styles[`type${this.imageStates[typeIndex]}`]}`}
                style={{
                  backgroundImage: `url(${exhibition.base_image})`,
                }}
                onClick={() => this.onClickExhibitionItem(exhibition.id)}
              >
                <DivColumn fillParent className={styles.content_container}>
                  <div className={styles.title}>
                    {exhibition.translations[languageCode].title}
                  </div>
                  <div className={styles.description}>
                    {exhibition.translations[languageCode].description}
                  </div>
                  <div className={styles.remaining}>
                    ONLY{" "}
                    {!isEmpty(exhibition.days_left) ? exhibition.days_left : ""}{" "}
                    DAYS LEFT
                  </div>

                  <DivRow className={styles.capsule_container}>
                    {map(exhibition.tags, (tag, index) =>
                      index === 0 ? (
                        <CapsuleText
                          className={styles.capsule}
                          noMargin
                          text={tag}
                        />
                      ) : (
                        <CapsuleText className={styles.capsule} text={tag} />
                      )
                    )}
                  </DivRow>
                </DivColumn>
              </DivColumn>
            );
          })}
        </Masonry>
      </DivColumn>
    );
  }
}
// https://source.unsplash.com/500x500/?product
MasonryGridContainer.propTypes = {};

export default translatorHoc(navigatorHoc(MasonryGridContainer));
