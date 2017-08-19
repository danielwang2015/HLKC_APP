import React, { Component } from 'react';
import {
    Image,
    ScrollView,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

import styles from './style';
import PhotoIcon from '../../images/icons/photo.png';
import LessonIcon from '../../images/icons/lesson.png';
import ScoreIcon from '../../images/icons/score.png';
import AttendanceIcon from '../../images/icons/attendance.png';
import ArchiveIcon from '../../images/icons/archive.png';
import NotificationIcon from '../../images/icons/notification.png';
import NewsIcon from '../../images/icons/news.png';
import AdvertiseIcon from '../../images/icons/advertise.png';
import SchoolBanner from '../../images/school.jpg';
import SchoolLogo from '../../images/school_logo.jpeg';
import Dropdown from '../../images/dropdown.png';
import Collapse from '../../images/icons/collapse.png';

import SchoolTabNav from '../../components/schoolTabNav';
import DetailItem from './detailItem';
import DetailItem2 from './detailItem2';
import DetailItem3 from './detailItem3';
import PhotoGallery from './photoGallery';

class School extends Component {
    static navigationOptions = {
        header: null,
    };

    constructor(props) {
        super(props);
        this.state = {
          showSchoolDetail: false,
        };
    }

    render() {
        const { navigation } = this.props;


        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Image style={styles.banner} source={SchoolBanner}>
                        <Image style={styles.logo} source={SchoolLogo}/>
                    </Image>
                </View>
                {
                  !this.state.showSchoolDetail &&
                  <TouchableOpacity
                    onPress={() => this.setState({showSchoolDetail: true})}
                  >
                    <Image style={styles.dropdown} source={Dropdown}>
                        <Text style={styles.dropdownLabel}>学校详情</Text>
                    </Image>
                  </TouchableOpacity>
                }
                {
                  this.state.showSchoolDetail &&
                  <ScrollView style={styles.detailWrapper}>
                    <DetailItem title={'学校概况'} content={'学校拥有瑞安市上海新纪元高级中学、瑞安市新纪元实验学校、瑞安市新纪元小学三校四区，教学班120余个，在校生6000余名，教职工600余名。现任董事长陈志伟先生、总校校长叶绍胜先生。'} />
                    <DetailItem title={'学校简介'} content={'学校按照省标准化I类学校和省示范学校的要求配置校园硬件设施：教学楼、综合楼、实验楼、宿舍楼、餐厅、体艺馆、塑胶操场、校园局域网、多媒体、电视台等一应俱全...'} />
                    <DetailItem title={'学校文化'} content={'学校以"幸福教育"为办学理念，以"用成功教育开启学生成功人生"为教育理念，以"师生共创教育幸福"为核心价值观，尊崇"修身、伟志、创新"的校训...'} />
                    <DetailItem title={'荣誉成果'} content={'全国宋庆龄发明奖科技教育示范学校、中国民办教育十大知名品牌学校、全国民办教育百强学校、优秀外国语实验学校、示范家长学校、浙江省九年制一贯制示范学校、校本教研示范学校...'} />
                    <DetailItem2 title={'学校大事'} />
                    <DetailItem3 title={'教师风采'} />
                    <PhotoGallery title={'校园风景'} />
                  </ScrollView>
                }
                {
                  this.state.showSchoolDetail &&
                  <View style={styles.collapseWrapper}>
                    <TouchableOpacity
                      onPress={() => this.setState({showSchoolDetail: false})}
                    >
                      <Image style={styles.collapse} source={Collapse} />
                    </TouchableOpacity>
                  </View>
                }
                {
                  !this.state.showSchoolDetail &&
                  <ScrollView style={styles.table}>
                      <View style={styles.row}>
                          <TouchableOpacity style={styles.cell}
                          onPress={() => navigation.navigate('Album')}>
                              <Image style={styles.icon} source={PhotoIcon}/>
                              <Text style={styles.iconLabel}>相册</Text>
                          </TouchableOpacity>
                          <TouchableOpacity
                            style={styles.cell}
                            onPress={() => navigation.navigate('Lecture')}
                          >
                              <Image style={styles.icon} source={LessonIcon}/>
                              <Text style={styles.iconLabel}>课程</Text>
                          </TouchableOpacity>
                          <TouchableOpacity
                              style={styles.cell}
                              onPress={() => navigation.navigate('Score')}
                          >
                              <Image style={styles.icon} source={ScoreIcon}/>
                              <Text style={styles.iconLabel}>成绩</Text>
                          </TouchableOpacity>
                          <TouchableOpacity
                            style={styles.cell}
                            onPress={() => navigation.navigate('Attendance')}
                          >
                              <Image style={styles.icon} source={AttendanceIcon}/>
                              <Text style={styles.iconLabel}>考勤</Text>
                          </TouchableOpacity>
                      </View>
                      <View style={styles.row}>
                          <TouchableOpacity
                            style={styles.cell}
                            onPress={() => navigation.navigate('Archive')}
                          >
                              <Image style={styles.icon} source={ArchiveIcon}/>
                              <Text style={styles.iconLabel}>档案</Text>
                          </TouchableOpacity>
                          <TouchableOpacity
                              style={styles.cell}
                              onPress={() => navigation.navigate('Notice')}
                              >
                              <Image style={styles.icon} source={NotificationIcon}/>
                              <Text style={styles.iconLabel}>通告</Text>
                          </TouchableOpacity>
                          <TouchableOpacity style={styles.cell}
                          onPress={() => navigation.navigate('News')}>
                              <Image style={styles.icon} source={NewsIcon}/>
                              <Text style={styles.iconLabel}>新闻</Text>
                          </TouchableOpacity>
                          <TouchableOpacity
                            style={styles.cell}
                            onPress={() => navigation.navigate('Advertisement')}
                          >
                              <Image style={styles.icon} source={AdvertiseIcon}/>
                              <Text style={styles.iconLabel}>广告</Text>
                          </TouchableOpacity>
                      </View>
                  </ScrollView>
                }
                {
                  !this.state.showSchoolDetail &&
                  <SchoolTabNav
                      navigation={navigation}
                      screenName={navigation.state.routeName}
                  />
                }
            </View>
        );
    }
}

export default School;
