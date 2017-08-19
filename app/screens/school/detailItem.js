import React, { Component } from 'react';
import {
  Text,
  View,
} from 'react-native';

import styles from './style';

class DetailItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { title, content } = this.props;
    return (
      <View style={styles.itemWrapper}>
        <View style={styles.titleWrapper}>
          <View style={styles.dashLine} />
          <Text style={styles.titleText}>{title}</Text>
          <View style={styles.dashLine} />
        </View>
        <View style={styles.contentWrapper}>
          <Text style={styles.contentText}>{content}</Text>
        </View>
      </View>
    );
  }
}

export default DetailItem;
