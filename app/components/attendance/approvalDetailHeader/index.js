import React, { Component } from 'react';
import {
  Image,
  Text,
  View,
} from 'react-native';

import { styles } from './style';
import ChildLogo from '../../../screens/Images/child head.png';
import PassedImg from '../../../images/attendance/passed.png';
import DeniedImg from '../../../images/attendance/denied.png';


class ApprovalDetailHeader extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { name, reason, status} = this.props;
    let statusImg;
    if (status === 'passed') {
      statusImg = PassedImg;
    } else if (status === 'denied') {
      statusImg = DeniedImg;
    }
    return (
      <View style={styles.approvalDetailHeaderWrapper}>
        <View style={styles.approvalDetailHeaderChildLogoWrapper}>
          <Image
            source={ChildLogo}
            style={styles.approvalDetailHeaderChildLogo}
          />
        </View>
        <View style={styles.approvalDetailHeaderTitle}>
          <Text style={styles.approvalNameText}>{name}</Text>
          <Text style={styles.approvalTypeText}>{reason}</Text>
        </View>
        <Image
          source={statusImg}
          style={styles.approvalDetailHeaderStatusIcon}
        />
      </View>
    );
  }
}

export default ApprovalDetailHeader;
