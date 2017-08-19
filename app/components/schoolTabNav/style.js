import { StyleSheet } from 'react-native';

import {
  COLOR_ICON_LABEL,
  COLOR_TAB_NAV_BG,
} from '../../styles/common';

const styles = StyleSheet.create({
  tabNavWrapper: {
    alignItems: 'center',
    alignSelf: 'stretch',
    backgroundColor: COLOR_TAB_NAV_BG,
    flexDirection: 'row',
    justifyContent: 'space-around',
    height: 100,
  },
  tabIcon: {
    height: 60,
    width: 60,
  },
  iconLabel: {
    color: COLOR_ICON_LABEL,
    fontSize: 14,
  },
  cell: {
    alignItems: 'center',
    flexGrow: 1,
  },
});

export default styles;
