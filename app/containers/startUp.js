import React, { Component } from 'react';
import {
  Button,
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { StackNavigator } from 'react-navigation';

import { LOCAL_ACCESS_TOKEN_NAME } from '../common/config';

import LaunchScreen from '../screens/launch';
import ChatScreen from '../screens/chat';
import AddrBookScreen from '../screens/addr_book';
import FriendScreen from '../screens/friend';

import SchoolScreen from '../screens/school';
import ScoreScreen from '../screens/score';

import AttendanceScreen from '../screens/attendance';
import AttendanceCalendarScreen from '../screens/attendance/calendar';
import LeaveApplicationScreen from '../screens/attendance/application';
import LeaveApprovalScreen from '../screens/attendance/approval';
import LeaveApprovalDetailScreen from '../screens/attendance/approvalDetail';

import NoticeScreen from '../screens/notice';
import ArchiveScreen from '../screens/archive';
import AlbumScreen from '../screens/Album';
import AlbumListScreen from '../screens/Album/AlbumList';
import AlbumDisplayScreen from '../screens/Album/Display';
import LectureScreen from '../screens/lecture';
import AdvertisementScreen from '../screens/advertisement';
import AdvertisementDetailScreen from '../screens/advertisement/detail';

// import SchoolTabs from './schoolTabs';
import SignInScreen from '../screens/signIn';
import SignUpScreen from '../screens/signUp';
import HomeScreen from '../screens/home';
import SettingScreen from '../screens/setting';
import AppSettingScreen from '../screens/setting/appsetting.js';
import MyCardScreen from '../screens/setting/mycard.js';

import BadgeMgrScreen from '../screens/setting/badge.js';
import OnlineServcieScreen from '../screens/setting/onlineservice.js';
import BindScreen from '../screens/setting/bind.js';
import HardwareScreen from '../screens/setting/hardware.js';
import SuggestionScreen from '../screens/setting/suggestion.js';
import AboutUScreen from '../screens/setting/aboutus.js';
import CustCodeScreen from '../screens/setting/customercode.js';
import ChangePwdScreen from '../screens/setting/changepwd.js';
import TraceScreen from '../screens/Trace';
import LocationScreen from '../screens/Location';
import AlertZoneScreen from  '../screens/AlertZone';
import NewsScreen from '../screens/News';
import NewsDetailScreen from '../screens/News/NewsDetail';

import TaskScreen from '../screens/task';

export class StartUpApp extends Component {

    constructor(props) {
        super(props);

        this.state = {
          localToken: '',
        };
    }

    render() {
        const stackNavigatorRoutes = {
            Launch: {
              name: 'Launch Screen',
              description: 'The launch screen of the app',
              screen: LaunchScreen,
            },
            Home: {
                name: 'Home Screen',
                description: 'The app home screen',
                screen: HomeScreen,
            },
            SignIn: {
                name: 'Sign In Screen',
                description: 'The app sign in screen',
                screen: SignInScreen,
            },
            SignUp: {
                name: 'Sign Up Screen',
                description: 'The app sign up screen',
                screen: SignUpScreen,
            },
            Settings: {
                name: 'Settings',
                description: 'The setting screen',
                screen: SettingScreen,
            },
            AppSettings: {
                name: 'App Setting',
                description: 'App Setting screen',
                screen: AppSettingScreen,
            },
            MyCard: {
                name: 'My Card',
                description: 'My Card screen',
                screen: MyCardScreen,
            },
            Badge: {
                name: 'Badge Mgr',
                description: 'Badge Mgr',
                screen: BadgeMgrScreen
            },
            OnlineServcie: {
                name: 'Online Servcie',
                description: 'Online Service',
                screen: OnlineServcieScreen
            },
            Bind: {
                name: 'Bind',
                description: 'Bind',
                screen: BindScreen,
            },
            Hardware: {
                name: 'Bind',
                description: 'Bind',
                screen: HardwareScreen,
            },
            Suggestion: {
                name: 'Bind',
                description: 'Bind',
                screen: SuggestionScreen,
            },
            AboutUS:{
                name:'AboutUS',
                description: 'AboutUS',
                screen: AboutUScreen,
            },
            CustCode:{
                name:'CustCode',
                description:'CustCode',
                screen: CustCodeScreen,
            },
            ChangePwd:{
                name:'ChangePwd',
                description:'ChangePwd',
                screen:ChangePwdScreen
            },
            Chat: {
                name: 'Chat Screen',
                description: 'The chat screen',
                screen: ChatScreen,
            },
            AddrBook: {
                name: 'Address Book Screen',
                description: 'The address book screen',
                screen: AddrBookScreen,
            },
            Friend: {
                name: 'Friend Screen',
                description: 'The friends of yours',
                screen: FriendScreen,
            },
            School: {
                name: 'School Screen',
                description: 'The school default screen',
                screen: SchoolScreen,
            },
            Lecture: {
              name: 'Lecture Screen',
              description: 'The lecture default screen',
              screen: LectureScreen,
            },
            Score: {
                name: 'Score Screen',
                description: 'The score default screen',
                screen: ScoreScreen,
            },
            Attendance: {
              name: 'Attendance Screen',
              description: 'The attendance default screen',
              screen: AttendanceScreen,
            },
            AttendanceCalendar: {
              name: 'Attendance Calendar Screen',
              description: 'The calendar of the attendance',
              screen: AttendanceCalendarScreen,
            },
            LeaveApplication: {
              name: 'Leave application Screen',
              description: 'The leave application',
              screen: LeaveApplicationScreen,
            },
            LeaveApproval: {
              name: 'Leave approval Screen',
              description: 'The approval list of the applications',
              screen: LeaveApprovalScreen,
            },
            LeaveApprovalDetail: {
              name: 'Leave approval detail screen',
              description: 'The detail screen of a leaving approval',
              screen: LeaveApprovalDetailScreen,
            },
            Notice: {
              name: 'Notice Screen',
              description: 'The notice default screen',
              screen: NoticeScreen,
            },
            Advertisement: {
              name: 'Advertisement Screen',
              description: 'The advertisement default screen',
              screen: AdvertisementScreen,
            },
            AdvertisementDetail: {
              name: 'AdvertisementDetail Screen',
              description: 'The advertisement detail screen',
              screen: AdvertisementDetailScreen,
            },
            Trace: {
              name: 'Trace Screen',
              description: 'The app trace screen',
              screen: TraceScreen
            },
            Location: {
              name: 'Current Location',
              description: 'The child current location',
              screen: LocationScreen
            },
            AlertZone: {
              name: 'Alert zone Screen',
              description: 'The app alert zone screen',
              screen: AlertZoneScreen
            },
            Archive: {
                name: 'Archive Screen',
                description: 'The archive default screen',
                screen: ArchiveScreen,
            },
            Album:{
              name: 'Album Screen',
              description: 'The Album Screen',
              screen: AlbumScreen,
            },
            AlbumList:{
              name: 'Album list Screen',
              description: 'The Album list Screen',
              screen: AlbumListScreen,
            },
            AlbumDisplay:{
              name: 'Album Display Screen',
              description: 'The Album Display Screen',
              screen: AlbumDisplayScreen,
            },
            News:{
              name: 'News Screen',
              description: 'The news Screen',
              screen: NewsScreen,
            },
            NewsDetail:{
              name: 'News Detail Screen',
              description: 'The news Detail Screen',
              screen: NewsDetailScreen,
            },
            Task:{
              name: 'Task Index',
              description: 'new task?',
              screen: TaskScreen,
            },
        };

        const stackNavigatorConfig = {
            headerMode: 'screen',
            mode: 'card',
            initialRouteName: 'Task'
        };

        const AppNavigator = StackNavigator(
            stackNavigatorRoutes,
            stackNavigatorConfig
        );

        return (
            <AppNavigator />
        );
    }
}

export default StartUpApp;

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
    }
});
