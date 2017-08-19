import React, { Component } from 'react';
import {
  Image,
  Text,
  View,
} from 'react-native';

import styles from './style';
import ScoreChartImg from '../../images/score/score_chart.png';

export default class ScoreChart extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <View style={styles.gradeInstruction}>
          <View style={[styles.gradeIcon, styles.gradeA]} />
          <Text style={styles.gradeLabel}>全年纪</Text>
          <View style={[styles.gradeIcon, styles.gradeD]} />
          <Text style={styles.gradeLabel}>全班</Text>
        </View>
        <View style={styles.chartWrapper}>
          <Image
            style={styles.chart}
            source={ScoreChartImg}
          />
        </View>
      </View>
    );
  }
}
