import React, { Component } from 'react'
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Dimensions
} from 'react-native'
import Swiper from 'react-native-swiper';
import PhotoView from 'react-native-photo-view';
import Icon from 'react-native-vector-icons/Ionicons';
const { width, height } = Dimensions.get('window')

var styles = {
  wrapper: {
    backgroundColor: '#000',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  photo: {
    width,
    height,
    flex: 1
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  },
  thumbWrap: {
    marginTop: 100,
    borderWidth: 5,
    borderColor: '#000',
    flexDirection: 'row'
  },
  thumb: {
    width: 50,
    height: 50
  },
  container:{
    flex:0,
  },
  top: {
      flex: 0,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent:'center',
      backgroundColor: '#fff',
      height: 32,
      borderBottomWidth: 2,
      borderBottomColor: '#E9E4DB',
      marginTop:17,
  },
  topLeft: {
      justifyContent: 'center',
      alignItems: 'center',
      marginLeft: 10 ,
  },
  topRight: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',

  },
  topRightIcon:{
      flex: 0,
      justifyContent: 'center',
      alignItems: 'center',
      // marginRight: -40 * onePT,
      // marginLeft: -45 * onePT,
  },
  topImg:{
      width: 25,
      height: 13,
      marginRight: 8,
  },
  topTitle: {
      color: '#8B8970',
      textAlign: 'center',
      fontSize: 20,
      fontFamily: 'Cochin',

  },
}

const renderPagination = (index, total, context) => {
  return (
    <View style={{
      position: 'absolute',
      justifyContent: 'center',
      alignItems: 'center',
      top: 25,
      left: 0,
      right: 0
    }}>
      <View style={{
        borderRadius: 7,
        backgroundColor: 'rgba(255,255,255,.15)',
        padding: 3,
        paddingHorizontal: 7
      }}>
        <Text style={{
          color: '#fff',
          fontSize: 14
        }}>{index + 1} / {total}</Text>
      </View>
    </View>
  )
}

const Viewer = props => <Swiper index={props.index} style={styles.wrapper} renderPagination={renderPagination}>
  {
    imgList.map((item, i) => <View key={i} style={styles.slide}>
      <TouchableWithoutFeedback onPress={e => props.pressHandle()}>
        <PhotoView
          source={{uri: imgList[i]}}
          resizeMode='contain'
          minimumZoomScale={0.5}
          maximumZoomScale={3}
          androidScaleType='center'
          style={styles.photo} />
      </TouchableWithoutFeedback>
    </View>)
  }
</Swiper>
var imgList = [
  'http://p10.qhimg.com/t019e9cf51692f735be.jpg',
    'http://ww2.sinaimg.cn/mw690/714a59a7tw1dxqkkg0cwlj.jpg',
    'http://www.bz55.com/uploads/allimg/150122/139-150122145421.jpg'
];
export default class AlbumList extends Component {
  constructor (props) {
    super(props)
    this.state = {

      showViewer: true,
      showIndex: 0
    }
    this.viewerPressHandle = this.viewerPressHandle.bind(this)
    this.thumbPressHandle = this.thumbPressHandle.bind(this)
  }
  static navigationOptions = {
      header: null,
      // very important, this is only used when you don't want to go back
      // in a StackNavigator
      cardStack: {
          gesturesEnabled: false
      }
  }

  viewerPressHandle () {
    this.setState({
      showViewer: false
    })
  }
  thumbPressHandle (i) {
    this.setState({
      showIndex: i,
      showViewer: true
    })
  }
  render () {
    const { navigation } = this.props;
    return (

      <View style={styles.container}>
      <View style={styles.top}>
          <View style={styles.topLeft}>
              <TouchableOpacity
                  onPress={() => {
                      navigation.navigate('AlbumDisplay')
                  }}
              >
                  <Icon name="ios-arrow-back-outline" color="blue" size={30} ></Icon>
              </TouchableOpacity>
          </View>

          <View style={styles.topRight}><Text style={styles.topTitle}>王小丫的相册
          </Text></View>

      </View>
        <View style={{position: 'relative'}}>
        {this.state.showViewer && <Viewer
          index={this.state.showIndex}
          pressHandle={this.viewerPressHandle}
          imgList={imgList} />}
        <View style={styles.thumbWrap}>
          {
            imgList.map((item, i) => <TouchableOpacity key={i} onPress={e => this.thumbPressHandle(i)}>
              <Image style={styles.thumb} source={{uri: imgList[i]}} />
            </TouchableOpacity>)
          }
        </View>
      </View>
    </View>
    )
  }
}
