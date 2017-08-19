import {
  StyleSheet,
} from 'react-native';

import {
  COLOR_ICON_LABEL,
  COLOR_DASH_LINE,
  COLOR_NORMAL_TEXT,
} from '../../styles/common';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    marginTop: 20,
  },
  header: {
    shadowColor: '#F9F6EF',
    shadowOffset: {height: 5, width: 0},
    shadowOpacity: 0.22,
    shadowRadius: 12,
  },
  banner: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    height: 100,
    width: 100,
  },
  dropdown: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 46,
    width: 163,
  },
  dropdownLabel: {
    backgroundColor: 'transparent',
    color: COLOR_ICON_LABEL,
    textAlign: 'center',
  },
  table: {
    alignSelf: 'stretch',
  },
  row: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: 15,
    paddingBottom: 20,
  },
  cell: {
    alignItems: 'center',
    flexGrow: 1,
  },
  icon: {
    height: 80,
    marginBottom: 3,
    width: 80,
  },
  iconLabel: {
    color: COLOR_ICON_LABEL,
    fontSize: 14,
  },
  backIcon: {
    height: 10,
    width: 10,
  },
  detailWrapper: {
    alignSelf: 'stretch',
    backgroundColor: 'white',
    paddingLeft: 15,
    paddingRight: 15,
  },
  itemWrapper: {
    paddingTop: 15,
  },
  titleWrapper: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  dashLine: {
    borderBottomColor: COLOR_DASH_LINE,
    borderBottomWidth: 1,
    height: 1,
    width: 35,
  },
  titleText: {
    color: COLOR_DASH_LINE,
    paddingBottom: 15,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 15,
  },
  contentWrapper: {
    alignItems: 'flex-start',
  },
  contentText: {
    color: COLOR_NORMAL_TEXT,
    fontSize: 12,
    lineHeight: 20,
  },
  detailItem2ListWrapper: {

  },
  detailItem2RowWrapper: {
    flexDirection: 'row',
    paddingBottom: 10,
  },
  detailItem2PublishTimeText: {
    color: COLOR_NORMAL_TEXT,
    fontSize: 12,
    lineHeight: 18,
    width: 80,
  },
  detailItem2ContentText: {
    color: COLOR_NORMAL_TEXT,
    fontSize: 12,
    lineHeight: 18,
    flexWrap: 'wrap',
    flex: 1,
  },
  detailItem3ListWrapper: {

  },
  detailItem3RowWrapper: {
    flexDirection: 'row',
    paddingBottom: 10,
  },
  detailItem3Image: {
    height: 60,
    marginRight: 20,
    width: 60,
  },
  detailItem3NameText: {
    color: 'black',
    fontSize: 12,
    lineHeight: 18,
    width: 80,
  },
  detailItem3ContentText: {
    color: COLOR_NORMAL_TEXT,
    fontSize: 12,
    lineHeight: 18,
    flexWrap: 'wrap',
    flex: 1,
  },
  galleryWrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  galleryImage: {
    borderColor: COLOR_NORMAL_TEXT,
    borderWidth: 1,
    height: 60,
    marginBottom: 10,
    width: 80,
  },
  collapseWrapper: {
    alignItems: 'center',
    alignSelf: 'stretch',
    backgroundColor: 'white',
    justifyContent: 'center',
  },
});

export default styles;
