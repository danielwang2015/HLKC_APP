import {
  StyleSheet,
} from 'react-native';
import {
  COLOR_ARCH_BG,
  COLOR_ITEM_LINE,
  COLOR_ARCH_LABEL,
  COLOR_NORMAL_TEXT,
} from '../../styles/common';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: 'white',
    flex: 1,
  },
  childLogoWrapper: {
    alignItems: 'center',
    alignSelf: 'stretch',
    backgroundColor: COLOR_ARCH_BG,
    height: 100,
    justifyContent: 'center',
  },
  childLogoHolo: {
    alignItems: 'center',
    borderRadius: 28,
    height: 56,
    justifyContent: 'center',
    shadowColor: 'blue',
    shadowOffset: {height: 0, width: 0},
    shadowOpacity: 0.5,
    shadowRadius: 5,
    width: 56,
  },
  childLogo: {
    borderColor: 'white',
    borderRadius: 28,
    borderWidth: 3,
    height: 56,
    width: 56,
  },
  listViewWrapper: {
    alignSelf: 'stretch',
  },
  listItemWrapper: {
    alignItems: 'center',
    borderBottomColor: COLOR_ITEM_LINE,
    borderBottomWidth: 2,
    flexDirection: 'row',
    height: 50,
    justifyContent: 'space-between',
    marginLeft: 10,
    marginRight: 10,
    paddingLeft: 15,
    paddingRight: 15,
  },
  listItemLabel: {
    color: COLOR_ARCH_LABEL,
    fontSize: 18,
  },
  listItemText: {
    color: COLOR_NORMAL_TEXT,
    fontSize: 18,
  },
  footer: {
    alignSelf: 'stretch',
    backgroundColor: COLOR_ARCH_BG,
    height: 50,
  }
});

export default styles;
