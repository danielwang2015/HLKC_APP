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
    Button,
    InteractionManager,
    AsyncStorage,
} from 'react-native';
import { DrawerNavigator } from 'react-navigation';
import HomeFoot from '../../components/BottomMenu'
import LeftMenuScreen from '../LeftMenu'
import SideMenu from 'react-native-side-menu';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
    KeyboardAwareScrollView,
} from 'react-native-keyboard-aware-scroll-view';
import { TextInputLayout } from 'rn-textinputlayout';
import { User_ID_Key, User_SIGN_STSTUS } from '../../common/config';
import * as appActions from '../../actions';

class Home extends Component {
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
            isOpen: false,
            selectedItem: 'About',
            UserID: '',
            IsSigned: false,
        };

    }

    componentDidMount() {

        AsyncStorage.getItem(User_ID_Key).then((value) => {
            if (value) {
                this.setState({
                    UserID: value
                });
            } else {
                console.log("no user");
            }
        });
        AsyncStorage.getItem(User_SIGN_STSTUS).then((value) => {
            if (value) {
                console.log('sign status:' + value);
                this.setState({
                    IsSigned: value
                });
            } else {
                console.log("not sign");
            }
        });

    }

    componentWillReceiveProps(nextProps) {
        //console.log('执行componentWillReceiveProps', nextProps);
        AsyncStorage.getItem(User_SIGN_STSTUS).then((value) => {
            if (value) {
                this.setState({
                    IsSigned: value
                });
            } else {
                console.log("not sign");
            }
        });

    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen,
        });
    }

    updateMenuState(isOpen) {
        this.setState({ isOpen: isOpen });
    }

    componentWillMount() {
        const { actions } = this.props;
        const { loadStudentInfo } = actions;

        loadStudentInfo();
    }

    render() {
        const { navigation, state, actions } = this.props;
        const { userSignOn } = actions;
        const myself = state.student.student[0];
        
        const menu = <LeftMenuScreen navigation={this.props.navigation} />;
        return (
            <SideMenu
                menu={menu}
                isOpen={this.state.isOpen}
                onChange={(isOpen) => this.updateMenuState(isOpen)}>
                <View style={styles.container}>

                    <View style={styles.top}>
                        <TouchableHighlight
                            onPress={() => this.toggle()}>
                            <View>
                                <Image style={styles.topIconLeft} source={require('../Images/U_Setting.png')} />
                            </View>
                        </TouchableHighlight>
                        <View>
                            <Image style={styles.topIconCenter} source={require('../Images/U_Name.png')} >
                                <Text style={styles.topText}>智&nbsp;&nbsp;徽</Text>
                            </Image>
                        </View>
                        <View>
                            <Image style={styles.topIconRight} source={require('../Images/U_NonMsg.png')} />
                        </View>
                    </View>

                    <View style={styles.WebBackground}>
                        <View style={styles.mapBackground}>
                            <WebView style={styles.WebStyle} startInLoadingState={true}
                                source={{
                                    uri: 'http://www.isupcore.com/home/mylocation.html?UserID=' + this.state
                                        .UserID
                                }}>

                            </WebView>

                        </View>
                    </View>

                    <View style={styles.ChildBackground}>
                        <View style={styles.ChildLevel}>
                            <Image style={styles.centerItem} source={require('../Images/U_Level.png')} >
                                <Text style={styles.ChildText}>L.6</Text>
                            </Image>
                        </View>
                        <View style={styles.ChildHead}>
                            <Image style={styles.ChildHeadImage} source={require('../Images/child head.png')} >

                            </Image>
                        </View>
                        <View style={styles.ChildSign}>
                            <TouchableHighlight
                                onPress={() => userSignOn()}>
                                <Image style={styles.centerItem} source={require('../Images/U_Singup.png')} >
                                    <Text style={styles.ChildText}>{
                                        this.state.IsSigned ? "已签到" : "未签到"
                                    }</Text>
                                </Image>
                            </TouchableHighlight>
                        </View>
                    </View>
                    <View style={styles.ChildName}>
                        <Text style={styles.ChildNameLeftText}>
                                 ——     
                                </Text>
                                <Text style={styles.ChildNameText}>
                                 {myself ? myself.stu_Name : ''}
                                </Text>
                                <Text style={styles.ChildNameRightText}>
                                      ——
                                </Text>
                    </View>

                    <HomeFoot navigation={this.props.navigation} />

                </View>

            </SideMenu>
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
    icon: {
        width: 24,
        height: 24,
    },
    top: {
        flex: 1,
        flexDirection: 'row',
        marginTop: 3,
        //backgroundColor: '#6495ED',
        height: 32,
        alignItems: 'center',
        justifyContent: 'center',
    },
    topIconLeft: {
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 6,
        marginRight: 3,
        width: 25,
        height: 28,
    },
    topIconCenter: {
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 60,
        marginRight: 40,
        width: 130,
        height: 32,
    },
    topIconRight: {
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 1,
        marginRight: 3,
        width: 34,
        height: 28,
    },
    centerItem: {
        alignItems: 'center',
        justifyContent: 'center',

    },
    topText: {
        backgroundColor: 'rgba(222,215,206,0)',
        fontSize: 16,
        color: '#8B8970',
    },


    contentWrap: {
        flex: 1,
        flexDirection: 'column',
        //backgroundColor: '#12ff12',
        //alignItems : 'center',
        //justifyContent: 'center',
    },

    WebBackground: {
        flex: 0,
        //width: Dimensions.get('window').width,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        //backgroundColor: '#E9E4DB',
        //marginLeft: 2 * onePT,
        marginTop: 3,
    },
    mapBackground: {
        flex: 0,
        flexDirection: 'column',
        width: 170 * onePT,
        height: 170 * onePT,
        borderRadius: 85 * onePT,
        //overflow: 'hidden',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: -8 * onePT,
        //marginLeft : 2 * onePT,
        marginBottom: 14,
        //backgroundColor: '#E9E4DB',
    },
    WebStyle: {
        flex: 1,
        flexDirection: 'row',
        overflow: 'hidden',
        width: 180 * onePT,
        height: 180 * onePT,
        borderRadius: 90 * onePT,
        //backgroundColor: '#E9E4DB',
        marginTop: -4 * onePT,
        backgroundColor: 'rgba(222,215,206,0)',
    },

    ChildBackground: {
        flex: 1,
        flexDirection: 'row',
        //marginLeft: 3 * onePT,
        marginTop: 3 * onePT,
        justifyContent: 'center',
        alignItems: 'center',
        //paddingTop: -8 * onePT,
    },
    ChildLevel: {
        marginRight: 2 * onePT,
        justifyContent: 'center',
        alignItems: 'center',
    },
    ChildHead: {
        marginLeft: -7 * onePT,
        marginRight: -7 * onePT,
        justifyContent: 'center',
        alignItems: 'center',
    },
    ChildName: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: -30,

    },
    ChildHeadImage: {
        width: 60 * onePT,
        height: 60 * onePT,
    },
    ChildNameImage: {
        width: 140,
        height: 16,
        marginTop: -18,
        justifyContent: 'center',
        alignItems: 'center',
    },
    ChildSign: {
        marginLeft: 2 * onePT,
        marginRight: 4 * onePT,
        justifyContent: 'center',
        alignItems: 'center',
    },
    ChildText: {
        fontSize: 15,
        color: '#CD6600',
        backgroundColor: 'rgba(222,215,206,0)',
    },
    ChildNameText:{
        fontSize: 19,
        color: '#CD6600',
        backgroundColor: 'rgba(222,215,206,0)',
        marginLeft: 20,
        marginRight:20,
    },
    ChildNameLeftText:{
        fontSize: 19,
        color: '#DAD2CE',
    },
    ChildNameRightText:{
        fontSize: 19,
        color: '#DAD2CE',
    },
    bottom: {
        height: 80,
        //backgroundColor: '#ddddee',
    },

    bottomMenu: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#DAD2CE',
        marginTop: 5 * onePT,
    },
    bottomImg: {
        width: 25 * onePT,
        height: 25 * onePT,

    },

    centerText: {
        textAlign: 'center',
        color: '#696969',
        fontSize: 20 * onePT,
        fontFamily: 'Cochin',
    },

});

function mapStateToProps(state) {
    return {
        state: state
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(appActions.actions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
