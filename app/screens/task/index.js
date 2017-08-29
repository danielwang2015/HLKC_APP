import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    Image,
    Navigator,
    TouchableOpacity,
    TouchableHighlight,
    View,
    Alert,
    PixelRatio,
    WebView,
    ScrollView,
    AsyncStorage,
    TextInput,
} from 'react-native';

import styles from './style'
export default class Task extends Component {
    static navigationOptions = {
        title: '新建任务'
    };

    constructor(props) {
        super(props);
    }

    componentDidMount() {
  }

    render() {
        return (
            <View style={styles.container}>
                <TextInput/>
            </View>
        );
    }
}


