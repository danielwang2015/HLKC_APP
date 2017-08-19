import React, { Component } from 'react';
import {
    Image,
    StyleSheet,
    TouchableHighlight,
    Text,
    View,
    ListView
} from 'react-native';
import styles from './style';

import ImgAvatar from './../../images/settings/child1.png'

export default
class Hardware extends Component {
    static navigationOptions = {
        title: '硬件升级',
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
                                    版本更新
                                </Text>
                            </View>
                            <View style={styles.array}>
                                <Text style={styles.text}>
                                    Version 1.0.56
                                </Text>
                            </View>
                        </View>
                    </TouchableHighlight>

                </View>
            </View>
        );
    }
} ;
