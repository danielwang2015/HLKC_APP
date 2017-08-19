import React, { Component } from 'react';
import {
  Image,
  ListView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Modal from 'react-native-modalbox';

import * as appActions from '../../actions';
import styles from './style';
import FilterIcon from '../../images/icons/filter.png';
import AdImage1 from '../../images/advertisement/01.png';
import AdImage2 from '../../images/advertisement/02.png';

class Advertisement extends Component {
  static navigationOptions = {
    title: '广告',
    headerBackTitle: null,
  };

  constructor(props) {
    super(props);
    this._viewDetail = this._viewDetail.bind(this);
  }

  componentDidMount() {
    const { actions } = this.props;
    const { getAdvertisementList } = actions;
    getAdvertisementList();
  }

  render() {
    const { advList } = this.props;
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    const dataSource = ds.cloneWithRows(advList);

    return (
      <View style={styles.container}>
        {/*<View style={styles.filterWrapper}>
          <View style={[styles.filter, styles.filterCol1]}>
            <Text style={styles.filterText}>筛选</Text>
            <TouchableOpacity
              onPress={() => this.refs.filterModal.open()}
            >
              <Image
                style={styles.filterIcon}
                source={FilterIcon}
              />
            </TouchableOpacity>
          </View>
          <View style={[styles.filter, styles.filterCol2]}>
            <Text style={styles.filterText}>种类</Text>
            <TouchableOpacity
              onPress={() => this.refs.categoryModal.open()}
            >
              <Image
                style={styles.filterIcon}
                source={FilterIcon}
              />
            </TouchableOpacity>
          </View>
          <View style={[styles.filter, styles.filterCol3]}>
            <Text style={styles.filterText}>智能排序</Text>
            <TouchableOpacity
              onPress={() => this.refs.sortModal.open()}
            >
              <Image
                style={styles.filterIcon}
                source={FilterIcon}
              />
            </TouchableOpacity>
          </View>
        </View>*/}
        <ListView
          style={styles.listWrapper}
          dataSource={dataSource}
          renderRow={this._renderRow.bind(this)}
          enableEmptySections
        />
        <Modal
          style={styles.modal}
          position={'bottom'}
          ref={'filterModal'}
          animationDuration={400}
        >
          <View style={styles.modalHeaderWrapper}>
            <Text style={styles.modalHeaderText}>筛选</Text>
          </View>
        </Modal>
        <Modal
          style={styles.modal}
          position={'bottom'}
          ref={'categoryModal'}
          animationDuration={400}
        >
          <View style={styles.modalHeaderWrapper}>
            <Text style={styles.modalHeaderText}>种类</Text>
          </View>
        </Modal>
        <Modal
          style={styles.modal}
          position={'bottom'}
          ref={'sortModal'}
          animationDuration={400}
        >
          <View style={styles.modalHeaderWrapper}>
            <Text style={styles.modalHeaderText}>智能排序</Text>
          </View>
        </Modal>

      </View>
    );
  }

  _renderRow(rowData: string, sectionID: number, rowID: number,
    highlightRow: (sectionID: number, rowID: number) => void) {
    return (
      <TouchableOpacity
        onPress={() => this._viewDetail(rowData.n_ID)}
        style={styles.rowWrapper}
      >
        <Text style={styles.publishTimeText}>{rowData.publishTime}</Text>
        <Image
          style={styles.adImage}
          resizeMode={'stretch'}
          source={{ uri: rowData.n_ImgSrc }}
        />
        <View style={styles.abstractWrapper}>
          <Text style={styles.titleText}>{rowData.n_Title}</Text>
          <Text style={styles.contentText}>{rowData.n_Content}</Text>
        </View>
      </TouchableOpacity>
    );
  }

  _viewDetail(id) {
    console.log('onPress ===========>', id, this.props);
    const { navigation } = this.props;
    navigation.navigate('AdvertisementDetail', { advId: id });
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

export default connect(mapStateToProps, mapDispatchToProps)(Advertisement);
