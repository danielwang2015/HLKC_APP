import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    Image,
    TouchableOpacity,
    TouchableHighlight,
    View,
    Alert,
    PixelRatio,
    ScrollView,
    TextInput,

} from 'react-native';
import HeadBack from '../../components/BackMenu'
import styles from './style'
var bg_imgs = [
  require('../../images/Album/CA_bg1.jpg'),
  require('../../images/Album/CA_bg2.jpg'),
  require('../../images/Album/CA_bg3.jpg'),
  require('../../images/Album/CA_bg4.jpg'),
  require('../../images/Album/CA_bg5.jpg'),
  require('../../images/Album/CA_bg6.jpg'),
];

var folder_bg= [
  require('../../images/Album/ImgFolder_1.jpg'),
  require('../../images/Album/ImgFolder_2.jpg'),
  require('../../images/Album/ImgFolder_3.jpg'),
  require('../../images/Album/ImgFolder_4.jpg'),
  require('../../images/Album/ImgFolder_5.jpg'),
  require('../../images/Album/ImgFolder_6.jpg'),
];

export default class Index extends Component {
    static navigationOptions = {
        title: '相册',
        headerBackTitle: null,
    };

    constructor(props) {
        super(props);

    }

    getAlbum(){
      alert('test','msg');
    }



    render() {
      const { navigation } = this.props;

        return (
            <ScrollView style={styles.container}>
               <View style={styles.CA_BackGround}>

              <View >
              <TouchableHighlight onPress={() => {
                  navigation.navigate('AlbumDisplay', { name: 'First Album' })
                }}>
                <View style={styles.CA_BackGroundRow}>
                  <Text >一年级一班相册</Text>
                  <Image source={folder_bg[5]} style={styles.CA_Image} >
                    <Image source={require('../../images/Album/Pic1.jpg')} style={styles.folderPic} />
                  </Image>
                </View>
                </TouchableHighlight>
              </View>
              <View>
              <TouchableHighlight onPress={() => {
                  navigation.navigate('AlbumDisplay', { name: 'Second Album' })
                }}>
                <View style={styles.CA_BackGroundRow}>
                  <Text >二年级一班相册</Text>
                  <Image source={folder_bg[5]} style={styles.CA_Image} >
                    <Image source={require('../../images/Album/Pic2.jpg')} style={styles.folderPic} />
                  </Image>
                </View>
                </TouchableHighlight>
              </View>
              </View>
              <View style={styles.CA_BackGround}>
              <View >
              <TouchableHighlight onPress={() => {
                  navigation.navigate('AlbumDisplay', { name: 'First Album' })
                }}>
                <View style={styles.CA_BackGroundRow}>
                  <Text >三年级一班相册</Text>
                  <Image source={folder_bg[5]} style={styles.CA_Image} >
                    <Image source={require('../../images/Album/Pic2.jpg')} style={styles.folderPic} />
                  </Image>
                </View>
                </TouchableHighlight>
              </View>
              <View>
              <TouchableHighlight onPress={() => {
                  navigation.navigate('AlbumDisplay', { name: 'four Album' })
                }}>
                <View style={styles.CA_BackGroundRow}>
                  <Text >四年级一班相册</Text>
                  <Image source={folder_bg[5]} style={styles.CA_Image} >
                    <Image source={require('../../images/Album/Pic5.jpg')} style={styles.folderPic} />
                  </Image>
                </View>
                </TouchableHighlight>
              </View>
              </View>
              <View style={styles.CA_BackGround}>
              <View>
              <TouchableHighlight onPress={() => {
                  navigation.navigate('AlbumDisplay', { name: 'four Album' })
                }}>
                <View style={styles.CA_BackGroundRow}>
                  <Text >五年级一班相册</Text>
                  <Image source={folder_bg[5]} style={styles.CA_Image} >
                    <Image source={require('../../images/Album/Pic5.jpg')} style={styles.folderPic} />
                  </Image>
                </View>
                </TouchableHighlight>
              </View>
              <View>
              <TouchableHighlight onPress={() => {
                  navigation.navigate('AlbumDisplay', { name: 'four Album' })
                }}>
                <View style={styles.CA_BackGroundRow}>
                  <Text >六年级一班相册</Text>
                  <Image source={folder_bg[5]} style={styles.CA_Image} >
                    <Image source={require('../../images/Album/Pic5.jpg')} style={styles.folderPic} />
                  </Image>
                </View>
                </TouchableHighlight>
              </View>
              </View>
            </ScrollView>
        );
    }
}
