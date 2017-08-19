import React, { Component } from 'react';
import {
    Image,
    StyleSheet,
    TouchableHighlight,
    Text,
    View,
    TextInput,
    ListView,
    Alert,
    TouchableOpacity
} from 'react-native';
import styles from './style';

import ImgAvatar from './../../images/settings/child1.png'

export default
class ChangePwd extends Component {
    static navigationOptions = {
        title: '修改密码',
    };

    constructor(props) {
        super(props);

        this._changeText = this._changeText.bind(this);
    }

    _changeText(propName, newState) {
        this.inputs = {
          ...this.inputs,
          [propName]: newState,
        };
    }
    render() {
        const { navigation } = this.props;

        return (
            <View
                style={styles.container}>
                <View>
                          <View style={{marginTop:20}}>
                          </View>
                          <View style={styles.list}>
                            <TextInput
                               style={styles.ti}
                              placeholder={'请输入原密码'}
                              editable={true}
                            />
                          </View>
                          <View style={styles.list}>
                            <TextInput
                              style={styles.ti}
                              placeholder={'请输入新密码'}
                            />
                          </View>
                          <View style={styles.list}>
                            <TextInput
                              style={styles.ti}
                              placeholder={'请再输入新密码'}
                            />
                          </View>
                            <TouchableOpacity
                              onPress={() => Alert.alert('提示','您的密码已经修改成功！')}
                            >
                              <View style={styles.listitem2}>
                                <Text style={styles.button}>提交</Text>
                              </View>
                            </TouchableOpacity>
                </View>
            </View>
        );
    }
} ;
