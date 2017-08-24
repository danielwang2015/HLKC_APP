import React, { Component } from 'react';
import {
  Image,
  ScrollView,
  Text,
  View,
} from 'react-native';

import styles from './style';
import SchoolTabNav from '../../components/schoolTabNav';

class Friend extends Component {
  static navigationOptions = {
    title: '任务',
  };

  constructor(props) {
    super(props);
  }

  render() {
    const { navigation } = this.props;

    return(
      <View style={styles.container}>
        <View style={styles.main}>
          <Text>
            任务列表
          </Text>
          <Text>
            新建任务 | 采样指导
          </Text>
        </View>
        <SchoolTabNav
          navigation={navigation}
          screenName={navigation.state.routeName}
        />
      </View>
    );
  }
}

export default Friend;
