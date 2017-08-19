import React, { Component } from 'react';
import {
  Image,
  ScrollView,
  Text,
  View,
} from 'react-native';

import { styles, innerStyles } from './style';
import ChildLogo from '../Images/child head.png';
import PassedImg from '../../images/attendance/passed.png';
import DeniedImg from '../../images/attendance/denied.png';
import ApprovalDetailHeader from '../../components/attendance/approvalDetailHeader';
import ApprovalDetailItem from '../../components/attendance/approvalDetailItem';
import ApprovalFlowItem from '../../components/attendance/approvalFlowItem';

class ApprovalDetail extends Component {
  static navigationOptions = {
    title: '详情'
  }

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <ApprovalDetailHeader
          name={'王小丫'}
          reason={'病假'}
          status={'denied'}
        />
        <ApprovalDetailItem
          itemLabel={'请假时间'}
          itemContent={'2017-03-15'}
        />
        <ApprovalDetailItem
          itemLabel={'请假天数'}
          itemContent={'1天'}
        />
        <ApprovalDetailItem
          itemLabel={'请假事由'}
          itemContent={'小丫生病了'}
        />
        <ApprovalDetailItem
          itemLabel={'审批流程'}
        />
        <View style={styles.approvalDetailFlowWrapper}>
          <View style={styles.approvalDetailFlowLine} />
          <ScrollView style={styles.approvalDetailFlowInnerWrapper}>
            <ApprovalFlowItem />
            <ApprovalFlowItem />
          </ScrollView>
        </View>
      </View>
    );
  }
}

export default ApprovalDetail;
