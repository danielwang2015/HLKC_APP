import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    ListView,
    StyleSheet,
    TouchableHighlight,
    Image,
    Platform,
} from 'react-native';
import ImagePicker from 'react-native-image-picker'; //第三方相机
import Icon from 'react-native-vector-icons/Ionicons';
var THUMB_URLS = [
    require('../../images/Album/CA_bg1.jpg'),
    require('../../images/Album/CA_bg2.jpg'),
    require('../../images/Album/CA_bg3.jpg'),

];
var photoOptions = {
    //底部弹出框选项
    title: '请选择',
    cancelButtonTitle: '取消',
    takePhotoButtonTitle: '拍照',
    chooseFromLibraryButtonTitle: '选择相册',
    quality: 0.75,
    allowsEditing: true,
    noData: false,
    storageOptions: {
        skipBackup: true,
        path: 'images'
    }
}

export default class Display extends Component {

    static navigationOptions = {
        header: null,
        // very important, this is only used when you don't want to go back
        // in a StackNavigator
        cardStack: {
            gesturesEnabled: false
        }
    }

    constructor(props) {
        super(props);

        var ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.state = {
            dataSource: ds.cloneWithRows(this._genRows()),
            avatarSource: null,
            Show: true,
            ImageData: null,
            Platform: null,
            isVisible:false,
        };


    }

    _genRows() {
        var dataBlob = [];
        for (var ii = 0; ii < THUMB_URLS.length; ii++) {
            dataBlob.push('单元格 ' + ii);
        }

        return dataBlob;
    }

    _pressRow() {
        //const {navigator} =this.props;
        alert('t');
    }



    _renderRow(rowData, sectionID, rowID) {
        const { navigation } = this.props;

        var imgSource = THUMB_URLS[rowID];
        return (
            <TouchableHighlight onPress={() => { navigation.navigate('AlbumList') }}  >
                <View style={styles.row}>
                    <Image style={styles.thumb} source={imgSource} />
                </View>
            </TouchableHighlight>
        );
    }


    render() {
        const { navigation } = this.props;

        return (
            <View style={styles.container}>
                <View style={styles.top}>
                    <View style={styles.topLeft}>
                        <TouchableOpacity
                            onPress={() => {
                                navigation.navigate('Album')
                            }}>
                            <Icon name="ios-arrow-back-outline" color="blue" size={30}></Icon>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.topRight}>
                        <Text style={styles.topTitle}>王小丫的相册</Text>
                    </View>
                    <View style={styles.camera}>

                        <TouchableOpacity onPress={() => this.openMycamera()}>
                            <Icon name="ios-camera" color="rgba(0,0,0,1)" size={30} ></Icon>
                        </TouchableOpacity>

                    </View>
                </View>
                {
                  this.state.isVisible ? <View style={styles.row}>
                      <Image source={this.state.avatarSource} style={styles.thumb} />
                  </View> : null
                }
                <View>
                    <ListView
                        initialListSize={6}
                        contentContainerStyle={styles.list}
                        dataSource={this.state.dataSource}
                        renderRow={this._renderRow.bind(this)}
                        Navigator={navigation}
                    />
                </View>
            </View>
        );
    }

    openMycamera = () => {
        var source;
        ImagePicker.showImagePicker(photoOptions, (response) => {
            console.log('response' + response);
            if (response.didCancel) {
                return
            }
            else {
                this.state.Show = true;
                this.state.ImageData = response.data;
            } console.log('Response = ', response);

            if (response.didCancel) {
                console.log('User cancelled image picker');
            }
            else if (response.error) {
                console.log('ImagePickerManager Error: ', response.error);
            }
            else if (response.customButton) {
                // 这是当用户选择customButtons自定义的按钮时，才执行
                console.log('User tapped custom button: ', response.customButton);
            }
            else {
                let source = { uri: response.uri };

                this.setState({
                    avatarSource: source,
                    isVisible: true,
                });
            }
        })
    }
}

var styles = StyleSheet.create({
    container: {
        flex: 0,
    },
    list: {
        flex: 0,
    },
    row: {
        flex: 0,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 15,
    },
    thumb: {
        width:280,
        height:350,
    },

    text: {
        flex: 1,
        marginTop: 5,
        fontWeight: 'bold'
    },
    top: {
        flex: 0,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        height: 32,
        borderBottomWidth: 2,
        borderBottomColor: '#E9E4DB',
        marginTop: 17,
    },
    topLeft: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
    },
    topRight: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    },
    topRightIcon: {
        flex: 0,
        justifyContent: 'center',
        alignItems: 'center',
        // marginRight: -40 * onePT,
        // marginLeft: -45 * onePT,
    },
    topImg: {
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
    camera: {
        flex: 0,
        flexDirection: 'column',
        marginRight: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
