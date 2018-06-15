import React from 'react';
import {
  StyleSheet,
  View,
  Platform,
  Text,
  ScrollView,
  ActivityIndicator
} from 'react-native';
import {
  VictoryPie,
  VictoryChart,
  VictoryCandlestick,
  VictoryLine
} from 'victory-native';

import { Colors, Fonts } from '../constants';

export default function ChartsScreen(props) {

  if (!props.data && props.isLoading) {
    return(
      <View style={styles.loaderContainer}>
        <ActivityIndicator animating={true} size='large'/>
      </View>
    )
  }

  const { pie, candle, line} = props.data;
  return (
    <ScrollView style={styles.container} bounces={false}>
      <View style={styles.titleView}>
        <Text style={styles.titleText}>Charts Demo</Text>
      </View>
      <View style={styles.background}>
        <View style={styles.chartView}>
          <Text style={styles.chartLabelText}>Pie Chart</Text>
          <VictoryPie width={290}
                      height={290}
                      data={pie}
                      colorScale={['#19e7f7','#9af2f9','#52a6e9','#829bf8','#6271d1','#f6b24e']}
                      innerRadius={45}
                      labelRadius={65}
                      padAngle={1}
                      style={{ labels: { fill: Colors.white, fontSize: 18 }}}
          />
        </View>
        <View style={styles.chartView}>
          <Text style={styles.chartLabelText}>Chart</Text>
          <VictoryChart width={290} height={290}>
            <VictoryCandlestick
              candleColors={{ positive: "#19e7f7", negative: "#f6b24e" }}
              data={candle}
            />
          </VictoryChart>
        </View>
        <View style={[styles.chartView, { marginBottom: 20 }]}>
          <Text style={styles.chartLabelText}>Voronoi Container</Text>
          <VictoryChart width={290} height={290}>
            <VictoryLine data={line} style={{ data:{ stroke: Colors.primaryGradientStart }}}/>
          </VictoryChart>
        </View>
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
  loaderContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
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