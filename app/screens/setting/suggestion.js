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
class Suggestion extends Component {
    static navigationOptions = {
        title: '意见反馈',
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
                    <TouchableHighlight>
                        <View>
                            <TextInput
                              style={{
                                fontSize: 16,
                                height: 400,
                              }}
                              multiline={true}
                              numberofLines={100}
                              placeholder={'请输入您的意见或建议...'}
                            />
                            <TouchableOpacity
                              onPress={() => Alert.alert('提示','信息已提交，感谢您对我们工作的支持！')}
                            >
                              <View style={styles.listitem2}>
                                <Text style={styles.button}>提交</Text>
                              </View>
                            </TouchableOpacity>
                        </View>
                    </TouchableHighlight>
                </View>
            </View>
        );
    }
} ;
