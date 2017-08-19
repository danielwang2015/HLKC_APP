import {
    StyleSheet,
} from 'react-native';

import { COLOR_ICON_LABEL } from '../../styles/common';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 5,
    },
    listitem:{
        backgroundColor: '#ffffff',
        height: 50,
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    title:{
        paddingLeft: 16,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    array:{
        paddingRight: 8,
    },
    text:{
        color: '#444',
        fontSize: 16,
        paddingLeft: 10,
    },
    icon:{
        width: 17,
        height: 18,
    },
    textyellow:{
        color: '#999900',
        fontWeight: 'bold',
    },
    listitem2:{
        backgroundColor: '#ffffff',
        height: 50,
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    button:{

    },
    sperator:{
        height:10,
    },

    listimage:{
        backgroundColor: '#ffffff',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    namelevel:{
        backgroundColor: '#ffffff',
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    headimg:{
        width:80,
        height:80,
    },
    name:{
        fontSize: 16,
    },
    avatar:{
        width:55,
        height:55,
    },
    bind: {
        backgroundColor: '#ffffff',
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc',
        flexDirection: 'column',
        alignItems: 'center',
    },
    qrcode:{
        width:200,
        height:200,
    },
    twoside:{
        justifyContent: 'flex-end',
        height: '50%'
    },
    button:{
        backgroundColor: '#111111',
        borderBottomWidth: 1,
        borderBottomColor: '#222222',
    },
    bottomMenu:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems:'center',
        backgroundColor: '#fff',
        marginLeft:5,
        marginRight:5,
    },
    bottomMenuList:{
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems:'center',
    },
    bottomIcon:{
        height:50,
        width:50,
        justifyContent: 'center',
        alignItems:'center',
    },
    bottomText:{
      fontSize: 12,
      justifyContent: 'center',
      alignItems:'center',
    },
});

export default styles;
