import React, { Component } from 'react';
import {
  TouchableOpacity,
  View,
} from 'react-native';

import {
  COLOR_RADIO_BORDER,
  COLOR_RADIO_BG,
} from '../../styles/common';

export default class RadioButton extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <View style={[{
        height: 24,
        width: 24,
        borderRadius: 12,
        borderWidth: 2,
        borderColor: COLOR_RADIO_BORDER,
        alignItems: 'center',
        justifyContent: 'center',
      }, this.props.style]}>
          <View style={{
            height: 16,
            width: 16,
            borderRadius: 8,
            backgroundColor: this.props.selected ? COLOR_RADIO_BG : 'white',
          }}/>
      </View>
    );
  }
}
