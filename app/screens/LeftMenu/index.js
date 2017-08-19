import React, { Component } from 'react';
import {
    Image,
    StyleSheet,
    TouchableHighlight,
    Text,
    View,
    ListView
} from 'react-native';
import styles from './style';

import ImgCard from '../../images/settings/card.png';
import ImgBadge from '../../images/settings/badge.png';
import ImgSetting from '../../images/settings/setting.png';
import ImgCustService from '../../images/settings/custservice.png';
import ImgBind from '../../images/settings/bind.png';
import ImgUpgrade from '../../images/settings/upgrade.png';
import ImgFeedback from '../../images/settings/feedback.png';
import ImgChild1 from '../../images/settings/child1.png';
import ImgChild2 from '../../images/settings/child2.png';
import ImgChild3 from '../../images/settings/child3.png';

export default
class Index extends Component {
    static navigationOptions = {
        // very important, this is only used when you don't want to go back
        // in a StackNavigator
        cardStack: {
            gesturesEnabled: false
        }
    }

    constructor(props) {
        super(props);
    }

    render() {
        const { navigation } = this.props;

        return (
            <View
                style={styles.container}>
                <View>
                    <View style={styles.listimage}>
                        <Image style={styles.headimg} source={ImgChild2}/>
                        <Image style={styles.headimg} source={ImgChild1}/>
                        <Image style={styles.headimg} source={ImgChild3}/>
                    </View>
                    <View style={styles.namelevel}>
                        <View><Text style={styles.name}>王小丫</Text></View>
                        <View><Text>Lv 6</Text></View>
                    </View>
                </View>
                <View>
                    <TouchableHighlight
                        onPress={() => {
                        navigation.navigate('MyCard')
                      }}>
                        <View style={styles.listitem}>
                            <View style={styles.title}>
                                <Image style={styles.icon} source={ImgCard}/>
                                <Text style={styles.text}>
                                    宝贝名片
                                </Text>
                            </View>
                            < View style={styles.array}>
                                <Text style={styles.text}>>
                                </Text>
                            </View>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight
                        onPress={() => {
                        navigation.navigate('Badge')
                      }}>
                        <View style={styles.listitem}>
                            <View style={styles.title}>
                                <Image style={styles.icon} source={ImgBadge}/>
                                <Text style={styles.text}>
                                    校徽管理
                                </Text>
                            </View>
                            <View style={styles.array}>
                                <Text style={styles.text}>>
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
                                <Image style={styles.icon} source={ImgSetting}/>
                                <Text style={styles.text}>
                                    app设置
                                </Text>
                            </View>
                            <View style={styles.array}>
                                <Text style={styles.text}>>
                                </Text>
                            </View>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight
                        onPress={() => {
                        navigation.navigate('OnlineServcie')
                      }}>
                        <View style={styles.listitem}>
                            <View style={styles.title}>
                                <Image style={styles.icon} source={ImgCustService}/>
                                <Text style={styles.text}>
                                    在线客服
                                </Text>
                            </View>
                            <View style={styles.array}>
                                <Text style={styles.text}>>
                                </Text>
                            </View>
                        </View>
                    </TouchableHighlight>
                    <View style={styles.sperator}>
                        <Text></Text>
                    </View>
                    <TouchableHighlight
                        onPress={() => {
                        navigation.navigate('Bind')
                      }}>
                        <View style={styles.listitem}>
                            <View style={styles.title}>
                                <Image style={styles.icon} source={ImgBind}/>
                                <Text style={styles.text}>
                                    解绑捆绑
                                </Text>
                            </View>
                            <View style={styles.array}>
                                <Text style={styles.text}>>
                                </Text>
                            </View>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight
                        onPress={() => {
                        navigation.navigate('Hardware')
                      }}>
                        <View style={styles.listitem}>
                            <View style={styles.title}>
                                <Image style={styles.icon} source={ImgUpgrade}/>
                                <Text style={styles.text}>
                                    固件信息
                                </Text>
                            </View>
                            <View style={styles.array}>
                                <Text style={styles.text}>>
                                </Text>
                            </View>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight
                        onPress={() => {
                        navigation.navigate('Suggestion')
                      }}>
                        <View style={styles.listitem}>
                            <View style={styles.title}>
                                <Image style={styles.icon} source={ImgFeedback}/>
                                <Text style={styles.text}>
                                    意见反馈
                                </Text>
                            </View>
                            <View style={styles.array}>
                                <Text style={styles.text}>>
                                </Text>
                            </View>
                        </View>
                    </TouchableHighlight>
                </View>
            </View>
        );
    }
} ;
