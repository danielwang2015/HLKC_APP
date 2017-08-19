import React, { Component } from 'react';
import {
  Image,
  ListView,
  Text,
  View,
} from 'react-native';

import styles from './style';
import ChildLogo from '../../images/child_logo.jpeg';

class Archive extends Component {
  static navigationOptions = {
    title: '档案',
  };

  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this._data = [
      {label: '姓名', 'value': '王小丫'},
      {label: '性别', 'value': '女'},
      {label: '年纪', 'value': '11岁'},
      {label: '学校', 'value': '瑞安市新纪元实验学校'},
      {label: '联系方式', 'value': '13733298898'},
      {label: '家庭地址', 'value': '瑞安市玉海街道'},
      {label: '籍贯', 'value': '温州'},
      {label: '民族', 'value': '汉族'},
    ]
    this.state = {
      dataSource: ds.cloneWithRows(this._data),
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.childLogoWrapper}>
          <View style={styles.childLogoHolo}>
            <Image
              style={styles.childLogo}
              source={ChildLogo}
            />
          </View>
        </View>
        <ListView
          style={styles.listViewWrapper}
          dataSource={this.state.dataSource}
          renderRow={this._renderRow.bind(this)}
        />
        <View style={styles.footer} />
      </View>
    );
  }

  _renderRow(rowData: string, sectionID: number, rowID: number,
    highlightRow: (sectionID: number, rowID: number) => void) {
    return (
      <View style={styles.listItemWrapper}>
        <Text style={styles.listItemLabel}>{rowData.label}</Text>
        <Text style={styles.listItemText}>{rowData.value}</Text>
      </View>
    );
  }
}

export default Archive;
