import React, { Component } from 'react';
import {
    Image,
    StyleSheet,
    TouchableHighlight,
    Text,
    View,
    ListView
} from 'react-native';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import styles from './style';
import * as appActions from '../../actions';

import ImgAvatar from './../../images/settings/child1.png'

class MyCard extends Component {
    static navigationOptions = {
        title: '宝贝名片',
    };

    constructor(props) {
        super(props);
    }

    componentWillMount() {
        const { navigation, actions } = this.props;
        const { loadStudentInfo } = actions;

        loadStudentInfo();
    }

    render() {
        const { navigation, student } = this.props;
        const myself = student.student[0];
        return (
            <View
                style={styles.container}>
                <View>
                    <TouchableHighlight>
                        <View style={styles.listitem}>
                            <View style={styles.title}>
                                <Text style={styles.text}>
                                    头像
                                </Text>
                            </View>
                            <View style={styles.array}>
                                <Image style={styles.avatar} source={ImgAvatar}/>
                            </View>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight>
                        <View style={styles.listitem}>
                            <View style={styles.title}>
                                <Text style={styles.text}>
                                    姓名
                                </Text>
                            </View>
                            <View style={styles.array}>
                                <Text style={styles.text}>
                                    {myself ? myself.stu_Name : ''}
                                </Text>
                            </View>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight
                        onPress={() => {
                        navigation.navigate('AppSettings')
                      }}>
                        <View style={styles.listitem}>
                            <View style={styles.title}>
                                <Text style={styles.text}>
                                    性别
                                </Text>
                            </View>
                            <View style={styles.array}>
                                <Text style={styles.text}>
                                    {myself ? ( myself.stu_Gender == '1'?'男':'女' ) : '男'}
                                </Text>
                            </View>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight>
                        <View style={styles.listitem}>
                            <View style={styles.title}>
                                <Text style={styles.text}>
                                    出生日期：    
                                </Text>
                            </View>
                            <View style={styles.array}>
                                <Text style={styles.text}>
                                    {myself ? myself.stu_Birthday : ''}
                                </Text>
                            </View>
                        </View>
                    </TouchableHighlight>
                    <View style={styles.sperator}>
                        <Text></Text>
                    </View>
                    <TouchableHighlight>
                        <View style={styles.listitem}>
                            <View style={styles.title}>
                                <Text style={styles.text}>
                                    学校
                                </Text>
                            </View>
                            <View style={styles.array}>
                                <Text style={styles.text}>
                                {myself ? myself.sch_Name : ''}
                                </Text>
                            </View>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight>
                        <View style={styles.listitem}>
                            <View style={styles.title}>
                                <Text style={styles.text}>
                                    联系方式
                                </Text>
                            </View>
                            <View style={styles.array}>
                                <Text style={styles.text}>
                                {myself ? myself.p_PhoneNumber : ''}
                                </Text>
                            </View>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight>
                        <View style={styles.listitem}>
                            <View style={styles.title}>
                                <Text style={styles.text}>
                                    家庭地址
                                </Text>
                            </View>
                            <View style={styles.array}>
                                <Text style={styles.text}>
                                {myself ? myself.p_Address : ''}
                                </Text>
                            </View>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight>
                        <View style={styles.listitem}>
                            <View style={styles.title}>
                                <Text style={styles.text}>
                                    宝贝积分
                                </Text>
                            </View>
                            <View style={styles.array}>
                                <Text style={styles.text}>
                                    369
                                </Text>
                            </View>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight>
                        <View style={styles.listitem}>
                            <View style={styles.title}>
                                <Text style={styles.text}>
                                    宝贝等级
                                </Text>
                            </View>
                            <View style={styles.array}>
                                <Text style={styles.text}>
                                    L1
                                </Text>
                            </View>
                        </View>
                    </TouchableHighlight>
                </View>
            </View>
        );
    }
}


function mapStateToProps(state) {
  return {
    student: state.student
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(appActions.actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MyCard);
