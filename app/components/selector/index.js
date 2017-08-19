import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import styles from './style';

export default class Selector extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { wrapperStyle, label } = this.props;
    return (
      <View style={[styles.selectorWrapper, wrapperStyle]}>
        <Text style={styles.selectorText}>{label}</Text>
        <TouchableOpacity style={styles.selectorRight}>
          <Text style={styles.selectorText}>请选择</Text>
          <Icon
            name="chevron-thin-right"
            size={20}
            color="#5E5A59"
            style={styles.selectorIcon}
          />
        </TouchableOpacity>
      </View>
    );
  }
}
