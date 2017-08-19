import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    PixelRatio,
    Image,
} from 'react-native';

export default class HomeHead extends Component {
    constructor(props) {
        super(props);
        console.log('constructor=========>', props);
    }

    render() {

        return (
            <View style={styles.top}>
                <View>
                    <Image style={styles.topIconLeft} source={require('../screens/Images/U_Setting.png')} />
                </View>
                <View>
                    <Image style={styles.topIconCenter} source={require('../screens/Images/U_Name.png')} >
                        <Text style={styles.topText}>智&nbsp;&nbsp;&nbsp;&nbsp;徽</Text>
                    </Image>
                </View>
                <View>
                    <Image style={styles.topIconRight} source={require('../screens/Images/U_NonMsg.png')} />
                </View>
            </View>
        );
    }
}

const onePT = PixelRatio.get();
const Dimensions = require('Dimensions');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#E9E4DB',
        //width: Dimensions.get('window').width,
        //height:Dimensions.get('window').height,
    },
    top: {
        flex: 1,
        flexDirection: 'row',
        marginTop: 3 * onePT,
        //backgroundColor: '#6495ED',
        height: 17 * onePT,
    },
    topIconLeft: {
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 3 * onePT,
        marginRight: 1 * onePT,
        width: 15 * onePT,
        height:17 * onePT,
    },
    topIconCenter: {
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 25 * onePT,
        marginRight: 18 * onePT,
        width: 50 * onePT,
        height: 17 * onePT,
    },
    topIconRight: {
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 1 * onePT,
        marginRight: 3 * onePT,
        width: 20 * onePT,
        height:17 * onePT,
    },
    centerItem: {
        alignItems: 'center',
        justifyContent: 'center',

    },
    topText: {
        
        fontSize: 25,
        color: '#8B8970',
    },
    
    
});