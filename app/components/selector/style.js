import {
  StyleSheet,
} from 'react-native';

import {
  COLOR_CONTENT_TEXT,
  COLOR_SELECTOR_BORDER,
} from '../../styles/common';

const styles = StyleSheet.create({
  selectorWrapper: {
    alignItems: 'center',
    alignSelf: 'stretch',
    backgroundColor: 'white',
    borderBottomColor: COLOR_SELECTOR_BORDER,
    borderBottomWidth: 1,
    borderTopColor: COLOR_SELECTOR_BORDER,
    borderTopWidth: 1,
    flexDirection: 'row',
    height: 45,
    justifyContent: 'space-between',
    paddingLeft: 15,
    paddingRight: 15,
  },
  selectorRight: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  selectorText: {
    color: COLOR_CONTENT_TEXT,
    fontSize: 15,
  },
  selectorIcon: {
    marginLeft: 15,
  },
});

export default styles;
