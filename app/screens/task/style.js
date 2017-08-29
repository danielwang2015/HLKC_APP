import { StyleSheet,PixelRatio } from 'react-native';
const onePT = PixelRatio.get();
const Dimensions = require('Dimensions');

const styles = StyleSheet.create({
    container: {
        flex: 0,
        flexDirection: 'column',
        backgroundColor: '#E9E4DB',
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
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
        width: 370,
        height: 600,
        backgroundColor: '#E9E4DB',
        alignItems: 'center',
        justifyContent:'center',
    },
});
export default styles;