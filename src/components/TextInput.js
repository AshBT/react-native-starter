import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Platform,
  StyleSheet,
  TextInput,
} from 'react-native';

class RNSTextInput extends React.Component {
  static propTypes = {
    type: PropTypes.oneOf(['primary', 'secondary', 'bordered']),
    style: PropTypes.number,
  };

  static defaultProps = {
    type: 'bordered',
  };

  render() {
    return (
      <View style={{ alignSelf: 'stretch', flexDirection: 'column' }}>
        <TextInput
          placeholderTextColor={'white'}
          underlineColorAndroid="white"
          {...this.props}
          style={[this.props.style, styles.default, this.props.type === 'bordered' && styles.bordered]}
        />
        { Platform.OS === 'ios' &&
          <View style={{ height: 0.5, backgroundColor: 'white' }} />
        }
      </View>
    );
  }
}

const HEIGHT = 40;

const styles = StyleSheet.create({
  default: {
    height: HEIGHT,
    color: 'white',
  },
  bordered: {
    ...Platform.select({
      ios: {
        borderBottomWidth: 0.5,
        borderBottomColor: 'white',
        opacity: 0.7,
      },
    }),

  },
  primary: {
    borderRadius: HEIGHT / 2,
    backgroundColor: 'transparent',
  },
});

export default RNSTextInput;