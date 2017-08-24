import React, { Component } from 'react';
import {
    Image,
    StyleSheet,
    TouchableHighlight,
    Text,
    View,
    ListView
} from 'react-native';
// import styles from './style';

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
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text>Header</Text>
                    <View style={styles.headerTitle}>
                        <Text style={styles.htLeft}>植树节</Text>
                        <Text style={styles.htRight}>2017/5/15</Text>
                    </View>
                </View>
                <View style={styles.main}>
                    <Text>Main</Text>
                </View>
                <View style={styles.bottom}>
                    <Text>Bottom</Text>
                </View>
            </View>
        );
    }
};


const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: 'red',
        flexDirection:'column',
    },
    header:{
        flex:1,
        backgroundColor:'blue',
    },
    headerTitle:{
        flexDirection:'row',
    },
    htLeft:{
        flex:4,
    },
    htRight:{
        flex:1,
    },
    main:{
        flex:2,
        backgroundColor:'yellow',
    },
    bottom:{
        flex:1,
        backgroundColor:'green',
    },
});


