import React, { Component } from 'react';
import {
  Image,
  Modal,
  ScrollView,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native';

import styles from './style';
import SchoolTabNav from '../../components/schoolTabNav';

class Chat extends Component {
  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);
  }

  state = {
    modalVisible: false,
  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  render() {
    const { navigation } = this.props;

    return(
      <View style={styles.container}>
        <ScrollView>
          <Text>Chat</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Home');
            }}
          >
            <Text>返回首页</Text>
          </TouchableOpacity>
        </ScrollView>
        <SchoolTabNav
          navigation={navigation}
          screenName={navigation.state.routeName}
        />
      </View>
      // <View style={{marginTop: 22}}>
      //   <Modal
      //     animationType={"slide"}
      //     transparent={true}
      //     visible={this.state.modalVisible}
      //     onRequestClose={() => {alert("Modal has been closed.")}}
      //     >
      //    <View style={{marginTop: 22}}>
      //     <View>
      //       <Text>Hello World!</Text>
      //
      //       <TouchableHighlight onPress={() => {
      //         this.setModalVisible(!this.state.modalVisible)
      //       }}>
      //         <Text>Hide Modal</Text>
      //       </TouchableHighlight>
      //
      //     </View>
      //    </View>
      //   </Modal>
      //
      //   <TouchableHighlight onPress={() => {
      //     this.setModalVisible(true)
      //   }}>
      //     <Text>Show Modal</Text>
      //   </TouchableHighlight>
      //
      // </View>
    );
  }
}

export default Chat;
