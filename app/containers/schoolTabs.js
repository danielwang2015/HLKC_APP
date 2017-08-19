import React from 'react';
import {
  View,
} from 'react-native';
import {
  TabNavigator,
} from 'react-navigation';

import MySchoolScreen from '../screens/school';
import AddrBookScreen from '../screens/addr_book';
import ChatScreen from '../screens/chat';
import FriendScreen from '../screens/friend';

const tabNavigatorRoutes = {
  Chat: {
    screen: ChatScreen,
  },
  AddrBook: {
    screen: AddrBookScreen,
  },
  Friend: {
    screen: FriendScreen,
  },
  School: {
    screen: MySchoolScreen,
  },
};

const tabNavigatorConfig = {
  initialRouteName: 'School',
  tabBarOptions: {
    activeTintColor: '#7D7D7D',
    labelStyle: {
      fontSize: 14,
      paddingBottom: 10,
    },
    style: {
      height: 100,
    },
  },
};

const SchoolTabs = TabNavigator(
  tabNavigatorRoutes,
  tabNavigatorConfig
);

export default SchoolTabs;
