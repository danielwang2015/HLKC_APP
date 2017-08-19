import React, { Component } from 'react';
import {
  ListView,
  Text,
  View,
} from 'react-native';

import styles from './style';

class DetailItem2 extends Component {
  constructor(props) {
    super(props);
    this._data = [
      {
        publishTime: '2010年3月',
        content: '荣获9年制义务教育学校标准化建设I类学校'
      },
      {
        publishTime: '2010年4月',
        content: '荣获绿色学校、温州市办学水平一级学校，行为规范达标学校'
      },
    ];

    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(this._data),
    };
  }

  render() {
    const { title } = this.props;
    return (
      <View style={styles.itemWrapper}>
        <View style={styles.titleWrapper}>
          <View style={styles.dashLine} />
          <Text style={styles.titleText}>{title}</Text>
          <View style={styles.dashLine} />
        </View>
        <ListView
          style={styles.detailItem2ListWrapper}
          dataSource={this.state.dataSource}
          renderRow={this._renderRow.bind(this)}
        />
      </View>
    );
  }

  _renderRow(rowData: string, sectionID: number, rowID: number,
    highlightRow: (sectionID: number, rowID: number) => void) {
    return (
      <View style={styles.detailItem2RowWrapper}>
        <Text style={styles.detailItem2PublishTimeText}>{rowData.publishTime}</Text>
        <Text style={styles.detailItem2ContentText}>{rowData.content}</Text>
      </View>
    );
  }
}

export default DetailItem2;
