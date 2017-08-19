import * as React from 'react';

import { Component, PropTypes } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    Boolean,
    View,
    Image,
    Navigator,
    TouchableHighlight,
    TouchableOpacity,
    PixelRatio,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
export default class BackMenu extends Component {
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

    }
    render() {
        const { navigation } = this.props;
        return (
            <View style={styles.top}>
                <View style={styles.topLeft}>
                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate(this.props.BackScreen)
                        }}
                    >
                        <Icon name="ios-arrow-back-outline" color="grey" size={30} ></Icon>
                    </TouchableOpacity>
                </View>

                <View style={styles.topRight}><Text style={styles.topTitle}>{this.props.Title}
                </Text></View>
                {
                    this.props.RightBar == 'Y' ? <View style={styles.topRightIcon}>
                        <Image style={styles.topImg} source={require('../screens/Images/warnIcon.png')} />
                    </View> : null
                }
            </View>

        );
    }
}

const onePT = PixelRatio.get();
const styles = StyleSheet.create({
    top: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'center',
        backgroundColor: '#fff',
        height: 14 * onePT,
        borderBottomColor: '#E9E4DB',
        // marginTop:17,
    },
    topLeft: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10 * onePT,
    },
    topRight: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    },
    topRightIcon:{
        flex: 0,
        justifyContent: 'center',
        alignItems: 'center',
        // marginRight: -40 * onePT,
        // marginLeft: -45 * onePT,
    },
    topImg:{
        width: 13 * onePT,
        height: 8 * onePT,
        marginRight: 8,
    },
    topTitle: {
        color: '#8B8970',
        textAlign: 'center',
        fontSize: 20,
        fontFamily: 'Cochin',

    },

});
