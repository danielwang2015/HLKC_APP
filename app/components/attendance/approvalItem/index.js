import React, { Component } from 'react';
import {
  Image,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { styles } from './style';
import ChildLogo from '../../../screens/Images/child head.png';

class ApprovalItem extends Component {
  constructor(props) {
    super(props);

    this.statusColors = new Map();
    this.statusColors.set('审批通过', '#64C5A3');
    this.statusColors.set('审批未通过', '#C58064');
    this._viewDetail = this.props.onItemClick;
  }

  render() {
    const { rowData } = this.props;
    const statusColor = this.statusColors.get(rowData.status);

    return (
      <TouchableOpacity
        onPress={() => this._viewDetail(rowData.id)}
        style={styles.approvalItemWrapper}
      >
        <Image
          style={styles.approvalItemLogo}
          source={ChildLogo}
        />
        <View style={styles.approvalItemContent}>
          <Text style={styles.approvalNameText}>{rowData.name}</Text>
          <Text style={styles.approvalTypeText}>{`请假类型 ${rowData.type}`}</Text>
          <Text style={[styles.approvalStatusText, {color: statusColor}]}>{rowData.status}</Text>
        </View>
        <Text style={styles.approvalTimeText}>{rowData.applyTime}</Text>
      </TouchableOpacity>
    );
  }
}

export default ApprovalItem;
