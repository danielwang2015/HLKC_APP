import {
  StyleSheet,
} from 'react-native';

import {
  COLOR_CONTENT_TEXT,
  COLOR_SELECTOR_BORDER,
} from '../../styles/common';

const styles = StyleSheet.create({
  textInputWrapper: {
    alignItems: 'center',
    alignSelf: 'stretch',
    backgroundColor: 'white',
    borderBottomColor: COLOR_SELECTOR_BORDER,
    borderBottomWidth: 1,
    borderTopColor: COLOR_SELECTOR_BORDER,
    borderTopWidth: 1,
    height: 45,
    justifyContent: 'flex-start',
    flexDirection: 'row',
    paddingLeft: 15,
  },
  label: {
    color: COLOR_CONTENT_TEXT,
    fontSize: 15,
    paddingRight: 15,
  },
  textInput: {
    backgroundColor: 'white',
    flexGrow: 1,
    fontSize: 15,
    height: 43,
    paddingRight: 15,
    width: 200,
  },
});

export default styles;
