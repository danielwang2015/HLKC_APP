import React, { Component } from 'react';
import {
    StyleSheet,
    TouchableHighlight,
    Text,
    View,
    Switch,
    ListView
} from 'react-native';
import styles from './style';

export default
class AppSettings extends Component {
    static navigationOptions = {
        title: 'App设置',
    };

    constructor(props) {
        super(props);
    }

    render() {
        const { navigation } = this.props;

        return (
            <View
                style={styles.container}>
                <View>
                    <TouchableHighlight>
                        <View style={styles.listitem}>
                            <View style={styles.title}>
                                <Text style={styles.text}>
                                    消息通知
                                </Text>
                            </View>
                            <View style={{marginRight: 10}}>
                              <Switch />
                            </View>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight
                        onPress={() => {
                        navigation.navigate('ChangePwd')}}
                        >
                        <View style={styles.listitem}>
                            <View style={styles.title}>
                                <Text style={styles.text}>
                                    修改密码 
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
                        navigation.navigate('AboutUS')}}
                        >
                        <View style={styles.listitem}>
                            <View style={styles.title}>
                                <Text style={styles.text}>
                                    关于我们
                                </Text>
                            </View>
                            <View style={styles.array}>
                                <Text style={styles.text}> >
                                </Text>
                            </View>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight onPress={() => {
                        navigation.navigate('CustCode')}}>
                        <View style={styles.listitem}>
                            <View style={styles.title}>
                                <Text style={styles.text}>
                                    用户协议
                                </Text>
                            </View>
                            <View style={styles.array}>
                                <Text style={styles.text}> >
                                </Text>
                            </View>
                        </View>
                    </TouchableHighlight>
                    <View style={styles.sperator}>
                        <Text></Text>
                    </View>
                    <TouchableHighlight>
                        <View style={styles.listitem2}>
                            <View style={styles.button}>
                                <Text style={styles.textyellow}>
                                    退出登录
                                </Text>
                            </View>
                            <View style={styles.array}>
                                <Text style={styles.text}>
                                </Text>
                            </View>
                        </View>
                    </TouchableHighlight>
                </View>
            </View>
        );
    }
} ;
