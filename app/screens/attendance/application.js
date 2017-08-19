import React, { Component } from 'react';
import {
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';

import { styles, innerStyles } from './style';
import Selector from '../../components/selector';
import JxTextInput from '../../components/jxTextInput';

class LeaveApplication extends Component {
  static navigationOptions = {
    title: '请假',
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={[styles.container, {backgroundColor: '#FAFBFC'}]}>
        <View style={styles.contentWrapper}>
          <Selector
            label={'请假类型'}
            wrapperStyle={{marginBottom: 15, marginTop: 15}}
          />
          <Selector
            label={'开始时间'}
          />
          <Selector
            label={'结束时间'}
            wrapperStyle={{marginBottom: 15}}
          />
          <JxTextInput
            keyboardType={'number-pad'}
            label={'请假天数'}
            placeholder={'请输入请假天数'}
          />
          <JxTextInput
            label={'请假事由'}
            labelStyle={innerStyles.label}
            multiline={true}
            placeholder={'请输入请假事由'}
            inputTextStyle={innerStyles.inputText}
            inputWrapperStyle={innerStyles.inputWrapper}
          />
          <Selector
            label={'审批人'}
            wrapperStyle={{marginBottom: 15}}
          />

        </View>
        <TouchableOpacity style={styles.submitButton}>
          <Text style={styles.submitButtonText}>提 交</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default LeaveApplication;
