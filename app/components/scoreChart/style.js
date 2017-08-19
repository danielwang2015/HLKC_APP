import {
  Dimensions,
  StyleSheet,
} from 'react-native';

import {
  COLOR_NORMAL_TEXT,
  COLOR_GRADE_A,
  COLOR_GRADE_B,
  COLOR_GRADE_C,
  COLOR_GRADE_D,
  COLOR_GRADE_LINE,
} from '../../styles/common';

const {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
  chartWrapper: {
    marginTop: 10,
  },
  chart: {
    height: width * 10 / 19,
    width: width,
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
});

export default styles;
