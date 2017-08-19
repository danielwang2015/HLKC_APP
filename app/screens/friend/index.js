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
    header: null,
  };

  constructor(props) {
    super(props);
  }

  render() {
    const { navigation } = this.props;

    return(
      <View style={styles.container}>
        <ScrollView>
          <Text>Friend</Text>
        </ScrollView>
        <SchoolTabNav
          navigation={navigation}
          screenName={navigation.state.routeName}
        />
      </View>
    );
  }
}

export default Friend;
