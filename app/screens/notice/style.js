import {
    StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: 'white',
        flex: 1,
    },
    ntbox: {
        alignItems: 'flex-start',
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc',
        backgroundColor: 'white',
        padding: 5,
    },
    ntleftimg: {
        alignItems: 'flex-start',
    },
    ntrightcontent: {
        borderBottomWidth: 1,
        borderBottomColor: '#ffffff',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingLeft: 5,
    },
    nttitle: {
        fontSize: 18,
        color: '#403E3E',
        paddingLeft: 8,
        flex: 5,
    },
    subject:{
        padding: 8,
        flex: 1,
        color: '#989898',
    },
    nttime: {
        color: '#D2D2D2',
        fontSize: 16,
        flex: 2,
    },
    ntimg: {
        height: 55,
        width: 55,
    },
});

export default styles;
