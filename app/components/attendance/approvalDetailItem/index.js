import React, { Component } from 'react';
import {
  Text,
  View,
} from 'react-native';

import { styles } from './style';

class ApprovalDetailItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { itemLabel, itemContent } = this.props;
    return (
        <View style={styles.approvalDetailItemWrapper}>
          <Text style={styles.approvalDetailItemLabel}>{itemLabel}</Text>
          <Text style={styles.approvalDetailItemContent}>{itemContent}</Text>
        </View>
    );
  }
}

export default ApprovalDetailItem;
