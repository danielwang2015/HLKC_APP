import React, { Component } from 'react';
import {
  Image,
  ListView,
  Modal,
  ScrollView,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native';

import styles from './style';
import RadioButton from '../../components/radioButton';
import ScoreChart from '../../components/scoreChart';
import ChildLogo from '../../images/child_logo.jpeg';
import HistoryIcon from '../../images/icons/score_history.png';
import ChartIcon from '../../images/icons/score_chart.png';

class Score extends Component {
  static navigationOptions = {
    title: '成绩',
  };

  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this._data = [
      {period: '一年级上学期', current: true},
      {period: '一年级下学期', current: false},
      {period: '二年级上学期', current: false},
      {period: '二年级下学期', current: false},
      {period: '三年级上学期', current: false},
      {period: '三年级下学期', current: false},
      {period: '四年级上学期', current: false},
      {period: '四年级下学期', current: false},
      {period: '五年级上学期', current: false},
      {period: '五年级下学期', current: false},
      {period: '六年级上学期', current: false},
      {period: '六年级下学期', current: false},
    ];
    this.state = {
      dataSource: ds.cloneWithRows(this._data),
      modalVisible: false,
      chartVisible: false,
    };
  }

  render() {
    const { navigation } = this.props;

    return(
      <View style={styles.container}>
        <ScrollView style={styles.mainWrapper}>
          <View style={styles.profileWrapper}>
            <View style={styles.childLogoWrapper}>
              <View style={styles.childLogoHolo}>
                <Image
                  style={styles.childLogo}
                  source={ChildLogo}
                />
              </View>
              <Text style={styles.childName}>王小丫</Text>
            </View>
            <Text style={styles.childGrade}>一年级上学期</Text>
          </View>
          {
            this.state.chartVisible && <ScoreChart />
          }
          <View style={styles.gradeInstruction}>
            <View style={[styles.gradeIcon, styles.gradeA]} />
            <Text style={styles.gradeLabel}>优秀</Text>
            <View style={[styles.gradeIcon, styles.gradeB]} />
            <Text style={styles.gradeLabel}>良好</Text>
            <View style={[styles.gradeIcon, styles.gradeC]} />
            <Text style={styles.gradeLabel}>及格</Text>
            <View style={[styles.gradeIcon, styles.gradeD]} />
            <Text style={styles.gradeLabel}>不及格</Text>
          </View>
          <View style={styles.examWrapper}>
            <View style={[styles.examPeriod, styles.examPeriodBg1]}>
              <Text style={styles.examPeriodLabel}>期中考试</Text>
            </View>
            <View style={styles.examResultWrapper}>
              <View style={styles.examLeft}>
                <View style={styles.examNameWrapper}>
                  <View style={[styles.examIcon, styles.gradeA]} />
                  <Text style={styles.examText}>数学</Text>
                </View>
                <View>
                  <Text style={styles.examText}>96分</Text>
                </View>
              </View>
              <View style={styles.examRight}>
                <View style={styles.examNameWrapper}>
                  <View style={[styles.examIcon, styles.gradeA]} />
                  <Text style={styles.examText}>语文</Text>
                </View>
                <View>
                  <Text style={styles.examText}>95分</Text>
                </View>
              </View>
            </View>
            <View style={styles.examResultWrapper}>
              <View style={styles.examLeft}>
                <View style={styles.examNameWrapper}>
                  <View style={[styles.examIcon, styles.gradeB]} />
                  <Text style={styles.examText}>英语</Text>
                </View>
                <View>
                  <Text style={styles.examText}>80分</Text>
                </View>
              </View>
              <View style={styles.examRight}>
                <View style={styles.examNameWrapper}>
                  <View style={[styles.examIcon, styles.gradeB]} />
                  <Text style={styles.examText}>美术</Text>
                </View>
                <View>
                  <Text style={styles.examText}>84分</Text>
                </View>
              </View>
            </View>
            <View style={styles.examResultWrapper}>
              <View style={styles.examLeft}>
                <View style={styles.examNameWrapper}>
                  <View style={[styles.examIcon, styles.gradeD]} />
                  <Text style={styles.examText}>音乐</Text>
                </View>
                <View>
                  <Text style={styles.examText}>53分</Text>
                </View>
              </View>
              <View style={styles.examRight}>
                <View style={styles.examNameWrapper}>
                  <View style={[styles.examIcon, styles.gradeC]} />
                  <Text style={styles.examText}>体育</Text>
                </View>
                <View>
                  <Text style={styles.examText}>67分</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.examWrapper}>
            <View style={[styles.examPeriod, styles.examPeriodBg2]}>
              <Text style={styles.examPeriodLabel}>期末考试</Text>
            </View>
            <View style={styles.examResultWrapper}>
              <View style={styles.examLeft}>
                <View style={styles.examNameWrapper}>
                  <View style={[styles.examIcon, styles.gradeA]} />
                  <Text style={styles.examText}>数学</Text>
                </View>
                <View>
                  <Text style={styles.examText}>90分</Text>
                </View>
              </View>
              <View style={styles.examRight}>
                <View style={styles.examNameWrapper}>
                  <View style={[styles.examIcon, styles.gradeA]} />
                  <Text style={styles.examText}>语文</Text>
                </View>
                <View>
                  <Text style={styles.examText}>95分</Text>
                </View>
              </View>
            </View>
            <View style={styles.examResultWrapper}>
              <View style={styles.examLeft}>
                <View style={styles.examNameWrapper}>
                  <View style={[styles.examIcon, styles.gradeB]} />
                  <Text style={styles.examText}>英语</Text>
                </View>
                <View>
                  <Text style={styles.examText}>84分</Text>
                </View>
              </View>
              <View style={styles.examRight}>
                <View style={styles.examNameWrapper}>
                  <View style={[styles.examIcon, styles.gradeB]} />
                  <Text style={styles.examText}>美术</Text>
                </View>
                <View>
                  <Text style={styles.examText}>80分</Text>
                </View>
              </View>
            </View>
            <View style={styles.examResultWrapper}>
              <View style={styles.examLeft}>
                <View style={styles.examNameWrapper}>
                  <View style={[styles.examIcon, styles.gradeC]} />
                  <Text style={styles.examText}>音乐</Text>
                </View>
                <View>
                  <Text style={styles.examText}>75分</Text>
                </View>
              </View>
              <View style={styles.examRight}>
                <View style={styles.examNameWrapper}>
                  <View style={[styles.examIcon, styles.gradeC]} />
                  <Text style={styles.examText}>体育</Text>
                </View>
                <View>
                  <Text style={styles.examText}>65分</Text>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
        <View style={styles.tabNavWrapper}>
          <TouchableOpacity
            style={styles.cell}
            onPress={() => {
              this.setState({modalVisible: true});
            }}
          >
            <Image style={styles.tabIcon} source={HistoryIcon}/>
            <Text style={styles.iconLabel}>往期成绩</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.cell}
            onPress={() => {
              this.setState({chartVisible: !this.state.chartVisible})
            }}
          >
            <Image style={styles.tabIcon} source={ChartIcon}/>
            <Text style={styles.iconLabel}>统计</Text>
          </TouchableOpacity>
        </View>
        <Modal
          animationType={'slide'}
          transparent={true}
          visible={this.state.modalVisible}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalBox}>
              <ListView
                dataSource={this.state.dataSource}
                renderRow={this._renderRow.bind(this)}
              />
            </View>
          </View>

        </Modal>
      </View>
    );
  }

  _genRows(pressData: {[key: number]: boolean}): Array<object> {
    var dataBlob = [];
    for (let i = 0; i < this._data.length; i++) {
      let item = {
        ...this._data[i],
        current: i == pressData
      };
      dataBlob.push(item);
    }
    return dataBlob;
  }

  _pressRow(rowID: number) {
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(
        this._genRows(rowID)
      ),
      modalVisible: false,
    });
  }

  _renderRow(rowData: string, sectionID: number, rowID: number,
    highlightRow: (sectionID: number, rowID: number) => void) {
    return (
      <TouchableHighlight
        underlayColor = '#008b8b'
        onPress = {() => {
          this._pressRow(rowID);
          highlightRow(sectionID, rowID);
        }}>
        <View style={styles.listItemWrapper}>
          <Text style={styles.listItemText}>{rowData.period}</Text>
           <RadioButton
           selected={rowData.current}/>
        </View>
      </TouchableHighlight>
    );
  }
}

export default Score;
