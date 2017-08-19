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
        alignItems: 'center',
        backgroundColor: '#0f6ab4',
        borderRadius: 2,
        height: 40,
        justifyContent: 'center',
        marginLeft: 25,
        marginRight: 25,
        marginTop: 15,
        paddingTop:11,
    },
    list:{
        height: 50,
    },
    ti:{
        color: '#f0f',
        fontSize: 16,
        paddingLeft: 10,
    },
    button:{
         color: 'white',
        fontSize: 16,
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
    }
});

export default styles;
