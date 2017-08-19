import React, { Component } from 'react';
import {
    StyleSheet,
    TouchableHighlight,
    Text,
    View,
    Alert,
    ListView
} from 'react-native';
import styles from './style';

export default
class Badge extends Component {
    static navigationOptions = {
        title: '校徽',
    };

    constructor(props) {
        super(props);
    }

    render() {
        const { navigation } = this.props;

        return (
            <View
                style={styles.container}>
                <View>
                    <TouchableHighlight onPress={()=>Alert.alert('提示','挂失申请已提交，稍后工作人员会与您联系')}>
                        <View style={styles.listitem}>
                            <View style={styles.title}>
                                <Text style={styles.text}>
                                    校徽挂失
                                </Text>
                            </View>
                            <View style={styles.array}>
                                <Text style={styles.text}>>
                                </Text>
                            </View>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight  onPress={()=>Alert.alert('提示','校徽由学校统一发放')}>
                        <View style={styles.listitem}>
                            <View style={styles.title}>
                                <Text style={styles.text}>
                                    校徽申请
                                </Text>
                            </View>
                            <View style={styles.array}>
                                <Text style={styles.text}>>
                                </Text>
                            </View>
                        </View>
                    </TouchableHighlight>

                </View>
            </View>
        );
    }
} ;
