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
} from 'react-native';

import styles from './style'
import HomeHead from '../../components/HomeHead'
import HomeFoot from '../../components/BottomMenu'
import { User_ID_Key } from '../../common/config';
export default class Location extends Component {
    static navigationOptions = {
        title: '当前位置'
    };

    constructor(props) {
        super(props);
        this.state = {
            UserID:'',
        };
    }

    componentDidMount() {
    
        AsyncStorage.getItem(User_ID_Key).then((value) => {
        if (value) {
            this.setState({UserID: value
            });
        } else {
            console.log("no user");
        }
        });
  }

    render() {
        return (
            <ScrollView style={styles.container}>

                <View style={styles.WebBackground}>
                <Image style={styles.WebStyle} source={require('../Images/MapGround.png')} >
                    <WebView style={styles.WebStyle} startInLoadingState={true}
                        source={{ uri: 'http://www.isupcore.com/home/currlocation.html?UserID=' + this.state
                            .UserID }}>

                    </WebView>
                    </Image>
                </View>


            </ScrollView>
        );
    }
}


