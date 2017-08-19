import {
  StyleSheet,
} from 'react-native';

import {
  COLOR_ICON_LABEL,
  COLOR_TAB_NAV_BG,
  COLOR_LARGE_TEXT,
  COLOR_NORMAL_TEXT,
  COLOR_GRADE_A,
  COLOR_GRADE_B,
  COLOR_GRADE_C,
  COLOR_GRADE_D,
  COLOR_GRADE_LINE,
  COLOR_ITEM_LINE,
  COLOR_RADIO_BORDER,
  COLOR_RADIO_BG,
  COLOR_EXAM_PERIOD_BG1,
  COLOR_EXAM_PERIOD_BG2,
  COLOR_EXAM_PERIOD_TEXT,
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
    alignItems: 'flex-start',
    alignSelf: 'stretch',
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 90,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 20,
  },
  childLogoWrapper: {
    alignItems: 'flex-start',
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
    fontSize: 18,
    fontWeight: '500',
    marginLeft: 10,
  },
  childGrade: {
    color: COLOR_NORMAL_TEXT,
    fontWeight: '500',
  },
  gradeInstruction: {
    alignItems: 'center',
    borderBottomColor: COLOR_GRADE_LINE,
    borderBottomWidth: 2,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginLeft: 10,
    marginRight: 10,
    paddingBottom: 5,
  },
  gradeIcon: {
    borderRadius: 3,
    height: 6,
    width: 6,
  },
  gradeA: {
    backgroundColor: COLOR_GRADE_A,
  },
  gradeB: {
    backgroundColor: COLOR_GRADE_B,
  },
  gradeC: {
    backgroundColor: COLOR_GRADE_C,
  },
  gradeD: {
    backgroundColor: COLOR_GRADE_D,
  },
  gradeLabel: {
    color: COLOR_NORMAL_TEXT,
    fontSize: 12,
    paddingLeft: 5,
    paddingRight: 10,
  },
  examWrapper: {
    marginLeft: 10,
    marginRight: 10,
    marginTop: 20,
  },
  examPeriod: {
    alignItems: 'center',
    borderRadius: 20,
    height: 40,
    justifyContent: 'center',
    marginBottom: 20,
    width: 120,
  },
  examPeriodBg1: {
    backgroundColor: COLOR_EXAM_PERIOD_BG1,
  },
  examPeriodBg2: {
    backgroundColor: COLOR_EXAM_PERIOD_BG2,
  },
  examPeriodLabel: {
    color: COLOR_EXAM_PERIOD_TEXT,
    fontSize: 16,
    fontWeight: '500',
  },
  examResultWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 25,
  },
  examLeft: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: 15,
  },
  examRight: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 15,
  },
  examNameWrapper: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  examIcon: {
    borderRadius: 3,
    height: 20,
    marginRight: 5,
    width: 5,
  },
  examText: {
    color: COLOR_NORMAL_TEXT,
    fontSize: 16,
  },
  tabNavWrapper: {
    alignItems: 'center',
    alignSelf: 'stretch',
    borderTopColor: COLOR_GRADE_LINE,
    borderTopWidth: 2,
    flexDirection: 'row',
    justifyContent: 'space-around',
    height: 60,
  },
  tabIcon: {
    height: 25,
    width: 25,
  },
  iconLabel: {
    color: COLOR_ICON_LABEL,
    fontSize: 14,
    paddingTop: 5,
  },
  cell: {
    alignItems: 'center',
    flexGrow: 1,
  },
  modalContainer: {
    alignItems: 'center',
    backgroundColor: 'rgba(52, 52, 52, 0.4)',
    flex: 1,
    justifyContent: 'center',
  },
  modalBox: {
    backgroundColor: 'white',
    height: 400,
    width: 300,
    shadowColor: 'black',
    shadowOffset: {height: 0, width: 0},
    shadowOpacity: 0.5,
    shadowRadius: 25,
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
  listItemText: {
    color: COLOR_NORMAL_TEXT,
    fontSize: 18,
  }
});

export default styles;
