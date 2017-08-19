import {
  StyleSheet,
} from 'react-native';

import {
  COLOR_ICON_LABEL,
  COLOR_LARGE_TEXT,
  COLOR_MIDDLE_TEXT,
  COLOR_NORMAL_TEXT,
  COLOR_GRADE_A,
  COLOR_GRADE_B,
  COLOR_EXAM_PERIOD_TEXT,
  COLOR_CALENDAR_BTN_BG,
  COLOR_GRADE_LINE,
  COLOR_SUMMARY_TEXT,
  COLOR_ITEM_LINE,
  COLOR_SECTION_BG,
  COLOR_SECTION_TEXT,
  COLOR_ARCH_BG,
  COLOR_CONTENT_TEXT,
  COLOR_BLUE_BG,
  COLOR_SELECTOR_BORDER,
  COLOR_AD_LINE,
} from '../../styles/common';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: 'white',
    flex: 1,
  },
  mainWrapper: {
    alignSelf: 'stretch',
  },
  profileWrapper: {
    alignItems: 'center',
    alignSelf: 'stretch',
    backgroundColor: 'white',
    borderBottomColor: COLOR_GRADE_LINE,
    borderBottomWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 120,
    paddingBottom: 25,
    paddingLeft: 20,
    paddingRight: 20,
    // paddingTop: 20,
  },
  calendarProfileWrapper: {
    alignItems: 'center',
    alignSelf: 'stretch',
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 80,
    paddingLeft: 20,
    paddingRight: 20,
    // paddingTop: 20,
  },
  childLogoWrapper: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  childLogoHolo: {
    alignItems: 'center',
    borderRadius: 24,
    height: 48,
    justifyContent: 'center',
    shadowColor: 'blue',
    shadowOffset: {height: 0, width: 0},
    shadowOpacity: 0.5,
    shadowRadius: 5,
    width: 48,
  },
  childLogo: {
    borderColor: 'white',
    borderRadius: 24,
    borderWidth: 3,
    height: 48,
    width: 48,
  },
  childName: {
    color: COLOR_LARGE_TEXT,
    fontSize: 16,
    fontWeight: '400',
    marginLeft: 10,
  },
  childGrade: {
    color: COLOR_NORMAL_TEXT,
    fontSize: 12,
    fontWeight: '400',
    marginLeft: 10,
    marginTop: 5,
  },
  calendarBtn: {
    alignItems: 'center',
    backgroundColor: COLOR_CALENDAR_BTN_BG,
    borderRadius: 4,
    height: 38,
    justifyContent: 'center',
    width: 110,
  },
  calendarBtnLabel: {
    color: COLOR_EXAM_PERIOD_TEXT,
  },
  summaryWrapper: {
    marginLeft: 10,
    marginRight: 10,
    marginTop: 20,
  },
  summaryResultWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 25,
  },
  summaryLeft: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: 15,
  },
  summaryRight: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 15,
  },
  summaryNameWrapper: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  indicateBar: {
    borderRadius: 3,
    height: 20,
    marginRight: 5,
    width: 5,
  },
  summaryText: {
    color: COLOR_SUMMARY_TEXT,
    fontSize: 14,
  },
  gradeA: {
    backgroundColor: COLOR_GRADE_A,
  },
  gradeB: {
    backgroundColor: COLOR_GRADE_B,
  },
  listViewWrapper: {
    alignSelf: 'stretch',
  },
  listItemWrapper: {
    alignItems: 'flex-start',
    borderBottomColor: COLOR_ITEM_LINE,
    borderBottomWidth: 2,
    height: 70,
    justifyContent: 'center',
    paddingLeft: 15,
  },
  listSectionWrapper: {
    backgroundColor: COLOR_SECTION_BG,
    height: 45,
    justifyContent: 'center',
    paddingLeft: 20,
  },
  listSectionText: {
    color: COLOR_SECTION_TEXT,
    fontSize: 16,
  },
  listItemText: {
    color: COLOR_MIDDLE_TEXT,
    fontSize: 16,
  },
  listItemCommentText: {
    color: COLOR_NORMAL_TEXT,
    fontSize: 12,
    paddingTop: 10,
  },
  footerWrapper: {
    alignItems: 'center',
    alignSelf: 'stretch',
    flexDirection: 'row',
    height: 50,
    justifyContent: 'space-around',
  },
  iconWrapper: {
    alignItems: 'center'
  },
  icon: {
    height: 20,
    width: 20,
  },
  iconText: {
    color: COLOR_NORMAL_TEXT,
    fontSize: 12,
    paddingTop: 5,
  },
  calendarWrapper: {
    alignSelf: 'stretch',
    backgroundColor: 'blue',
    height: 340,
  },
  calendarResultWrapper: {
    alignSelf: 'stretch',
    backgroundColor: COLOR_ARCH_BG,
    borderRadius: 10,
    height: 130,
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    shadowColor: 'gray',
    shadowOffset: {height: 0, width: 0},
    shadowOpacity: 0.25,
    shadowRadius: 5,
  },
  calendarResultItemWrapper: {
    alignItems: 'center',
    height: 65,
    flexDirection: 'row',
  },
  calendarResultItemTimeWrapper: {
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 20,
    height: 40,
    justifyContent: 'center',
    width: 40,
    marginLeft: 15,
    marginRight: 15,
    shadowColor: 'gray',
    shadowOffset: {height: 0, width: 0},
    shadowOpacity: 0.25,
    shadowRadius: 5,
  },
  calendarResultItemTimeText: {
    color: COLOR_CONTENT_TEXT,
    fontSize: 12,
  },
  calendarResultItemContentWrapper: {
    justifyContent: 'center',
  },
  calendarResultItemLabel: {
    color: COLOR_BLUE_BG,
    fontSize: 14,
    lineHeight: 20,
  },
  calendarResultItemResult: {
    color: COLOR_CONTENT_TEXT,
    fontSize: 12,
  },
  contentWrapper: {
    alignSelf: 'stretch',    
    flexGrow: 1,
  },
  submitButton: {
    alignItems: 'center',
    alignSelf: 'stretch',
    backgroundColor: COLOR_BLUE_BG,
    height: 50,
    justifyContent: 'center',
    marginBottom: 20,
    marginLeft: 15,
    marginRight: 15,
    marginTop: 20,
  },
  submitButtonText: {
    color: 'white',
    fontSize: 17,
    fontWeight: '500',
  },
  approvalItemSeparator: {
    alignSelf: 'stretch',
    backgroundColor: COLOR_AD_LINE,
    height: 1,
  },
  approvalDetailFlowWrapper: {
    alignSelf: 'stretch',
    backgroundColor: '#FAFBFC',
    flexGrow: 1,
  },
  approvalDetailFlowLine: {
    backgroundColor: '#979797',
    bottom: 0,
    left: 20,
    position: 'absolute',
    top: 0,
    width: 1,
  },
  approvalDetailFlowInnerWrapper: {
    paddingLeft: 7,
    paddingRight: 15,
  },
});

const innerStyles = {
  inputWrapper: {
    alignItems: 'flex-start',
    height: 100,
    marginBottom: 15,
  },
  inputText: {
    height: 98,
    paddingTop: 4,
  },
  label: {
    paddingTop: 10,
  },
};

export { styles, innerStyles };
