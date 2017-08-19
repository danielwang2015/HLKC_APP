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

import ImgQRCode from './../../images/settings/qrcode.png'

export default
class Bind extends Component {
    static navigationOptions = {
        title: '绑定',
    };

    constructor(props) {
        super(props);
    }

    render() {
        const { navigation } = this.props;

        return (
            <View
                style={styles.container}>
                <View style={styles.bind}>
                    <View style={styles.twoside}>
                        <Image style={styles.qrcode} source={ImgQRCode}/>
                    </View>
                    <View style={styles.twoside}>
                        <TouchableHighlight>
                            <View><Text>* 校徽设备由学校统一发放与绑定</Text> 
                                <Text>* 无需人工干预</Text>   
                                <Text>* 如有问题请拨打客服电话</Text>
                                <Text></Text></View>
                        </TouchableHighlight>
                    </View>
                </View>
            </View>
        );
    }
} ;
