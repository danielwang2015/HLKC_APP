import {
    StyleSheet,
    
    PixelRatio,
    
} from 'react-native';

const onePT = PixelRatio.get();
const Dimensions = require('Dimensions');

const styles = StyleSheet.create({
    container: {
        flex: 0,
        flexDirection: 'column',
        backgroundColor: '#E9E4DB',
        //width: Dimensions.get('window').width,
        //height:Dimensions.get('window').height,
    },
    icon: {
        width: 24,
        height: 24,
    },
    top: {
        flex: 0,
        flexDirection: 'row',
        marginTop: 3,
        //backgroundColor: '#6495ED',
        height: 32,
        alignItems: 'center',
        justifyContent: 'center',
    },
    topIconLeft: {
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 6,
        marginRight: 3,
        width: 25,
        height: 28,
    },
    topIconCenter: {
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 60,
        marginRight: 40,
        width: 130,
        height: 32,
    },
    topIconRight: {
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 1,
        marginRight: 3,
        width: 34,
        height: 28,
    },
    centerItem: {
        alignItems: 'center',
        justifyContent: 'center',

    },
    topText: {
backgroundColor: 'rgba(222,215,206,0)',
        fontSize: 16,
        color: '#8B8970',
    },


    contentWrap: {
        flex: 0,
        flexDirection: 'column',
        //backgroundColor: '#12ff12',
        //alignItems : 'center',
        //justifyContent: 'center',
    },

    WebBackground: {
        flex: 0,
        //width: Dimensions.get('window').width,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        //backgroundColor: '#E9E4DB',
        //marginLeft: 2 * onePT,
        marginTop: 3,
    },
    mapBackground: {
        flex: 0,
        flexDirection: 'column',
        width: 170 * onePT,
        height: 170 * onePT,
        borderRadius: 85 * onePT,
        //overflow: 'hidden',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: -8 * onePT,
        //marginLeft : 2 * onePT,
        marginBottom: 14,
        //backgroundColor: '#E9E4DB',
    },
    WebStyle: {
        flex: 0,
        flexDirection: 'row',
        overflow: 'hidden',
        width: 180 * onePT,
        height: 180 * onePT,
        borderRadius: 90 * onePT,
        //backgroundColor: '#E9E4DB',
        marginTop: -4 * onePT,
        backgroundColor: 'rgba(222,215,206,0)',
    },

    ChildBackground: {
        flex: 0,
        flexDirection: 'row',
        //marginLeft: 3 * onePT,
        marginTop: 3 * onePT,
        justifyContent: 'center',
        alignItems: 'center',
        //paddingTop: -8 * onePT,
    },
    ChildLevel: {
        marginRight: 2 * onePT,
        justifyContent: 'center',
        alignItems: 'center',
    },
    ChildHead: {
        marginLeft: -7 * onePT,
        marginRight: -7 * onePT,
        justifyContent: 'center',
        alignItems: 'center',
    },
    ChildName: {
        flex: 0,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: -10,

    },
    ChildHeadImage: {
        width: 60 * onePT,
        height: 60 * onePT,
    },
    ChildNameImage:{
      width: 140,
      height: 16,
      marginTop: -18,
    },
    ChildSign: {
        marginLeft: 2 * onePT,
        marginRight: 4 * onePT,
        justifyContent: 'center',
        alignItems: 'center',
    },
    ChildText: {
        fontSize: 15,
        color:'#CD6600',
        backgroundColor: 'rgba(222,215,206,0)',
    },

    bottom: {
        height: 80,
        //backgroundColor: '#ddddee',
    },

    bottomMenu: {
        flex: 0,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#DAD2CE',
        marginTop: 5 * onePT,
    },
    bottomImg: {
        width: 25 * onePT,
        height: 25 * onePT,

    },

    centerText: {
        textAlign: 'center',
        color: '#696969',
        fontSize: 20 * onePT,
        fontFamily: 'Cochin',
    },

});
