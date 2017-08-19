import React, { Component } from 'react';
import {
  Image,
  ListView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { styles, innerStyles } from './style';
import ApprovalItem from '../../components/attendance/approvalItem';

class LeaveApproval extends Component {
  static navigationOptions = {
    title: '我的审批',
    headerBackTitle: null,
  };

  constructor(props) {
    super(props);

    this.statusColors = new Map();
    this.statusColors.set('审批通过', '#64C5A3');
    this.statusColors.set('审批未通过', '#C58064');

    this._viewDetail = this._viewDetail.bind(this);
  }

  render() {
    const { approvalList } = this.props;
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    // const dataSource = ds.cloneWithRows(approvalList);
    const data = [{
      id: 1,
      name: '王小丫的请假单',
      type: '病假',
      status: '审批通过',
      applyTime: '2017/03/02'
    }, {
      id: 2,
      name: '王小丫的请假单',
      type: '病假',
      status: '审批未通过',
      applyTime: '2017/03/10'
    }];
    const dataSource = ds.cloneWithRows(data);

    return (
      <View sytle={styles.container}>
        <ListView
          dataSource={dataSource}
          renderRow={this._renderRow.bind(this)}
          renderSeparator={this._renderSeparator.bind(this)}
          enableEmptySections
          style={styles.approvalListWrapper}
        />
      </View>
    );
  }

  _renderRow(rowData, sectionID, rowID, highlightRow) {
    return (
      <ApprovalItem rowData={rowData} onItemClick={this._viewDetail}/>
    );
  }

  _renderSeparator(sectionID, rowID) {
    return (
      <View key={rowID} style={styles.approvalItemSeparator} />
    );
  }

  _viewDetail(id) {
    const { navigation } = this.props;
    navigation.navigate('LeaveApprovalDetail');
  }
}

export default LeaveApproval;
