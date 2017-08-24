import React, { Component } from 'react';
import {
    StyleSheet,
    TouchableHighlight,
    TouchableOpacity,
    Text,
    View,
    Image,
    ListView
} from 'react-native';
import styles from './style';

import imgUnread from '../../images/notice/unread.png'

export default
class Notice extends Component {
    static navigationOptions = {
        title: '团队',
    };

    constructor(props) {
        super(props);

        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows(this._genRows()),
        };
    }

    _genRows() {
        const dataBlob = [];
        for (let i = 0; i < 5; i++) {
            dataBlob.push("NAME" + i);
        }
        return dataBlob;
    }

    _pressRow(rowID) {
        alert("hellow" + rowID);
    }

    _renderRow(rowData, sectionID, rowID) {
        return (
            <TouchableOpacity onPress={()=>this._pressRow(rowID)}>
                <View style={styles.ntbox}>
                    <View style={styles.ntleftimg}>
                        <Image
                            style={styles.ntimg}
                            source={imgUnread}
                            />
                    </View>
                    <View>
                        <View style={styles.ntrightcontent}>
                            <Text style={styles.nttitle}>{rowData}</Text>
                            <Text style={styles.nttime}>05-17</Text>
                        </View>
                        <Text style={styles.subject}>杨浦区少年宫组织2017年合唱比赛, 共有全区29个合唱队伍参加比赛...</Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }

    render() {
        const { navigation } = this.props;

        return (
            <View style={{flex:1,}}>
                <ListView dataSource={this.state.dataSource} renderRow={this._renderRow.bind(this)}/>
            </View>
        );
    }
} ;
