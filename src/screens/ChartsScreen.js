import React from 'react';
import {
  StyleSheet,
  View,
  Platform,
  Text,
  ScrollView
} from 'react-native';
import Svg from 'react-native-svg';
import {
  VictoryPie,
  VictoryChart,
  VictoryCandlestick
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
  {x: new Date(2016, 6, 1), open: 5, close: 10, high: 15, low: 0},
  {x: new Date(2016, 6, 2), open: 10, close: 15, high: 20, low: 5},
  {x: new Date(2016, 6, 3), open: 15, close: 20, high: 22, low: 10},
  {x: new Date(2016, 6, 4), open: 20, close: 10, high: 25, low: 7},
  {x: new Date(2016, 6, 5), open: 10, close: 8, high: 15, low: 5}
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
          candleColors={{ positive: "#5f5c5b", negative: "#c43a31" }}
          data={candlestickData}
        />
      </VictoryChart>
    </View>
  );

  const _renderGraphChart = () => (
    <View style={[styles.chartView, { marginBottom: 20 }]}>
      <Text>Voronoi Container</Text>
      <View style={{ borderWidth: 1 }}>
        <Svg>
          <VictoryChart width={290} height={290}>
            <VictoryCandlestick
              candleColors={{ positive: "#5f5c5b", negative: "#c43a31" }}
              data={candlestickData}
            />
          </VictoryChart>
        </Svg>
      </View>
    </View>
  );

  return (
    <ScrollView style={styles.container} bounces={false}>
      <View style={styles.titleView}>
        <Text style={styles.titleText}>Charts Demo</Text>
      </View>
      <View style={styles.background}>

        { _renderPieChart() }

        {/*{ _renderCandleChart() }*/}

        {/*{ _renderGraphChart() }*/}

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