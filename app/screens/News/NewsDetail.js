import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    Image,
    Navigator,
    TouchableOpacity,
    TouchableHighlight,
    View,
    Alert,
    PixelRatio,
    ScrollView,
    ListView,
} from 'react-native';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Modal from 'react-native-modalbox';

import * as appActions from '../../actions';

class NewsDetail extends Component {
    static navigationOptions = {
        title: '新闻',
        headerBackTitle: null,
    };


    constructor(props) {
        super(props);
        console.log("news ID: " + this.props.navigation.state.params["newsID"]);
    }
    componentWillMount() {
        const { actions } = this.props;
        const { getAdvertisementBYID } = actions;
        getAdvertisementBYID();
    }

    render() {
        return (
            <ScrollView style={styles.container}>

                <View style={styles.rowView}>
                    <View style={styles.ListRow}>
                        <Image source={{ uri: "http://www.isupcore.com/images/qinzi.png" }} style={styles.rowImage} />
                        <View style={styles.rowTitleSup}>
                            <Text style={styles.rowTitle}>我校举行2017届新生教育活动</Text>

                        </View>
                    </View>
                </View>
                <View>
                    <Text style={styles.rowContent}>
                        &nbsp;&nbsp;&nbsp;&nbsp;每年3月最后一个星期一是全国中小学生“安全教育日”。研究部门公布的调查资料显示：安全事故已成为14岁以下少年儿童的“第一杀手”。

　　                </Text>
                    <Text style={styles.rowContent}>
                        &nbsp;&nbsp;&nbsp;&nbsp;现在，中小学生意外伤害事故时有发生，有关专家指出，通过安全教育和预防，
                        提高学生的自我保护能力，有80%以上的意外伤害事故可以避免。为了保障学生安全和健康成长，应当大力开展安全教育并尽快制定《校园安全法》。
                         据调查，涉及学校青少年生活和学习方面的安全隐患达20多种，包括食物中毒、
                         体育运动损伤、网络交友、交通事故、火灾、溺水等，这些都危害着青少年身心健康。
                         调查结果还表明，家长担心孩子受到伤害的地方依次为：学校(51.44%)，
                         公共场所(36.32%)，自然环境(10.44%)，家里(1.8%)，其中学校是家长们最担心孩子受到伤害的地方。调查分析认为，学生在校受到伤害事故中，
                         相当一部分是由于学校防范意识不强、安全管理措施不到位、设施条件差造成的，
                         也有由于学生自身行为不当造成的。
                         为了保障学生安全和健康成长，应当大力开展安全教育并尽快制定《校园安全法》。
                         据调查，涉及学校青少年生活和学习方面的安全隐患达20多种，包括食物中毒、
                         体育运动损伤、网络交友、交通事故、火灾、溺水等，这些都危害着青少年身心健康。
                         调查结果还表明，家长担心孩子受到伤害的地方依次为：学校(51.44%)，
                         公共场所(36.32%)，自然环境(10.44%)，家里(1.8%)，其中学校是家长们最担心孩子受到伤害的地方。调查分析认为，学生在校受到伤害事故中，
                         相当一部分是由于学校防范意识不强、安全管理措施不到位、设施条件差造成的，
                         也有由于学生自身行为不当造成的。</Text>
                </View>

            </ScrollView>
        );
    }
}
function mapStateToProps({ advertisement }) {
    return {
        advList: advertisement.advList ? advertisement.advList : []
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(appActions.actions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(NewsDetail);

const styles = StyleSheet.create({
    container: {
        flex: 0,
        flexDirection: 'column',
        backgroundColor: '#ffffff',

    },
    Header: {
        height: 40,
        flex: 0,
        borderBottomWidth: 5,
        borderBottomColor: 'rgba(226,224,225,0.8)',
    },
    ListRow: {
        alignItems: 'center',
    },
    rowView: {
        height: 200,
        flexDirection: 'column',
        justifyContent: "center",
        alignItems: 'center',
    },
    rowImage: {
        width: 350,
        height: 150
    },
    rowTitleSup: {
        height: 44,
        justifyContent: 'center',
        alignItems: 'center',

    },
    rowTitle: {
        fontSize: 16,
        justifyContent: 'center',
        alignItems: 'center',
    },
    rowContent: {
        fontSize: 16,
        flexWrap: 'wrap',
        marginLeft: 5,
        marginRight: 5,
    },
});
