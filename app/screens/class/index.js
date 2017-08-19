import React, { Component } from 'react';
import {
  Text,
  View,
} from 'react-native';

import styles from './style';

class Lecture extends Component {
  static navigationOptions = {
    title: '课程',
  }

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <Text>Lecture</Text>
      </View>
    );
  }
}
