import React, { Component } from 'react';
import {
  Image,
  ListView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import styles from './style';
import MoreWeekIcon from '../../images/icons/more.png';

export default class Lecture extends Component {
  static navigationOptions = {
    title: '课程',
  }

  constructor(props) {
    super(props);
    this._data = [
      {
        classNo: 1,
        classTime: '8:00',
        weekData: {
          day1: '数学',
          day2: '语文',
          day3: '数学',
          day4: '英语',
          day5: '数学'
        }
      },
      {
        classNo: 2,
        classTime: '8:50',
        weekData: {
          day1: '语文',
          day2: '语文',
          day3: '语文',
          day4: '语文',
          day5: '语文'
        }
      },
      {
        classNo: 3,
        classTime: '9:55',
        weekData: {
          day1: '英语',
          day2: '英语',
          day3: '美术',
          day4: '数学',
          day5: '英语'
        }
      },
      {
        classNo: 4,
        classTime: '10:45',
        weekData: {
          day1: '自然',
          day2: '劳动',
          day3: '自然',
          day4: '劳动',
          day5: '自然'
        }
      },
      {
        classNo: 5,
        classTime: '14:00',
        weekData: {
          day1: '美术',
          day2: '数学',
          day3: '数学',
          day4: '美术',
          day5: '美术'
        }
      },
      {
        classNo: 6,
        classTime: '14:50',
        weekData: {
          day1: '音乐',
          day2: '数学',
          day3: '英语',
          day4: '音乐',
          day5: '音乐'
        }
      },
      {
        classNo: 7,
        classTime: '15:55',
        weekData: {
          day1: '体育',
          day2: '自然',
          day3: '音乐',
          day4: '体育',
          day5: '自习'
        }
      },
      {
        classNo: 8,
        classTime: '16:45',
        weekData: {
          day1: '自习',
          day2: '自习',
          day3: '劳动',
          day4: '自习',
          day5: '自习'
        }
      }
    ];

    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(this._data),
    };

  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.dateHeaderWrapper}>
          <View style={styles.dateHeaderLeftWrapper}>
            <Text style={styles.dateText}>2017/03</Text>
          </View>
          <View style={styles.dateHeaderCenterWrapper}>
            <Text style={styles.weekText}>第5周</Text>
            <TouchableOpacity
              style={styles.moreWeekWrapper}
            >
              <Image
                style={styles.moreIcon}
                source={MoreWeekIcon}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.dateHeaderRightWrapper}>
            <Text> </Text>
          </View>
        </View>
        <View style={styles.weekHeaderWrapper}>
          <View style={styles.column0}></View>
          <View style={styles.column}><Text>一</Text></View>
          <View style={styles.column}><Text>二</Text></View>
          <View style={styles.column}><Text>三</Text></View>
          <View style={styles.column}><Text>四</Text></View>
          <View style={styles.column}><Text>五</Text></View>
        </View>
        <ScrollView>
          <ListView
            dataSource={this.state.dataSource}
            renderRow={this._renderRow.bind(this)}
          />
        </ScrollView>
        <View style={styles.footerWrapper}>
          <Text style={styles.footerTitle}>备注</Text>
          <Text style={styles.footerContent}>本周六有亲子活动，请于早上8:00到校参加，请参加，别迟到！</Text>
        </View>
      </View>
    );
  }

  _renderRow(rowData: string, sectionID: number, rowID: number,
    highlightRow: (sectionID: number, rowID: number) => void) {
    return (
      <View style={styles.rowWrapper}>
        <View style={styles.cellColumn0}>
          <View>
            <Text style={styles.rowHeaderText1}>{rowData.classTime}</Text>
            <View style={styles.cellInnerWrapper}>
              <Text style={styles.rowHeaderText2}>{rowData.classNo}</Text>
            </View>
          </View>
        </View>
        <View style={styles.cellColumn}>
          <View style={styles.cellInnerWrapper}>
            <Text style={[styles.cellText, styles.mathText]}>{rowData.weekData.day1}</Text>
          </View>
        </View>
        <View style={styles.cellColumn}>
          <View style={styles.cellInnerWrapper}>
            <Text style={[styles.cellText, styles.chineseText]}>{rowData.weekData.day2}</Text>
          </View>
        </View>
        <View style={styles.cellColumn}>
          <View style={styles.cellInnerWrapper}>
            <Text style={[styles.cellText, styles.mathText]}>{rowData.weekData.day3}</Text>
          </View>
        </View>
        <View style={styles.cellColumn}>
          <View style={styles.cellInnerWrapper}>
            <Text style={[styles.cellText, styles.englishText]}>{rowData.weekData.day4}</Text>
          </View>
        </View>
        <View style={styles.cellColumn}>
          <View style={styles.cellInnerWrapper}>
            <Text style={[styles.cellText, styles.mathText]}>{rowData.weekData.day5}</Text>
          </View>
        </View>
      </View>
    );
  }
}
