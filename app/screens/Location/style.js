import {
  StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#E9E4DB',

    },

    WebBackground: {
        flex: 1,

        flexDirection: 'column',
        alignItems: 'center',
        justifyContent:'center',
        //marginTop : -5 * onePT,
        marginLeft: 10,
    },

    WebStyle: {
        flex: 1,
        flexDirection: 'row',
        overflow: 'hidden',
        height: 750,
        backgroundColor: '#E9E4DB',
        alignItems: 'center',
        justifyContent:'center',
    },
});

export default styles;
