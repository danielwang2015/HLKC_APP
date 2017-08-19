import React, { Component } from 'react';
import {
  Button,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as appActions from '../../actions';
import styles from './style';


class SignUp extends Component {
  static navigationOptions = {
    title: 'Sign Up',
    header: null,
    // very important, this is only used when you don't want to go back
    // in a StackNavigator
    cardStack: {
        gesturesEnabled: false
    }
  }

  constructor(props) {
    super(props);
  }

  render() {
    const { navigation, actions } = this.props;
    const { signInRequest, apiRequest } = actions;

    return (
      <View style={styles.container}>
        <Text>Sign Up Screen</Text>
        <Button
          title='SIGN UP'
          onPress={() => {
            navigation.navigate('Home')
          }}
        />
        <TouchableOpacity
          onPress={() => apiRequest({test: '11111'})}
        >
          <View><Text>Call Api With Token</Text></View>
        </TouchableOpacity>
      </View>
    );
  }
}

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

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
