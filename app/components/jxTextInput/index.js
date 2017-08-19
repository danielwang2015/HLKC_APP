import React, { Component } from 'react';
import {
  Text,
  TextInput,
  View,
} from 'react-native';

import styles from './style';

export default class JxTextInput extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      inputTextStyle,
      inputWrapperStyle,
      keyboardType,
      label,
      labelStyle,
      multiline,
      numberOfLines,
      placeholder
    } = this.props;

    return (
      <View style={[styles.textInputWrapper, inputWrapperStyle]}>
        <Text style={[styles.label, labelStyle]}>{label}</Text>
        <TextInput
          keyboardType={keyboardType}
          placeholder={placeholder}
          style={[styles.textInput, inputTextStyle]}
          multiline={multiline}
          numberOfLines={numberOfLines}
        />
      </View>
    );
  }
}
