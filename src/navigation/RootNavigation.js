/* eslint-disable no-underscore-dangle,import/no-unresolved,react/prop-types */
import React from 'react';
import {
  Image,
  TouchableOpacity,
} from 'react-native';
import { StackNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';

const RootStackNavigator = StackNavigator(
  {
    Main: {
      screen: MainTabNavigator,
    },
  },
  {
    navigationOptions: () => ({
      headerTitleStyle: {
        fontFamily: 'Lato-Light',
      },
      headerStyle: {
        backgroundColor: 'white',
      },
      headerTintColor: '#222222',
      headerLeft: props => (
        <TouchableOpacity
          onPress={props.onPress}
          style={{
            paddingLeft: 25,
          }}
        >
          <Image
            source={require('../../assets/images/icons/arrow-back.png')}
            resizeMode="contain"
            style={{
              height: 20,
            }}
          />
        </TouchableOpacity>
      ),
    }),
  },
);


export default RootStackNavigator;
