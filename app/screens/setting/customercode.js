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
    ScrollView,
    ListView,
} from 'react-native';

//import HomeStyle from './style'
import HeadBack from '../../components/BackMenu'


export default class CustCode extends Component {
    static navigationOptions = {
        title: '用户条款',
    }


    constructor(props) {
        super(props);

    }

    render() {

        return (
            <View style={styles.container}>

                <View style={styles.rowView}>
                    <View style={styles.ListRow}>
                        <Image source={{ uri: "http://www.isupcore.com/images/qinzi.png" }} style={styles.rowImage} />
                        <View style={styles.rowTitleSup}>
                            <Text style={styles.rowTitle}>用户条款</Text>

                        </View>
                    </View>
                </View>
                <View>
                    <Text style={styles.rowContent}>
                          钜芯信息系科技所提供的一切服务的所有权、运营权和解释权均归钜芯信息系科技公司所有。
 
一、注册会员应遵守中华人民共和国相关的法律和法规，遵从钜芯信息系科技合法服务程序。
 
二、注册会员应提供准确的注册资料。对于会员资料不全或不准确所造成 的服务中断或缺陷，钜芯信息系科技不负任何责任。 
 
三、钜芯信息系科技不会未经用户许可，公开、编辑或透露会员注册资料，除非国家法律 许可或必须。
 
　　                </Text>
                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 0,
        flexDirection: 'column',
        backgroundColor: '#ffffff',

    },
    Header: {
        height: 40,
        flex: 0,
        borderBottomWidth: 5,
        borderBottomColor: 'rgba(226,224,225,0.8)',
    },
    ListRow: {
        alignItems: 'center',
    },
    rowView: {
        height: 200,
        flexDirection: 'column',
        justifyContent: "center",
        alignItems: 'center',
    },
    rowImage: {
        width: 350,
        height: 150
    },
    rowTitleSup: {
        height: 44,
        justifyContent: 'center',
        alignItems: 'center',

    },
    rowTitle: {
        fontSize: 16,
        justifyContent: 'center',
        alignItems: 'center',
    },
    rowContent: {
        fontSize: 16,
        flexWrap: 'wrap',
        marginLeft:5,
        marginRight:5,
    },
});
