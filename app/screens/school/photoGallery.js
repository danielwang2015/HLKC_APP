import React, { Component } from 'react';
import {
  Image,
  ListView,
  Text,
  View,
} from 'react-native';

import styles from './style';
import Photo from '../../images/school/gallery/photo.png';

class PhotoGallery extends Component {
  constructor(props) {
    super(props);
    this._data = [
      { imgSrc: Photo },
      { imgSrc: Photo },
      { imgSrc: Photo },
      { imgSrc: Photo },
      { imgSrc: Photo },
    ];
  }

  render() {
    const { title } = this.props;
    const photoList = this._data.map((d, i) => {
      return (
        <Image key={i} style={styles.galleryImage} source={d.imgSrc} />
      );
    });

    return (
      <View style={styles.itemWrapper}>
        <View style={styles.titleWrapper}>
          <View style={styles.dashLine} />
          <Text style={styles.titleText}>{title}</Text>
          <View style={styles.dashLine} />
        </View>
        <View style={styles.galleryWrapper}>
          {photoList}
        </View>
      </View>
    );
  }
}

export default PhotoGallery;
