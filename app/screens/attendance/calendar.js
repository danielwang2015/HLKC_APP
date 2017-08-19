import React, { Component } from 'react';
import {
  Image,
  Text,
  View,
} from 'react-native';

import { Calendar, LocaleConfig } from 'react-native-calendars';

import { styles } from './style';
// import ChildLogo from '../../images/child_logo.jpeg';
import ChildLogo from '../Images/child head.png';

class AttendanceCalendar extends Component {
  static navigationOptions = {
    title: '月历详情',
  }

  constructor(props) {
    super(props);
    this.state = {};

    LocaleConfig.locales['zh-cn'] = {
      monthNames: ['一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月'],
      monthNamesShort:  ['一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月'],
      dayNames: ['星期天','星期一','星期二','星期三','星期四','星期五','星期六'],
      dayNamesShort: ['日','一','二','三','四','五','六']
    };

    LocaleConfig.defaultLocale = 'zh-cn';

    this._onDayPress = this._onDayPress.bind(this);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.calendarProfileWrapper}>
          <View style={styles.childLogoWrapper}>
            <View style={styles.childLogoHolo}>
              <Image
                style={styles.childLogo}
                source={ChildLogo}
              />
            </View>
            <View>
              <Text style={styles.childName}>王小丫</Text>
            </View>
          </View>
        </View>
        <View style={styles.calendarWrapper}>
          <Calendar
            onDayPress={this._onDayPress}
            markedDates={{[this.state.selected]: {selected: true}}}
          />
        </View>
        <View style={styles.calendarResultWrapper}>
          <View style={[styles.calendarResultItemWrapper, {borderBottomColor: '#F0F0F0', borderBottomWidth: 1}]}>
            <View style={styles.calendarResultItemTimeWrapper}>
              <Text style={styles.calendarResultItemTimeText}>07:25</Text>
            </View>
            <View style={styles.calendarResultItemContentWrapper}>
              <Text style={styles.calendarResultItemLabel}>上学时间</Text>
              <Text style={styles.calendarResultItemResult}>正常</Text>
            </View>
          </View>
          <View style={styles.calendarResultItemWrapper}>
            <View style={styles.calendarResultItemTimeWrapper}>
              <Text style={styles.calendarResultItemTimeText}>17:30</Text>
            </View>
            <View style={styles.calendarResultItemContentWrapper}>
              <Text style={styles.calendarResultItemLabel}>放学时间</Text>
              <Text style={styles.calendarResultItemResult}>正常</Text>
            </View>
          </View>
        </View>
      </View>
    );
  }

  _onDayPress(day) {
    this.setState({
      selected: day.dateString
    });
  }
}

export default AttendanceCalendar;
