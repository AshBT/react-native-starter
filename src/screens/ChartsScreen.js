import React from 'react';
import {
  StyleSheet,
  View,
  Platform,
  Text,
} from 'react-native';

class ChartsScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={ styles.container }>
        <Text>ChartScreen</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default ChartsScreen;