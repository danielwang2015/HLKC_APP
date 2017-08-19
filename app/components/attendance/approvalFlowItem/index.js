import React, { Component } from 'react';
import {
  Image,
  Text,
  View,
} from 'react-native';

import { styles } from './style';
import PassedIcon from '../../../images/attendance/passedIcon.png';
import DeniedIcon from '../../../images/attendance/deniedIcon.png';
import ChildLogo from '../../../screens/Images/child head.png';

class ApprovalFlowItem extends Component {
  render() {
    return (
      <View style={styles.approvalDetailFlowDetailWrapper}>
        <View style={styles.approvalDetailFlowIconWrapper}>
          <Image
            source={PassedIcon}
            style={styles.approvalDetailFlowIcon}
          />
        </View>
        <View style={styles.approvalDetailFlowContentWrapper}>
          <Image
            source={ChildLogo}
            style={styles.approvalDetailFlowContentHeadLogo}
          />
          <View style={styles.approvalDetailFlowContent}>
            <Text style={styles.approvalDetailFlowContentName}>王小丫</Text>
            <Text style={styles.approvalDetailFlowContentStatus}>发起申请</Text>
          </View>
          <Text style={styles.approvalDetailFlowContentTime}>2017.03.15</Text>
        </View>
      </View>      
    );
  }
}

export default ApprovalFlowItem;
