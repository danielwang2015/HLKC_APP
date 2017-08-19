import React, { Component } from 'react';
import {
  Image,
  ScrollView,
  Text,
  View,
} from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as appActions from '../../actions';
import styles from './style';

class AdvertisementDetail extends Component {
  static navigationOptions = {
    title: '详情'
  };

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { navigation } = this.props;
    console.log('advertisement detail===========>', navigation.state.params.advId);
  }

  render() {
    return (
      <View style={[styles.container, styles.detailContentWrapper]}>
        <ScrollView>
          <Image
            style={styles.adImage}
            resizeMode={'stretch'}
            source={{uri: 'http://www.isupcore.com/images/qinzi.png'}}
          />
          <Text style={styles.detailContentText}>我校举行2017届新生教育活动。每年3月最后一个星期一是全国中小学生“安全教育日”。研究部门公布的调查资料显示：安全事故已成为14岁以下少年儿童的“第一杀手”。</Text>
        </ScrollView>
      </View>
    );
  }
}

function mapStateToProps({advertisement}) {
  return {
    advList: advertisement.advList ? advertisement.advList : []
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(appActions.actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AdvertisementDetail);

