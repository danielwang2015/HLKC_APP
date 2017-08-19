import React, { Component } from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { NavigationActions } from 'react-navigation';

import styles from './style';
import SchoolIcon from '../../images/icons/school.png';
import FriendIcon from '../../images/icons/friend.png';
import AddrBookIcon from '../../images/icons/addr_book.png';
import ChatIcon from '../../images/icons/chat.png';

export default class SchoolTabNav extends Component {
  constructor(props) {
    super(props);

    const { screenName, navigation } = this.props;
    this.screenName = screenName;
    this.navigation = navigation;

    this.resetChatAction = NavigationActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({ routeName: 'Home'})
      ]
    });

    this.resetAddrBookAction = NavigationActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({ routeName: 'AddrBook'})
      ]
    });

    this.resetFriendAction = NavigationActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({ routeName: 'Friend'})
      ]
    });

    this.resetSchoolAction = NavigationActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({ routeName: 'School'})
      ]
    });

  }

  render() {
    return(
      <View style={styles.tabNavWrapper}>
        <TouchableOpacity
          style={styles.cell}
          onPress={() => {
            if (this.screenName !== 'Chat') {
              this.navigation.dispatch(this.resetChatAction);
            }
          }}
        >
          <Image style={styles.tabIcon} source={ChatIcon} />
          <Text style={styles.iconLabel}>首页</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.cell}
          onPress={() => {
            if (this.screenName !== 'AddrBook') {
              this.navigation.dispatch(this.resetAddrBookAction);
            }
          }}
        >
          <Image style={styles.tabIcon} source={AddrBookIcon} />
          <Text style={styles.iconLabel}>通讯录</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.cell}
          onPress={() => {
            if (this.screenName !== 'Friend') {
              this.navigation.dispatch(this.resetFriendAction);
            }
          }}
        >
          <Image style={styles.tabIcon} source={FriendIcon} />
          <Text style={styles.iconLabel}>朋友圈</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.cell}
          onPress={() => {
            if (this.screenName !== 'School') {
              this.navigation.dispatch(this.resetSchoolAction);
            }
          }}
        >
          <Image style={styles.tabIcon} source={SchoolIcon} />
          <Text style={styles.iconLabel}>我的</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
