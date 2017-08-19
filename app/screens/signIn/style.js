import {
  Dimensions,
  Platform,
  StyleSheet
} from 'react-native';

const {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  mainContainer: {
    height: Platform.OS === 'ios' ? height : height,
    justifyContent: 'center',
  },
  inputGroupWrapper: {
    paddingLeft: 25,
    paddingRight: 25,
    paddingBottom: 18,
  },
  buttonWrapper: {
    alignItems: 'center',
    backgroundColor: '#0f6ab4',
    borderRadius: 2,
    height: 40,
    justifyContent: 'center',
    marginLeft: 25,
    marginRight: 25,
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default styles;
