import React, { Component } from 'react';
import {
  InteractionManager,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
    KeyboardAwareScrollView,
} from 'react-native-keyboard-aware-scroll-view';
import {TextInputLayout} from 'rn-textinputlayout';

import * as appActions from '../../actions';
import styles from './style';

class SignIn extends Component {

  static navigationOptions = {
    header: null,
    title: 'Sign In'
  }

  constructor(props) {
    super(props);

    this.state = {};

    this.inputs = {
      userName: '',
      password: '',
    };

    this._redirect = this._redirect.bind(this);
    this._changeText = this._changeText.bind(this);
  }

  componentWillUpdate(nextProps, nextState) {
    if (nextProps.state.access_token) {
      this._redirect();
    }
  }

  render() {
    const { navigation, actions } = this.props;
    const { signInRequest } = actions;

    return (
      <View style={styles.container}>
        <KeyboardAwareScrollView>
          <View style={styles.mainContainer}>
            <View style={styles.inputGroupWrapper}>
              <TextInputLayout style={{marginTop: 20}} focusColor={'#46B3D6'}>
                <TextInput
                  style={{
                    fontSize: 16,
                    height: 40,
                  }}
                  placeholder={'请填手机号码'}
                  onChangeText={value => this._changeText('userName', value)}
                />
              </TextInputLayout>
              <TextInputLayout style={{marginTop: 20}} focusColor={'#46B3D6'}>
                <TextInput
                  style={{
                      fontSize: 16,
                      height: 40,
                  }}
                  secureTextEntry={true}
                  placeholder={'请填写密码'}
                  onChangeText={value => this._changeText('password', value)}
                />
              </TextInputLayout>
            </View>
            <TouchableOpacity
              onPress={() => signInRequest(this.inputs)}
            >
              <View style={styles.buttonWrapper}>
                <Text style={styles.buttonText}>登录</Text>
              </View>
            </TouchableOpacity>
          </View>
        </KeyboardAwareScrollView>
      </View>
    );
  }

  _redirect() {
    const { navigation, dispatch } = this.props;
    InteractionManager.runAfterInteractions(() => {
      navigation.navigate('Home');
    });
  }

  _changeText(propName, newState) {
    this.inputs = {
      ...this.inputs,
      [propName]: newState,
    };
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

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
