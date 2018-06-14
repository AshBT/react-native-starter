import React from 'react';
import {
  StyleSheet,
  View,
  Platform,
  Text,
  ScrollView
} from 'react-native';
import {
  VictoryPie,
  VictoryChart,
  VictoryCandlestick,
  VictoryLine
} from 'victory-native';

import { Colors, Fonts } from '../constants';

const pieData = [
  { x: '1', y: 35 },
  { x: '2', y: 40 },
  { x: '3', y: 12 },
  { x: '4', y: 34 },
  { x: '5', y: 12 },
  { x: '6', y: 45 }
];

// TODO: remove temporary data
const candlestickData = [
  { x: 1, open: 9, close: 30, high: 56, low: 7 },
  { x: 2, open: 80, close: 40, high: 120, low: 10 },
  { x: 3, open: 50, close: 80, high: 90, low: 20 },
  { x: 4, open: 70, close: 22, high: 70, low: 5 },
  { x: 5, open: 20, close: 35, high: 50, low: 10 },
  { x: 6, open: 35, close: 30, high: 40, low: 3 },
  { x: 7, open: 30, close: 90, high: 95, low: 30 },
  { x: 8, open: 80, close: 81, high: 83, low: 75 }
];

const lineData = [
  { x: 1, y: 1 },
  { x: 2, y: 3.5 },
  { x: 3, y: 3 },
  { x: 4, y: 2 },
  { x: 5, y: 4.5 },
  { x: 3.5, y: 3 },
  { x: 5, y: 6 },
  { x: 6, y: 5 },
  { x: 8, y: 8 },
  { x: 12, y: 9 },
  { x: 14, y: 12 },
];

export default function ChartsScreen(props) {

  const _renderPieChart = () => (
    <View style={styles.chartView}>
      <Text style={styles.chartLabelText}>Pie Chart</Text>
      <VictoryPie width={290}
                  height={290}
                  data={pieData}
                  colorScale={['#19e7f7','#9af2f9','#52a6e9','#829bf8','#6271d1','#f6b24e']}
                  innerRadius={45}
                  labelRadius={65}
                  padAngle={1}
                  style={{ labels: { fill: Colors.white, fontSize: 18 }}}
      />
    </View>
  );

  const _renderCandleChart = () => (
    <View style={styles.chartView}>
      <Text style={styles.chartLabelText}>Chart</Text>
      <VictoryChart width={290} height={290}>
        <VictoryCandlestick
          candleColors={{ positive: "#19e7f7", negative: "#f6b24e" }}
          data={candlestickData}
        />
      </VictoryChart>
    </View>
  );

  const _renderGraphChart = () => (
    <View style={[styles.chartView, { marginBottom: 20 }]}>
      <Text style={styles.chartLabelText}>Voronoi Container</Text>
      <VictoryChart width={290} height={290}>
        <VictoryLine data={lineData} style={{ data:{ stroke: Colors.primaryGradientStart }}}/>
      </VictoryChart>
    </View>
  );

  return (
    <ScrollView style={styles.container} bounces={false}>
      <View style={styles.titleView}>
        <Text style={styles.titleText}>Charts Demo</Text>
      </View>
      <View style={styles.background}>

        { _renderPieChart() }

        { _renderCandleChart() }

        { _renderGraphChart() }

      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleView: {
    alignItems: 'center',
    paddingTop: 20,
    paddingBottom: 5,
    backgroundColor: Colors.white
  },
  titleText: {
    color: Colors.primaryGradientStart,
    fontSize: 18,
    fontFamily: Fonts.primaryBold
  },
  background: {
    backgroundColor: '#f1f1f8',
    flex: 1,
    paddingHorizontal: 20
  },
  chartView: {
    marginTop: 20,
    borderRadius: 5,
    backgroundColor: Colors.white,
    padding: 10
  },
  chartLabelText: {
    color: '#686868',
    fontFamily: Fonts.primaryBold,
    fontSize: 18,
  }
});