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

// test

export default class AboutUS extends Component {
    static navigationOptions = {
        title: '关于我们',
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
                            <Text style={styles.rowTitle}>钜芯信息科技</Text>

                        </View>
                    </View>
                </View>
                <View>
                    <Text style={styles.rowContent}>
                        上海钜芯信息科技有限公司是一家从事物联网产品设计、开发、销售、运营的高科技公司，公司注册资本200万元。公司集合国内外IC行业众多顶尖设计研发人才，涉及的技术领域包括：各种规模集成电路设计、生产以及相关应用，各种算法的研究与实现。从IC设计，产品功能研发，产品外观设计等，均拥有自主知识产权，并获得多项国家发明专利。截止2016年1月1日公司已获得专利23项，其中发明专利1项，即将授权1项，并且每年渐次增长。
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
