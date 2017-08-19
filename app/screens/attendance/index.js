import React, { Component } from 'react';
import {
  Image,
  ListView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { styles } from './style';
// import ChildLogo from '../../images/child_logo.jpeg';
import ChildLogo from '../Images/child head.png';
import VacationIcon from '../../images/icons/vacation.png';
import ApplicationIcon from '../../images/icons/application.png';

class Attendance extends Component {
  static navigationOptions = {
    title: '考勤',
    headerBackTitle: null,
  };

  constructor(props) {
    super(props);
    this._data = [
      {
        category: '早退',
        id: 1,
        records: [
          {id: 1, detail: '2017年03月10（周五）13:59', comment: '早退3小时30分'},
          {id: 2, detail: '2017年03月10（周五）13:59', comment: '早退3小时30分'},
          {id: 3, detail: '2017年03月10（周五）13:59', comment: '早退3小时30分'},
        ]
      },
      {
        category: '迟到',
        id: 2,
        records: [
          {id: 4, detail: '2017年03月10（周五）13:59', comment: '迟到3小时30分'},
          {id: 5, detail: '2017年03月10（周五）13:59', comment: '迟到3小时30分'},
          {id: 6, detail: '2017年03月10（周五）13:59', comment: '迟到3小时30分'},
        ]
      },
      {
        category: '请假',
        id: 3,
        records: [
          {id: 7, detail: '2017年03月10（周五）13:59', comment: '请假3小时30分'},
          {id: 8, detail: '2017年03月10（周五）13:59', comment: '请假3小时30分'},
          {id: 9, detail: '2017年03月10（周五）13:59', comment: '请假3小时30分'},
        ]
      },
      {
        category: '旷课',
        id: 4,
        records: [
          {id: 10, detail: '2017年03月10（周五）13:59', comment: '旷课3小时30分'},
          {id: 11, detail: '2017年03月10（周五）13:59', comment: '旷课3小时30分'},
          {id: 12, detail: '2017年03月10（周五）13:59', comment: '旷课3小时30分'},
        ]
      },
    ];

    let dataBlob = {},
        sectionIDs = [],
        rowIDs = [],
        category,
        records,
        record;

    for (let i = 0; i < this._data.length; i++) {
      category = this._data[i];

      sectionIDs.push(category.id);
      dataBlob[category.id] = category.category;
      records = category.records;
      rowIDs[i] = [];
      for(let j = 0; j < records.length; j++) {
        record = records[j];
        rowIDs[i].push(record.id);
        dataBlob[category.id + ':' + record.id] = record;
      }
    }

    const getSectionData = (dataBlob, sectionID) => {
      return dataBlob[sectionID];
    }

    const getRowData = (dataBlob, sectionID, rowID) => {
      return dataBlob[sectionID + ':' + rowID];
    }

    const ds = new ListView.DataSource({
      getSectionData: getSectionData,
      getRowData: getRowData,
      rowHasChanged: (r1, r2) => r1 !== r2,
      sectionHeaderHasChanged: (s1, s2) => s1 !== s2
    });

    this.state = {
      dataSource: ds.cloneWithRowsAndSections(dataBlob, sectionIDs, rowIDs),
    };

    this._showCalendar = this._showCalendar.bind(this);
    this._applyApplication = this._applyApplication.bind(this);
    this._onMyArrpovalsPressed = this._onMyArrpovalsPressed.bind(this);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.mainWrapper}>
          <View style={styles.profileWrapper}>
            <View style={styles.childLogoWrapper}>
              <View style={styles.childLogoHolo}>
                <Image
                  style={styles.childLogo}
                  source={ChildLogo}
                />
              </View>
              <View>
                <Text style={styles.childName}>王小丫</Text>
                <Text style={styles.childGrade}>三年级15班</Text>
              </View>
            </View>
            <TouchableOpacity
              style={styles.calendarBtn}
              onPress={this._showCalendar}
            >
              <Text style={styles.calendarBtnLabel}>查看考勤月历</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.summaryWrapper}>
            <View style={styles.summaryResultWrapper}>
              <View style={styles.summaryLeft}>
                <View style={styles.summaryNameWrapper}>
                  <View style={[styles.indicateBar, styles.gradeA]} />
                  <Text style={styles.summaryText}>出勤天数</Text>
                </View>
                <View>
                  <Text style={styles.summaryText}>15天</Text>
                </View>
              </View>
              <View style={styles.summaryRight}>
                <View style={styles.summaryNameWrapper}>
                  <View style={[styles.indicateBar, styles.gradeA]} />
                  <Text style={styles.summaryText}>全勤天数</Text>
                </View>
                <View>
                  <Text style={styles.summaryText}>13天</Text>
                </View>
              </View>
            </View>
            <View style={styles.summaryResultWrapper}>
              <View style={styles.summaryLeft}>
                <View style={styles.summaryNameWrapper}>
                  <View style={[styles.indicateBar, styles.gradeB]} />
                  <Text style={styles.summaryText}>请假</Text>
                </View>
                <View>
                  <Text style={styles.summaryText}>0天</Text>
                </View>
              </View>
              <View style={styles.summaryRight}>
                <View style={styles.summaryNameWrapper}>
                  <View style={[styles.indicateBar, styles.gradeB]} />
                  <Text style={styles.summaryText}>迟到</Text>
                </View>
                <View>
                  <Text style={styles.summaryText}>1次</Text>
                </View>
              </View>
            </View>
            <View style={styles.summaryResultWrapper}>
              <View style={styles.summaryLeft}>
                <View style={styles.summaryNameWrapper}>
                  <View style={[styles.indicateBar, styles.gradeB]} />
                  <Text style={styles.summaryText}>早退</Text>
                </View>
                <View>
                  <Text style={styles.summaryText}>1次</Text>
                </View>
              </View>
              <View style={styles.summaryRight}>
                <View style={styles.summaryNameWrapper}>
                  <View style={[styles.indicateBar, styles.gradeB]} />
                  <Text style={styles.summaryText}>旷课</Text>
                </View>
                <View>
                  <Text style={styles.summaryText}>0次</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <ListView
          style={styles.listViewWrapper}
          dataSource={this.state.dataSource}
          renderRow={this._renderRow.bind(this)}
          renderSectionHeader={this._renderSectionHeader.bind(this)}
        />
        <View style={styles.footerWrapper}>
          <TouchableOpacity
            onPress={this._applyApplication}
            style={styles.iconWrapper}
          >
            <Image style={styles.icon} source={VacationIcon}/>
            <Text style={styles.iconText}>我要请假</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={this._onMyArrpovalsPressed}
            style={styles.iconWrapper}
          >
            <Image style={styles.icon} source={ApplicationIcon}/>
            <Text style={styles.iconText}>我的审批</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  _renderRow(rowData: string, sectionID: number, rowID: number) {
    return (
      <View style={styles.listItemWrapper}>
        <Text style={styles.listItemText}>{rowData.detail}</Text>
        <Text style={styles.listItemCommentText}>{rowData.comment}</Text>
      </View>
    );
  }

  _renderSectionHeader(sectionData: string, sectionID: number) {
    return (
      <View style={styles.listSectionWrapper}>
        <Text style={styles.listSectionText}>{sectionData}</Text>
      </View>
    )
  }

  _showCalendar() {
    const { navigation } = this.props;
    navigation.navigate('AttendanceCalendar');
  }

  _applyApplication() {
    const { navigation } = this.props;
    navigation.navigate('LeaveApplication');
  }

  _onMyArrpovalsPressed() {
    const { navigation } = this.props;
    navigation.navigate('LeaveApproval');
  }
}

export default Attendance;
