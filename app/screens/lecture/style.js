import {
  StyleSheet
} from 'react-native';

import {
  COLOR_ARCH_LABEL,
  COLOR_GRADE_C,
  COLOR_GRADE_D,
  COLOR_GRADE_E,
  COLOR_ITEM_LINE,
  COLOR_LECTURE_BG,
  COLOR_WEEK_HEADER_BG,
  COLOR_NORMAL_TEXT,
  COLOR_TITLE_TEXT,
} from '../../styles/common';

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLOR_LECTURE_BG,
    flex: 1,
  },
  dateHeaderWrapper: {
    alignItems: 'center',
    backgroundColor: 'white',
    flexDirection: 'row',
    height: 40,
  },
  dateHeaderLeftWrapper: {
    alignItems: 'center',
    borderRightColor: COLOR_ARCH_LABEL,
    borderRightWidth: 0.5,
    flex: 1,
  },
  dateHeaderRightWrapper: {
    alignItems: 'center',
    flex: 1,
  },
  dateHeaderCenterWrapper: {
    alignItems: 'center',
    flex: 2,
  },
  moreWeekWrapper: {
    right: 50,
    position: 'absolute',
  },
  moreIcon: {
    height: 12,
    width: 12,
  },
  dateText: {
    color: COLOR_ARCH_LABEL,
    fontSize: 14,
    fontWeight: '300',
  },
  weekText: {
    color: COLOR_ARCH_LABEL,
    fontSize: 18,
    fontWeight: '400',
  },
  weekHeaderWrapper: {
    alignItems: 'center',
    backgroundColor: COLOR_WEEK_HEADER_BG,
    flexDirection: 'row',
    height: 30,
    justifyContent: 'center',
  },
  column0: {
    alignItems: 'center',
    width: 80,
  },
  column: {
    alignItems: 'center',
    flex: 1,
    fontSize: 12,
    justifyContent: 'center',
    textAlign: 'center',
  },
  rowWrapper: {
    alignItems: 'flex-end',
    flexDirection: 'row',
    height: 60,
    justifyContent: 'center',
  },
  rowHeaderText1: {
    color: COLOR_GRADE_C,
    fontSize: 12,
  },
  rowHeaderText2: {
    color: COLOR_GRADE_C,
    fontSize: 18,
  },
  cellColumn0: {
    alignItems: 'center',
    borderRightColor: COLOR_ITEM_LINE,
    borderRightWidth: 1,
    width: 80,
  },
  cellColumn: {
    alignItems: 'center',
    flex: 1,
    fontSize: 12,
    justifyContent: 'center',
    textAlign: 'center',
    // width: 40,
  },
  cellInnerWrapper: {
    alignItems: 'center',
    borderBottomColor: COLOR_ITEM_LINE,
    borderBottomWidth: 2,
    paddingBottom: 10,
    width: 25,
  },
  cellText: {
    // height: 40,
    textAlign: 'center',
    width: 18,
  },
  mathText: {
    color: COLOR_GRADE_C,
  },
  chineseText: {
    color: COLOR_GRADE_D,
  },
  englishText: {
    color: COLOR_GRADE_E,
  },
  footerWrapper: {
    alignItems: 'center',
    backgroundColor: 'white',
    flexDirection: 'row',
    height: 80,
    justifyContent: 'flex-start',
    marginLeft: 20,
    marginRight: 20,
  },
  footerTitle: {
    color: COLOR_TITLE_TEXT,
    fontSize: 20,
  },
  footerContent: {
    color: COLOR_NORMAL_TEXT,
    fontSize: 14,
    paddingLeft: 30,
    paddingRight: 20,
  }
});

export default styles;
