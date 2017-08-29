import React, { Component } from 'react';
import {
  AsyncStorage,
  Text,
  View,
  Image,
} from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';

import { LOCAL_ACCESS_TOKEN_NAME } from '../../common/config';
import * as appActions from '../../actions';
import styles from './style';

class LaunchScreen extends Component {
  static navigationOptions = {
    header: null,
  }

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { navigation, actions } = this.props;
    const { refreshJwtToken } = actions;

    AsyncStorage.getItem(LOCAL_ACCESS_TOKEN_NAME).then((value) => {

      // setTimeout(() => navigation.navigate('SignIn'), 1000);

      if (value) {
        refreshJwtToken();
      } else {
        const resetAction = NavigationActions.reset({
          index: 0,
          actions: [
            NavigationActions.navigate({ routeName: 'SignIn'})
          ]
        });

        setTimeout(() => navigation.dispatch(resetAction), 1000);
      }
    });
  }

  componentWillReceiveProps(nextProps) {
    const { navigation, state } = nextProps;
    if (state.access_token) {
      const resetAction = NavigationActions.reset({
        index: 0,
        actions: [
          NavigationActions.navigate({ routeName: 'Home'})
        ]
      });

      setTimeout(() => navigation.dispatch(resetAction), 1000);
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Image source={require('../../images/Album/Launch02.png')} 
        style={styles.lunchImage}></Image>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    state: state.sign
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(appActions.actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LaunchScreen);
