import {
  Dimensions,
  StyleSheet
} from 'react-native';

import {
  COLOR_AD_BG,
  COLOR_AD_SPLITER_LINE,
  COLOR_AD_LINE,
  COLOR_AD_ROW_BORDER,
  COLOR_AD_TITLE_TEXT,
  COLOR_NORMAL_TEXT,
} from '../../styles/common';

const {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLOR_AD_BG,
    flex: 1,
  },
  filterWrapper: {
    alignItems: 'center',
    borderBottomColor: COLOR_AD_LINE,
    borderBottomWidth: 1,
    flexDirection: 'row',
    height: 40,
    marginLeft: 5,
    marginRight: 5,
  },
  filter: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  filterIcon: {
    height: 8,
    marginLeft: 10,
    width: 16,
  },
  filterCol1: {
    borderRightColor: COLOR_AD_SPLITER_LINE,
    borderRightWidth: 1,
    flex: 2,
  },
  filterCol2: {
    borderRightColor: COLOR_AD_SPLITER_LINE,
    borderRightWidth: 1,
    flex: 2,
  },
  filterCol3: {
    flex: 3,
  },
  filterText: {
    color: COLOR_NORMAL_TEXT,
  },
  listWrapper: {
    marginLeft: 15,
    marginRight: 15,
  },
  rowWrapper: {

  },
  publishTimeText: {
    color: COLOR_NORMAL_TEXT,
    fontSize: 12,
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  adImage: {
    width: width - 30,
    height: (width - 30) / 2.5,
  },
  abstractWrapper: {
    backgroundColor: 'white',
    borderColor: COLOR_AD_ROW_BORDER,
    borderWidth: 1,
    padding: 15,
  },
  titleText: {
    color: COLOR_AD_TITLE_TEXT,
    fontSize: 15,
    marginBottom: 15,
  },
  contentText: {
    color: COLOR_NORMAL_TEXT,
    fontSize: 12,
    lineHeight: 18,
  },
  modal: {
    paddingTop: 20,
    height: 220,
    alignItems: 'center'
  },
  modalHeaderWrapper: {
    alignSelf: 'stretch',
    justifyContent: 'flex-start',
    paddingLeft: 20,
    paddingRight: 20,
  },
  modalHeaderText: {
    color: COLOR_NORMAL_TEXT,
    fontSize: 14,
  },
  detailContentWrapper: {
    justifyContent: 'center',
    paddingLeft: 15,
    paddingRight: 15,
  },
  detailContentText: {
    color: COLOR_AD_TITLE_TEXT,
    fontSize: 14,
    lineHeight: 20,
    paddingTop: 10,
  },
});

export default styles;
