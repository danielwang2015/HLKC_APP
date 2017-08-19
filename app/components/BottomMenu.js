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
                        navigation.navigate('Location')
                    }}
                >
                    <View style={styles.centerItem}>
                        <Image style={styles.bottomImg} source={require('../screens/Images/U_Location.png')} >

                        </Image>
                        <Text style={styles.BottomText}>实时定位</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate('Trace')
                    }}
                >
                <View style={styles.centerItem}>
                    <Image style={styles.bottomImg} source={require('../screens/Images/Tract_Icon.png')} >

                    </Image>
                    <Text style={styles.BottomText}>轨迹回放</Text>
                </View>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate('AlertZone')
                    }}
                >
                <View style={styles.centerItem}>
                    <Image style={styles.bottomImg} source={require('../screens/Images/Alert_Zone.png')} >

                    </Image>
                    <Text style={styles.BottomText}>预警区域</Text>
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
                    <Text style={styles.BottomText}>宝贝学校</Text>
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
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#D3D3D3',
        marginTop: -30,
        height: 100,
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
