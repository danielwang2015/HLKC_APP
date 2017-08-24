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
import SchoolTabNav from '../../components/schoolTabNav';
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

                    <View style={styles.main}>
                        <Text>This is img...</Text>
                        <Text>Link to ...</Text>
                        <Text>Latest news...</Text>
                    </View>

                    <SchoolTabNav navigation={this.props.navigation} />

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
        flexDirection: 'row',
        marginTop: 20,
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
    main:{
        flex:1,
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
