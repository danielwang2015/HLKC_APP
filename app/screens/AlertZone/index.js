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
    TextInput,
    Boolean,
    AsyncStorage,
} from 'react-native';

//import HomeStyle from './style'
import HomeHead from '../../components/BackMenu'
import { User_ID_Key } from '../../common/config';
export default class AlertZone extends Component {
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

                <HomeHead navigation={this.props.navigation} Title="预警区域" RightBar="Y" BackScreen="Home"/>
                <View style={styles.WebBackground}>
                    <Image style={styles.WebStyle} source={require('../Images/MapGround.png')} >
                    <WebView style={styles.WebStyle} startInLoadingState={true}
                        source={{ uri: 'http://www.isupcore.com/home/alertzone.html?UserID=' + this.state
                            .UserID }}>

                    </WebView>
</Image>
                </View>

                <View style={styles.AlertBottom}>
                    <View style={styles.bottomLeft}>

                        <Image style={styles.bottomImg} source={require('../Images/Add.png')} />

                    </View>
                    <View>
                        <Text style={styles.bottomText}>添加预警区域</Text>
                    </View>
                    <View style={styles.bottomImg}>
                        <Image style={styles.bottomImg} source={require('../Images/back.png')} />
                    </View>
                </View>
            </ScrollView>
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
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height-15,
        marginTop: 15,
    },

    WebBackground: {
        flex: 1,

        flexDirection: 'column',
        alignItems: 'center',
        justifyContent:'center',
        //marginTop : -5 * onePT,
        marginLeft: 10,
    },

    WebStyle: {
        flex: 1,
        flexDirection: 'row',
        overflow: 'hidden',
        width: 370,
        height: 650,
        backgroundColor: '#E9E4DB',
        alignItems: 'center',
        justifyContent:'center',
    },
    SetAlertZone: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: -5 * onePT,
    },
    ChildSign: {
        marginLeft: 2 * onePT,
        marginRight: 4 * onePT,
        justifyContent: 'center',
        alignItems: 'center',
    },
    ChildText: {
        fontSize: 16,
    },
    centerItem: {
        alignItems: 'center',
        justifyContent: 'center',

    },
    AlertBottom: {
        flex: 1,
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        height:20 * onePT,
    },
    bottomImg: {
        width: 10 * onePT,
        height: 10 * onePT,
    },
    bottomText:{
        color: '#8B8970',
        margin: 5 * onePT,
        textAlign: 'center',
        fontSize: 25,
        fontFamily: 'Cochin'
    },
});
