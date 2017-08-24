import React, { Component } from 'react';
import {
    Image,
    ScrollView,
    Text,
    View,
} from 'react-native';

import styles from './style';
import SchoolTabNav from '../../components/schoolTabNav';

class AlertZone extends Component {
    static navigationOptions = {
        title: '团队',
    }

    constructor(props) {
        super(props);
    }


  render() {
    const { navigation } = this.props;

    return(
      <View style={styles.container}>
        <View style={styles.main}>
          <Text>
            团队列表
          </Text>
          <Text>
          </Text>
        </View>
        <SchoolTabNav
          navigation={navigation}
          screenName={navigation.state.routeName}
        />
      </View>
    );
  }
};

export default AlertZone;