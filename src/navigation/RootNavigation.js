/* eslint-disable no-underscore-dangle,import/no-unresolved,react/prop-types */
import React from 'react';
import {
  Image,
  TouchableOpacity,
} from 'react-native';
import { StackNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';

import ProfileScreen from '../containers/ProfileScreen';
import GalleryScreen from '../containers/GalleryScreen';

import { Colors, Fonts } from '../constants';

const RootStackNavigator = StackNavigator(
  {
    Main: {
      screen: MainTabNavigator,
    },
    Profile: {
      screen: ProfileScreen,
      navigationOptions: {
        title: 'Profile',
      }
    },
    Gallery: {
      screen: GalleryScreen,
      navigationOptions: {
        title: 'Gallery',
      }
    },
  },
  {
    navigationOptions: ({ navigation }) => ({
      title: navigation.state.params,
      headerTitleStyle: {
        fontFamily: Fonts.primaryLight,
      },
      headerStyle: {
        backgroundColor: '#577AD9',
      },
      headerTitleStyle: {
        color: Colors.white,
        fontFamily: Fonts.primaryRegular,
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
