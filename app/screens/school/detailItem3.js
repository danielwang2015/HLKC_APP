import React, { Component } from 'react';
import {
  Image,
  ListView,
  Text,
  View,
} from 'react-native';

import styles from './style';
import TeacherYss from '../../images/school/teacher/yss.png';

class  DetailItem3 extends Component {
  constructor(props) {
    super(props);
    this._data = [
      {
        imgSrc: TeacherYss,
        name: '叶绍胜',
        content: '民革党员，北师大教管硕士研究生，现任上海新纪元教育集团副总裁，上海'
      }
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
          style={styles.detailItem3ListWrapper}
          dataSource={this.state.dataSource}
          renderRow={this._renderRow.bind(this)}
        />
      </View>
    );
  }

  _renderRow(rowData: string, sectionID: number, rowID: number,
    highlightRow: (sectionID: number, rowID: number) => void) {
    return (
      <View style={styles.detailItem3RowWrapper}>
        <Image
          style={styles.detailItem3Image}
          source={rowData.imgSrc}
        />
        <View>
          <Text style={styles.detailItem3NameText}>{rowData.name}</Text>
          <Text style={styles.detailItem3ContentText}>{rowData.content}</Text>
        </View>
      </View>
    );
  }
}

export default DetailItem3;
