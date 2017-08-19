import React, { Component } from 'react';
import {
    StyleSheet,
    TouchableHighlight,
    Text,
    View,
    ListView
} from 'react-native';
import styles from './style';

export default
class OnlineService extends Component {
    static navigationOptions = {
        title: '在线客服',
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
                    <TouchableHighlight>
                        <View style={styles.listitem}>
                            <View style={styles.title}>
                                <Text style={styles.text}>
                                    拨打客服电话
                                </Text>
                            </View>
                            < View style={styles.array}>
                                <Text style={styles.text}>
                                    8008808888
                                </Text>
                            </View>
                        </View>
                    </TouchableHighlight>

                </View>
            </View>
        );
    }
} ;
