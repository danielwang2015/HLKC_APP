import * as React from 'react';

import { Component, PropTypes } from 'react';
import {
    StyleSheet,
    Text,
    Boolean,
    View,
    Image,
    Navigator,
    TouchableHighlight,
    TouchableOpacity,
    ViewPagerAndroid,
    PixelRatio,
} from 'react-native';

export default class BottomMenu extends Component {
    static navigationOptions = {
        header: null,
        // very important, this is only used when you don't want to go back
        // in a StackNavigator
        cardStack: {
            gesturesEnabled: false
        }
    }

    constructor(props) {
        super(props);

        console.log(props);
    }
    render() {
        const { navigation } = this.props;

        return (
            <View style={styles.bottomMenu}>
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate('Home')
                    }}
                >
                    <View style={styles.centerItem}>
                        <Image style={styles.bottomImg} source={require('../screens/Images/U_Location.png')} >

                        </Image>
                        <Text style={styles.BottomText}>首页</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate('Location')
                    }}
                >
                <View style={styles.centerItem}>
                    <Image style={styles.bottomImg} source={require('../screens/Images/Tract_Icon.png')} >

                    </Image>
                    <Text style={styles.BottomText}>地图</Text>
                </View>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate('Friend')
                    }}
                >
                <View style={styles.centerItem}>
                    <Image style={styles.bottomImg} source={require('../screens/Images/Alert_Zone.png')} >

                    </Image>
                    <Text style={styles.BottomText}>团队</Text>
                </View>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate('School')
                    }}
                >
                <View style={styles.centerItem}>
                    <Image style={styles.bottomImg} source={require('../screens/Images/School.png')} >

                    </Image>
                    <Text style={styles.BottomText}>任务</Text>
                </View>
                </TouchableOpacity>
            </View>

        )
    }
}

const onePT = PixelRatio.get();
const Dimensions = require('Dimensions');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',

    },
    centerItem: {
        alignItems: 'center',
        justifyContent: 'center',

    },
    topText: {

        fontSize: 25,
        color: '#7D776F',
    },

    BottomText: {
        fontSize: 14,
        color: '#7D776F',
    },


    bottomMenu: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#D3D3D3',
        marginTop: -30,
        height: 80,
    },
    bottomImg: {
        width: 25 * onePT,
        height: 25 * onePT,

    },

    centerText: {
        textAlign: 'center',
        color: '#7D776F',
        fontSize: 14,
        fontFamily: 'Cochin',
    },

});
